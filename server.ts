import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, Type } from '@google/genai';
import { generateFallbackQuestions } from './src/data/curriculum';
import { parseQuestionsFromRawText } from './src/utils/documentQuestionParser';

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
  'gemini-1.5-pro',
].filter(Boolean) as string[];

/**
 * Trích xuất và phân tích JSON an toàn, tự động loại bỏ markdown code fences (```json ... ```)
 */
function parseJsonSafely(raw?: string, fallback: any = null): any {
  if (!raw) return fallback;
  let cleaned = raw.trim();
  if (cleaned.startsWith('```')) {
    cleaned = cleaned.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim();
  }
  try {
    return JSON.parse(cleaned);
  } catch {
    const match = cleaned.match(/(\[[\s\S]*\]|\{[\s\S]*\})/);
    if (match) {
      try {
        return JSON.parse(match[1]);
      } catch {}
    }
    return fallback;
  }
}

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
    let questions = parseJsonSafely(text, []);

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

// API: Bóc tách câu hỏi từ tệp đề thi (Word / PDF / Text)
app.post('/api/parse-exam-document', async (req, res) => {
  const {
    fileBase64 = '',
    filename = 'exam_document',
    mimeType = '',
    gradeNumber = 8,
    examCategory = 'exam',
    questionType = 'multiple_choice',
    questionCount = 'all',
    difficultyMode = 'original',
    strictOriginal = true,
    autoGenerateAnswerIfMissing = true,
    apiKey = '',
  } = req.body;

  if (!fileBase64) {
    return res.status(400).json({
      success: false,
      message: 'Vui lòng cung cấp dữ liệu tệp tải lên!',
    });
  }

  try {
    const cleanBase64 = fileBase64.replace(/^data:[^;]+;base64,/, '');
    const buffer = Buffer.from(cleanBase64, 'base64');
    const lowerFilename = filename.toLowerCase();

    let rawText = '';
    const isDocx = lowerFilename.endsWith('.docx') || mimeType.includes('wordprocessingml') || mimeType.includes('docx');
    const isPdf = lowerFilename.endsWith('.pdf') || mimeType.includes('pdf');
    const isTxt = lowerFilename.endsWith('.txt') || mimeType.includes('text/plain');

    if (isDocx) {
      try {
        const mammothModule = await import('mammoth');
        const mammoth = mammothModule.default || mammothModule;
        const result = await mammoth.extractRawText({ buffer });
        rawText = result.value || '';
      } catch (docxErr: any) {
        console.warn('Lỗi đọc Word DOCX:', docxErr?.message);
      }
    } else if (isPdf) {
      try {
        const pdfModule: any = await import('pdf-parse');
        const PDFParseClass = pdfModule.PDFParse || pdfModule.default?.PDFParse;
        if (typeof PDFParseClass === 'function' && PDFParseClass.prototype?.load) {
          const parser = new PDFParseClass({ data: buffer });
          await parser.load();
          const textRes = await parser.getText();
          rawText = typeof textRes === 'string' ? textRes : (textRes?.text || '');
          await parser.destroy();
        } else if (typeof pdfModule.default === 'function') {
          const parsed = await pdfModule.default(buffer);
          rawText = parsed?.text || '';
        }
      } catch (pdfErr: any) {
        console.warn('Lỗi đọc PDF:', pdfErr?.message);
      }
    } else if (isTxt) {
      rawText = buffer.toString('utf-8');
    }

    // Kiểm tra Gemini AI Client
    const headerKey = req.headers['x-gemini-api-key'] as string;
    const activeClient = getGenAIClient(apiKey || headerKey);

    let aiResult: any = null;

    if (activeClient) {
      try {
        const typeDesc =
          questionType === 'multiple_choice'
            ? 'Định dạng câu hỏi: Trắc nghiệm 4 lựa chọn (A, B, C, D).'
            : questionType === 'true_false'
            ? 'Định dạng câu hỏi: Đúng / Sai.'
            : questionType === 'fill_blank'
            ? 'Định dạng câu hỏi: Điền khuyết / điền từ vào chỗ trống.'
            : 'Định dạng câu hỏi: Giữ nguyên các dạng câu hỏi có trong tài liệu (trắc nghiệm, đúng sai, điền từ...).';

        const countDesc =
          typeof questionCount === 'number' && questionCount > 0
            ? (strictOriginal
                ? `Số lượng câu hỏi: Lấy tối đa đúng ${questionCount} câu từ tài liệu gốc.`
                : `Số lượng câu hỏi: Cần đúng ${questionCount} câu. Nếu tài liệu gốc có ít hơn ${questionCount} câu, hãy tự sinh thêm các câu hỏi chất lượng cao cùng chủ đề SGK Kết Nối Tri Thức để đủ ${questionCount} câu.`)
            : 'Số lượng câu hỏi: Bóc tách toàn bộ tất cả các câu hỏi có trong tài liệu gốc.';

        const diffDesc =
          difficultyMode === 'tong_hop'
            ? 'Mức độ: Phân bổ ma trận chuẩn Bộ GD&ĐT (40% Dễ - Nhận biết, 40% Trung bình - Thông hiểu, 20% Khó - Vận dụng).'
            : difficultyMode === 'de'
            ? 'Mức độ: Ưu tiên cấp độ Dễ (Nhận biết kiến thức cốt lõi).'
            : difficultyMode === 'trung_binh'
            ? 'Mức độ: Ưu tiên cấp độ Trung bình (Thông hiểu & vận dụng).'
            : difficultyMode === 'kho'
            ? 'Mức độ: Ưu tiên cấp độ Khó (Vận dụng cao, tư duy phân tích).'
            : 'Mức độ: Theo phân bổ độ khó tự nhiên của tài liệu gốc.';

        const strictDesc = strictOriginal
          ? `⚡ YÊU CẦU 100% THEO TÀI LIỆU GỐC (BẮT BUỘC TUYỆT ĐỐI):
1. GIỮ NGUYÊN VĂN 100% câu hỏi và các phương án từ tài liệu gốc, KHÔNG được tự ý thay đổi câu chữ, không thêm thắt hoặc tự sinh thêm câu hỏi bên ngoài.
2. CHỈ bóc tách các câu hỏi thực sự có trong văn bản tài liệu gốc.
3. ${autoGenerateAnswerIfMissing 
      ? 'Nếu tài liệu gốc đã ghi đáp án: Lấy chính xác đáp án đó. Nếu tài liệu gốc CHƯA có sẵn đáp án: Hãy dùng chuyên môn Tin học THCS để giải và chọn đáp án chính xác nhất (correctAnswer: 0, 1, 2, hoặc 3) và giải thích lý do.' 
      : 'Bảo lưu đáp án từ tài liệu gốc.'}`
          : `🤖 CHẾ ĐỘ AI TỰ SINH & HỖ TRỢ SƯ PHẠM:
1. Bóc tách câu hỏi từ tài liệu và có thể trau chuốt, tinh chỉnh câu chữ cho chuẩn văn phong sư phạm GDPT 2018.
2. ${autoGenerateAnswerIfMissing ? 'Tự động tạo đáp án chính xác nhất, lời giải thích chi tiết từng bước và gợi ý tư duy cho học sinh.' : ''}
3. ${diffDesc}`;

        const basePrompt = `Bạn là chuyên gia thẩm định và bóc tách đề thi Tin học THCS / Tiểu học theo chuẩn Bộ Giáo Dục và Đào Tạo Việt Nam (SGK Tin học Kết Nối Tri Thức Với Cuộc Sống).
Nhiệm vụ của bạn là bóc tách đề thi từ tài liệu dưới đây thành đúng cấu trúc chuẩn.

THÔNG TIN ĐỀ THI:
- Tên tệp gốc: "${filename}"
- Khối lớp: "Khối ${gradeNumber || 8}"
- Loại đề: "${examCategory === 'exam' ? 'Đề thi kiểm tra (Tính giờ)' : 'Đề ôn tập tự do'}"
- ${typeDesc}
- ${countDesc}

${strictDesc}

YÊU CẦU ĐẦU RA JSON:
- "suggestedTitle": Gợi ý tên đề thi phù hợp (ngắn gọn, chuẩn sư phạm)
- "summary": Tóm tắt 1-2 câu về nội dung và cấu trúc đề thi
- "questions": Danh sách câu hỏi gồm:
  + "question": Nội dung câu hỏi sạch sẽ (bỏ nhãn 'Câu 1:', 'Câu 2:' ở đầu)
  + "options": Mảng các phương án trả lời (đã bỏ tiền tố 'A.', 'B.', 'C.', 'D.')
  + "correctAnswer": Số nguyên vị trí đáp án đúng (0 cho A, 1 cho B, 2 cho C, 3 cho D)
  + "explanation": Lời giải thích sư phạm vì sao đáp án đúng
  + "difficulty": 'de' | 'trung_binh' | 'kho'
  + "hint": Gợi ý suy nghĩ ngắn
  + "topic": Bài học hoặc chủ đề tương ứng
`;

        let contents: any[] = [];
        if (isPdf && (!rawText || rawText.trim().length < 50)) {
          contents = [
            {
              inlineData: {
                mimeType: 'application/pdf',
                data: cleanBase64,
              },
            },
            basePrompt,
          ];
        } else {
          contents = [
            `${basePrompt}\n\nNội dung văn bản đề thi trích xuất:\n"""\n${rawText.slice(0, 45000)}\n"""`,
          ];
        }

        const aiResponse = await generateWithModelFallback(activeClient, {
          contents,
          config: {
            responseMimeType: 'application/json',
            responseSchema: {
              type: Type.OBJECT,
              properties: {
                suggestedTitle: { type: Type.STRING },
                summary: { type: Type.STRING },
                questions: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      question: { type: Type.STRING },
                      options: { type: Type.ARRAY, items: { type: Type.STRING } },
                      correctAnswer: { type: Type.INTEGER },
                      explanation: { type: Type.STRING },
                      difficulty: { type: Type.STRING },
                      hint: { type: Type.STRING },
                      topic: { type: Type.STRING },
                    },
                    required: ['question', 'options', 'correctAnswer', 'explanation', 'difficulty'],
                  },
                },
              },
              required: ['questions'],
            },
          },
        });

        const parsed = parseJsonSafely(aiResponse.text, {});
        if (Array.isArray(parsed.questions) && parsed.questions.length > 0) {
          aiResult = {
            suggestedTitle: parsed.suggestedTitle || filename.replace(/\.[^/.]+$/, ''),
            summary: parsed.summary || `Đã bóc tách thành công ${parsed.questions.length} câu hỏi từ tệp ${filename}`,
            questions: parsed.questions.map((q: any, idx: number) => ({
              id: `q-doc-ai-${Date.now()}-${idx + 1}-${Math.random().toString(36).slice(2, 6)}`,
              type: 'multiple_choice',
              question: q.question,
              options: Array.isArray(q.options) && q.options.length === 4 ? q.options : ['A', 'B', 'C', 'D'],
              correctAnswer: typeof q.correctAnswer === 'number' && q.correctAnswer >= 0 && q.correctAnswer <= 3 ? q.correctAnswer : 0,
              explanation: q.explanation || 'Giải thích chuẩn kiến thức Tin học SGK Kết Nối Tri Thức.',
              difficulty: ['de', 'trung_binh', 'kho'].includes(q.difficulty) ? q.difficulty : (difficultyMode === 'tong_hop' ? 'trung_binh' : (['de', 'trung_binh', 'kho'].includes(difficultyMode) ? difficultyMode : 'trung_binh')),
              hint: q.hint || 'Hãy đọc kỹ câu hỏi và các phương án.',
              topic: q.topic || `Khối ${gradeNumber}`,
            })),
            source: 'gemini_ai',
          };
        }
      } catch (aiErr: any) {
        console.warn('AI Parsing failed, falling back to local regex parser:', aiErr?.message);
      }
    }

    if (aiResult) {
      return res.json({
        success: true,
        source: 'gemini_ai',
        suggestedTitle: aiResult.suggestedTitle,
        summary: aiResult.summary,
        questions: aiResult.questions,
        totalQuestions: aiResult.questions.length,
        rawTextLength: rawText.length,
      });
    }

    // Fallback: Sử dụng regex parser nội bộ
    const fallbackResult = parseQuestionsFromRawText(rawText, {
      defaultTopic: `Tin học ${gradeNumber}`,
      gradeNumber,
      questionCount: typeof questionCount === 'number' ? questionCount : 'all',
      strictOriginal: !!strictOriginal,
      autoGenerateAnswerIfMissing: !!autoGenerateAnswerIfMissing,
      fallbackDifficulty: ['de', 'trung_binh', 'kho'].includes(difficultyMode) ? difficultyMode : 'trung_binh',
    });

    return res.json({
      success: true,
      source: 'offline_parser',
      suggestedTitle: fallbackResult.suggestedTitle || filename.replace(/\.[^/.]+$/, ''),
      summary: fallbackResult.summary,
      questions: fallbackResult.questions,
      totalQuestions: fallbackResult.questions.length,
      warnings: fallbackResult.warnings,
      rawTextLength: rawText.length,
    });
  } catch (error: any) {
    console.error('Error in /api/parse-exam-document:', error);
    return res.status(500).json({
      success: false,
      message: error?.message || 'Không thể bóc tách tệp đề thi. Vui lòng kiểm tra lại định dạng tệp!',
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
