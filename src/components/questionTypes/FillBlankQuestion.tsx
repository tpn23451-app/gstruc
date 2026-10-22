import React, { useState } from 'react';
import { Question } from '../../types/quiz';
import { Sparkles, RotateCcw, Check, X, HelpCircle } from 'lucide-react';
import { sound } from '../../utils/sound';
import { isBlankValueMatch } from '../../utils/questionEvaluator';

interface FillBlankQuestionProps {
  question: Question;
  userAnswer?: string[]; // array of strings for blanks
  onAnswer: (answer: string[]) => void;
  isPracticeMode?: boolean;
  disabled?: boolean;
}

export const FillBlankQuestion: React.FC<FillBlankQuestionProps> = ({
  question,
  userAnswer = [],
  onAnswer,
  isPracticeMode = false,
  disabled = false,
}) => {
  const blanks = question.blankAnswers || [];
  const wordBank = question.wordBank || blanks;
  const [activeBlankIndex, setActiveBlankIndex] = useState<number>(0);

  // Initialize or align answers
  const currentAnswers: string[] = blanks.map((_, idx) => userAnswer[idx] || '');

  const handleSelectWord = (word: string) => {
    if (disabled) return;
    sound.playClick();

    const newAnswers = [...currentAnswers];
    newAnswers[activeBlankIndex] = word;
    onAnswer(newAnswers);

    // Auto-advance to next empty blank if available
    const nextEmpty = newAnswers.findIndex((ans, i) => i > activeBlankIndex && !ans);
    if (nextEmpty !== -1) {
      setActiveBlankIndex(nextEmpty);
    } else {
      const firstEmpty = newAnswers.findIndex((ans) => !ans);
      if (firstEmpty !== -1) {
        setActiveBlankIndex(firstEmpty);
      }
    }
  };

  const handleClearBlank = (blankIdx: number) => {
    if (disabled) return;
    sound.playClick();
    const newAnswers = [...currentAnswers];
    newAnswers[blankIdx] = '';
    onAnswer(newAnswers);
    setActiveBlankIndex(blankIdx);
  };

  const handleResetAll = () => {
    if (disabled) return;
    sound.playClick();
    onAnswer(blanks.map(() => ''));
    setActiveBlankIndex(0);
  };

  // Parse text with blanks: looks for placeholders like [1], [2], [...], or {{0}}, {{1}}
  const renderQuestionText = () => {
    const rawText = question.question;

    // Split text by regex that matches either {{n}} or [n] or (...) or [...]
    const parts = rawText.split(/(\{\{\d+\}\}|\[\d+\]|\[\.\.\.\]|\(\.\.\.\))/g);
    let blankCounter = 0;

    return (
      <div className="text-base sm:text-lg leading-relaxed text-slate-800 font-medium space-x-1">
        {parts.map((part, i) => {
          const isBlankPlaceholder = /(\{\{\d+\}\}|\[\d+\]|\[\.\.\.\]|\(\.\.\.\))/.test(part);

          if (isBlankPlaceholder && blankCounter < blanks.length) {
            const currentBlankIdx = blankCounter;
            blankCounter++;

            const filledWord = currentAnswers[currentBlankIdx];
            const isActive = activeBlankIndex === currentBlankIdx;
            const isCorrect = isPracticeMode && filledWord && isBlankValueMatch(filledWord, blanks[currentBlankIdx]);
            const isWrong = isPracticeMode && filledWord && !isCorrect;

            return (
              <button
                key={i}
                type="button"
                onClick={() => {
                  sound.playClick();
                  setActiveBlankIndex(currentBlankIdx);
                }}
                disabled={disabled}
                className={`inline-flex items-center gap-1.5 px-3 py-1 my-1 rounded-xl text-sm font-bold border-2 transition-all cursor-pointer ${
                  filledWord
                    ? isCorrect
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-400'
                      : isWrong
                      ? 'bg-rose-50 text-rose-800 border-rose-400'
                      : 'bg-indigo-50 text-indigo-900 border-indigo-300 shadow-xs'
                    : isActive
                    ? 'bg-amber-50 text-amber-900 border-amber-400 ring-2 ring-amber-300/40 animate-pulse'
                    : 'bg-slate-100 text-slate-400 border-dashed border-slate-300 hover:border-slate-400'
                }`}
              >
                <span className="text-[11px] px-1.5 py-0.5 rounded-md bg-white/70 text-slate-500 font-mono">
                  {currentBlankIdx + 1}
                </span>
                <span>{filledWord || '... điền vào đây ...'}</span>
                {filledWord && !disabled && (
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      handleClearBlank(currentBlankIdx);
                    }}
                    className="p-0.5 hover:bg-slate-200 rounded-full text-slate-400 hover:text-slate-700"
                    title="Xóa từ này"
                  >
                    <X className="w-3.5 h-3.5" />
                  </span>
                )}
                {isCorrect && <Check className="w-3.5 h-3.5 text-emerald-600" />}
                {isWrong && <X className="w-3.5 h-3.5 text-rose-600" />}
              </button>
            );
          }

          return <span key={i}>{part}</span>;
        })}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Question prompt with interactive blanks */}
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 border border-slate-200/90 shadow-xs">
        {renderQuestionText()}
      </div>

      {/* Word Bank section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>Ngân hàng từ / cụm từ (Nhấp để điền vào ô trống {activeBlankIndex + 1}):</span>
          </div>

          {!disabled && (
            <button
              type="button"
              onClick={handleResetAll}
              className="text-xs font-semibold text-slate-500 hover:text-rose-600 transition-colors flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Làm lại từ đầu</span>
            </button>
          )}
        </div>

        {/* Chips of candidate words */}
        <div className="flex flex-wrap gap-2.5 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
          {wordBank.map((word, wIdx) => {
            const isUsed = currentAnswers.includes(word);

            return (
              <button
                key={wIdx}
                type="button"
                onClick={() => handleSelectWord(word)}
                disabled={disabled}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border cursor-pointer ${
                  isUsed
                    ? 'bg-slate-100 text-slate-400 border-slate-200 opacity-60'
                    : 'bg-indigo-50/70 hover:bg-indigo-100 text-indigo-900 border-indigo-200 hover:border-indigo-400 hover:shadow-xs active:scale-95'
                }`}
              >
                {word}
              </button>
            );
          })}
        </div>
      </div>

      {/* Practice mode instant validation feedback */}
      {isPracticeMode && currentAnswers.some(Boolean) && (
        <div className="p-3 rounded-xl bg-indigo-50/60 border border-indigo-100 text-xs text-indigo-800 flex items-center justify-between">
          <span>
            Đã điền {currentAnswers.filter(Boolean).length}/{blanks.length} vị trí.
          </span>
          <span className="font-semibold">
            {currentAnswers.every((ans, idx) => ans.trim().toLowerCase() === blanks[idx]?.trim().toLowerCase())
              ? '🎉 Tuyệt vời! Bạn đã điền chính xác toàn bộ!'
              : '💡 Hãy kiểm tra lại các từ chưa đúng màu đỏ.'}
          </span>
        </div>
      )}
    </div>
  );
};
