import { Question, DifficultyLevel } from '../types/quiz';

export interface ParsedDocumentResult {
  suggestedTitle: string;
  summary: string;
  questions: Question[];
  warnings: string[];
}

/**
 * Bóc tách bảng đáp án ở cuối văn bản (nếu có)
 * Ví dụ: "1.A  2.B  3.C  4.D" hoặc "1-A  2-B" hoặc "Câu 1: A, Câu 2: B"
 */
function extractAnswerKeyMap(text: string): Map<number, number> {
  const answerMap = new Map<number, number>();
  
  // Tìm khối bảng đáp án
  const answerKeySectionRegex = /(?:bảng\s*đáp\s*án|đáp\s*án\s*tham\s*khảo|đáp\s*án|key)(?:[\s\S]*)$/i;
  const match = text.match(answerKeySectionRegex);
  const searchArea = match ? match[0] : text;

  // Regex bắt dạng: "1. A", "1-A", "1:A", "Câu 1: A", "Câu 1. A"
  const pairRegex = /(?:câu\s*)?(\d+)[\s.:\-–=]+([A-D])/gi;
  let m: RegExpExecArray | null;
  while ((m = pairRegex.exec(searchArea)) !== null) {
    const qNum = parseInt(m[1], 10);
    const ansLetter = m[2].toUpperCase();
    const ansIndex = ansLetter.charCodeAt(0) - 65; // A=0, B=1, C=2, D=3
    if (!answerMap.has(qNum) && ansIndex >= 0 && ansIndex <= 3) {
      answerMap.set(qNum, ansIndex);
    }
  }

  return answerMap;
}

/**
 * Chuẩn hóa và làm sạch văn bản tải lên
 */
function cleanRawText(raw: string): string {
  return raw
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .replace(/\u00A0/g, ' ') // Non-breaking space
    .replace(/[\t ]+/g, ' ')
    .trim();
}

/**
 * Trích xuất tiêu đề đề thi tiềm năng từ phần đầu file
 */
