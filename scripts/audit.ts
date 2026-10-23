import { CURRICULUM_LESSONS, BUILT_IN_QUESTIONS, generateFallbackQuestions } from '../src/data/curriculum';
import { DEFAULT_CUSTOM_EXAMS } from '../src/data/defaultCustomExams';
import { INITIAL_SCORE_RECORDS } from '../src/data/defaultScores';
import {
  normalizeText,
  isBlankValueMatch,
  isQuestionAnswered,
  isQuestionAnswerCorrect,
  getQuestionAnswerScore,
  getQuestionAnswerStatus,
  shuffleQuestionOptions,
} from '../src/utils/questionEvaluator';
import { parseQuestionsFromRawText } from '../src/utils/documentQuestionParser';
import { auditExamQuality } from '../src/utils/examQualityValidator';

console.log('--- AUDITING SYSTEM ---');

const issues: string[] = [];

// 1. Audit Custom Exams
console.log('Checking DEFAULT_CUSTOM_EXAMS count:', DEFAULT_CUSTOM_EXAMS.length);
DEFAULT_CUSTOM_EXAMS.forEach((exam, eIdx) => {
  if (!exam.id || !exam.title) {
    issues.push(`Custom exam #${eIdx} missing id or title`);
  }
  if (!exam.questions || exam.questions.length === 0) {
    issues.push(`Custom exam "${exam.title}" has no questions`);
  } else {
    exam.questions.forEach((q, qIdx) => {
      const qPrefix = `Exam "${exam.title}" Q#${qIdx} (${q.id})`;
      if (q.type === 'multiple_choice' || !q.type) {
        if (!q.options || q.options.length < 2) {
          issues.push(`${qPrefix} invalid options`);
        }
        if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer >= (q.options?.length || 0)) {
          issues.push(`${qPrefix} invalid correctAnswer: ${q.correctAnswer}`);
        }
      }
    });
  }
});

// 2. Audit generateFallbackQuestions across all grades and difficulties
console.log('Testing generateFallbackQuestions for all grades...');
const grades = [3, 4, 5, 6, 7, 8, 9];
const diffs: ('de' | 'trung_binh' | 'kho' | 'tong_hop')[] = ['de', 'trung_binh', 'kho', 'tong_hop'];

for (const g of grades) {
  const lessonsInGrade = CURRICULUM_LESSONS.filter((l) => l.gradeNumber === g);
  if (lessonsInGrade.length === 0) {
    issues.push(`Grade ${g} has no curriculum lessons!`);
    continue;
  }
  const lessonIds = lessonsInGrade.map((l) => l.id);

  for (const diff of diffs) {
    // Test count 10
    const questions10 = generateFallbackQuestions(lessonIds.slice(0, 2), 10, diff, g);
    if (questions10.length !== 10) {
      issues.push(`Grade ${g} [${diff}] expected 10 questions, got ${questions10.length}`);
    }
    // Verify each question has valid fields
    questions10.forEach((q, idx) => {
      if (!q.question) issues.push(`Grade ${g} [${diff}] Q#${idx} empty question`);
      if (q.type === 'multiple_choice' || !q.type) {
        const cAns = q.correctAnswer ?? 0;
        if (cAns < 0 || cAns >= q.options.length) {
          issues.push(`Grade ${g} [${diff}] Q#${idx} out of bound correctAnswer: ${cAns}`);
        }
      }
    });
  }
}

// 3. Test questionEvaluator edge cases
console.log('Testing questionEvaluator...');
// 3a. normalizeText
if (normalizeText('  Học Sinh  ') !== 'học sinh') issues.push('normalizeText trim failed');
if (normalizeText('A.B.C.') !== 'a.b.c') issues.push('normalizeText trailing punctuation failed');
if (normalizeText('“Thông tin”') !== '"thông tin"') issues.push('normalizeText quotes failed');

// 3b. isBlankValueMatch
if (!isBlankValueMatch('  bàn phím ', 'Bàn phím')) issues.push('isBlankValueMatch simple failed');
if (!isBlankValueMatch('máy vi tính', 'máy tính / máy vi tính')) issues.push('isBlankValueMatch slash variant failed');
if (!isBlankValueMatch('màn hình', 'màn hình|thân máy')) issues.push('isBlankValueMatch pipe variant failed');
if (isBlankValueMatch('', 'Bàn phím')) issues.push('isBlankValueMatch empty string should be false');
if (isBlankValueMatch(undefined, 'Bàn phím')) issues.push('isBlankValueMatch undefined should be false');

