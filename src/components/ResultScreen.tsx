import React, { useState, useEffect } from 'react';
import { QuizSession, Question, DifficultyStats, StudentProfile, CertificateData } from '../types/quiz';
import { DifficultyBadge } from './DifficultyBadge';
import { StudentAvatar } from './StudentAvatar';
import confetti from 'canvas-confetti';
import {
  Trophy,
  CheckCircle2,
  XCircle,
  Clock,
  RotateCcw,
  Sparkles,
  Printer,
  ChevronDown,
  ChevronUp,
  Bookmark,
  MessageSquare,
  Send,
  Loader2,
  HelpCircle,
  Layers,
  ArrowRight,
  BookOpen,
  AlertTriangle,
  Award,
} from 'lucide-react';
import { sound } from '../utils/sound';
import {
  isQuestionAnswerCorrect,
  getQuestionAnswerScore,
  normalizeText,
  isBlankValueMatch,
  isPairMatch,
  getMatchingPairsAndMap
} from '../utils/questionEvaluator';

interface ResultScreenProps {
  session: QuizSession;
  onRetakeQuiz: () => void;
  onGenerateNewWithSameTopic: () => void;
  onGoHome: () => void;
  onPrint: () => void;
  studentProfile?: StudentProfile;
  onViewCertificate?: (cert: CertificateData) => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  session,
  onRetakeQuiz,
  onGenerateNewWithSameTopic,
  onGoHome,
  onPrint,
  studentProfile,
  onViewCertificate,
}) => {
  const [filter, setFilter] = useState<'all' | 'wrong' | 'correct' | 'flagged'>('all');
  const [expandedExplanations, setExpandedExplanations] = useState<Record<string, boolean>>({});

  // AI teacher explanation modal state
  const [activeExplainQ, setActiveExplainQ] = useState<Question | null>(null);
  const [studentQuestionInput, setStudentQuestionInput] = useState<string>('');
  const [aiExplanationResult, setAiExplanationResult] = useState<string>('');
  const [isExplaining, setIsExplaining] = useState<boolean>(false);

  // Trigger confetti if high score
  useEffect(() => {
    sound.playComplete();
    if (session.score >= 8.0) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {}
    }
  }, [session.score]);

  // Compute breakdown by difficulty
  const stats: DifficultyStats = {
    de: { correct: 0, total: 0 },
    trung_binh: { correct: 0, total: 0 },
    kho: { correct: 0, total: 0 },
  };

  session.questions.forEach((q, idx) => {
    const diff = q.difficulty || 'trung_binh';
    if (stats[diff]) {
      stats[diff].total += 1;
      const score = getQuestionAnswerScore(q, session.userAnswers[idx]);
      if (score >= 0.99) {
        stats[diff].correct += 1;
      }
    }
  });

  const correctCount = session.questions.filter(
    (q, idx) => getQuestionAnswerScore(q, session.userAnswers[idx]) >= 0.99
  ).length;
  const partialCount = session.questions.filter((q, idx) => {
    const score = getQuestionAnswerScore(q, session.userAnswers[idx]);
    return score > 0 && score < 0.99;
  }).length;
  const wrongCount = session.totalQuestions - correctCount;

  // Filter questions for review
  const filteredQuestions = session.questions.map((q, idx) => ({ q, idx })).filter(({ q, idx }) => {
    const score = getQuestionAnswerScore(q, session.userAnswers[idx]);
    const isFlagged = session.flaggedQuestions.includes(idx);

    if (filter === 'wrong') return score < 0.99;
    if (filter === 'correct') return score >= 0.99;
    if (filter === 'flagged') return isFlagged;
    return true;
  });

  const toggleExpand = (qId: string) => {
    setExpandedExplanations((prev) => ({
      ...prev,
      [qId]: !prev[qId],
    }));
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m} phút ${s < 10 ? '0' : ''}${s} giây`;
  };

  // Performance assessment text
  let feedback = {
    title: 'Cố gắng lên nhé!',
    badge: 'Cần ôn thêm',
    color: 'text-amber-600',
    bg: 'bg-amber-50 border-amber-200',
    desc: 'Bạn cần xem kỹ lại các câu sai và ôn tập thêm lý thuyết nền tảng.',
  };

  if (session.score >= 9.0) {
    feedback = {
      title: 'Xuất Sắc! Nắm Vững Kiến Thức!',
      badge: 'Thủ Khoa',
      color: 'text-emerald-700',
      bg: 'bg-emerald-50 border-emerald-200',
      desc: 'Tuyệt vời! Bạn đã làm chủ hoàn toàn bài học này và sẵn sàng cho các kỳ thi thật.',
    };
  } else if (session.score >= 7.5) {
    feedback = {
      title: 'Rất Tốt! Năng Lực Khá Giỏi!',
      badge: 'Học Sinh Giỏi',
      color: 'text-indigo-700',
      bg: 'bg-indigo-50 border-indigo-200',
      desc: 'Bạn nắm rất chắc các câu hỏi Dễ và Trung bình. Hãy chú ý thêm một số bẫy ở câu Khó.',
    };
  } else if (session.score >= 5.0) {
    feedback = {
      title: 'Đã Đạt Chuẩn Kiến Thức Cơ Bản',
      badge: 'Đạt Chuẩn',
      color: 'text-blue-700',
      bg: 'bg-blue-50 border-blue-200',
      desc: 'Bạn đã đạt mức điểm trung bình khá. Hãy luyện thêm vài lượt để nâng cao điểm số nhé!',
    };
  }

  // Handle asking AI teacher
  const handleAskAiTeacher = async (q: Question) => {
    sound.playClick();
    setActiveExplainQ(q);
    setStudentQuestionInput('');
    setAiExplanationResult('');
    setIsExplaining(true);

    try {
      const userApiKey = localStorage.getItem('ontap_gemini_api_key') || '';
      const res = await fetch('/api/explain-question', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: q.question,
          options: q.options,
          correctAnswer: q.correctAnswer,
          explanation: q.explanation,
          studentQuery: 'Em chưa hiểu rõ câu này, thầy cô giải thích cặn kẽ và mách mẹo ghi nhớ cho em với ạ!',
          apiKey: userApiKey,
        }),
      });
      const data = await res.json();
      setAiExplanationResult(data.explanation || q.explanation);
    } catch (err) {
      setAiExplanationResult(q.explanation);
    } finally {
      setIsExplaining(false);
    }
  };

  const handleSendCustomQuery = async () => {
    if (!studentQuestionInput.trim() || !activeExplainQ) return;
    setIsExplaining(true);
    try {
      const userApiKey = localStorage.getItem('ontap_gemini_api_key') || '';
      const res = await fetch('/api/explain-question', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: activeExplainQ.question,
          options: activeExplainQ.options,
          correctAnswer: activeExplainQ.correctAnswer,
          explanation: activeExplainQ.explanation,
          studentQuery: studentQuestionInput,
          apiKey: userApiKey,
        }),
      });
      const data = await res.json();
      setAiExplanationResult(data.explanation);
    } catch {
      // fallback
    } finally {
      setIsExplaining(false);
    }
  };

  const optionLetters = ['A', 'B', 'C', 'D'];

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12 animate-in fade-in-50">
      {/* Top Result Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-tr from-amber-400 via-amber-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-amber-500/20 shrink-0">
              <Trophy className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${feedback.bg} ${feedback.color}`}>
                  {feedback.badge}
                </span>
                {session.source && (
                  <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                    session.source === 'gemini_ai'
                      ? 'bg-purple-50 text-purple-700 border-purple-200'
                      : 'bg-blue-50 text-blue-700 border-blue-200'
                  }`}>
                    <Sparkles className="w-3 h-3 text-amber-500" />
                    {session.source === 'gemini_ai' ? 'AI Biên Soạn' : 'Kho Chuẩn SGK'}
                  </span>
                )}
                {studentProfile && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200">
                    <StudentAvatar avatarIdOrUrl={studentProfile.avatar} size="xs" />
                    <span>{studentProfile.fullName} - Lớp {studentProfile.className}</span>
                  </span>
                )}
                <span className="text-xs text-slate-400 font-medium">
                  {formatTime(session.timeSpentSeconds)}
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-800 mt-1 font-['Lexend']">
                {feedback.title}
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Nội dung ôn tập: <strong className="text-slate-700">{session.lessonTitle}</strong>
              </p>
              {session.selectedLessonTitles && session.selectedLessonTitles.length > 1 && (
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="text-[11px] font-bold text-slate-500">Bao gồm:</span>
                  {session.selectedLessonTitles.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {t.split(':')[0]}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Score display */}
          <div className="flex items-center gap-3 bg-gradient-to-br from-indigo-50 to-indigo-100/60 p-4 sm:p-5 rounded-2xl border border-indigo-200/80 shadow-xs text-center shrink-0">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                Điểm số
              </div>
              <div className="text-3xl sm:text-4xl font-black text-indigo-900 font-['Lexend']">
                {session.score.toFixed(1)}
                <span className="text-base sm:text-lg font-bold text-indigo-500">/10</span>
              </div>
              <div className="text-xs font-semibold text-indigo-600 mt-0.5">
                Đúng {correctCount}/{session.totalQuestions} câu ({session.percentage}%)
              </div>
            </div>
          </div>
        </div>

        {/* 3 Difficulty Levels Breakdown Analysis */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm sm:text-base text-slate-800 flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-600" />
              Đánh Giá Năng Lực Theo 3 Cấp Độ (Dễ - Trung Bình - Khó)
            </h3>
            <span className="text-xs text-slate-400">Chi tiết ma trận đề thi</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Cấp độ Dễ */}
            <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-800 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Cấp độ DỄ (Nhận biết)
                </span>
                <span className="text-xs font-extrabold text-emerald-700">
                  {stats.de.correct}/{stats.de.total} câu
                </span>
              </div>
              <div className="w-full h-2 bg-emerald-200/70 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-600 rounded-full transition-all"
                  style={{
                    width: `${
                      stats.de.total > 0 ? (stats.de.correct / stats.de.total) * 100 : 0
                    }%`,
                  }}
                />
              </div>
              <p className="text-[11px] text-emerald-800">
                {stats.de.total === 0
                  ? 'Không có câu hỏi cấp độ này'
                  : stats.de.correct === stats.de.total
                  ? '✓ Hoàn thành xuất sắc lý thuyết nền tảng'
                  : '⚠ Cần chú ý củng cố định nghĩa & công thức cơ bản'}
              </p>
            </div>

            {/* Cấp độ Trung bình */}
            <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-800 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  Cấp độ TRUNG BÌNH (Vận dụng)
                </span>
                <span className="text-xs font-extrabold text-amber-700">
                  {stats.trung_binh.correct}/{stats.trung_binh.total} câu
                </span>
              </div>
              <div className="w-full h-2 bg-amber-200/70 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-500 rounded-full transition-all"
                  style={{
                    width: `${
                      stats.trung_binh.total > 0
                        ? (stats.trung_binh.correct / stats.trung_binh.total) * 100
                        : 0
                    }%`,
                  }}
                />
              </div>
              <p className="text-[11px] text-amber-800">
                {stats.trung_binh.total === 0
                  ? 'Không có câu hỏi cấp độ này'
                  : stats.trung_binh.correct === stats.trung_binh.total
                  ? '✓ Áp dụng công thức và tính toán rất chuẩn'
                  : '⚠ Rèn luyện thêm bài tập suy luận tiêu chuẩn'}
              </p>
            </div>

            {/* Cấp độ Khó */}
            <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-rose-800 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  Cấp độ KHÓ (Vận dụng cao)
                </span>
                <span className="text-xs font-extrabold text-rose-700">
                  {stats.kho.correct}/{stats.kho.total} câu
                </span>
              </div>
              <div className="w-full h-2 bg-rose-200/70 rounded-full overflow-hidden">
                <div
                  className="h-full bg-rose-500 rounded-full transition-all"
                  style={{
                    width: `${
                      stats.kho.total > 0 ? (stats.kho.correct / stats.kho.total) * 100 : 0
                    }%`,
                  }}
                />
              </div>
              <p className="text-[11px] text-rose-800">
                {stats.kho.total === 0
                  ? 'Không có câu hỏi cấp độ này'
                  : stats.kho.correct === stats.kho.total
                  ? '✓ Tư duy logic xuất sắc, làm chủ câu hỏi phân loại'
                  : '⚠ Thử thách thêm với các bài toán thực tiễn nâng cao'}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => {
                sound.playClick();
                onRetakeQuiz();
              }}
              className="px-4 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 shadow-xs"
            >
              <RotateCcw className="w-4 h-4 text-indigo-600" />
              <span>Làm lại đề này</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                onGenerateNewWithSameTopic();
              }}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 shadow-xs"
            >
              <Sparkles className="w-4 h-4" />
              <span>Tạo đề mới cùng bài học</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {onViewCertificate && (
              <button
                onClick={() => {
                  sound.playClick();
                  onViewCertificate({
                    studentName: studentProfile?.fullName || 'Bạn Nhỏ Thông Thái',
                    className: studentProfile?.className || `${session.gradeNumber || 8}A1`,
                    schoolName: studentProfile?.schoolName || 'Trường THCS',
                    examBatch: 'Đợt 1: Khảo sát chất lượng Giữa kì 1 (Tháng 10)',
                    lessonTitle: session.lessonTitle,
                    score: session.score,
                    percentage: session.percentage,
                    rankTitle:
                      session.score >= 9.5
                        ? 'Thủ khoa Xuất sắc'
                        : session.score >= 9.0
                        ? 'Xuất sắc'
                        : session.score >= 8.0
                        ? 'Giỏi'
                        : session.score >= 6.5
                        ? 'Khá'
                        : 'Đạt yêu cầu',
                    date: Date.now(),
                    certificateCode: `VINH-DANH-${session.id.slice(-6).toUpperCase()}`,
                  });
                }}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-xs sm:text-sm font-extrabold transition-all flex items-center gap-1.5 shadow-md shadow-amber-500/20 cursor-pointer"
                title="Nhận Giấy chứng nhận vinh danh thành tích"
              >
                <Award className="w-4 h-4 text-amber-200" />
                <span>Nhận Giấy Khen</span>
              </button>
            )}

            <button
              onClick={() => {
                sound.playClick();
                onPrint();
              }}
              className="px-3.5 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 shadow-xs"
              title="In đề thi ra giấy hoặc xuất PDF"
            >
              <Printer className="w-4 h-4 text-slate-500" />
              <span className="hidden sm:inline">In đề thi / PDF</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                onGoHome();
              }}
              className="px-4 py-2 rounded-xl border border-indigo-200 bg-indigo-50 hover:bg-indigo-100 text-indigo-800 text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5"
            >
              <span>Chọn bài khác</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Review Section */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-800 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-600" />
              Xem Lại Chi Tiết & Lời Giải Từng Câu
            </h2>
            <p className="text-xs text-slate-500">
              Phân tích đáp án đúng, lỗi sai thường gặp và hỏi thầy cô AI
            </p>
          </div>

          {/* Filter tabs */}
          <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200 text-xs font-semibold">
            <button
              onClick={() => setFilter('all')}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                filter === 'all'
                  ? 'bg-white text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Tất cả ({session.totalQuestions})
            </button>
            <button
              onClick={() => setFilter('wrong')}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                filter === 'wrong'
                  ? 'bg-white text-rose-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Câu sai ({wrongCount})
            </button>
            <button
              onClick={() => setFilter('correct')}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                filter === 'correct'
                  ? 'bg-white text-emerald-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Câu đúng ({correctCount})
            </button>
            <button
              onClick={() => setFilter('flagged')}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                filter === 'flagged'
                  ? 'bg-white text-amber-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Đã ghim ({session.flaggedQuestions.length})
            </button>
          </div>
        </div>

        {/* Questions list */}
        <div className="space-y-4">
          {filteredQuestions.map(({ q, idx }) => {
            const userChoice = session.userAnswers[idx];
            const qScore = getQuestionAnswerScore(q, userChoice);
            const isFullyCorrect = qScore >= 0.99;
            const isPartiallyCorrect = qScore > 0 && qScore < 0.99;
            const isExpanded = expandedExplanations[q.id] ?? true; // default expanded

            return (
              <div
                key={q.id}
                className={`bg-white rounded-3xl border transition-all p-5 sm:p-6 space-y-4 ${
                  isFullyCorrect
                    ? 'border-emerald-200/80 shadow-xs'
                    : isPartiallyCorrect
                    ? 'border-amber-200 shadow-xs ring-1 ring-amber-500/15'
                    : 'border-rose-200 shadow-xs ring-1 ring-rose-500/10'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs font-mono text-white ${
                        isFullyCorrect
                          ? 'bg-emerald-600'
                          : isPartiallyCorrect
                          ? 'bg-amber-500'
                          : 'bg-rose-500'
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <DifficultyBadge difficulty={q.difficulty} size="sm" />
                    {session.flaggedQuestions.includes(idx) && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                        <Bookmark className="w-3 h-3 fill-amber-500" />
                        Đã ghim
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5">
                    {isFullyCorrect ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Đúng
                      </span>
                    ) : isPartiallyCorrect ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-300">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                        Đúng một phần ({Math.round(qScore * 100)}%)
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">
                        <XCircle className="w-3.5 h-3.5" />
                        Chưa chính xác
                      </span>
                    )}
                  </div>
                </div>

                {/* Question Text */}
                <h3 className="text-sm sm:text-base font-bold text-slate-800 leading-relaxed font-['Plus_Jakarta_Sans'] whitespace-pre-line">
                  {q.question}
                </h3>

                {/* Question review by type */}
                {q.type === 'fill_blank' ? (() => {
                  const blanks = q.blankAnswers || [];
                  const correctCountInBlanks = blanks.filter((expectedWord, bIdx) => {
                    const userWord = Array.isArray(userChoice) ? userChoice[bIdx] : '';
                    return isBlankValueMatch(userWord, expectedWord);
                  }).length;

                  return (
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                      <div className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center justify-between">
                        <span>Kết quả điền khuyết:</span>
                        <span className="text-xs font-semibold text-slate-500">
                          Đúng {correctCountInBlanks}/{blanks.length} ô
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                          <span className="font-semibold text-slate-600">Từ bạn đã điền:</span>
                          {Array.isArray(userChoice) && userChoice.some((w) => typeof w === 'string' && w.trim().length > 0) ? (
                            blanks.map((expectedWord: string, bIdx: number) => {
                              const userWord = Array.isArray(userChoice) ? userChoice[bIdx] : '';
                              const isMatch = isBlankValueMatch(userWord, expectedWord);
                              return (
                                <span
                                  key={bIdx}
                                  className={`px-2.5 py-1 rounded-lg font-bold border flex items-center gap-1 ${
                                    isMatch
                                      ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                                      : 'bg-rose-50 text-rose-800 border-rose-300'
                                  }`}
                                >
                                  <span>[{bIdx + 1}] {userWord || '(chưa điền)'}</span>
                                  <span className="text-[11px]">{isMatch ? '✓' : '✗'}</span>
                                </span>
                              );
                            })
                          ) : (
                            <span className="text-slate-400 italic">Chưa điền</span>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm pt-1">
                          <span className="font-semibold text-emerald-700">Đáp án chuẩn:</span>
                          {blanks.map((word, bIdx) => (
                            <span
                              key={bIdx}
                              className="px-2.5 py-1 rounded-lg font-bold bg-emerald-100/80 text-emerald-900 border border-emerald-300"
                            >
                              [{bIdx + 1}] {word}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })() : q.type === 'matching' ? (() => {
                  const { lefts, rights, correctMatches: matches } = getMatchingPairsAndMap(q);
                  const matchedCorrectCount = lefts.filter((lItem) => {
                    const userRId = userChoice?.[lItem.id];
                    return isPairMatch(lItem.id, userRId, matches, rights);
                  }).length;

                  return (
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                      <div className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center justify-between">
                        <span>Kết quả ghép nối cột:</span>
                        <span className="text-xs font-semibold text-slate-500">
                          Đúng {matchedCorrectCount}/{lefts.length} cặp
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                        {lefts.map((lItem) => {
                          const userRId = userChoice?.[lItem.id];
                          const correctRId = matches?.[lItem.id];
                          const isMatch = isPairMatch(lItem.id, userRId, matches, rights);
                          const userRItem = rights.find((r) => r.id === userRId);
                          const correctRItem = rights.find((r) => r.id === correctRId);

                          return (
                            <div
                              key={lItem.id}
                              className={`p-3 rounded-xl border space-y-1 ${
                                isMatch
                                  ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                                  : 'bg-rose-50/70 border-rose-200 text-rose-950'
                              }`}
                            >
                              <div className="font-bold flex items-center justify-between">
                                <span>{lItem.text}</span>
                                <span className="text-[11px]">
                                  {isMatch ? '✅ Đúng' : '❌ Sai'}
                                </span>
                              </div>
                              <div className="text-xs">
                                <span className="text-slate-500">Bạn ghép: </span>
                                <strong className={userRItem ? 'text-slate-800' : 'text-rose-600 italic'}>
                                  {userRItem?.text || '(chưa ghép)'}
                                </strong>
                              </div>
                              {!isMatch && (
                                <div className="text-xs text-emerald-800">
                                  <span>Đáp án đúng: </span>
                                  <strong>{correctRItem?.text}</strong>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })() : q.type === 'drag_drop_order' ? (
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Kết quả sắp xếp thứ tự:
                    </div>
                    <div className="space-y-1.5 text-xs sm:text-sm">
                      {(userChoice || q.correctOrder || []).map((itemId: string, pos: number) => {
                        const item = q.orderItems?.find((it) => it.id === itemId);
                        const isRightPos = q.correctOrder?.[pos] === itemId;
                        const correctItem = q.orderItems?.find((it) => it.id === q.correctOrder?.[pos]);

                        return (
                          <div
                            key={pos}
                            className={`p-2.5 rounded-xl border flex items-center justify-between gap-2 ${
                              isRightPos
                                ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                                : 'bg-rose-50 border-rose-200 text-rose-900'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span className="w-5 h-5 rounded-md bg-white font-bold font-mono text-xs flex items-center justify-center shrink-0 border border-slate-200">
                                {pos + 1}
                              </span>
                              <span>{item?.text}</span>
                            </div>
                            {!isRightPos && (
                              <span className="text-[11px] text-slate-500 shrink-0">
                                (Đúng ra là: {correctItem?.text})
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  /* Multiple Choice (Default) */
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {q.options.map((opt, optIndex) => {
                      const isUserPick = userChoice === optIndex;
                      const isRightAnswer = optIndex === q.correctAnswer;

                      let optBox = 'bg-slate-50/60 border-slate-200 text-slate-700';

                      if (isRightAnswer) {
                        optBox =
                          'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-1 ring-emerald-500/20';
                      } else if (isUserPick && !isRightAnswer) {
                        optBox =
                          'bg-rose-50 border-rose-400 text-rose-950 font-semibold ring-1 ring-rose-500/20';
                      }

                      return (
                        <div
                          key={optIndex}
                          className={`p-3 rounded-2xl border text-xs sm:text-sm flex items-start gap-2.5 ${optBox}`}
                        >
                          <span
                            className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                              isRightAnswer
                                ? 'bg-emerald-600 text-white'
                                : isUserPick
                                ? 'bg-rose-500 text-white'
                                : 'bg-white border border-slate-200 text-slate-500'
                            }`}
                          >
                            {optionLetters[optIndex]}
                          </span>
                          <span className="flex-1 pt-0.5 leading-relaxed">{opt}</span>
                          {isRightAnswer && (
                            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100/80 px-1.5 py-0.5 rounded-md">
                              Đáp án đúng
                            </span>
                          )}
                          {isUserPick && !isRightAnswer && (
                            <span className="text-[11px] font-bold text-rose-700 bg-rose-100/80 px-1.5 py-0.5 rounded-md">
                              Bạn đã chọn
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Explanation Box */}
                <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-200/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-900 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                      Lời giải chi tiết & Trọng tâm ghi nhớ:
                    </span>
                    <button
                      onClick={() => handleAskAiTeacher(q)}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-indigo-700 bg-white hover:bg-indigo-100/70 border border-indigo-300 px-2.5 py-1 rounded-xl shadow-xs transition-colors cursor-pointer"
                    >
                      <Sparkles className="w-3 h-3 text-amber-500" />
                      Trợ lý AI giải thích thêm
                    </button>
                  </div>
                  <p className="text-xs sm:text-sm text-indigo-950 leading-relaxed font-normal">
                    {q.explanation}
                  </p>
                </div>
              </div>
            );
          })}

          {filteredQuestions.length === 0 && (
            <div className="py-12 text-center bg-white rounded-3xl border border-slate-200 text-slate-500">
              <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto mb-2" />
              <p className="font-bold text-sm text-slate-700">
                Không có câu hỏi nào trong danh mục này!
              </p>
            </div>
          )}
        </div>
      </div>

      {/* AI Teacher Explanation Dialog */}
      {activeExplainQ && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4 max-h-[85vh] flex flex-col animate-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-amber-500 text-white flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-800">
                    Trợ Lý AI - Giảng Giải Chi Tiết
                  </h3>
                  <p className="text-xs text-slate-500">
                    Hỏi sâu & học mẹo ghi nhớ nhanh cho câu hỏi
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveExplainQ(null)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                ✕
              </button>
            </div>

            {/* Question summary */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 line-clamp-2">
              <strong>Câu hỏi:</strong> {activeExplainQ.question}
            </div>

            {/* AI Explanation Area */}
            <div className="flex-1 overflow-y-auto pr-1 space-y-3">
              {isExplaining ? (
                <div className="py-8 text-center space-y-2">
                  <Loader2 className="w-7 h-7 text-indigo-600 animate-spin mx-auto" />
                  <p className="text-xs font-semibold text-slate-600">
                    Trợ lý AI đang soạn lời giảng giải trực quan và mẹo nhớ cho bạn...
                  </p>
                </div>
              ) : (
                <div className="p-4 rounded-2xl bg-indigo-50/80 border border-indigo-200 text-xs sm:text-sm text-indigo-950 leading-relaxed whitespace-pre-line font-['Plus_Jakarta_Sans']">
                  {aiExplanationResult}
                </div>
              )}
            </div>

            {/* Student follow-up question input */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <label className="text-xs font-bold text-slate-700">
                Bạn còn thắc mắc điểm nào ở câu này?
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={studentQuestionInput}
                  onChange={(e) => setStudentQuestionInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSendCustomQuery();
                  }}
                  placeholder="Ví dụ: Vì sao phương án B lại sai ạ? / Có công thức tính nhanh không?..."
                  className="flex-1 px-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:bg-white"
                />
                <button
                  type="button"
                  onClick={handleSendCustomQuery}
                  disabled={isExplaining || !studentQuestionInput.trim()}
                  className="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-40 transition-colors shadow-xs"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
