import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, Type } from '@google/genai';
import { generateFallbackQuestions } from './src/data/curriculum';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json({ limit: '10mb' }));

// Helper to get Gemini AI client (from user provided API key or environment)
function getGenAIClient(customApiKey?: string): GoogleGenAI | null {
  const key = customApiKey?.trim() || process.env.GEMINI_API_KEY?.trim();
  if (!key) return null;
  return new GoogleGenAI({
    apiKey: key,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Resilient list of Gemini models to support standard Google AI Studio keys
const CANDIDATE_MODELS = [
  process.env.GEMINI_MODEL,
  'gemini-2.5-flash',
  'gemini-2.0-flash',
  'gemini-1.5-flash',
  'gemini-3.8-flash',
].filter(Boolean) as string[];

async function generateWithModelFallback(client: GoogleGenAI, requestConfig: any) {
  let lastError: any = null;
  for (const model of CANDIDATE_MODELS) {
    try {
      const resp = await client.models.generateContent({
        ...requestConfig,
        model,
      });
      return resp;
    } catch (err: any) {
      lastError = err;
      // If error indicates model is not found or deprecated, try next in list
      console.warn(`Model ${model} failed, trying next candidate... (${err?.message || 'unknown error'})`);
    }
  }
  throw lastError;
}

// API: Kiểm tra tính hợp lệ của API Key
app.post('/api/check-api', async (req, res) => {
  const { apiKey } = req.body;
  const client = getGenAIClient(apiKey);
  if (!client) {
    return res.status(400).json({
      success: false,
      message: 'Chưa có API Key. Vui lòng nhập Gemini API Key hợp lệ!',
    });
  }

  try {
    const response = await generateWithModelFallback(client, {
      contents: 'Trả lời ngắn 1 từ: Sẵn sàng',
    });
    return res.json({
      success: true,
      message: 'Kết nối API thành công! AI đã sẵn sàng tạo câu hỏi phong phú.',
      sample: response.text?.trim() || 'OK',
    });
  } catch (error: any) {
    console.error('Error verifying API Key:', error);
    return res.status(400).json({
      success: false,
      message: error?.message || 'API Key không hợp lệ hoặc đã hết hạn mức. Vui lòng kiểm tra lại!',
    });
  }
});

// API: Tạo bộ câu hỏi ôn tập theo bài học (đơn lẻ hoặc nhiều bài), số câu, cấp độ
app.post('/api/generate-quiz', async (req, res) => {
  const {
    lessonId = '',
    lessonIds = [],
    lesson = '',
    lessons = [],
    count = 10,
    difficulty = 'tong_hop',
    customContent = '',
    subject = '',
    grade = 'Khối 8',
    gradeNumber = 8,
    apiKey = '',
    sourcePreference = 'ai',
  } = req.body;

  const questionCount = Math.max(1, Math.min(Number(count) || 10, 50));

  // Consolidate lessons list
  let targetLessonTitles: string[] = [];
  if (Array.isArray(lessons) && lessons.length > 0) {
    targetLessonTitles = lessons.filter(Boolean);
  } else if (lesson) {
    targetLessonTitles = [lesson];
  } else {
    targetLessonTitles = ['Bài học Tin học'];
  }

  // Consolidate target lesson keys for offline fallback
  let targetKeys: string[] = [];
  if (Array.isArray(lessonIds) && lessonIds.length > 0) {
    targetKeys = lessonIds;
  } else if (lessonId) {
    targetKeys = [lessonId];
  } else {
    targetKeys = targetLessonTitles;
  }

  // If user explicitly chose offline mode, bypass AI directly
  if (sourcePreference === 'offline') {
    const fallback = generateFallbackQuestions(targetKeys, questionCount, difficulty, gradeNumber || grade);
    return res.json({
      success: true,
      source: 'offline_bank',
      questions: fallback,
      message: `Đã tạo ${fallback.length} câu hỏi chuẩn từ Ngân hàng câu hỏi SGK offline.`,
    });
  }

  // Check AI Client
  const headerKey = req.headers['x-gemini-api-key'] as string;
  const activeClient = getGenAIClient(apiKey || headerKey);

  if (!activeClient) {
    console.warn('No Gemini API key available. Using offline curriculum bank for:', targetKeys);
    const fallback = generateFallbackQuestions(targetKeys, questionCount, difficulty, gradeNumber || grade);
    return res.json({
      success: true,
      source: 'offline_bank',
      questions: fallback,
      message: `Đã tạo ${fallback.length} câu hỏi chuẩn từ Ngân hàng câu hỏi SGK offline.`,
    });
  }

  try {
    let difficultyInstruction = '';
    if (difficulty === 'de') {
      difficultyInstruction = `Tất cả ${questionCount} câu hỏi đều ở CẤP ĐỘ DỄ (Nhận biết): Kiểm tra định nghĩa, công thức cơ bản, sự kiện trực tiếp, khái niệm nền tảng. Đơn giản, rõ ràng, không lắt léo.`;
    } else if (difficulty === 'trung_binh') {
      difficultyInstruction = `Tất cả ${questionCount} câu hỏi đều ở CẤP ĐỘ TRUNG BÌNH (Thông hiểu & Vận dụng): Yêu cầu học sinh hiểu bản chất, biết áp dụng công thức vào bài tập tiêu chuẩn, suy luận 1-2 bước.`;
    } else if (difficulty === 'kho') {
      difficultyInstruction = `Tất cả ${questionCount} câu hỏi đều ở CẤP ĐỘ KHÓ (Vận dụng cao): Yêu cầu tư duy logic sâu, bài toán thực tiễn, phân tích tổng hợp, có câu hỏi phân loại học sinh giỏi, câu hỏi bẫy cần cẩn trọng.`;
    } else {
      // Tổng hợp 3 cấp độ
      const deCount = Math.max(1, Math.round(questionCount * 0.4));
      const khoCount = Math.max(1, Math.round(questionCount * 0.2));
      const tbCount = Math.max(1, questionCount - deCount - khoCount);
      difficultyInstruction = `TỔNG HỢP 3 CẤP ĐỘ (Chuẩn cấu trúc đề thi ma trận Bộ GD&ĐT Việt Nam):
- Khoảng ${deCount} câu CẤP ĐỘ DỄ ('de'): Nhận biết kiến thức cốt lõi.
- Khoảng ${tbCount} câu CẤP ĐỘ TRUNG BÌNH ('trung_binh'): Thông hiểu & vận dụng cơ bản.
- Khoảng ${khoCount} câu CẤP ĐỘ KHÓ ('kho'): Vận dụng cao & tư duy sáng tạo.
Hãy gán đúng trường "difficulty" là 'de', 'trung_binh' hoặc 'kho' cho từng câu tương ứng.`;
    }

    const multiLessonPrompt =
      targetLessonTitles.length > 1
        ? `Học sinh đã chọn KẾT HỢP ${targetLessonTitles.length} BÀI HỌC / CHỦ ĐỀ sau để tạo đề thi tổng hợp:\n${targetLessonTitles.map((t, i) => `${i + 1}. ${t}`).join('\n')}\n=> YÊU CẦU: Hãy phân bổ đều số câu hỏi cho các bài học trên (mỗi bài có tỷ lệ câu hỏi tương đương nhau) để đề thi bao quát toàn diện kiến thức các bài đã chọn!`
        : `Nội dung ôn tập trọng tâm: "${targetLessonTitles[0]}". Tất cả câu hỏi phải bám sát 100% nội dung bài học này.`;

    const prompt = `Bạn là GV: Ms. Trúc Tin Học - giáo viên chuyên môn Tin học THCS xuất sắc tại Việt Nam, tác giả ứng dụng "GIA SƯ TIN HỌC THCS" (Khối 6, 7, 8, 9).
Nhiệm vụ của bạn là soạn bộ ${questionCount} CÂU HỎI TRẮC NGHIỆM ÔN TẬP TIN HỌC CHO HỌC SINH (bám sát chương trình GDPT 2018 - SGK Tin học Kết Nối Tri Thức Với Cuộc Sống).

Thông tin bài học:
- Cấp học: "${grade || `Khối ${gradeNumber || 8}`}"
- Môn học: "${subject || 'Tin học THCS'}"
- ${multiLessonPrompt}
${customContent ? `- Tài liệu ghi chú / Tóm tắt bài học do học sinh cung cấp:\n"""\n${customContent}\n"""` : ''}

YÊU CẦU ĐẶC BIỆT BẮT BUỘC:
1. BÁM SÁT 100% NỘI DUNG SÁCH GIÁO KHOA TIN HỌC KẾT NỐI TRI THỨC VỚI CUỘC SỐNG (BỘ GIÁO DỤC VÀ ĐÀO TẠO VIỆT NAM).
2. TUYỆT ĐỐI KHÔNG ĐƯỢC TỰ BỊA ĐẶT HOẶC ĐƯA TÊN NHÂN VẬT, SỰ KIỆN HAY THUẬT NGỮ NGOÀI SÁCH GIÁO KHOA VÀO CÂU HỎI VÀ ĐÁP ÁN:
   - Ví dụ: Trong Tin học 8 Bài 1 "Lược sử công cụ tính toán", SGK Kết Nối Tri Thức CHỈ giới thiệu đúng các nhân vật: Blaise Pascal (máy Pascaline - tr.5), Gottfried Leibniz (phép nhân/chia - tr.6), Charles Babbage (máy tính đa năng, cha đẻ công nghệ máy tính - tr.6), Claude Shannon (rơ-le bit - tr.7), Howard Aiken (máy Harvard Mark I - tr.7), John Von Neumann (nguyên lý lưu trữ chương trình - tr.7). TUYỆT ĐỐI KHÔNG đưa Ada Lovelace, Margaret Hamilton, Grace Hopper hay các nhân vật/sự kiện ngoài sách giáo khoa chính vào câu hỏi hoặc bất kỳ phương án nhiễu nào!
3. TẤT CẢ CÁC PHƯƠNG ÁN LỰA CHỌN (cả đáp án đúng lẫn 3 phương án sai/nhiễu) chỉ được sử dụng các thuật ngữ, khái niệm, nhân vật có trong chương trình SGK Tin học THCS Kết Nối Tri Thức, đảm bảo phù hợp tuyệt đối với lứa tuổi và kiến thức bài học của học sinh.
4. Toàn bộ ${questionCount} câu hỏi PHẢI CHÍNH XÁC VÀ ĐÚNG 100% VỚI NỘI DUNG VÀ KIẾN THỨC CỦA CÁC CHỦ ĐỀ BÀI HỌC ĐÃ CHỌN.
5. Các câu hỏi phải ĐA DẠNG, PHONG PHÚ, KHÔNG BỊ TRÙNG LẶP.

Yêu cầu về Cấp độ:
${difficultyInstruction}

Quy chuẩn chất lượng câu hỏi:
1. Nội dung trong sáng, ngôn ngữ chuẩn Tiếng Việt, sư phạm, chính xác về mặt khoa học.
2. Mỗi câu hỏi gồm đúng 4 lựa chọn A, B, C, D (không lặp lại đáp án, các phương án nhiễu phải hợp lý).
3. Đánh dấu chính xác vị trí đáp án đúng (correctAnswer: số nguyên 0, 1, 2, hoặc 3).
4. Phần giải thích (explanation) phải mạch lạc, dễ hiểu, giải thích từng bước vì sao đáp án đúng và trích dẫn chuẩn SGK Kết Nối Tri Thức.
5. Phần gợi ý (hint) ngắn gọn 1 câu hướng dẫn học sinh hướng suy nghĩ.`;

    const response = await generateWithModelFallback(activeClient, {
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.ARRAY,
          description: `Danh sách ${questionCount} câu hỏi ôn tập trắc nghiệm`,
          items: {
            type: Type.OBJECT,
            properties: {
              question: {
                type: Type.STRING,
                description: 'Nội dung câu hỏi',
              },
              options: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: 'Mảng gồm đúng 4 phương án trả lời',
              },
              correctAnswer: {
                type: Type.INTEGER,
                description: 'Chỉ số của phương án đúng (0, 1, 2, hoặc 3)',
              },
              explanation: {
                type: Type.STRING,
                description: 'Lời giải chi tiết và sư phạm',
              },
              difficulty: {
                type: Type.STRING,
                description: "Cấp độ câu hỏi: 'de', 'trung_binh', hoặc 'kho'",
              },
              hint: {
                type: Type.STRING,
                description: 'Gợi ý suy nghĩ nhanh cho học sinh',
              },
              topic: {
                type: Type.STRING,
                description: 'Tên bài học hoặc chủ đề tương ứng',
              },
            },
            required: ['question', 'options', 'correctAnswer', 'explanation', 'difficulty'],
          },
        },
      },
    });

    const text = response.text || '[]';
    let questions = JSON.parse(text);

    if (!Array.isArray(questions) || questions.length === 0) {
      throw new Error('Invalid format returned by AI model');
    }

    // Deduplicate questions by text to guarantee 100% uniqueness
    const seen = new Set<string>();
    const uniqueList: any[] = [];

    for (const q of questions) {
      const norm = q.question?.trim().toLowerCase();
      if (norm && !seen.has(norm)) {
        seen.add(norm);
        uniqueList.push({
          id: `ai-q-${uniqueList.length + 1}-${Date.now()}`,
          question: q.question,
          options: Array.isArray(q.options) && q.options.length === 4 ? q.options : ['A', 'B', 'C', 'D'],
          correctAnswer: typeof q.correctAnswer === 'number' && q.correctAnswer >= 0 && q.correctAnswer <= 3 ? q.correctAnswer : 0,
          explanation: q.explanation || 'Giải thích chuẩn SGK Kết Nối Tri Thức.',
          difficulty: ['de', 'trung_binh', 'kho'].includes(q.difficulty) ? q.difficulty : (difficulty === 'tong_hop' ? 'trung_binh' : difficulty),
          hint: q.hint || 'Hãy đọc kỹ lại đề bài và loại trừ các đáp án không hợp lý.',
          topic: q.topic || targetLessonTitles[0],
        });
      }
    }

    // If AI returned fewer unique questions than requested, supplement from offline bank
    if (uniqueList.length < questionCount) {
      const needed = questionCount - uniqueList.length;
      const extra = generateFallbackQuestions(targetKeys, needed * 2, difficulty, gradeNumber || grade);
      for (const ex of extra) {
        if (uniqueList.length >= questionCount) break;
        const norm = ex.question?.trim().toLowerCase();
        if (norm && !seen.has(norm)) {
          seen.add(norm);
          uniqueList.push(ex);
        }
      }
    }

    return res.json({
      success: true,
      source: 'gemini_ai',
      questions: uniqueList.slice(0, questionCount),
      message: `AI đã tạo thành công ${questionCount} câu hỏi phong phú, không lặp lại.`,
    });
  } catch (error) {
    console.error('Error in /api/generate-quiz:', error);
    // Fallback to offline questions bank
    const fallback = generateFallbackQuestions(targetKeys, questionCount, difficulty, gradeNumber || grade);
    return res.json({
      success: true,
      source: 'offline_fallback',
      questions: fallback,
      message: 'Hệ thống đã tự động chuyển sang kho câu hỏi chuẩn SGK offline.',
    });
  }
});

