import React, { useState, useEffect, useMemo } from 'react';
import {
  DifficultyLevel,
  LessonTopic,
  Question,
  QuizMode,
  QuizSession,
  StudentProfile,
  QuestionSourcePreference,
  EducationLevel,
  WrongQuestionRecord,
  StudentScoreRecord,
  CertificateData,
  CustomExam,
} from './types/quiz';
import {
  CURRICULUM_LESSONS,
  generateFallbackQuestions,
} from './data/curriculum';
import { Header } from './components/Header';
import { LessonSelector } from './components/LessonSelector';
import { QuestionCountSelector } from './components/QuestionCountSelector';
import { DifficultySelector } from './components/DifficultySelector';
import { ModeSelector } from './components/ModeSelector';
import { QuestionSourceSelector } from './components/QuestionSourceSelector';
import { QuizScreen } from './components/QuizScreen';
import { ResultScreen } from './components/ResultScreen';
import { PrintView } from './components/PrintView';
import { HistoryModal } from './components/HistoryModal';
import { Dashboard } from './components/Dashboard';
import { StudentProfileModal } from './components/StudentProfileModal';
import { StudentProfileDisplay } from './components/StudentProfileDisplay';
import { sound } from './utils/sound';
import { isQuestionAnswerCorrect, getQuestionAnswerScore } from './utils/questionEvaluator';
import { EssayModal } from './components/EssayModal';
import { MistakeNotebookModal } from './components/MistakeNotebookModal';
import { ScorebookLeaderboardModal } from './components/ScorebookLeaderboardModal';
import { CertificateModal } from './components/CertificateModal';
import { INITIAL_SCORE_RECORDS, DEFAULT_EXAM_BATCHES } from './data/defaultScores';
import { DEFAULT_CUSTOM_EXAMS } from './data/defaultCustomExams';
import {
  subscribeToScores,
  saveScoreToFirebase,
  deleteScoreFromFirebase,
  syncBatchScoresToFirebase,
  subscribeToCustomExams,
  syncInitialCustomExamsToFirebase,
  getStoredAdminSession,
  isAuthorizedAdmin,
  ADMIN_EMAIL,
  AdminSession,
} from './services/firebase';
import { AdminAuthModal } from './components/admin/AdminAuthModal';
import { AdminStudioModal } from './components/admin/AdminStudioModal';
import { AdminExamSection } from './components/admin/AdminExamSection';
import { sendScoreToGoogleSheetWebhook } from './services/googleSheets';
import { QUESTIONS_GRADE_5 } from './data/questionsGrade5';
import { Grade5ExamAuditAndGameModal } from './components/Grade5ExamAuditAndGameModal';
import {
  Sparkles,
  Play,
  Loader2,
  CheckCircle,
  BrainCircuit,
  GraduationCap,
  Layers,
  Award,
  Layers3,
  Bot,
  BookOpen,
  ArrowRightLeft,
  Edit3,
  GripVertical,
  ShieldCheck,
  Gamepad2,
  Printer
} from 'lucide-react';

const STUDY_TIPS = [
  'Mẹo: Đọc kỹ từ khóa phủ định như "không phải", "ngoại trừ" trong đề thi!',
  'Phương pháp 40-40-20 giúp cân bằng giữa lấy chắc điểm cơ bản và bứt phá điểm 9-10.',
  'Làm trắc nghiệm: Hãy áp dụng phương pháp loại trừ 2 phương án sai rõ rệt trước.',
  'Ôn tập theo cấp độ giúp bạn phát hiện chính xác lỗ hổng kiến thức để bù đắp kịp thời!',
  'Bạn có thể chọn kết hợp nhiều bài học để tạo đề kiểm tra tổng hợp kiến thức cả chương!',
];