// 3c. Multiple choice evaluation
const sampleMC = {
  id: 'test-1',
  question: 'Máy tính có mấy bộ phận?',
  options: ['1', '2', '3', '4'],
  correctAnswer: 3,
  explanation: 'Có 4 bộ phận.',
  difficulty: 'de' as const,
};
if (!isQuestionAnswerCorrect(sampleMC, 3)) issues.push('MC correct answer failed');
if (isQuestionAnswerCorrect(sampleMC, 1)) issues.push('MC wrong answer returned true');
if (getQuestionAnswerScore(sampleMC, 3) !== 1) issues.push('MC score 1 failed');
if (getQuestionAnswerScore(sampleMC, 0) !== 0) issues.push('MC score 0 failed');

// 3d. Fill blank evaluation
const sampleFB = {
  id: 'test-2',
  type: 'fill_blank' as const,
  question: 'Bộ phận {1} dùng để gõ chữ, {2} dùng để điều khiển.',
  blankAnswers: ['bàn phím', 'chuột'],
  options: [],
  correctAnswer: 0,
  explanation: 'SGK',
  difficulty: 'de' as const,
};
if (!isQuestionAnswerCorrect(sampleFB, ['Bàn phím', 'chuột'])) issues.push('FillBlank correct failed');
if (isQuestionAnswerCorrect(sampleFB, ['Bàn phím', 'màn hình'])) issues.push('FillBlank partial returned true for isCorrect');
if (getQuestionAnswerScore(sampleFB, ['Bàn phím', 'màn hình']) !== 0.5) {
  issues.push(`FillBlank partial score expected 0.5, got ${getQuestionAnswerScore(sampleFB, ['Bàn phím', 'màn hình'])}`);
}

// 3e. Matching evaluation
const sampleMatch = {
  id: 'test-3',
  type: 'matching' as const,
  question: 'Ghép cặp',
  pairs: [
    { left: 'Thân máy', right: 'Xử lý thông tin' },
    { left: 'Bàn phím', right: 'Nhập dữ liệu' },
  ],
  options: [],
  correctAnswer: 0,
  explanation: 'SGK',
  difficulty: 'de' as const,
};
if (!isQuestionAnswerCorrect(sampleMatch, { 'left-1': 'right-1', 'left-2': 'right-2' })) {
  issues.push('Matching correct failed');
}
if (isQuestionAnswerCorrect(sampleMatch, { 'left-1': 'right-1', 'left-2': 'right-1' })) {
  issues.push('Matching wrong returned true');
}
if (getQuestionAnswerScore(sampleMatch, { 'left-1': 'right-1', 'left-2': 'right-1' }) !== 0.5) {
  issues.push(`Matching partial score expected 0.5, got ${getQuestionAnswerScore(sampleMatch, { 'left-1': 'right-1', 'left-2': 'right-1' })}`);
}

// 4. Test documentQuestionParser
console.log('Testing documentQuestionParser...');
const sampleExamDoc = `
ĐỀ KIỂM TRA TIN HỌC 8 GIỮA HỌC KÌ 1
Câu 1: Chiếc máy tính cơ khí đầu tiên Pascaline do ai sáng chế?
A. Charles Babbage
*B. Blaise Pascal
C. Gottfried Leibniz
D. Ada Lovelace
Lời giải: Blaise Pascal chế tạo máy tính Pascaline năm 1642.

Câu 2: Nguyên lý Von Neumann bao gồm:
A. Mã nhị phân
B. Lưu trữ chương trình
C. Điều khiển theo chương trình
D. Cả A, B và C
`;
const parseRes = parseQuestionsFromRawText(sampleExamDoc);
console.log('Parsed questions count:', parseRes.questions.length);
if (parseRes.questions.length !== 2) {
  issues.push(`parseQuestionsFromRawText expected 2 questions, got ${parseRes.questions.length}`);
} else {
  if (parseRes.questions[0].correctAnswer !== 1) {
    issues.push(`Question 1 expected correctAnswer 1 (B), got ${parseRes.questions[0].correctAnswer}`);
  }
}

// 5. Test auditExamQuality
console.log('Testing auditExamQuality...');
const auditRes = auditExamQuality(parseRes.questions, 2);
console.log('Audit result score:', auditRes.score, 'isValid:', auditRes.isValid);

console.log('==============================');
console.log('TOTAL ISSUES FOUND:', issues.length);
if (issues.length > 0) {
  console.log('ISSUES:', JSON.stringify(issues, null, 2));
} else {
  console.log('ALL UNIT AUDITS PASSED WITH ZERO ISSUES!');
}