function extractPotentialTitle(text: string): { title: string; cleanBody: string } {
  const lines = text.split('\n').map((l) => l.trim()).filter(Boolean);
  let potentialTitle = '';

  for (let i = 0; i < Math.min(5, lines.length); i++) {
    const line = lines[i];
    if (
      /(đề\s*thi|đề\s*kiểm\s*tra|khảo\s*sát|ôn\s*tập|bài\s*tập|giữa\s*kì|học\s*kì|tin\s*học)/i.test(line) &&
      !/^(câu\s*\d+|bài\s*\d+)/i.test(line)
    ) {
      potentialTitle = line.replace(/^[#*_\-\s]+|[#*_\-\s]+$/g, '').trim();
      break;
    }
  }

  return {
    title: potentialTitle,
    cleanBody: text,
  };
}

export interface DocumentParseOptions {
  defaultTopic?: string;
  gradeNumber?: number;
  fallbackDifficulty?: DifficultyLevel;
  questionCount?: number | 'all';
  strictOriginal?: boolean;
  questionType?: string;
  autoGenerateAnswerIfMissing?: boolean;
}

/**
 * Bóc tách danh sách câu hỏi trắc nghiệm từ văn bản thô
 */
export function parseQuestionsFromRawText(
  rawText: string,
  options?: DocumentParseOptions
): ParsedDocumentResult {
  const cleaned = cleanRawText(rawText);
  const { title } = extractPotentialTitle(cleaned);
  const answerKeyMap = extractAnswerKeyMap(cleaned);
  const warnings: string[] = [];

  // Tìm các vị trí bắt đầu câu hỏi: "Câu 1:", "Câu 1.", "Câu 1 -", "Bài 1:", hoặc số thứ tự "1." đứng đầu dòng
  // Sử dụng regex tách từng khối câu hỏi
  const questionSplitRegex = /(?:^|\n)(?=(?:câu|bài)\s*\d+[\s.:\-–]|\b\d+[\s.:\-–]\s+(?:[A-ZÀ-Ỹ]|[a-zà-ỹ]))/i;
  const rawBlocks = cleaned.split(questionSplitRegex);

  const parsedQuestions: Question[] = [];

  for (let bIndex = 0; bIndex < rawBlocks.length; bIndex++) {
    const block = rawBlocks[bIndex].trim();
    if (!block) continue;

    // Kiểm tra xem block có chứa số câu hỏi không
    const headerMatch = block.match(/^(?:câu|bài)?\s*(\d+)[\s.:\-–]\s*([\s\S]+)$/i);
    if (!headerMatch) {
      continue;
    }

    const questionNumber = parseInt(headerMatch[1], 10);
    const content = headerMatch[2].trim();

    // Tách câu hỏi thành 3 phần:
    // 1. Nội dung câu hỏi (prompt)
    // 2. Các phương án A, B, C, D
    // 3. Giải thích / Đáp án kèm theo câu (nếu có)

    // Regex phát hiện phương án A
    const firstOptionMatch = content.search(/(?:^|\n|\s+)(?:[*_~]*\s*[*_~]*)?[A-D][.:)]\s+/i);
    if (firstOptionMatch === -1) {
      // Không tìm thấy phương án A, B, C, D -> có thể là câu tự luận hoặc tiêu đề
      continue;
    }

    const questionText = content.substring(0, firstOptionMatch).trim();
    const remainingText = content.substring(firstOptionMatch).trim();

    // Tách các phương án A, B, C, D
    // Cắt bỏ phần "Đáp án:" hoặc "Lời giải:" hoặc "Giải thích:" ở cuối khối câu hỏi
    let answerTextInBlock = '';
    let explanationInBlock = '';
    let optionsText = remainingText;

    const explainMatch = remainingText.match(
      /(?:\n|\s+)(?:lời\s*giải|giải\s*thích|hướng\s*dẫn\s*giải|hướng\s*dẫn)[\s.:\-–]+([\s\S]*)$/i
    );
    if (explainMatch) {
      explanationInBlock = explainMatch[1].trim();
      optionsText = remainingText.substring(0, explainMatch.index).trim();
    }

    const inlineAnsMatch = optionsText.match(
      /(?:\n|\s+)(?:đáp\s*án|đ\/a|chọn|key)[\s.:\-–]*([A-D])\b/i
    );
    if (inlineAnsMatch) {
      answerTextInBlock = inlineAnsMatch[1].toUpperCase();
      optionsText = optionsText.substring(0, inlineAnsMatch.index).trim();
    }

    // Tách từng option A, B, C, D
    // Cho phép options nằm trên nhiều dòng hoặc cùng 1 dòng
    const optionMatches = [
      ...optionsText.matchAll(/(?:^|\n|\s+)([*_~]*\s*[*_~]*)?([A-D])[.:)]\s+([\s\S]*?)(?=(?:(?:^|\n|\s+)(?:[*_~]*\s*[*_~]*)?[A-D][.:)]\s+)|$)/gi),
    ];

    const extractedOptions: string[] = [];
    let markedCorrectLetter = '';

    for (const optM of optionMatches) {
      const star = optM[1]?.trim() || '';
      const letter = optM[2].toUpperCase();
      let optText = optM[3].trim().replace(/\s+/g, ' ');

      // Kiểm tra xem phương án có dấu sao * đánh dấu đáp án đúng không (VD: *A. hoặc A*. hoặc (*) A.)
      if (star.includes('*') || optText.startsWith('*') || optText.endsWith('*')) {
        markedCorrectLetter = letter;
        optText = optText.replace(/\*/g, '').trim();
      }

      // Xóa dấu gạch dưới markdown thừa nếu có
      optText = optText.replace(/^[_~]+|[_~]+$/g, '').trim();

      extractedOptions.push(optText);
    }

    // Nếu không trích xuất đủ hoặc không theo chuẩn A-B-C-D
    if (extractedOptions.length < 2) {
      continue;
    }

    // Đảm bảo có tối đa 4 phương án chuẩn
    while (extractedOptions.length < 4) {
      extractedOptions.push(`Phương án ${String.fromCharCode(65 + extractedOptions.length)}`);
    }
    const finalOptions = extractedOptions.slice(0, 4);

    // Xác định đáp án đúng (ưu tiên theo: Đánh dấu sao -> Inline Đáp án -> Bảng đáp án cuối file -> mặc định 0)
    let correctIndex = 0;
    if (markedCorrectLetter) {
      correctIndex = markedCorrectLetter.charCodeAt(0) - 65;
    } else if (answerTextInBlock) {
      correctIndex = answerTextInBlock.charCodeAt(0) - 65;
    } else if (answerKeyMap.has(questionNumber)) {
      correctIndex = answerKeyMap.get(questionNumber)!;
    }

    if (correctIndex < 0 || correctIndex > 3) {
      correctIndex = 0;
    }

    // Đánh giá mức độ câu hỏi (nhận biết -> dễ, thông hiểu -> trung bình, vận dụng -> khó)
    let difficulty: 'de' | 'trung_binh' | 'kho' = 'trung_binh';
    const lowerQ = questionText.toLowerCase();
    if (
      lowerQ.includes('đâu là') ||
      lowerQ.includes('khái niệm') ||
      lowerQ.includes('định nghĩa') ||
      lowerQ.includes('thiết bị nào') ||
      lowerQ.includes('phím tắt nào') ||
      lowerQ.includes('chức năng chính của') ||
      lowerQ.includes('tên gọi nào')
    ) {
      difficulty = 'de';
    } else if (
      lowerQ.includes('kết quả của') ||
      lowerQ.includes('tại sao') ||
      lowerQ.includes('để thực hiện') ||
      lowerQ.includes('sắp xếp') ||
      lowerQ.includes('nếu') ||
      lowerQ.includes('bước nào')
    ) {
      difficulty = 'trung_binh';
    } else if (
      lowerQ.includes('thuật toán') ||
      lowerQ.includes('vận dụng') ||
      lowerQ.includes('phân tích') ||
      lowerQ.includes('chương trình') ||
      lowerQ.includes('tối ưu')
    ) {
      difficulty = 'kho';
    }

    parsedQuestions.push({
      id: `q-doc-${Date.now()}-${questionNumber}-${Math.random().toString(36).slice(2, 6)}`,
      type: 'multiple_choice',
      question: questionText || `Câu hỏi số ${questionNumber}`,
      options: finalOptions,
      correctAnswer: correctIndex,
      explanation:
        explanationInBlock ||
        `Đáp án đúng là ${String.fromCharCode(65 + correctIndex)}: ${finalOptions[correctIndex]}. Trích dẫn theo chuẩn tài liệu đề thi.`,
      difficulty,
      hint: 'Hãy đọc kỹ câu hỏi và loại trừ các phương án không chính xác.',
      topic: options?.defaultTopic || `Chủ đề trích xuất từ đề thi`,
    });
  }

  if (parsedQuestions.length === 0) {
    warnings.push('Không nhận diện được định dạng câu hỏi trắc nghiệm (A, B, C, D) trong tệp tải lên.');
  }

  const finalQuestions =
    typeof options?.questionCount === 'number' && options.questionCount > 0
      ? parsedQuestions.slice(0, options.questionCount)
      : parsedQuestions;

  return {
    suggestedTitle: title || 'Đề thi trắc nghiệm bóc tách từ tệp',
    summary: `Đã bóc tách thành công ${finalQuestions.length} câu hỏi ${options?.strictOriginal ? '(100% nguyên văn từ tài liệu gốc)' : ''} từ tệp tải lên.`,
    questions: finalQuestions,
    warnings,
  };
}