export default function App() {
  const [step, setStep] = useState<'setup' | 'quiz' | 'result' | 'print'>('setup');

  // Education level state ('tieu_hoc' | 'thcs')
  const [educationLevel, setEducationLevel] = useState<EducationLevel>('thcs');

  // Grade filter state (3 | 4 | 5 | 6 | 7 | 8 | 9)
  const [currentGradeFilter, setCurrentGradeFilter] = useState<3 | 4 | 5 | 6 | 7 | 8 | 9>(8);

  // Multi-selection lessons state
  const [selectedLessons, setSelectedLessons] = useState<LessonTopic[]>(() => {
    const defaultGrade8Lessons = CURRICULUM_LESSONS.filter((l) => l.gradeNumber === 8);
    return defaultGrade8Lessons.slice(0, 1);
  });

  // Custom lesson mode
  const [isCustomMode, setIsCustomMode] = useState<boolean>(false);
  const [customLessonTitle, setCustomLessonTitle] = useState<string>('');
  const [customSubject, setCustomSubject] = useState<string>('');
  const [customGrade, setCustomGrade] = useState<string>('');
  const [customNotes, setCustomNotes] = useState<string>('');

  // Quiz settings
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [difficulty, setDifficulty] = useState<DifficultyLevel>('tong_hop');
  const [quizMode, setQuizMode] = useState<QuizMode>('exam');

  // Question generation source: AI vs Offline + Personal API Key
  const [sourcePreference, setSourcePreference] = useState<QuestionSourcePreference>('ai');
  const [customApiKey, setCustomApiKey] = useState<string>('');

  // Loading & generation state
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [loadingTipIndex, setLoadingTipIndex] = useState<number>(0);

  // Active session and history
  const [currentSession, setCurrentSession] = useState<QuizSession | null>(null);
  const [history, setHistory] = useState<QuizSession[]>([]);
  const [isHistoryOpen, setIsHistoryOpen] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Student Profile state
  const [studentProfile, setStudentProfile] = useState<StudentProfile>({
    fullName: 'Bạn Nhỏ Thông Thái',
    grade: 'Khối 8',
    className: '8A1',
    schoolName: 'THCS',
    avatar: 'robot-ai',
  });
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);
  const [isEssayModalOpen, setIsEssayModalOpen] = useState<boolean>(false);
  const [essayModalGrade, setEssayModalGrade] = useState<number>(9);
  const [midtermBannerGrade, setMidtermBannerGrade] = useState<5 | 8 | 9>(5);
  const [isGrade5AuditModalOpen, setIsGrade5AuditModalOpen] = useState<boolean>(false);
  const [grade5AuditInitialTab, setGrade5AuditInitialTab] = useState<'audit' | 'game'>('audit');
  const [lastUpdatedProfileMsg, setLastUpdatedProfileMsg] = useState<string>('');

  // Track previous step before entering print view
  const [stepBeforePrint, setStepBeforePrint] = useState<'setup' | 'result'>('setup');
  // Pending session restore across browser reloads
  const [pendingResumeSession, setPendingResumeSession] = useState<QuizSession | null>(null);

  // Mistake Notebook state
  const [mistakes, setMistakes] = useState<WrongQuestionRecord[]>([]);
  const [isMistakeModalOpen, setIsMistakeModalOpen] = useState<boolean>(false);

  // Scorebook & Leaderboard state
  const [scores, setScores] = useState<StudentScoreRecord[]>(() => {
    try {
      const saved = localStorage.getItem('ontap_student_scorebook');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {}
    return INITIAL_SCORE_RECORDS;
  });
  const [isScorebookModalOpen, setIsScorebookModalOpen] = useState<boolean>(false);
  const [activeCertificates, setActiveCertificates] = useState<CertificateData[]>([]);
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState<boolean>(false);

  // Admin Studio state (Chỉ dành riêng cho saohom2002@gmail.com)
  const [adminSession, setAdminSession] = useState<AdminSession | null>(() => getStoredAdminSession());
  const [isAdminAuthModalOpen, setIsAdminAuthModalOpen] = useState<boolean>(false);
  const [isAdminStudioModalOpen, setIsAdminStudioModalOpen] = useState<boolean>(false);
  const [customExams, setCustomExams] = useState<CustomExam[]>(() => {
    try {
      const raw = localStorage.getItem('ontap_admin_custom_exams');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {}
    return DEFAULT_CUSTOM_EXAMS;
  });

  // Load history, student profile, custom API key, sound preference & mistakes from localStorage
  useEffect(() => {
    try {
      const savedMistakes = localStorage.getItem('ontap_wrong_questions');
      if (savedMistakes) {
        const parsed = JSON.parse(savedMistakes);
        if (Array.isArray(parsed)) {
          setMistakes(parsed);
        }
      }
      const savedProfile = localStorage.getItem('ontap_student_profile');
      if (savedProfile) {
        const parsed = JSON.parse(savedProfile);
        if (parsed && typeof parsed === 'object' && parsed.fullName) {
          setStudentProfile(parsed);
          // Sync grade filter & education level
          const gNum = parseInt(String(parsed.grade).replace(/\D/g, ''), 10);
          if ([3, 4, 5, 6, 7, 8, 9].includes(gNum)) {
            const validGrade = gNum as 3 | 4 | 5 | 6 | 7 | 8 | 9;
            setCurrentGradeFilter(validGrade);
            setEducationLevel([3, 4, 5].includes(validGrade) ? 'tieu_hoc' : 'thcs');
            const inGrade = CURRICULUM_LESSONS.filter((l) => l.gradeNumber === validGrade);
            if (inGrade.length > 0) {
              setSelectedLessons([inGrade[0]]);
            }
          }
        }
      }

      const savedApiKey = localStorage.getItem('ontap_gemini_api_key');
      if (savedApiKey) {
        setCustomApiKey(savedApiKey);
      }

      const savedSource = localStorage.getItem('ontap_source_preference');
      if (savedSource === 'offline' || savedSource === 'ai') {
        setSourcePreference(savedSource);
      }

      const savedHist = localStorage.getItem('ontap_quiz_history');
      if (savedHist) {
        const parsed = JSON.parse(savedHist);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setHistory(parsed);
        } else {
          initDemoData();
        }
      } else {
        initDemoData();
      }

      const savedSound = localStorage.getItem('ontap_sound_enabled');
      if (savedSound !== null) {
        const val = savedSound === 'true';
        setSoundEnabled(val);
        sound.enabled = val;
      }

      // Check for active in-progress quiz session across reloads
      const savedActive = localStorage.getItem('ontap_active_session');
      if (savedActive) {
        try {
          const parsedActive: QuizSession = JSON.parse(savedActive);
          if (
            parsedActive &&
            parsedActive.status === 'in_progress' &&
            Array.isArray(parsedActive.questions) &&
            parsedActive.questions.length > 0
          ) {
            setPendingResumeSession(parsedActive);
          }
        } catch {}
      }
    } catch {
      initDemoData();
    }

    // Đồng bộ điểm ban đầu lên Firebase nếu trên đám mây chưa có
    syncBatchScoresToFirebase(INITIAL_SCORE_RECORDS);

    // Lắng nghe điểm số thời gian thực từ Firebase Realtime Database
    const unsubscribeScores = subscribeToScores((remoteScores) => {
      if (remoteScores && remoteScores.length > 0) {
        setScores(remoteScores);
        try {
          localStorage.setItem('ontap_student_scorebook', JSON.stringify(remoteScores));
        } catch {}
      }
    });

    // Đồng bộ đề thi Admin mẫu ban đầu lên Firebase nếu trên đám mây chưa có
    syncInitialCustomExamsToFirebase();

    // Lắng nghe đề thi và đề ôn tập thời gian thực từ Firebase Realtime Database
    const unsubscribeExams = subscribeToCustomExams((remoteExams) => {
      if (remoteExams && remoteExams.length > 0) {
        setCustomExams(remoteExams);
      }
    });

    return () => {
      unsubscribeScores();
      unsubscribeExams();
    };
  }, []);

  // Auto-save active quiz session to survive accidental browser reloads
  useEffect(() => {
    if (step === 'quiz' && currentSession && currentSession.status === 'in_progress') {
      try {
        localStorage.setItem('ontap_active_session', JSON.stringify(currentSession));
      } catch {}
    }
  }, [step, currentSession]);

  // Multi-lesson toggle
  const handleToggleLesson = (lesson: LessonTopic) => {
    if (lesson.gradeNumber === 5 || lesson.gradeNumber === 8 || lesson.gradeNumber === 9) {
      setMidtermBannerGrade(lesson.gradeNumber);
    }
    setSelectedLessons((prev) => {
      const exists = prev.some((l) => l.id === lesson.id);
      if (exists) {
        return prev.filter((l) => l.id !== lesson.id);
      } else {
        return [...prev, lesson];
      }
    });
  };

  // Launch Midterm Exam directly (Grade 5, Grade 8 or Grade 9) with optional game mode filtering
  const handleLaunchMidtermExam = (
    gradeNum: 5 | 8 | 9 = 5,
    gameTypeFilter?: 'all' | 'multiple_choice' | 'true_false' | 'fill_blank' | 'matching'
  ) => {
    sound.playClick();
    setCurrentGradeFilter(gradeNum);
    setMidtermBannerGrade(gradeNum);
    setEducationLevel(gradeNum === 5 ? 'tieu_hoc' : 'thcs');

    if (gradeNum === 5 && gameTypeFilter && gameTypeFilter !== 'all') {
      const allQ = QUESTIONS_GRADE_5['tin5-on-tap-giua-ki-1'] || [];
      const isTrueFalse = (q: Question) => {
        if (q.subType === 'true_false') return true;
        const lower = q.question.toLowerCase();
        return lower.includes('đúng hay sai') || lower.includes('đúng/sai');
      };

      let filtered: Question[] = [];
      let gameTitle = '';
      if (gameTypeFilter === 'multiple_choice') {
        filtered = allQ.filter((q) => (q.type === 'multiple_choice' || !q.type) && !isTrueFalse(q));
        gameTitle = '⚡ Trò chơi: Trắc nghiệm nhanh - Tin học 5 (Bài 1, 2, 3, 4)';
      } else if (gameTypeFilter === 'true_false') {
        filtered = allQ.filter((q) => isTrueFalse(q));
        gameTitle = '🎯 Trò chơi: Đúng hay Sai? - Tin học 5 (Bài 1, 2, 3, 4)';
      } else if (gameTypeFilter === 'fill_blank') {
        filtered = allQ.filter((q) => q.type === 'fill_blank');
        gameTitle = '✍️ Trò chơi: Ô chữ Điền khuyết - Tin học 5 (Bài 1, 2, 3, 4)';
      } else if (gameTypeFilter === 'matching') {
        filtered = allQ.filter((q) => q.type === 'matching');
        gameTitle = '🔗 Trò chơi: Nối cột thông thái - Tin học 5 (Bài 1, 2, 3, 4)';
      }

      if (filtered.length > 0) {
        const newSession: QuizSession = {
          id: `sess-game-${Date.now()}`,
          lessonId: 'tin5-on-tap-giua-ki-1',
          lessonIds: ['tin5-on-tap-giua-ki-1'],
          lessonTitle: gameTitle,
          selectedLessonTitles: [gameTitle],
          subject: 'Trò chơi học tập Tin học 5',
          grade: 'Khối 5',
          gradeNumber: 5,
          difficultyMode: 'tong_hop',
          totalQuestions: filtered.length,
          questions: filtered,
          userAnswers: {},
          flaggedQuestions: [],
          startTime: Date.now(),
          score: 0,
          percentage: 0,
          status: 'in_progress',
          mode: 'practice',
          timeSpentSeconds: 0,
          source: 'offline_bank',
        };
        setCurrentSession(newSession);
        setStep('quiz');
        setIsGrade5AuditModalOpen(false);
        return;
      }
    }

    const targetId =
      gradeNum === 5
        ? 'tin5-on-tap-giua-ki-1'
        : gradeNum === 9
        ? 'tin9-on-tap-giua-ki-1'
        : 'tin8-on-tap-giua-ki-1';
    const midtermTopic = CURRICULUM_LESSONS.find((l) => l.id === targetId);
    if (midtermTopic) {
      setSelectedLessons([midtermTopic]);
    }
    const el = document.getElementById('lesson-selector-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Export / Print Grade 5 Exam with all 42 questions
  const handleExportGrade5Exam = () => {
    sound.playClick();
    const allQ = QUESTIONS_GRADE_5['tin5-on-tap-giua-ki-1'] || [];
    const newSession: QuizSession = {
      id: `sess-print-${Date.now()}`,
      lessonId: 'tin5-on-tap-giua-ki-1',
      lessonIds: ['tin5-on-tap-giua-ki-1'],
      lessonTitle: 'ĐỀ ÔN TẬP KIỂM TRA GIỮA KÌ 1 TIN HỌC 5 (BÀI 1, 2, 3, 4 - KNTT)',
      selectedLessonTitles: ['⭐ Ôn tập Giữa kì 1 Tin học 5 (Bài 1, 2, 3, 4 - KNTT)'],
      subject: 'Tin học 5',
      grade: 'Khối 5',
      gradeNumber: 5,
      difficultyMode: 'tong_hop',
      totalQuestions: allQ.length,
      questions: allQ,
      userAnswers: {},
      flaggedQuestions: [],
      startTime: Date.now(),
      score: 10,
      percentage: 100,
      status: 'completed',
      mode: 'exam',
      timeSpentSeconds: 0,
      source: 'offline_bank',
    };
    setStepBeforePrint('setup');
    setCurrentSession(newSession);
    setStep('print');
    setIsGrade5AuditModalOpen(false);
  };

  // ==========================================================================
  // ADMIN STUDIO HANDLERS (DÀNH RIÊNG CHO saohom2002@gmail.com)
  // ==========================================================================
  const handleOpenAdminStudio = () => {
    sound.playClick();
    if (adminSession && isAuthorizedAdmin(adminSession.email)) {
      setIsAdminStudioModalOpen(true);
    } else {
      setIsAdminAuthModalOpen(true);
    }
  };

  const handleLaunchCustomExam = (exam: CustomExam, mode: 'exam' | 'practice' = 'exam') => {
    sound.playClick();
    if (!exam.questions || exam.questions.length === 0) {
      alert('Đề thi này hiện chưa có câu hỏi nào. Vui lòng vào Studio để thêm câu hỏi!');
      return;
    }

    const newSession: QuizSession = {
      id: `sess-custom-${exam.id}-${Date.now()}`,
      lessonId: exam.id,
      lessonIds: [exam.id],
      lessonTitle: exam.title,
      selectedLessonTitles: [exam.title],
      subject: exam.subject || 'Tin học THCS',
      grade: exam.grade || `Khối ${exam.gradeNumber}`,
      gradeNumber: exam.gradeNumber,
      difficultyMode: 'tong_hop',
      totalQuestions: exam.questions.length,
      questions: exam.questions,
      userAnswers: {},
      flaggedQuestions: [],
      startTime: Date.now(),
      score: 0,
      percentage: 0,
      status: 'in_progress',
      mode: mode || exam.category || 'exam',
      timeSpentSeconds: 0,
      source: 'offline_bank',
    };

    setCurrentGradeFilter(exam.gradeNumber);
    setEducationLevel([3, 4, 5].includes(exam.gradeNumber) ? 'tieu_hoc' : 'thcs');
    setCurrentSession(newSession);
    setStep('quiz');
    setIsAdminStudioModalOpen(false);
  };

  const handlePrintCustomExam = (exam: CustomExam) => {
    sound.playClick();
    if (!exam.questions || exam.questions.length === 0) {
      alert('Đề thi này hiện chưa có câu hỏi nào để in!');
      return;
    }

    const newSession: QuizSession = {
      id: `sess-print-custom-${exam.id}-${Date.now()}`,
      lessonId: exam.id,
      lessonIds: [exam.id],
      lessonTitle: exam.title,
      selectedLessonTitles: [exam.title],
      subject: exam.subject || 'Tin học THCS',
      grade: exam.grade || `Khối ${exam.gradeNumber}`,
      gradeNumber: exam.gradeNumber,
      difficultyMode: 'tong_hop',
      totalQuestions: exam.questions.length,
      questions: exam.questions,
      userAnswers: {},
      flaggedQuestions: [],
      startTime: Date.now(),
      score: 10,
      percentage: 100,
      status: 'completed',
      mode: 'exam',
      timeSpentSeconds: 0,
      source: 'offline_bank',
    };

    setStepBeforePrint('setup');
    setCurrentSession(newSession);
    setStep('print');
    setIsAdminStudioModalOpen(false);
  };

  // Select all lessons in current grade
  const handleSelectAllInGrade = (gradeNum: 3 | 4 | 5 | 6 | 7 | 8 | 9) => {
    const inGrade = CURRICULUM_LESSONS.filter((l) => l.gradeNumber === gradeNum);
    setSelectedLessons((prev) => {
      const map = new Map<string, LessonTopic>();
      prev.forEach((l) => map.set(l.id, l));
      inGrade.forEach((l) => map.set(l.id, l));
      return Array.from(map.values());
    });
  };

  // Deselect all lessons
  const handleDeselectAll = () => {
    setSelectedLessons([]);
  };

  // Switch Grade Filter tab
  const handleGradeFilterChange = (newGrade: 3 | 4 | 5 | 6 | 7 | 8 | 9) => {
    setCurrentGradeFilter(newGrade);
    if ([3, 4, 5].includes(newGrade)) {
      setEducationLevel('tieu_hoc');
    } else {
      setEducationLevel('thcs');
    }
    if (newGrade === 5 || newGrade === 8 || newGrade === 9) {
      setMidtermBannerGrade(newGrade);
    }
    // If no lessons selected in this new grade, preselect the first lesson
    const inGrade = CURRICULUM_LESSONS.filter((l) => l.gradeNumber === newGrade);
    const hasSome = selectedLessons.some((l) => l.gradeNumber === newGrade);
    if (!hasSome && inGrade.length > 0) {
      setSelectedLessons([inGrade[0]]);
    }
  };

  // Save student profile
  const handleSaveProfile = (newProfile: StudentProfile) => {
    setStudentProfile(newProfile);
    setLastUpdatedProfileMsg(
      `Đã cập nhật hồ sơ: ${newProfile.fullName} - ${newProfile.grade} (Lớp ${newProfile.className})`
    );
    setTimeout(() => {
      setLastUpdatedProfileMsg('');
    }, 4000);

    // Auto-sync grade tab if valid
    const gNum = parseInt(String(newProfile.grade).replace(/\D/g, ''), 10);
    if ([3, 4, 5, 6, 7, 8, 9].includes(gNum)) {
      const validGrade = gNum as 3 | 4 | 5 | 6 | 7 | 8 | 9;
      setCurrentGradeFilter(validGrade);
      setEducationLevel([3, 4, 5].includes(validGrade) ? 'tieu_hoc' : 'thcs');
      const inGrade = CURRICULUM_LESSONS.filter((l) => l.gradeNumber === validGrade);
      if (inGrade.length > 0) {
        setSelectedLessons([inGrade[0]]);
      }
    }

    try {
      localStorage.setItem('ontap_student_profile', JSON.stringify(newProfile));
    } catch {}
  };

  // Save personal API key
  const handleSaveApiKey = (key: string) => {
    setCustomApiKey(key);
    try {
      if (key) {
        localStorage.setItem('ontap_gemini_api_key', key);
      } else {
        localStorage.removeItem('ontap_gemini_api_key');
      }
    } catch {}
  };

  // Save source preference
  const handleSelectSourcePreference = (val: QuestionSourcePreference) => {
    setSourcePreference(val);
    try {
      localStorage.setItem('ontap_source_preference', val);
    } catch {}
  };

  // Demo data generator
  const initDemoData = () => {
    const demoItems: QuizSession[] = [
      {
        id: 'demo-1',
        lessonTitle: 'Bài 1: Lược sử công cụ tính toán',
        subject: 'Chủ đề 1',
        grade: 'Khối 8',
        gradeNumber: 8,
        difficultyMode: 'tong_hop',
        totalQuestions: 10,
        questions: generateFallbackQuestions('Bài 1: Lược sử công cụ tính toán', 10, 'tong_hop', 8),
        userAnswers: { 0: 0, 1: 1, 2: 1, 3: 0, 4: 1, 5: 0, 6: 1, 7: 0, 8: 1 },
        flaggedQuestions: [2],
        startTime: Date.now() - 86400000 * 3,
        endTime: Date.now() - 86400000 * 3 + 480000,
        score: 9.0,
        percentage: 90,
        status: 'completed',
        mode: 'exam',
        timeSpentSeconds: 480,
        source: 'offline_bank',
      },
      {
        id: 'demo-2',
        lessonTitle: 'Bài 5: Sử dụng bảng tính giải quyết bài toán thực tế',
        subject: 'Chủ đề 4',
        grade: 'Khối 8',
        gradeNumber: 8,
        difficultyMode: 'trung_binh',
        totalQuestions: 10,
        questions: generateFallbackQuestions('Bài 5: Sử dụng bảng tính giải quyết bài toán thực tế', 10, 'trung_binh', 8),
        userAnswers: { 0: 3, 1: 1, 2: 1, 3: 2, 4: 1, 5: 1, 6: 0, 7: 1 },
        flaggedQuestions: [],
        startTime: Date.now() - 86400000 * 2,
        endTime: Date.now() - 86400000 * 2 + 520000,
        score: 8.0,
        percentage: 80,
        status: 'completed',
        mode: 'exam',
        timeSpentSeconds: 520,
        source: 'gemini_ai',
      },
      {
        id: 'demo-3',
        lessonTitle: 'Bài 1: Thông tin và dữ liệu',
        subject: 'Chủ đề 1',
        grade: 'Khối 6',
        gradeNumber: 6,
        difficultyMode: 'de',
        totalQuestions: 5,
        questions: generateFallbackQuestions('tin6-bai-1', 5, 'de', 6),
        userAnswers: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
        flaggedQuestions: [],
        startTime: Date.now() - 86400000 * 1.5,
        endTime: Date.now() - 86400000 * 1.5 + 240000,
        score: 10.0,
        percentage: 100,
        status: 'completed',
        mode: 'practice',
        timeSpentSeconds: 240,
        source: 'offline_bank',
      },
    ];
    setHistory(demoItems);
    try {
      localStorage.setItem('ontap_quiz_history', JSON.stringify(demoItems));
    } catch {}
  };

  // Save history to localStorage
  const saveSessionToHistory = (session: QuizSession) => {
    try {
      const updated = [session, ...history.filter((h) => h.id !== session.id)].slice(0, 50);
      setHistory(updated);
      localStorage.setItem('ontap_quiz_history', JSON.stringify(updated));
    } catch {}
  };

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    sound.enabled = next;
    try {
      localStorage.setItem('ontap_sound_enabled', String(next));
    } catch {}
  };

  // Rotate tips during loading
  useEffect(() => {
    if (!isGenerating) return;
    const interval = setInterval(() => {
      setLoadingTipIndex((prev) => (prev + 1) % STUDY_TIPS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [isGenerating]);

  // Main action: Generate Quiz Questions (supports regenerating from existing session)
  const handleStartGenerateQuiz = async (
    overrideSession?: QuizSession | React.MouseEvent | any
  ) => {
    sound.playClick();

    const validOverride: QuizSession | undefined =
      overrideSession &&
      typeof overrideSession === 'object' &&
      'id' in overrideSession &&
      'lessonTitle' in overrideSession
        ? (overrideSession as QuizSession)
        : undefined;

    let title = '';
    let subject = '';
    let grade = `Khối ${currentGradeFilter}`;
    let gradeNum: 3 | 4 | 5 | 6 | 7 | 8 | 9 = currentGradeFilter;
    let targetKeys: string[] = [];
    let targetLessonTitles: string[] = [];
    let reqCount = questionCount;
    let reqDifficulty = difficulty;
    let reqMode = quizMode;

    if (validOverride) {
      title = validOverride.lessonTitle;
      subject = validOverride.subject || 'Ôn tập';
      grade = validOverride.grade || `Khối ${validOverride.gradeNumber || currentGradeFilter}`;
      const gN = validOverride.gradeNumber;
      if (gN && [3, 4, 5, 6, 7, 8, 9].includes(gN)) {
        gradeNum = gN as 3 | 4 | 5 | 6 | 7 | 8 | 9;
      }
      targetKeys =
        validOverride.lessonIds && validOverride.lessonIds.length > 0
          ? validOverride.lessonIds
          : [validOverride.lessonId || title];
      targetLessonTitles =
        validOverride.selectedLessonTitles && validOverride.selectedLessonTitles.length > 0
          ? validOverride.selectedLessonTitles
          : [title];
      reqCount = validOverride.totalQuestions || questionCount;
      reqDifficulty = validOverride.difficultyMode || difficulty;
      reqMode = validOverride.mode || quizMode;
    } else if (isCustomMode) {
      if (!customLessonTitle.trim()) {
        alert('Vui lòng nhập tên bài học hoặc chủ đề muốn ôn tập!');
        return;
      }
      title = customLessonTitle.trim();
      subject = customSubject.trim() || 'Tự chọn';
      grade = customGrade.trim() || `Khối ${currentGradeFilter}`;
      targetKeys = [title];
      targetLessonTitles = [title];
    } else {
      if (!selectedLessons || selectedLessons.length === 0) {
        alert('Vui lòng chọn ít nhất một bài học để tạo đề!');
        return;
      }

      if (selectedLessons.length === 1) {
        title = selectedLessons[0].title;
        subject = selectedLessons[0].subject;
      } else {
        const shortNames = selectedLessons.map((l) => l.title.split(':')[0]).join(', ');
        title = `Đề tổng hợp ${selectedLessons.length} bài học Khối ${currentGradeFilter} (${shortNames})`;
        subject = `Tổng hợp ${selectedLessons.length} bài học`;
      }

      targetKeys = selectedLessons.map((l) => l.id);
      targetLessonTitles = selectedLessons.map((l) => l.title);
    }

    setIsGenerating(true);

    try {
      const response = await fetch('/api/generate-quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lessonIds: isCustomMode && !overrideSession ? [] : targetKeys,
          lessons: isCustomMode && !overrideSession ? [title] : targetLessonTitles,
          lesson: title,
          subject,
          grade,
          gradeNumber: gradeNum,
          count: reqCount,
          difficulty: reqDifficulty,
          customContent: isCustomMode && !overrideSession ? customNotes : '',
          apiKey: customApiKey,
          sourcePreference,
        }),
      });

      const data = await response.json();
      let questions: Question[] = [];
      let finalSource: 'gemini_ai' | 'offline_bank' | 'offline_fallback' = 'offline_bank';

      if (data && data.success && Array.isArray(data.questions) && data.questions.length > 0) {
        finalSource = data.source || 'gemini_ai';
        const seen = new Set<string>();
        const unique = data.questions.filter((q: Question) => {
          const k = q.question.trim().toLowerCase();
          if (seen.has(k)) return false;
          seen.add(k);
          return true;
        });

        if (unique.length >= reqCount) {
          questions = unique.slice(0, reqCount);
        } else {
          const extra = generateFallbackQuestions(targetKeys, reqCount, reqDifficulty, gradeNum);
          for (const ex of extra) {
            if (unique.length >= reqCount) break;
            const k = ex.question.trim().toLowerCase();
            if (!seen.has(k)) {
              seen.add(k);
              unique.push(ex);
            }
          }
          questions = unique.slice(0, reqCount);
        }
      } else {
        questions = generateFallbackQuestions(targetKeys, reqCount, reqDifficulty, gradeNum);
        finalSource = 'offline_fallback';
      }

      // Initialize session
      const newSession: QuizSession = {
        id: `sess-${Date.now()}`,
        lessonId: targetKeys[0],
        lessonIds: targetKeys,
        lessonTitle: title,
        selectedLessonTitles: targetLessonTitles,
        subject,
        grade,
        gradeNumber: gradeNum,
        difficultyMode: reqDifficulty,
        totalQuestions: questions.length,
        questions,
        userAnswers: {},
        flaggedQuestions: [],
        startTime: Date.now(),
        score: 0,
        percentage: 0,
        status: 'in_progress',
        mode: reqMode,
        timeSpentSeconds: 0,
        source: finalSource,
      };

      setCurrentSession(newSession);
      setStep('quiz');
    } catch (err) {
      console.warn('API error, using local fallback:', err);
      const fallback = generateFallbackQuestions(targetKeys, reqCount, reqDifficulty, gradeNum);
      const newSession: QuizSession = {
        id: `sess-${Date.now()}`,
        lessonId: targetKeys[0],
        lessonIds: targetKeys,
        lessonTitle: title,
        selectedLessonTitles: targetLessonTitles,
        subject,
        grade,
        gradeNumber: gradeNum,
        difficultyMode: reqDifficulty,
        totalQuestions: fallback.length,
        questions: fallback,
        userAnswers: {},
        flaggedQuestions: [],
        startTime: Date.now(),
        score: 0,
        percentage: 0,
        status: 'in_progress',
        mode: reqMode,
        timeSpentSeconds: 0,
        source: 'offline_fallback',
      };
      setCurrentSession(newSession);
      setStep('quiz');
    } finally {
      setIsGenerating(false);
    }
  };

  // Answer question handler
  const handleAnswerQuestion = (questionIndex: number, answer: any) => {
    if (!currentSession) return;
    setCurrentSession((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        userAnswers: {
          ...prev.userAnswers,
          [questionIndex]: answer,
        },
      };
    });
  };

  // Flag toggle handler
  const handleToggleFlag = (questionIndex: number) => {
    if (!currentSession) return;
    setCurrentSession((prev) => {
      if (!prev) return null;
      const flags = [...prev.flaggedQuestions];
      const foundIdx = flags.indexOf(questionIndex);
      if (foundIdx > -1) {
        flags.splice(foundIdx, 1);
      } else {
        flags.push(questionIndex);
      }
      return {
        ...prev,
        flaggedQuestions: flags,
      };
    });
  };

  // Submit Quiz handler
  const handleSubmitQuiz = () => {
    if (!currentSession) return;

    let totalScorePoints = 0;
    currentSession.questions.forEach((q, idx) => {
      totalScorePoints += getQuestionAnswerScore(q, currentSession.userAnswers[idx]);
    });

    const total = currentSession.totalQuestions;
    const score = Number(((totalScorePoints / total) * 10).toFixed(1));
    const percentage = Math.round((totalScorePoints / total) * 100);
    const duration = Math.max(1, Math.round((Date.now() - currentSession.startTime) / 1000));

    const completedSession: QuizSession = {
      ...currentSession,
      endTime: Date.now(),
      score,
      percentage,
      status: 'completed',
      timeSpentSeconds: duration,
    };

    // Update Mistake Review Book
    const newMistakes: WrongQuestionRecord[] = [];
    const correctlyAnsweredIds = new Set<string>();

    currentSession.questions.forEach((q, idx) => {
      const isRight = isQuestionAnswerCorrect(q, currentSession.userAnswers[idx]);
      if (!isRight) {
        newMistakes.push({
          id: `mistake-${q.id}-${Date.now()}`,
          question: q,
          userAnswer: currentSession.userAnswers[idx],
          lessonTitle: currentSession.lessonTitle,
          gradeNumber: currentSession.gradeNumber,
          addedAt: Date.now(),
        });
      } else {
        correctlyAnsweredIds.add(q.id);
        correctlyAnsweredIds.add(q.question.trim().toLowerCase());
      }
    });

    setMistakes((prev) => {
      // Remove any previously wrong question that was answered correctly now
      const filtered = prev.filter(
        (m) =>
          !correctlyAnsweredIds.has(m.question.id) &&
          !correctlyAnsweredIds.has(m.question.question.trim().toLowerCase())
      );
      // Append new mistakes without duplicating question text
      const seenTexts = new Set(filtered.map((m) => m.question.question.trim().toLowerCase()));
      const toAdd = newMistakes.filter(
        (m) => !seenTexts.has(m.question.question.trim().toLowerCase())
      );
      const combined = [...toAdd, ...filtered].slice(0, 100);
      try {
        localStorage.setItem('ontap_wrong_questions', JSON.stringify(combined));
      } catch {}
      return combined;
    });

    // Auto-record to Sổ Điểm & Bảng Vàng
    const scoreRecord: StudentScoreRecord = {
      id: `score-${Date.now()}`,
      studentName: studentProfile?.fullName || 'Bạn Nhỏ Thông Thái',
      className: studentProfile?.className || `${currentSession.gradeNumber || 8}A1`,
      schoolName: studentProfile?.schoolName || 'Trường THCS',
      gradeNumber: currentSession.gradeNumber || currentGradeFilter,
      grade: currentSession.grade || `Khối ${currentSession.gradeNumber || currentGradeFilter}`,
      examBatch: DEFAULT_EXAM_BATCHES[0],
      lessonTitle: currentSession.lessonTitle,
      score,
      percentage,
      totalQuestions: currentSession.totalQuestions,
      correctAnswersCount: Math.round((percentage / 100) * currentSession.totalQuestions),
      timeSpentSeconds: duration,
      date: Date.now(),
      rankTitle:
        score >= 9.5
          ? 'Thủ khoa Xuất sắc'
          : score >= 9.0
          ? 'Xuất sắc'
          : score >= 8.0
          ? 'Giỏi'
          : score >= 6.5
          ? 'Khá'
          : 'Đạt yêu cầu',
      avatar: studentProfile?.avatar || 'robot-ai',
    };

    // Tự động lưu lên Firebase và gửi đến Google Sheets Webhook (nếu có)
    saveScoreToFirebase(scoreRecord);
    sendScoreToGoogleSheetWebhook(scoreRecord);

    setScores((prev) => {
      const updated = [scoreRecord, ...prev].slice(0, 100);
      try {
        localStorage.setItem('ontap_student_scorebook', JSON.stringify(updated));
      } catch {}
      return updated;
    });

    setCurrentSession(completedSession);
    saveSessionToHistory(completedSession);
    try {
      localStorage.removeItem('ontap_active_session');
    } catch {}
    setStep('result');
  };

  // Exit Quiz handler
  const handleExitQuiz = () => {
    sound.playClick();
    setCurrentSession(null);
    setStep('setup');
    try {
      localStorage.removeItem('ontap_active_session');
    } catch {}
  };

  // Mistake Notebook operations
  const handleRemoveMistake = (questionId: string) => {
    sound.playClick();
    setMistakes((prev) => {
      const updated = prev.filter((m) => m.id !== questionId && m.question.id !== questionId);
      try {
        localStorage.setItem('ontap_wrong_questions', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const handleClearAllMistakes = () => {
    sound.playClick();
    setMistakes([]);
    try {
      localStorage.removeItem('ontap_wrong_questions');
    } catch {}
  };

  const handlePracticeMistakes = (practiceQuestions: Question[]) => {
    if (!practiceQuestions || practiceQuestions.length === 0) return;
    sound.playClick();
    setIsMistakeModalOpen(false);

    const newSession: QuizSession = {
      id: `sess-mistakes-${Date.now()}`,
      lessonTitle: `Luyện tập Sổ tay câu sai (${practiceQuestions.length} câu)`,
      selectedLessonTitles: ['Sổ tay câu sai & lỗ hổng kiến thức'],
      subject: 'Ôn tập câu sai',
      grade: `Khối ${currentGradeFilter}`,
      gradeNumber: currentGradeFilter,
      difficultyMode: 'tong_hop',
      totalQuestions: practiceQuestions.length,
      questions: practiceQuestions,
      userAnswers: {},
      flaggedQuestions: [],
      startTime: Date.now(),
      score: 0,
      percentage: 0,
      status: 'in_progress',
      mode: 'practice', // Practice mode to see explanations right away
      timeSpentSeconds: 0,
      source: 'offline_bank',
    };

    setCurrentSession(newSession);
    setStep('quiz');
  };

  // Scorebook & Certificate operations
  const handleAddScore = (newScore: StudentScoreRecord) => {
    saveScoreToFirebase(newScore);
    sendScoreToGoogleSheetWebhook(newScore);
    setScores((prev) => {
      const updated = [newScore, ...prev];
      try {
        localStorage.setItem('ontap_student_scorebook', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const handleDeleteScore = (scoreId: string) => {
    deleteScoreFromFirebase(scoreId);
    setScores((prev) => {
      const updated = prev.filter((s) => s.id !== scoreId);
      try {
        localStorage.setItem('ontap_student_scorebook', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const handleResetDemoScores = () => {
    sound.playClick();
    setScores(INITIAL_SCORE_RECORDS);
    try {
      localStorage.setItem('ontap_student_scorebook', JSON.stringify(INITIAL_SCORE_RECORDS));
    } catch {}
  };

  const handleOpenCertificate = (cert: CertificateData) => {
    setActiveCertificates([cert]);
    setIsCertificateModalOpen(true);
  };

  const handleOpenBatchCertificates = (certs: CertificateData[]) => {
    setActiveCertificates(certs);
    setIsCertificateModalOpen(true);
  };

  // Retake current quiz
  const handleRetakeQuiz = () => {
    if (!currentSession) return;
    const resetSession: QuizSession = {
      ...currentSession,
      id: `sess-${Date.now()}`,
      userAnswers: {},
      flaggedQuestions: [],
      startTime: Date.now(),
      score: 0,
      percentage: 0,
      status: 'in_progress',
      timeSpentSeconds: 0,
    };
    setCurrentSession(resetSession);
    setStep('quiz');
  };

  // Generate fresh questions for same topic
  const handleGenerateNewWithSameTopic = () => {
    if (!currentSession) return;
    handleStartGenerateQuiz(currentSession);
  };

  // Clear all history
  const handleClearHistory = () => {
    setHistory([]);
    try {
      localStorage.removeItem('ontap_quiz_history');
    } catch {}
  };

  // Action when student clicks a lesson from Dashboard
  const handleSelectLessonToPractice = (lessonTitle: string) => {
    const found = CURRICULUM_LESSONS.find(
      (l) =>
        l.title.toLowerCase().includes(lessonTitle.toLowerCase()) ||
        lessonTitle.toLowerCase().includes(l.title.toLowerCase())
    );
    if (found) {
      if (found.gradeNumber && ([3, 4, 5, 6, 7, 8, 9].includes(found.gradeNumber))) {
        setCurrentGradeFilter(found.gradeNumber as 3 | 4 | 5 | 6 | 7 | 8 | 9);
      }
      setSelectedLessons([found]);
      setIsCustomMode(false);
    } else {
      setCustomLessonTitle(lessonTitle);
      setIsCustomMode(true);
    }
    const el = document.getElementById('lesson-selector-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Thông tin tóm tắt cho nút cố định trên Header
  const headerSummaryInfo = useMemo(() => {
    const lessonText = isCustomMode
      ? customLessonTitle || 'Bài học tự nhập'
      : selectedLessons.length === 0
      ? 'Chưa chọn bài nào'
      : selectedLessons.length === 1
      ? `${selectedLessons[0].title} (Khối ${currentGradeFilter})`
      : `${selectedLessons.length} bài học Khối ${currentGradeFilter}`;

    const diffText =
      difficulty === 'de'
        ? 'Cấp độ Dễ'
        : difficulty === 'trung_binh'
        ? 'Cấp độ Trung bình'
        : difficulty === 'kho'
        ? 'Cấp độ Khó'
        : 'Tổng hợp 3 cấp độ';

    const sourceText = sourcePreference === 'ai' ? '🤖 AI Thông Minh' : '💾 Kho Offline';

    return {
      lesson: lessonText,
      count: questionCount,
      difficulty: diffText,
      source: sourceText,
    };
  }, [
    isCustomMode,
    customLessonTitle,
    selectedLessons,
    currentGradeFilter,
    difficulty,
    sourcePreference,
    questionCount,
  ]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-800">
      {/* Global Header với nút cố định Bắt đầu ôn tập thay thế */}
      <Header
        onOpenHistory={() => setIsHistoryOpen(true)}
        historyCount={history.length}
        onGoHome={() => setStep('setup')}
        isHome={step === 'setup'}
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
        studentProfile={studentProfile}
        onOpenProfileModal={() => setIsProfileModalOpen(true)}
        onOpenMistakes={() => setIsMistakeModalOpen(true)}
        mistakesCount={mistakes.length}
        onOpenScorebook={() => setIsScorebookModalOpen(true)}
        onOpenAdminStudio={handleOpenAdminStudio}
        isAdminLoggedIn={Boolean(adminSession && isAuthorizedAdmin(adminSession.email))}
        onStartGenerateQuiz={handleStartGenerateQuiz}
        isGenerating={isGenerating}
        canStartQuiz={isCustomMode || selectedLessons.length > 0}
        summaryInfo={headerSummaryInfo}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {step === 'setup' && (
          <div className="space-y-8 animate-in fade-in-50">
            {/* Resume pending in-progress quiz banner */}
            {pendingResumeSession && (
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 text-amber-950 shadow-md flex flex-wrap items-center justify-between gap-4 animate-in slide-in-from-top-2">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-bold shadow-md shadow-amber-500/30 shrink-0">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-md bg-amber-200 text-amber-900 font-bold text-[11px] uppercase">
                        Khôi phục bài thi
                      </span>
                      <h4 className="font-extrabold text-sm sm:text-base text-amber-950 line-clamp-1">
                        {pendingResumeSession.lessonTitle}
                      </h4>
                    </div>
                    <p className="text-xs text-amber-800 mt-0.5">
                      Bạn có một bài thi chưa hoàn thành (đã làm {Object.keys(pendingResumeSession.userAnswers).length}/{pendingResumeSession.totalQuestions} câu). Bạn có muốn tiếp tục làm bài không?
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => {
                      try {
                        localStorage.removeItem('ontap_active_session');
                      } catch {}
                      setPendingResumeSession(null);
                    }}
                    className="px-3.5 py-2 rounded-xl border border-amber-300 hover:bg-amber-100 text-amber-900 text-xs font-bold transition-colors cursor-pointer"
                  >
                    Bỏ qua
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      sound.playClick();
                      setCurrentSession(pendingResumeSession);
                      setPendingResumeSession(null);
                      setStep('quiz');
                    }}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-amber-600/30 transition-all cursor-pointer flex items-center gap-1.5 active:scale-95"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Tiếp tục làm bài</span>
                  </button>
                </div>
              </div>
            )}

            {/* Hero Banner */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-950 text-white p-6 sm:p-10 shadow-xl border border-indigo-700/40">
              <div className="relative z-10 max-w-3xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-indigo-200 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                  <span>Chương trình GDPT 2018 - Đầy đủ 2 Cấp: Tiểu học (Khối 3, 4, 5) & THCS (Khối 6, 7, 8, 9) (SGK Kết Nối Tri Thức)</span>
                </div>
                <div>
                  <h1 className="text-3xl sm:text-5xl font-black tracking-tight font-['Be_Vietnam_Pro','Plus_Jakarta_Sans',sans-serif] leading-tight bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                    GIA SƯ TIN HỌC TIỂU HỌC & THCS
                  </h1>
                  <div className="flex items-center gap-2 mt-1.5 text-cyan-300 text-sm sm:text-base font-bold">
                    <GraduationCap className="w-5 h-5 text-cyan-400" />
                    <span>Tác giả: GV: Ms. Trúc Tin Học</span>
                  </div>
                </div>
                <p className="text-indigo-200 text-xs sm:text-base leading-relaxed pt-1">
                  Trợ lý luyện thi & ôn tập trắc nghiệm thông minh cho học sinh <strong>Tiểu học (Lớp 3, 4, 5) & THCS (Lớp 6, 7, 8, 9)</strong>. Cho phép <strong>chọn nhiều bài học</strong> để tạo đề tổng hợp, kết hợp <strong>AI sinh đề không lặp lại</strong> hoặc <strong>kho câu hỏi offline</strong> tức thì!
                </p>

                {/* Feature highlight badges */}
                <div className="flex flex-wrap gap-2.5 pt-2 text-xs">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/10 border border-white/10 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    Đủ 2 Cấp: Tiểu học & THCS (Lớp 3 - 9)
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/10 border border-white/10 font-medium">
                    <Layers className="w-3.5 h-3.5 text-indigo-300" />
                    Chọn nhiều bài cùng lúc
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/10 border border-white/10 font-medium">
                    <BrainCircuit className="w-3.5 h-3.5 text-cyan-300" />
                    AI + API & Kho SGK Offline
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/10 border border-white/10 font-medium">
                    <Award className="w-3.5 h-3.5 text-amber-300" />
                    In đề thi & Lời giải chi tiết
                  </span>
                </div>
              </div>

              {/* Decorative background glow */}
              <div className="absolute right-0 top-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
              <div className="absolute right-12 bottom-0 translate-y-1/4 w-64 h-64 rounded-full bg-cyan-500/15 blur-2xl pointer-events-none" />
            </div>

            {/* MỤC: HỒ SƠ HỌC SINH (Nhấp vào thẻ để mở cửa sổ chỉnh sửa thông tin) */}
            <div id="student-profile-section" className="py-1">
              <StudentProfileDisplay
                profile={studentProfile}
                onOpenEdit={() => setIsProfileModalOpen(true)}
                lastUpdatedMsg={lastUpdatedProfileMsg}
              />
            </div>

            {/* SPECIAL BANNER: ÔN TẬP KIỂM TRA GIỮA KÌ 1 (TIN HỌC 5, TIN HỌC 8 & TIN HỌC 9) */}
            <div className="rounded-3xl border-2 border-indigo-500/40 bg-linear-to-r from-indigo-950 via-slate-900 to-purple-950 p-5 sm:p-6 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                {/* Header with grade tabs */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400 text-amber-950 font-black text-xs tracking-wider uppercase shadow-md shadow-amber-400/20">
                      <Award className="w-3.5 h-3.5 fill-amber-950" />
                      Đề cương Giữa kì 1 (Năm học 2026 – 2027)
                    </div>
                  </div>

                  {/* Switch between Tin học 5, Tin học 9 and Tin học 8 */}
                  <div className="inline-flex p-1 bg-white/10 rounded-2xl border border-white/15 backdrop-blur-md">
                    <button
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        setMidtermBannerGrade(5);
                        setCurrentGradeFilter(5);
                        setEducationLevel('tieu_hoc');
                      }}
                      className={`px-3.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        midtermBannerGrade === 5
                          ? 'bg-amber-400 text-amber-950 shadow-sm'
                          : 'text-indigo-200 hover:text-white'
                      }`}
                    >
                      ⭐ Tin học 5 (Bài 1, 2, 3, 4)
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        setMidtermBannerGrade(9);
                        setCurrentGradeFilter(9);
                        setEducationLevel('thcs');
                      }}
                      className={`px-3.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        midtermBannerGrade === 9
                          ? 'bg-amber-400 text-amber-950 shadow-sm'
                          : 'text-indigo-200 hover:text-white'
                      }`}
                    >
                      Tin học 9 (Bài 1, 2, 3, 4, 5)
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        setMidtermBannerGrade(8);
                        setCurrentGradeFilter(8);
                        setEducationLevel('thcs');
                      }}
                      className={`px-3.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        midtermBannerGrade === 8
                          ? 'bg-amber-400 text-amber-950 shadow-sm'
                          : 'text-indigo-200 hover:text-white'
                      }`}
                    >
                      Tin học 8 (Bài 1, 2, 3, 4)
                    </button>
                  </div>
                </div>

                {midtermBannerGrade === 5 ? (
                  /* GRADE 5 MIDTERM BANNER CONTENT */
                  <>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-amber-300 font-bold bg-amber-950/80 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                          TIỂU HỌC (SGK KẾT NỐI TRI THỨC)
                        </span>
                        <h3 className="text-lg sm:text-2xl font-black text-white leading-tight font-['Plus_Jakarta_Sans']">
                          Ôn Tập Kiểm Tra Giữa Kì 1 Môn Tin Học 5 (Bài 1, 2, 3, 4)
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-indigo-100/90 mt-1.5 leading-relaxed max-w-3xl">
                        Đầy đủ <strong>42 câu hỏi</strong> chuẩn 100% SGK Kết Nối Tri Thức (Bài 1 đến 4). Đề kiểm tra đánh giá đúng mức độ học sinh: <strong>Không câu khó, không đánh đố, không đưa kiến thức ngoài SGK</strong>. Tự động kiểm tra <strong>11 tiêu chí chống lỗi</strong> trước khi xuất đề, hỗ trợ chuyển thành <strong>4 trò chơi học tập tương tác</strong> (Trắc nghiệm nhanh, Đúng/Sai, Điền khuyết, Nối cột).
                      </p>
                    </div>

                    {/* Feature Chips */}
                    <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 text-cyan-200">
                        <Layers className="w-3.5 h-3.5 text-cyan-300" />
                        42 câu chuẩn Bài 1 - 4 SGK KNTT
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 text-emerald-200">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                        Tự động chống lỗi 11 tiêu chí
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 text-amber-200">
                        <Gamepad2 className="w-3.5 h-3.5 text-amber-300" />
                        4 Trò chơi (Trắc nghiệm, Đúng/Sai, Điền khuyết, Nối cột)
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 text-rose-200">
                        <Award className="w-3.5 h-3.5 text-rose-300" />
                        Thang điểm 10 chuẩn Bộ GD&ĐT
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-1 flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() => handleLaunchMidtermExam(5, 'all')}
                        className="px-5 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 active:scale-95 text-amber-950 font-black text-xs sm:text-sm transition-all shadow-lg shadow-amber-400/25 flex items-center gap-2 cursor-pointer"
                      >
                        <Play className="w-4 h-4 fill-amber-950" />
                        <span>Luyện Tập Ngay Đề Cương Tin Học 5</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          sound.playClick();
                          setGrade5AuditInitialTab('game');
                          setIsGrade5AuditModalOpen(true);
                        }}
                        className="px-5 py-3 rounded-2xl bg-white/15 hover:bg-white/25 active:scale-95 text-white font-bold text-xs sm:text-sm transition-all border border-white/20 flex items-center gap-2 cursor-pointer backdrop-blur-sm"
                      >
                        <Gamepad2 className="w-4 h-4 text-amber-300" />
                        <span>🎮 Chuyển Đổi Thành 4 Dạng Trò Chơi</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          sound.playClick();
                          setGrade5AuditInitialTab('audit');
                          setIsGrade5AuditModalOpen(true);
                        }}
                        className="px-5 py-3 rounded-2xl bg-white/15 hover:bg-white/25 active:scale-95 text-white font-bold text-xs sm:text-sm transition-all border border-white/20 flex items-center gap-2 cursor-pointer backdrop-blur-sm"
                      >
                        <ShieldCheck className="w-4 h-4 text-emerald-300" />
                        <span>🛡️ Tự Kiểm Định 11 Tiêu Chí (Chống Lỗi)</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleExportGrade5Exam}
                        className="px-5 py-3 rounded-2xl bg-indigo-600/80 hover:bg-indigo-600 active:scale-95 text-white font-bold text-xs sm:text-sm transition-all border border-indigo-400/40 flex items-center gap-2 cursor-pointer"
                      >
                        <Printer className="w-4 h-4 text-cyan-300" />
                        <span>In Đề Thi & Xuất PDF</span>
                      </button>
                    </div>
                  </>
                ) : midtermBannerGrade === 9 ? (
                  /* GRADE 9 MIDTERM BANNER CONTENT */
                  <>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-cyan-300 font-bold bg-cyan-950/80 px-2.5 py-0.5 rounded-full border border-cyan-500/30">
                          MỚI CẬP NHẬT
                        </span>
                        <h3 className="text-lg sm:text-2xl font-black text-white leading-tight font-['Plus_Jakarta_Sans']">
                          Ôn Tập Kiểm Tra Giữa Kì 1 Môn Tin Học 9
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-indigo-100/90 mt-1.5 leading-relaxed max-w-3xl">
                        Đầy đủ <strong>76 câu trắc nghiệm</strong> 4 chủ đề chuẩn đáp án 100%, <strong>12 câu trắc nghiệm Đúng/Sai</strong>, tích hợp đa dạng câu hỏi tương tác hiện đại: <strong>Điền khuyết</strong> (Cơ sở & quyết định, 4 tiêu chí chất lượng), <strong>Ghép nối cột</strong> (Y tế, nông nghiệp, giao thông, phần mềm mô phỏng, pháp luật & đạo đức), <strong>Kéo thả thứ tự</strong> và <strong>5 câu hỏi Tự luận & Tình huống thực tế</strong>.
                      </p>
                    </div>

                    {/* Feature Chips */}
                    <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 text-cyan-200">
                        <Layers className="w-3.5 h-3.5 text-cyan-300" />
                        76 câu Trắc nghiệm 4 chủ đề
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 text-emerald-200">
                        <Award className="w-3.5 h-3.5 text-emerald-300" />
                        12 câu Trắc nghiệm Đúng/Sai
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 text-amber-200">
                        <Edit3 className="w-3.5 h-3.5 text-amber-300" />
                        Điền khuyết (Cơ sở, Tiêu chí, Mô phỏng)
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 text-purple-200">
                        <ArrowRightLeft className="w-3.5 h-3.5 text-purple-300" />
                        Ghép nối 4 Lĩnh vực & Phần mềm
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 text-rose-200">
                        <GripVertical className="w-3.5 h-3.5 text-rose-300" />
                        Kéo thả 4-5 bước quy trình
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-1 flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() => handleLaunchMidtermExam(9)}
                        className="px-5 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 active:scale-95 text-amber-950 font-black text-xs sm:text-sm transition-all shadow-lg shadow-amber-400/25 flex items-center gap-2 cursor-pointer"
                      >
                        <Play className="w-4 h-4 fill-amber-950" />
                        <span>Luyện Tập Ngay Đề Cương Tin Học 9</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          sound.playClick();
                          setEssayModalGrade(9);
                          setIsEssayModalOpen(true);
                        }}
                        className="px-5 py-3 rounded-2xl bg-white/15 hover:bg-white/25 active:scale-95 text-white font-bold text-xs sm:text-sm transition-all border border-white/20 flex items-center gap-2 cursor-pointer backdrop-blur-sm"
                      >
                        <BookOpen className="w-4 h-4 text-cyan-300" />
                        <span>Xem 5 Câu Hỏi Tự Luận & Tình Huống</span>
                      </button>
                    </div>
                  </>
                ) : (
                  /* GRADE 8 MIDTERM BANNER CONTENT */
                  <>
                    <div>
                      <h3 className="text-lg sm:text-2xl font-black text-white leading-tight font-['Plus_Jakarta_Sans']">
                        Ôn Tập Kiểm Tra Giữa Kì 1 Môn Tin Học 8
                      </h3>
                      <p className="text-xs sm:text-sm text-indigo-100/90 mt-1.5 leading-relaxed max-w-3xl">
                        Đầy đủ 60 câu trắc nghiệm bám sát 100% tài liệu ôn tập giáo viên gửi, tích hợp các dạng câu hỏi tương tác hiện đại: <strong>Điền khuyết</strong>, <strong>Ghép nối cột</strong>, <strong>Kéo thả sắp xếp thứ tự</strong> và <strong>7 câu hỏi Tự luận & Tình huống thực tế</strong>.
                      </p>
                    </div>

                    {/* Feature Chips */}
                    <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 text-cyan-200">
                        <Layers className="w-3.5 h-3.5 text-cyan-300" />
                        60 câu Trắc nghiệm chuẩn
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 text-amber-200">
                        <Edit3 className="w-3.5 h-3.5 text-amber-300" />
                        Điền khuyết (Cơ giới hóa, Pháp luật)
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 text-purple-200">
                        <ArrowRightLeft className="w-3.5 h-3.5 text-purple-300" />
                        Ghép nối 7 Lĩnh vực (Câu 18)
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 text-emerald-200">
                        <GripVertical className="w-3.5 h-3.5 text-emerald-300" />
                        Kéo thả 5 thế hệ máy tính
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-1 flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() => handleLaunchMidtermExam(8)}
                        className="px-5 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 active:scale-95 text-amber-950 font-black text-xs sm:text-sm transition-all shadow-lg shadow-amber-400/25 flex items-center gap-2 cursor-pointer"
                      >
                        <Play className="w-4 h-4 fill-amber-950" />
                        <span>Luyện Tập Ngay Đề Cương Tin Học 8</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          sound.playClick();
                          setEssayModalGrade(8);
                          setIsEssayModalOpen(true);
                        }}
                        className="px-5 py-3 rounded-2xl bg-white/15 hover:bg-white/25 active:scale-95 text-white font-bold text-xs sm:text-sm transition-all border border-white/20 flex items-center gap-2 cursor-pointer backdrop-blur-sm"
                      >
                        <BookOpen className="w-4 h-4 text-cyan-300" />
                        <span>Xem 7 Câu Hỏi Tự Luận & Tình Huống</span>
                      </button>
                    </div>
                  </>
                )}
              </div>

              {/* Decorative glows */}
              <div className="absolute right-0 top-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl pointer-events-none" />
              <div className="absolute left-1/3 bottom-0 w-64 h-64 rounded-full bg-indigo-500/20 blur-2xl pointer-events-none" />
            </div>

            {/* Dashboard: Biểu đồ thống kê kết quả học tập từ dữ liệu lịch sử */}
            <Dashboard
              history={history}
              onSelectLessonToPractice={handleSelectLessonToPractice}
              onLoadDemoData={initDemoData}
              studentProfile={studentProfile}
              mistakesCount={mistakes.length}
              onOpenMistakes={() => setIsMistakeModalOpen(true)}
              onOpenScorebook={() => setIsScorebookModalOpen(true)}
            />

            {/* MỤC: ĐỀ THI & ĐỀ ÔN TẬP TỪ GIÁO VIÊN (ADMIN STUDIO) */}
            <AdminExamSection
              customExams={customExams}
              currentGradeFilter={currentGradeFilter}
              onLaunchExam={handleLaunchCustomExam}
              onPrintExam={handlePrintCustomExam}
              onOpenAdminStudio={handleOpenAdminStudio}
              isAdmin={Boolean(adminSession && isAuthorizedAdmin(adminSession.email))}
            />

            {/* Step 1: Chọn Khối lớp & Bài học (Hỗ trợ chọn nhiều bài học) */}
            <div id="lesson-selector-section">
              <LessonSelector
                selectedLessons={selectedLessons}
                onToggleLesson={handleToggleLesson}
                onSelectAllInGrade={handleSelectAllInGrade}
                onDeselectAll={handleDeselectAll}
                currentGradeFilter={currentGradeFilter}
                setCurrentGradeFilter={handleGradeFilterChange}
                educationLevel={educationLevel}
                setEducationLevel={setEducationLevel}
                customLessonTitle={customLessonTitle}
                setCustomLessonTitle={setCustomLessonTitle}
                customSubject={customSubject}
                setCustomSubject={setCustomSubject}
                customGrade={customGrade}
                setCustomGrade={setCustomGrade}
                customNotes={customNotes}
                setCustomNotes={setCustomNotes}
                isCustomMode={isCustomMode}
                setIsCustomMode={setIsCustomMode}
              />
            </div>

            {/* Step 2: Chọn số câu hỏi */}
            <QuestionCountSelector
              count={questionCount}
              onSelectCount={setQuestionCount}
            />

            {/* Step 3: Chọn cấp độ (3 cấp độ + Tổng hợp 3 cấp độ) */}
            <DifficultySelector
              difficulty={difficulty}
              onSelectDifficulty={setDifficulty}
              count={questionCount}
            />

            {/* Step 4: Chọn phương thức thi thử hay học tập */}
            <ModeSelector mode={quizMode} onSelectMode={setQuizMode} />

            {/* Step 5: Nguồn tạo câu hỏi & Tích hợp AI / API Key */}
            <QuestionSourceSelector
              sourcePreference={sourcePreference}
              onSelectSourcePreference={handleSelectSourcePreference}
              apiKey={customApiKey}
              onSaveApiKey={handleSaveApiKey}
            />

            {/* Submit Action Block (Không còn dính nổi che màn hình, nút chính đã cố định trên Header) */}
            <div className="pt-4 pb-6">
              <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs sm:text-sm text-slate-600">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-bold text-slate-800">Cấu hình ôn tập hiện tại:</span>
                  </div>
                  <span>Bạn đang chọn: </span>
                  <strong className="text-indigo-700">
                    {isCustomMode
                      ? customLessonTitle || 'Bài học tự nhập'
                      : selectedLessons.length === 0
                      ? 'Chưa chọn bài nào'
                      : selectedLessons.length === 1
                      ? `${selectedLessons[0].title} (Khối ${currentGradeFilter})`
                      : `${selectedLessons.length} bài học Khối ${currentGradeFilter}`}
                  </strong>{' '}
                  • <strong className="text-indigo-700">{questionCount} câu</strong> •{' '}
                  <strong className="text-indigo-700">
                    {difficulty === 'de'
                      ? 'Cấp độ Dễ'
                      : difficulty === 'trung_binh'
                      ? 'Cấp độ Trung bình'
                      : difficulty === 'kho'
                      ? 'Cấp độ Khó'
                      : 'Tổng hợp 3 cấp độ'}
                  </strong>{' '}
                  •{' '}
                  <span className="inline-flex items-center gap-1 font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                    {sourcePreference === 'ai' ? '🤖 AI Thông Minh' : '💾 Kho Offline'}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleStartGenerateQuiz}
                  disabled={isGenerating || (!isCustomMode && selectedLessons.length === 0)}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-black text-sm sm:text-base shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/40 transition-all flex items-center justify-center gap-2.5 active:scale-98 disabled:opacity-50 cursor-pointer"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Đang tạo bộ câu hỏi...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5 fill-white" />
                      <span>TẠO CÂU HỎI & BẮT ĐẦU ÔN TẬP</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Loading Overlay */}
        {isGenerating && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl border border-slate-200 text-center space-y-5 animate-in zoom-in-95">
              <div className="w-16 h-16 rounded-3xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mx-auto text-indigo-600 relative">
                <Loader2 className="w-8 h-8 animate-spin" />
                <Sparkles className="w-4 h-4 text-amber-500 absolute -top-1 -right-1" />
              </div>

              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-slate-800 font-['Lexend']">
                  Đang Tạo Bộ Câu Hỏi Ôn Tập
                </h3>
                <p className="text-xs text-slate-500">
                  {sourcePreference === 'ai'
                    ? `Hệ thống AI đang soạn thảo ${questionCount} câu hỏi mới nhất, bao quát các chủ đề đã chọn`
                    : `Đang trích xuất ${questionCount} câu hỏi chuẩn từ kho dữ liệu SGK offline`}
                </p>
              </div>

              {/* Rotating study tip */}
              <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 text-xs text-indigo-950 italic leading-relaxed">
                "{STUDY_TIPS[loadingTipIndex]}"
              </div>
            </div>
          </div>
        )}

        {/* Step: Quiz Screen */}
        {step === 'quiz' && currentSession && (
          <QuizScreen
            session={currentSession}
            onAnswerQuestion={handleAnswerQuestion}
            onToggleFlag={handleToggleFlag}
            onSubmitQuiz={handleSubmitQuiz}
            onExitQuiz={handleExitQuiz}
            studentProfile={studentProfile}
          />
        )}

        {/* Step: Result Screen */}
        {step === 'result' && currentSession && (
          <ResultScreen
            session={currentSession}
            onRetakeQuiz={handleRetakeQuiz}
            onGenerateNewWithSameTopic={handleGenerateNewWithSameTopic}
            onGoHome={() => {
              setCurrentSession(null);
              setStep('setup');
            }}
            onPrint={() => {
              setStepBeforePrint('result');
              setStep('print');
            }}
            studentProfile={studentProfile}
            onViewCertificate={handleOpenCertificate}
          />
        )}

        {/* Step: Print / Export Screen */}
        {step === 'print' && currentSession && (
          <PrintView
            session={currentSession}
            onBack={() => setStep(stepBeforePrint)}
            studentProfile={studentProfile}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="no-print mt-auto py-6 border-t border-slate-200/80 bg-white text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-indigo-600" />
            <span className="font-extrabold text-slate-800">GIA SƯ TIN HỌC TIỂU HỌC & THCS</span>
            <span>-</span>
            <span className="font-bold text-indigo-700">Tác giả: GV: Ms. Trúc Tin Học</span>
          </div>
          <div className="text-slate-500 font-medium">
            Hệ thống ôn luyện & thi trắc nghiệm Tin học các Khối Tiểu học (3, 4, 5) và THCS (6, 7, 8, 9) theo 3 cấp độ (Dễ, Trung bình, Khó, Tổng hợp)
          </div>
        </div>
      </footer>

      {/* History Modal */}
      <HistoryModal
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        history={history}
        onSelectSession={(sess) => {
          setCurrentSession(sess);
          setStep('result');
        }}
        onClearHistory={handleClearHistory}
      />

      {/* Student Profile Modal Dialog (Chọn Lớp, Tên học sinh, Ảnh đại diện, Lưu, Cài đặt) */}
      <StudentProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        profile={studentProfile}
        onSaveProfile={handleSaveProfile}
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
        onClearHistory={handleClearHistory}
      />

      {/* Essay & Situation Review Modal */}
      <EssayModal
        isOpen={isEssayModalOpen}
        onClose={() => setIsEssayModalOpen(false)}
        initialGrade={essayModalGrade}
      />

      {/* Grade 5 Exam Audit & Game Modal */}
      <Grade5ExamAuditAndGameModal
        isOpen={isGrade5AuditModalOpen}
        onClose={() => setIsGrade5AuditModalOpen(false)}
        questions={QUESTIONS_GRADE_5['tin5-on-tap-giua-ki-1'] || []}
        onStartGame={(gameType) => handleLaunchMidtermExam(5, gameType)}
        onExportExam={handleExportGrade5Exam}
        initialTab={grade5AuditInitialTab}
      />

      {/* Sổ tay câu sai & Lỗ hổng kiến thức */}
      <MistakeNotebookModal
        isOpen={isMistakeModalOpen}
        onClose={() => setIsMistakeModalOpen(false)}
        mistakes={mistakes}
        onRemoveMistake={handleRemoveMistake}
        onClearAll={handleClearAllMistakes}
        onPracticeMistakes={handlePracticeMistakes}
      />

      {/* Bảng Vàng Vinh Danh & Sổ Lưu Điểm Học Sinh */}
      <ScorebookLeaderboardModal
        isOpen={isScorebookModalOpen}
        onClose={() => setIsScorebookModalOpen(false)}
        scores={scores}
        onAddScore={handleAddScore}
        onDeleteScore={handleDeleteScore}
        onResetDemoScores={handleResetDemoScores}
        onOpenCertificate={handleOpenCertificate}
        onOpenBatchCertificates={handleOpenBatchCertificates}
      />

      {/* Giấy Chứng Nhận Vinh Danh & Khen Thưởng */}
      <CertificateModal
        isOpen={isCertificateModalOpen}
        onClose={() => setIsCertificateModalOpen(false)}
        certificates={activeCertificates}
      />

      {/* Admin Authentication Modal (Xác thực saohom2002@gmail.com) */}
      <AdminAuthModal
        isOpen={isAdminAuthModalOpen}
        onClose={() => setIsAdminAuthModalOpen(false)}
        onSuccessOpenStudio={() => {
          setIsAdminAuthModalOpen(false);
          setIsAdminStudioModalOpen(true);
        }}
        adminSession={adminSession}
        setAdminSession={setAdminSession}
      />

      {/* Admin Studio Modal (Tạo đề thi, đề ôn tập, quản trị câu hỏi) */}
      <AdminStudioModal
        isOpen={isAdminStudioModalOpen}
        onClose={() => setIsAdminStudioModalOpen(false)}
        adminSession={adminSession}
        onOpenAuth={() => {
          setIsAdminStudioModalOpen(false);
          setIsAdminAuthModalOpen(true);
        }}
        customExams={customExams}
        setCustomExams={setCustomExams}
        onLaunchExam={handleLaunchCustomExam}
        onPrintExam={handlePrintCustomExam}
      />
    </div>
  );
}
