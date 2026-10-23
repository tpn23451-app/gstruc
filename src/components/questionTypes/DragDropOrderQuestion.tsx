import React, { useState, useMemo } from 'react';
import { Question } from '../../types/quiz';
import { ArrowUp, ArrowDown, GripVertical, Check, X, RotateCcw } from 'lucide-react';
import { sound } from '../../utils/sound';

interface DragDropOrderQuestionProps {
  question: Question;
  userAnswer?: string[]; // array of item IDs in chosen order
  onAnswer: (answer: string[]) => void;
  isPracticeMode?: boolean;
  disabled?: boolean;
}

export const DragDropOrderQuestion: React.FC<DragDropOrderQuestionProps> = ({
  question,
  userAnswer,
  onAnswer,
  isPracticeMode = false,
  disabled = false,
}) => {
  const initialItems = useMemo(() => {
    if (question.orderItems && question.orderItems.length > 0) return question.orderItems;
    if (question.items && question.items.length > 0) {
      return question.items.map((txt, idx) => ({
        id: `step-${idx + 1}`,
        text: txt,
      }));
    }
    return [];
  }, [question.orderItems, question.items]);

  const correctOrder = useMemo(() => {
    if (question.correctOrder && question.correctOrder.length > 0) return question.correctOrder;
    return initialItems.map((it) => it.id);
  }, [question.correctOrder, initialItems]);

  // Xáo trộn ngẫu nhiên thứ tự ban đầu để học sinh cần thao tác sắp xếp
  const defaultShuffledOrder = useMemo(() => {
    const ids = initialItems.map((it) => it.id);
    if (ids.length <= 1) return ids;
    const arr = [...ids];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // Đảm bảo không trùng ngẫu nhiên 100% với đáp án đúng
    if (arr.length >= 2 && arr.every((id, idx) => id === correctOrder[idx])) {
      [arr[0], arr[1]] = [arr[1], arr[0]];
    }
    return arr;
  }, [initialItems, correctOrder, question.id]);

  // Determine current sequence
  const currentOrder: string[] =
    userAnswer && userAnswer.length === initialItems.length
      ? userAnswer
      : defaultShuffledOrder;

  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  // Move item up
  const handleMoveUp = (index: number) => {
    if (disabled || index === 0) return;
    sound.playClick();
    const newOrder = [...currentOrder];
    const temp = newOrder[index];
    newOrder[index] = newOrder[index - 1];
    newOrder[index - 1] = temp;
    onAnswer(newOrder);
  };

  // Move item down
  const handleMoveDown = (index: number) => {
    if (disabled || index === currentOrder.length - 1) return;
    sound.playClick();
    const newOrder = [...currentOrder];
    const temp = newOrder[index];
    newOrder[index] = newOrder[index + 1];
    newOrder[index + 1] = temp;
    onAnswer(newOrder);
  };

  // Drag and drop handlers
  const handleDragStart = (e: React.DragEvent, index: number) => {
    if (disabled) return;
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (disabled || draggedIndex === null || draggedIndex === index) return;

    const newOrder = [...currentOrder];
    const draggedItem = newOrder[draggedIndex];
    newOrder.splice(draggedIndex, 1);
    newOrder.splice(index, 0, draggedItem);
    setDraggedIndex(index);
    onAnswer(newOrder);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  const handleReset = () => {
    if (disabled) return;
    sound.playClick();
    onAnswer(defaultShuffledOrder);
  };

  return (
    <div className="space-y-4">
      <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs sm:text-sm text-amber-950 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <GripVertical className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            <strong>Hướng dẫn:</strong> Kéo thả hoặc dùng nút mũi tên <strong>Lên / Xuống</strong> để sắp xếp các sự kiện / bước theo thứ tự chính xác từ trên xuống dưới (1 → {currentOrder.length}).
          </span>
        </div>

        {!disabled && (
          <button
            type="button"
            onClick={handleReset}
            className="text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1 shrink-0"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Khôi phục gốc</span>
          </button>
        )}
      </div>

      {/* Ordered list */}
      <div className="space-y-2.5">
        {currentOrder.map((itemId, index) => {
          const item = initialItems.find((it) => it.id === itemId);
          if (!item) return null;

          const hasAnswered = Boolean(userAnswer && userAnswer.length === initialItems.length);
          const isCorrectPosition = isPracticeMode && hasAnswered && correctOrder[index] === itemId;
          const isWrongPosition = isPracticeMode && hasAnswered && correctOrder[index] !== itemId;

          return (
            <div
              key={itemId}
              draggable={!disabled}
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDragEnd={handleDragEnd}
              className={`p-3 sm:p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                draggedIndex === index
                  ? 'opacity-40 scale-95 border-dashed border-indigo-400 bg-indigo-50'
                  : isCorrectPosition
                  ? 'border-emerald-300 bg-emerald-50/70 text-emerald-950 shadow-xs'
                  : isWrongPosition
                  ? 'border-rose-200 bg-rose-50/50 text-rose-950 shadow-xs'
                  : 'border-slate-200 bg-white hover:border-indigo-300 hover:shadow-xs text-slate-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="cursor-grab active:cursor-grabbing text-slate-400 hover:text-slate-600 p-1"
                  title="Kéo để di chuyển"
                >
                  <GripVertical className="w-4 h-4" />
                </button>

                <span className="w-7 h-7 rounded-xl bg-indigo-600 text-white font-bold text-xs font-mono flex items-center justify-center shrink-0">
                  {index + 1}
                </span>

                <span className="text-xs sm:text-sm font-semibold">{item.text}</span>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                {isCorrectPosition && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-lg mr-1">
                    <Check className="w-3.5 h-3.5" /> Đúng vị trí
                  </span>
                )}
                {isWrongPosition && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-700 bg-rose-100/80 px-2 py-0.5 rounded-lg mr-1">
                    <X className="w-3.5 h-3.5" /> Chưa đúng
                  </span>
                )}

                {!disabled && (
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => handleMoveUp(index)}
                      disabled={index === 0}
                      className="p-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-indigo-50 hover:text-indigo-600 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                      title="Chuyển lên trên"
                    >
                      <ArrowUp className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleMoveDown(index)}
                      disabled={index === currentOrder.length - 1}
                      className="p-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-indigo-50 hover:text-indigo-600 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                      title="Chuyển xuống dưới"
                    >
                      <ArrowDown className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
