export type DifficultyLevel = 'de' | 'trung_binh' | 'kho' | 'tong_hop';

export type QuestionType =
  | 'multiple_choice'
  | 'fill_blank'
  | 'matching'
  | 'drag_drop_order'
  | 'drag_drop';

export interface MatchingItem {
  id: string;
  text: string;
  label?: string;
}

export interface Question {
  id: string;
  type?: QuestionType; // defaults to 'multiple_choice'
  question: string;
  options: string[]; // used for multiple_choice, or fallback
  correctAnswer?: number; // 0, 1, 2, 3 for multiple_choice

  // For 'fill_blank' type
  blankAnswers?: string[]; // array of correct strings for blanks [0, 1, ...]
  wordBank?: string[]; // list of candidate words/phrases for student to pick/drag

  // For 'matching' type
  matchingLeft?: MatchingItem[]; // items in left column (e.g. Lĩnh vực)
  matchingRight?: MatchingItem[]; // items in right column (e.g. Ví dụ)
  correctMatches?: Record<string, string>; // leftId -> rightId
  pairs?: { left: string; right: string }[]; // alternative representation

  // For 'drag_drop_order' / 'drag_drop' type
  orderItems?: { id: string; text: string }[];
  items?: string[]; // alternative simple array of strings
  correctOrder?: string[]; // array of ids in correct chronological/logical sequence

  explanation: string;
  difficulty: 'de' | 'trung_binh' | 'kho';
  topic?: string;
  hint?: string;
  subType?: 'true_false' | 'multiple_choice' | string;
  gameType?: 'quiz' | 'true_false' | 'fill_blank' | 'matching';
}

export interface EssayQuestion {
  id: string;
  title: string;
  question: string;
  suggestedAnswer: string;
  topic?: string;
  category?: string;
}

export type EducationLevel = 'tieu_hoc' | 'thcs';

export interface LessonTopic {
  id: string;
  subject: string;
  grade: string;
  gradeNumber?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  title: string;
  description: string;
  iconName: string;
  color: string;
  isSpecialExam?: boolean; // For midterm/final exams
}

export type QuizMode = 'exam' | 'practice';
export type QuestionSourcePreference = 'ai' | 'offline';

export interface QuizSession {
  id: string;
  lessonId?: string;
  lessonIds?: string[];
  lessonTitle: string;
  selectedLessonTitles?: string[];
  subject: string;
  grade?: string;
  gradeNumber?: number;
  difficultyMode: DifficultyLevel;
  totalQuestions: number;
  questions: Question[];
  userAnswers: Record<number, any>; // questionIndex -> selectedOptionIndex (number) OR Record<string, string> OR string[]
  flaggedQuestions: number[]; // array of question indices
  startTime: number;
  endTime?: number;
  score: number;
  percentage: number;
  status: 'in_progress' | 'completed';
  mode: QuizMode;
  timeSpentSeconds: number;
  source?: 'gemini_ai' | 'offline_bank' | 'offline_fallback';
}

export interface GenerateQuizRequest {
  lessonId?: string;
  lessonIds?: string[];
  lesson?: string;
  lessons?: string[];
  subject?: string;
  grade?: string;
  gradeNumber?: number;
  count: number;
  difficulty: DifficultyLevel;
  customContent?: string;
  apiKey?: string;
  sourcePreference?: QuestionSourcePreference;
}

export interface DifficultyStats {
  de: { correct: number; total: number };
  trung_binh: { correct: number; total: number };
  kho: { correct: number; total: number };
}

export interface StudentProfile {
  fullName: string;
  grade: string;       // e.g. "Khối 8"
  className: string;   // e.g. "8A1"
  schoolName?: string; // e.g. "Trường THCS"
  avatar: string;      // avatar identifier or data URL
}

export interface WrongQuestionRecord {
  id: string;
  question: Question;
  userAnswer: any;
  lessonTitle: string;
  gradeNumber?: number;
  addedAt: number;
}

export interface BadgeItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: number;
  progressText?: string;
}

export interface StudentScoreRecord {
  id: string;
  studentName: string;
  className: string;
  schoolName: string;
  gradeNumber: number;
  grade: string;
  examBatch: string; // e.g. "Đợt 1: Khảo sát chất lượng Giữa kì 1", "Đợt 2: Thi đua Tin học Trẻ", etc.
  lessonTitle: string;
  score: number;
  percentage: number;
  totalQuestions: number;
  correctAnswersCount: number;
  timeSpentSeconds: number;
  date: number;
  rankTitle?: string;
  avatar?: string;
  notes?: string;
}

export interface CertificateData {
  studentName: string;
  className: string;
  schoolName: string;
  examBatch: string;
  lessonTitle: string;
  score: number;
  percentage: number;
  rankTitle: string;
  date: number;
  certificateCode: string;
}
