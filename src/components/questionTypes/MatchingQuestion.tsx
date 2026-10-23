import React, { useState, useMemo } from 'react';
import { Question } from '../../types/quiz';
import { ArrowRightLeft, Check, X, RotateCcw, Link2, Unlink } from 'lucide-react';
import { sound } from '../../utils/sound';
import { isPairMatch } from '../../utils/questionEvaluator';

interface MatchingQuestionProps {
  question: Question;
  userAnswer?: Record<string, string>; // leftId -> rightId
  onAnswer: (answer: Record<string, string>) => void;
  isPracticeMode?: boolean;
  disabled?: boolean;
}

export const MatchingQuestion: React.FC<MatchingQuestionProps> = ({
  question,
  userAnswer = {},
  onAnswer,
  isPracticeMode = false,
  disabled = false,
}) => {
  // Normalize leftItems, rightItems, correctMatches from matchingLeft/Right or pairs
  const leftItems = useMemo(() => {
    if (question.matchingLeft && question.matchingLeft.length > 0) return question.matchingLeft;
    if (question.pairs && question.pairs.length > 0) {
      return question.pairs.map((p, idx) => ({
        id: `left-${idx + 1}`,
        text: p.left,
        label: `${idx + 1}`,
      }));
    }
    return [];
  }, [question.matchingLeft, question.pairs]);

  const rightItems = useMemo(() => {
    if (question.matchingRight && question.matchingRight.length > 0) return question.matchingRight;
    if (question.pairs && question.pairs.length > 0) {
      return question.pairs.map((p, idx) => ({
        id: `right-${idx + 1}`,
        text: p.right,
        label: `CN${idx + 1}`,
      }));
    }
    return [];
  }, [question.matchingRight, question.pairs]);

  const correctMatches = useMemo(() => {
    if (question.correctMatches && Object.keys(question.correctMatches).length > 0) {
      return question.correctMatches;
    }
    if (question.pairs && question.pairs.length > 0) {
      const map: Record<string, string> = {};
      question.pairs.forEach((_, idx) => {
        map[`left-${idx + 1}`] = `right-${idx + 1}`;
      });
      return map;
    }
    return {};
  }, [question.correctMatches, question.pairs]);

  // Xáo trộn ngẫu nhiên Cột B để bài tập không bị trùng hàng ngang với Cột A
  const displayRightItems = useMemo(() => {
    if (rightItems.length <= 1) return rightItems;
    const arr = [...rightItems];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // Tránh việc vô tình xáo trộn mà vẫn trùng 100% thứ tự nối
    if (
      arr.length >= 2 &&
      leftItems.length === arr.length &&
      arr.every((r, idx) => leftItems[idx] && r.id === correctMatches[leftItems[idx].id])
    ) {
      [arr[0], arr[1]] = [arr[1], arr[0]];
    }
    return arr;
  }, [rightItems, leftItems, correctMatches, question.id]);

  const [selectedLeftId, setSelectedLeftId] = useState<string | null>(null);

  // Pick left item
  const handleSelectLeft = (leftId: string) => {
    if (disabled) return;
    sound.playClick();
    if (selectedLeftId === leftId) {
      setSelectedLeftId(null);
    } else {
      setSelectedLeftId(leftId);
    }
  };

  // Match with right item
  const handleSelectRight = (rightId: string) => {
    if (disabled) return;
    sound.playClick();

    if (!selectedLeftId) {
      // If a pair already uses this right item, allow clicking to inspect or clear
      return;
    }

    const newMatches = { ...userAnswer };

    // If another left item was already mapped to this right item, unmap it
    Object.keys(newMatches).forEach((lKey) => {
      if (newMatches[lKey] === rightId) {
        delete newMatches[lKey];
      }
    });

    // Pair active left with this right item
    newMatches[selectedLeftId] = rightId;
    onAnswer(newMatches);

    // Auto select next unmapped left item
    const nextUnmappedLeft = leftItems.find((l) => !newMatches[l.id] && l.id !== selectedLeftId);
    if (nextUnmappedLeft) {
      setSelectedLeftId(nextUnmappedLeft.id);
    } else {
      setSelectedLeftId(null);
    }
  };

  // Remove a specific match
  const handleRemoveMatch = (leftId: string) => {
    if (disabled) return;
    sound.playClick();
    const newMatches = { ...userAnswer };
    delete newMatches[leftId];
    onAnswer(newMatches);
    setSelectedLeftId(leftId);
  };

  // Reset all matches
  const handleResetAll = () => {
    if (disabled) return;
    sound.playClick();
    onAnswer({});
    setSelectedLeftId(null);
  };

  // Visual palette colors for connected pairs
  const pairColors = [
    { bg: 'bg-blue-50 border-blue-300 text-blue-900', badge: 'bg-blue-600 text-white' },
    { bg: 'bg-emerald-50 border-emerald-300 text-emerald-900', badge: 'bg-emerald-600 text-white' },
    { bg: 'bg-violet-50 border-violet-300 text-violet-900', badge: 'bg-violet-600 text-white' },
    { bg: 'bg-amber-50 border-amber-300 text-amber-900', badge: 'bg-amber-600 text-white' },
    { bg: 'bg-rose-50 border-rose-300 text-rose-900', badge: 'bg-rose-600 text-white' },
    { bg: 'bg-teal-50 border-teal-300 text-teal-900', badge: 'bg-teal-600 text-white' },
    { bg: 'bg-indigo-50 border-indigo-300 text-indigo-900', badge: 'bg-indigo-600 text-white' },
  ];

  return (
    <div className="space-y-6">
      {/* Question header description */}
      <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100 flex items-center justify-between gap-3">
        <div className="text-sm font-semibold text-indigo-950 flex items-center gap-2">
          <ArrowRightLeft className="w-4 h-4 text-indigo-600 shrink-0" />
          <span>
            {selectedLeftId
              ? '👉 Bước 2: Hãy nhấp vào một mục tương ứng ở CỘT BÊN PHẢI để ghép đôi!'
              : '👉 Bước 1: Hãy nhấp chọn một mục ở CỘT BÊN TRÁI trước.'}
          </span>
        </div>

        {!disabled && Object.keys(userAnswer).length > 0 && (
          <button
            type="button"
            onClick={handleResetAll}
            className="text-xs font-semibold text-slate-500 hover:text-rose-600 transition-colors flex items-center gap-1 shrink-0"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Xóa ghép nối</span>
          </button>
        )}
      </div>

      {/* Two columns layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* LEFT COLUMN */}
        <div className="space-y-3">
          <div className="text-xs font-bold text-slate-600 uppercase tracking-wider px-1 flex items-center justify-between">
            <span>Cột A (Khái niệm / Lĩnh vực)</span>
            <span className="text-[11px] text-indigo-600 font-semibold">
              Đã ghép: {Object.keys(userAnswer).length}/{leftItems.length}
            </span>
          </div>

          <div className="space-y-2.5">
            {leftItems.map((item, idx) => {
              const matchedRightId = userAnswer[item.id];
              const isSelected = selectedLeftId === item.id;
              const colorTheme = pairColors[idx % pairColors.length];

              const isPracticeAnswered = isPracticeMode && matchedRightId;
              const isCorrect = isPracticeAnswered && isPairMatch(item.id, matchedRightId, correctMatches, rightItems);
              const isWrong = isPracticeAnswered && !isCorrect;
              const matchedItem = rightItems.find((r) => r.id === matchedRightId);

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelectLeft(item.id)}
                  disabled={disabled}
                  className={`w-full p-3 sm:p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between gap-3 cursor-pointer ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-50 ring-2 ring-indigo-500/30 shadow-xs'
                      : matchedRightId
                      ? isCorrect
                        ? 'border-emerald-300 bg-emerald-50/70 text-emerald-950 font-semibold'
                        : isWrong
                        ? 'border-rose-300 bg-rose-50/70 text-rose-950'
                        : `${colorTheme.bg} font-medium`
                      : 'border-slate-200 bg-white hover:border-indigo-300 hover:bg-slate-50 text-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold">{item.text}</span>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    {matchedRightId ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-lg bg-white/80 border border-slate-200 text-slate-700">
                        <Link2 className="w-3 h-3 text-indigo-600" />
                        Ghép: {matchedItem?.label || String.fromCharCode(65 + (rightItems.findIndex(r => r.id === matchedRightId) >= 0 ? rightItems.findIndex(r => r.id === matchedRightId) : 0))}
                      </span>
                    ) : (
                      isSelected && (
                        <span className="text-[11px] font-bold text-indigo-600 animate-pulse">
                          Đang chọn...
                        </span>
                      )
                    )}

                    {matchedRightId && !disabled && (
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveMatch(item.id);
                        }}
                        className="p-1 hover:bg-slate-200 rounded-md text-slate-400 hover:text-rose-600"
                        title="Hủy ghép cặp này"
                      >
                        <Unlink className="w-3.5 h-3.5" />
                      </span>
                    )}

                    {isCorrect && <Check className="w-4 h-4 text-emerald-600" />}
                    {isWrong && <X className="w-4 h-4 text-rose-600" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-3">
          <div className="text-xs font-bold text-slate-600 uppercase tracking-wider px-1">
            <span>Cột B (Ví dụ / Nội dung tương ứng)</span>
          </div>

          <div className="space-y-2.5">
            {displayRightItems.map((item, idx) => {
              // Check if any left item is mapped to this right item
              const pairedLeftKey = Object.keys(userAnswer).find((k) => userAnswer[k] === item.id);
              const isPaired = Boolean(pairedLeftKey);
              const leftIdx = leftItems.findIndex((l) => l.id === pairedLeftKey);
              const colorTheme = leftIdx >= 0 ? pairColors[leftIdx % pairColors.length] : null;

              const isPracticeAnswered = isPracticeMode && pairedLeftKey;
              const isCorrect = isPracticeAnswered && isPairMatch(pairedLeftKey, item.id, correctMatches, rightItems);
              const isWrong = isPracticeAnswered && !isCorrect;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelectRight(item.id)}
                  disabled={disabled}
                  className={`w-full p-3 sm:p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between gap-3 cursor-pointer ${
                    isPaired
                      ? isCorrect
                        ? 'border-emerald-300 bg-emerald-50/70 text-emerald-950 font-semibold'
                        : isWrong
                        ? 'border-rose-300 bg-rose-50/70 text-rose-950'
                        : colorTheme
                        ? `${colorTheme.bg} font-medium`
                        : 'border-indigo-300 bg-indigo-50/70'
                      : selectedLeftId
                      ? 'border-indigo-300 bg-indigo-50/40 hover:bg-indigo-100/60 hover:border-indigo-500 text-slate-800'
                      : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0 uppercase">
                      {item.label || String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-xs sm:text-sm">{item.text}</span>
                  </div>

                  {isPaired && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-lg bg-white/80 border border-slate-200 text-slate-700 shrink-0">
                      Nối với ({leftIdx + 1})
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Summary of matching pairs */}
      {Object.keys(userAnswer).length > 0 && (
        <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
          <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">
            Các cặp đã nối:
          </div>
          <div className="flex flex-wrap gap-2">
            {Object.entries(userAnswer).map(([lId, rId]) => {
              const lItem = leftItems.find((l) => l.id === lId);
              const rItem = rightItems.find((r) => r.id === rId);
              const isCorrect = isPracticeMode && isPairMatch(lId, rId, correctMatches, rightItems);

              return (
                <div
                  key={lId}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold border ${
                    isPracticeMode
                      ? isCorrect
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                        : 'bg-rose-50 text-rose-800 border-rose-300'
                      : 'bg-indigo-50 text-indigo-900 border-indigo-200'
                  }`}
                >
                  <span>{lItem?.text}</span>
                  <ArrowRightLeft className="w-3 h-3 text-slate-400" />
                  <span>{rItem?.text}</span>
                  {!disabled && (
                    <button
                      type="button"
                      onClick={() => handleRemoveMatch(lId)}
                      className="p-0.5 hover:bg-slate-200 rounded-full text-slate-400 hover:text-slate-700 ml-1"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
