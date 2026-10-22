import React, { useState, useEffect } from 'react';
import { QuizSession, Question, StudentProfile } from '../types/quiz';
import { DifficultyBadge } from './DifficultyBadge';
import { StudentAvatar } from './StudentAvatar';
import {
  Clock,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Send,
  HelpCircle,
  CheckCircle2,
  XCircle,
  AlertCircle,
  ListOrdered,
  X,
  Sparkles,
  BookOpen,
  Layers,
  ArrowRightLeft,
  Edit3,
  GripVertical
} from 'lucide-react';
import { sound } from '../utils/sound';
import { isQuestionAnswered, isQuestionAnswerCorrect } from '../utils/questionEvaluator';
import { FillBlankQuestion } from './questionTypes/FillBlankQuestion';
import { MatchingQuestion } from './questionTypes/MatchingQuestion';
import { DragDropOrderQuestion } from './questionTypes/DragDropOrderQuestion';

interface QuizScreenProps {
  session: QuizSession;
  onAnswerQuestion: (questionIndex: number, answer: any) => void;
  onToggleFlag: (questionIndex: number) => void;
  onSubmitQuiz: () => void;
  onExitQuiz: () => void;
  studentProfile?: StudentProfile;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({
  session,
  onAnswerQuestion,
  onToggleFlag,
  onSubmitQuiz,
  onExitQuiz,
  studentProfile,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [showPalette, setShowPalette] = useState<boolean>(false);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState<boolean>(false);
  const [showExitConfirm, setShowExitConfirm] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);

  // Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const currentQ: Question = session.questions[currentIndex];
  const selectedAnswer = session.userAnswers[currentIndex];
  const isFlagged = session.flaggedQuestions.includes(currentIndex);
  const total = session.questions.length;

  const answeredCount = session.questions.filter((q, idx) =>
    isQuestionAnswered(q, session.userAnswers[idx])
  ).length;

  const progressPercent = Math.round((answeredCount / total) * 100);

  const handleSelectAnswer = (answer: any) => {
    sound.playClick();
    onAnswerQuestion(currentIndex, answer);

    // In practice mode, play sound if correct
    if (session.mode === 'practice') {
      if (isQuestionAnswerCorrect(currentQ, answer)) {
        sound.playCorrect();
      }
    }
  };

  const handleNext = () => {
    if (currentIndex < total - 1) {
      sound.playClick();
      setCurrentIndex((prev) => prev + 1);
      setShowHint(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      sound.playClick();
      setCurrentIndex((prev) => prev - 1);
      setShowHint(false);
    }
  };

  const optionLetters = ['A', 'B', 'C', 'D'];
  const qType = currentQ.type || 'multiple_choice';

  const getTypeBadge = () => {
    switch (qType) {
      case 'fill_blank':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded-lg border border-amber-300">
            <Edit3 className="w-3 h-3 text-amber-600" />
            Điền khuyết
          </span>
        );
      case 'matching':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-purple-800 bg-purple-100/80 px-2 py-0.5 rounded-lg border border-purple-300">
            <ArrowRightLeft className="w-3 h-3 text-purple-600" />
            Ghép nối cột
          </span>
        );
      case 'drag_drop_order':
      case 'drag_drop':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-teal-800 bg-teal-100/80 px-2 py-0.5 rounded-lg border border-teal-300">
            <GripVertical className="w-3 h-3 text-teal-600" />
            Kéo thả sắp xếp
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-lg border border-indigo-200">
            <Layers className="w-3 h-3 text-indigo-500" />
            Trắc nghiệm
          </span>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-4 pb-12">
      {/* Top Banner & Progress */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-4 sm:p-5 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setShowExitConfirm(true)}
              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              title="Dừng làm bài"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                  {session.subject || 'Ôn tập'}
                </span>
                <span className="text-slate-300">•</span>
                <DifficultyBadge difficulty={session.difficultyMode} size="sm" />
                {studentProfile && (
                  <>
                    <span className="text-slate-300 hidden sm:inline">•</span>
                    <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-600 font-semibold bg-indigo-50/80 px-2 py-0.5 rounded-lg border border-indigo-100">
                      <StudentAvatar avatarIdOrUrl={studentProfile.avatar} size="xs" />
                      <span>{studentProfile.fullName} ({studentProfile.className})</span>
                    </span>
                  </>
                )}
              </div>
              <h1 className="text-base sm:text-lg font-bold text-slate-800 line-clamp-1">
                {session.lessonTitle}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Timer */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 font-mono text-sm font-bold text-slate-700 border border-slate-200">
              <Clock className="w-4 h-4 text-indigo-600" />
              <span>{formatTime(elapsedSeconds)}</span>
            </div>

            {/* Flag bookmark button */}
            <button
              onClick={() => {
                sound.playClick();
                onToggleFlag(currentIndex);
              }}
              className={`p-2 rounded-xl border transition-all flex items-center gap-1 text-xs font-semibold ${
                isFlagged
                  ? 'bg-amber-500 text-white border-amber-500 shadow-xs'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
              title="Đánh dấu câu này để xem lại"
            >
              <Bookmark className={`w-4 h-4 ${isFlagged ? 'fill-white' : ''}`} />
              <span className="hidden sm:inline">
                {isFlagged ? 'Đã ghim' : 'Ghim câu này'}
              </span>
            </button>

            {/* Palette toggle */}
            <button
              onClick={() => {
                sound.playClick();
                setShowPalette(!showPalette);
              }}
              className="p-2 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 text-xs font-semibold flex items-center gap-1.5"
              title="Xem danh sách tất cả các câu"
            >
              <ListOrdered className="w-4 h-4 text-indigo-600" />
              <span className="hidden sm:inline">Bảng câu hỏi</span>
              <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 text-[11px] flex items-center justify-center font-bold">
                {currentIndex + 1}/{total}
              </span>
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>
              Đã làm: <strong className="text-indigo-600">{answeredCount}</strong>/{total} câu ({progressPercent}%)
            </span>
            <span>
              {session.mode === 'practice' ? 'Chế độ Học tập' : 'Chế độ Thi thử'}
            </span>
          </div>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-600 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Question Palette Drawer (Collapsible) */}
      {showPalette && (
        <div className="bg-white rounded-2xl border border-indigo-200 p-4 shadow-md animate-in slide-in-from-top-2">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
            <h3 className="font-bold text-sm text-slate-800 flex items-center gap-1.5">
              <ListOrdered className="w-4 h-4 text-indigo-600" />
              Danh Sách Câu Hỏi ({total} câu)
            </h3>
            <button
              onClick={() => setShowPalette(false)}
              className="text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
            {session.questions.map((q, idx) => {
              const isAns = isQuestionAnswered(q, session.userAnswers[idx]);
              const isCurrent = idx === currentIndex;
              const isFlg = session.flaggedQuestions.includes(idx);

              let bg = 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100';
              if (isAns) {
                bg = 'bg-emerald-50 text-emerald-800 border-emerald-300 font-bold';
              }
              if (isFlg) {
                bg = 'bg-amber-100 text-amber-900 border-amber-300 font-bold';
              }

              return (
                <button
                  key={q.id}
                  onClick={() => {
                    sound.playClick();
                    setCurrentIndex(idx);
                    setShowPalette(false);
                    setShowHint(false);
                  }}
                  className={`h-10 rounded-xl border text-xs flex flex-col items-center justify-center relative transition-all ${bg} ${
                    isCurrent ? 'ring-2 ring-indigo-600 scale-105 shadow-sm' : ''
                  }`}
                >
                  <span>{idx + 1}</span>
                  {isFlg && (
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 absolute top-1 right-1" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-3 pt-2 text-[11px] text-slate-500 border-t border-slate-100">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-md bg-emerald-100 border border-emerald-300" />
              <span>Đã trả lời</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-md bg-amber-100 border border-amber-300" />
              <span>Đã ghim xem lại</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-md bg-slate-50 border border-slate-200" />
              <span>Chưa trả lời</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-md ring-2 ring-indigo-600 bg-white" />
              <span>Câu hiện tại</span>
            </div>
          </div>
        </div>
      )}

      {/* Main Question Card */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-5 sm:p-7 space-y-6">
        {/* Header of Question */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-xl bg-indigo-600 text-white font-black text-xs sm:text-sm font-mono shadow-xs">
              Câu {currentIndex + 1}
            </span>
            {getTypeBadge()}
            <DifficultyBadge difficulty={currentQ.difficulty} size="sm" showSubtext={true} />
          </div>

          {currentQ.hint && (
            <button
              onClick={() => {
                sound.playClick();
                setShowHint(!showHint);
              }}
              className="text-xs font-semibold text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200/80 px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1"
            >
              <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
              <span>{showHint ? 'Ẩn gợi ý' : 'Xem gợi ý'}</span>
            </button>
          )}
        </div>

        {/* Hint Box */}
        {showHint && currentQ.hint && (
          <div className="p-3.5 rounded-2xl bg-amber-50/90 border border-amber-200 text-amber-900 text-xs sm:text-sm leading-relaxed animate-in fade-in-50 flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold">Gợi ý tư duy:</strong> {currentQ.hint}
            </div>
          </div>
        )}

        {/* Dynamic Question Body by Type */}
        {qType === 'fill_blank' ? (
          <FillBlankQuestion
            question={currentQ}
            userAnswer={selectedAnswer}
            onAnswer={handleSelectAnswer}
            isPracticeMode={session.mode === 'practice'}
          />
        ) : qType === 'matching' ? (
          <div>
            <div className="text-base sm:text-lg font-semibold text-slate-800 leading-relaxed font-['Plus_Jakarta_Sans'] mb-4">
              {currentQ.question}
            </div>
            <MatchingQuestion
              question={currentQ}
              userAnswer={selectedAnswer}
              onAnswer={handleSelectAnswer}
              isPracticeMode={session.mode === 'practice'}
            />
          </div>
        ) : qType === 'drag_drop_order' || qType === 'drag_drop' ? (
          <div>
            <div className="text-base sm:text-lg font-semibold text-slate-800 leading-relaxed font-['Plus_Jakarta_Sans'] mb-4">
              {currentQ.question}
            </div>
            <DragDropOrderQuestion
              question={currentQ}
              userAnswer={selectedAnswer}
              onAnswer={handleSelectAnswer}
              isPracticeMode={session.mode === 'practice'}
            />
          </div>
        ) : (
          /* Multiple Choice (Default) */
          <div className="space-y-6">
            <div className="text-base sm:text-lg font-semibold text-slate-800 leading-relaxed font-['Plus_Jakarta_Sans'] whitespace-pre-line">
              {currentQ.question}
            </div>

            <div className="space-y-3">
              {currentQ.options.map((optionText, optIdx) => {
                const isSelected = selectedAnswer === optIdx;
                const isPracticeMode = session.mode === 'practice';
                const isAnswered = selectedAnswer !== undefined;

                let optionStyle =
                  'border-slate-200 bg-slate-50/60 hover:border-indigo-300 hover:bg-indigo-50/30 text-slate-800';

                if (isSelected) {
                  optionStyle =
                    'border-indigo-600 bg-indigo-50 text-indigo-950 ring-2 ring-indigo-500/20 font-semibold shadow-xs';
                }

                // In practice mode, colorize options once answered
                if (isPracticeMode && isAnswered) {
                  if (optIdx === currentQ.correctAnswer) {
                    optionStyle =
                      'border-emerald-600 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/20 font-semibold';
                  } else if (isSelected && optIdx !== currentQ.correctAnswer) {
                    optionStyle =
                      'border-rose-500 bg-rose-50 text-rose-950 ring-2 ring-rose-500/20';
                  } else {
                    optionStyle = 'border-slate-200 bg-slate-50/40 text-slate-400 opacity-60';
                  }
                }

                return (
                  <button
                    key={optIdx}
                    type="button"
                    onClick={() => handleSelectAnswer(optIdx)}
                    className={`w-full p-3.5 sm:p-4 rounded-2xl border text-left transition-all flex items-start gap-3.5 group cursor-pointer ${optionStyle}`}
                  >
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 transition-all ${
                        isSelected
                          ? 'bg-indigo-600 text-white'
                          : isPracticeMode && isAnswered && optIdx === currentQ.correctAnswer
                          ? 'bg-emerald-600 text-white'
                          : 'bg-white border border-slate-200 text-slate-600 group-hover:border-indigo-400 group-hover:text-indigo-600'
                      }`}
                    >
                      {optionLetters[optIdx]}
                    </div>
                    <div className="flex-1 pt-0.5 text-sm sm:text-base leading-relaxed">
                      {optionText}
                    </div>
                    {isPracticeMode && isAnswered && optIdx === currentQ.correctAnswer && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 self-center" />
                    )}
                    {isPracticeMode && isAnswered && isSelected && optIdx !== currentQ.correctAnswer && (
                      <XCircle className="w-5 h-5 text-rose-500 shrink-0 self-center" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Practice Mode Instant Explanation Box */}
        {session.mode === 'practice' && isQuestionAnswered(currentQ, selectedAnswer) && (
          <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50/80 border border-indigo-200 space-y-2 animate-in fade-in-50">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-700" />
              <h4 className="font-bold text-sm text-indigo-900">
                Lời Giải Chi Tiết & Ghi Nhớ:
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-indigo-950 leading-relaxed font-normal whitespace-pre-line">
              {currentQ.explanation}
            </p>
          </div>
        )}
      </div>

      {/* Bottom Navigation Controls */}
      <div className="bg-white rounded-2xl border border-slate-200 p-3 sm:p-4 flex items-center justify-between gap-3 shadow-xs">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="px-4 py-2.5 rounded-xl border border-slate-200 hover:border-indigo-300 bg-white text-slate-700 hover:bg-slate-50 font-semibold text-xs sm:text-sm transition-all flex items-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Câu trước</span>
        </button>

        <div className="text-xs font-semibold text-slate-500">
          Câu <span className="text-indigo-600 font-bold">{currentIndex + 1}</span> / {total}
        </div>

        <div className="flex items-center gap-2">
          {currentIndex < total - 1 ? (
            <button
              onClick={handleNext}
              className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs sm:text-sm transition-all flex items-center gap-1.5 shadow-sm shadow-indigo-600/20"
            >
              <span>Câu tiếp</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => {
                sound.playClick();
                setShowSubmitConfirm(true);
              }}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-1.5 shadow-sm shadow-emerald-600/20"
            >
              <Send className="w-4 h-4" />
              <span>Nộp bài thi</span>
            </button>
          )}
        </div>
      </div>

      {/* Submit Confirmation Dialog */}
      {showSubmitConfirm && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4 animate-in zoom-in-95">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <Send className="w-6 h-6" />
            </div>

            <div className="text-center space-y-1">
              <h3 className="text-lg font-bold text-slate-800">
                Xác Nhận Nộp Bài Thi
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Bạn đã hoàn thành <strong>{answeredCount}/{total}</strong> câu hỏi.
              </p>
            </div>

            {answeredCount < total && (
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-800 text-xs flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  Bạn vẫn còn <strong>{total - answeredCount}</strong> câu chưa trả lời. Bạn có chắc chắn muốn nộp bài bây giờ không?
                </span>
              </div>
            )}

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowSubmitConfirm(false)}
                className="py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs sm:text-sm font-semibold transition-colors"
              >
                Tiếp tục làm bài
              </button>
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  setShowSubmitConfirm(false);
                  onSubmitQuiz();
                }}
                className="py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-600/20 transition-all"
              >
                Nộp bài ngay
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Exit Confirmation Dialog */}
      {showExitConfirm && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-slate-200 space-y-4 animate-in zoom-in-95">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
              <AlertCircle className="w-6 h-6" />
            </div>

            <div className="text-center space-y-1">
              <h3 className="text-lg font-bold text-slate-800">
                Dừng Làm Bài?
              </h3>
              <p className="text-xs text-slate-500">
                Nếu thoát bây giờ, kết quả của lượt làm bài này sẽ không được lưu vào lịch sử.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowExitConfirm(false)}
                className="py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs sm:text-sm font-semibold transition-colors"
              >
                Ở lại làm tiếp
              </button>
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  setShowExitConfirm(false);
                  onExitQuiz();
                }}
                className="py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-rose-600/20 transition-all"
              >
                Thoát bài thi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