// API: Giáo viên AI giải thích thêm hoặc mách mẹo ghi nhớ cho học sinh
app.post('/api/explain-question', async (req, res) => {
  const { question, options, correctAnswer, explanation, studentQuery, apiKey } = req.body;
  const headerKey = req.headers['x-gemini-api-key'] as string;
  const client = getGenAIClient(apiKey || headerKey);

  if (!client) {
    return res.json({
      explanation: explanation || 'Hãy đọc kỹ định nghĩa và quy tắc tương ứng trong sách giáo khoa để nắm chắc bài học nhé!',
    });
  }

  try {
    const prompt = `Bạn là GV: Ms. Trúc Tin Học (Giáo viên phụ trách ứng dụng Gia Sư Tin Học THCS).
Học sinh đang ôn tập câu hỏi sau và cần cô Trúc hỗ trợ:
Câu hỏi: ${question}
Các lựa chọn:
A. ${options?.[0]}
B. ${options?.[1]}
C. ${options?.[2]}
D. ${options?.[3]}
Đáp án đúng: Phương án số ${correctAnswer + 1} (${options?.[correctAnswer]})
Giải thích cơ bản: ${explanation}

Thắc mắc của học sinh: "${studentQuery || 'Em chưa hiểu rõ lắm, cô Trúc giải thích thêm và mách mẹo nhớ nhanh cho em với ạ!'}"

Hãy trả lời xưng là "Cô Trúc" một cách ân cần, nhiệt tình, sư phạm, dùng ngôn ngữ dễ hiểu đối với học sinh THCS, ví dụ trực quan và bí quyết/mẹo nhớ nhanh nhất!`;

    const response = await generateWithModelFallback(client, {
      contents: prompt,
    });

    return res.json({
      success: true,
      explanation: response.text,
    });
  } catch (err) {
    console.error('Error in /api/explain-question:', err);
    return res.json({
      success: false,
      explanation: explanation || 'Hãy ôn tập lại công thức và lý thuyết bài học để hiểu rõ hơn nhé!',
    });
  }
});

// Serve frontend
const isProd = process.env.NODE_ENV === 'production';
if (!isProd) {
  const { createServer: createViteServer } = await import('vite');
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });
  app.use(vite.middlewares);
} else {
  app.use(express.static(path.resolve(__dirname, 'dist')));
  app.get('*', (_req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  });
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${PORT} (NODE_ENV=${process.env.NODE_ENV})`);
});
