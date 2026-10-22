import React, { useState } from 'react';
import { Question, WrongQuestionRecord } from '../types/quiz';
import {
  BookOpen,
  X,
  Play,
  CheckCircle2,
  Trash2,
  Sparkles,
  HelpCircle,
  AlertTriangle,
  RotateCcw
} from 'lucide-react';
import { sound } from '../utils/sound';

interface MistakeNotebookModalProps {
  isOpen: boolean;
  onClose: () => void;
  mistakes: WrongQuestionRecord[];
  onRemoveMistake: (questionId: string) => void;
  onClearAll: () => void;
  onPracticeMistakes: (questions: Question[]) => void;
}

export const MistakeNotebookModal: React.FC<MistakeNotebookModalProps> = ({
  isOpen,
  onClose,
  mistakes,
  onRemoveMistake,
  onClearAll,
  onPracticeMistakes,
}) => {
  const [filterGrade, setFilterGrade] = useState<string>('all');

  if (!isOpen) return null;

  const filteredMistakes = mistakes.filter((m) => {
    if (filterGrade === 'all') return true;
    return String(m.gradeNumber) === filterGrade;
  });

  const handleStartPractice = () => {
    sound.playClick();
    const questions = filteredMistakes.map((m) => m.question);
    onPracticeMistakes(questions);
  };

  const optionLetters = ['A', 'B', 'C', 'D'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-slate-100 flex items-center justify-between gap-4 bg-linear-to-r from-rose-50/70 via-amber-50/40 to-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-600 text-white flex items-center justify-center shadow-md shadow-rose-600/20">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  Sổ Tay Câu Sai & Lỗ Hổng Kiến Thức
                </h2>
                <span className="px-2.5 py-0.5 rounded-full bg-rose-500 text-white font-extrabold text-xs">
                  {mistakes.length} câu
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Tự động lưu lại các câu em đã trả lời sai để luyện tập đến khi thành thạo
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action bar */}
        <div className="px-4 sm:px-6 py-3 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
            <span>Lọc theo khối:</span>
            <select
              value={filterGrade}
              onChange={(e) => setFilterGrade(e.target.value)}
              className="px-2 py-1 rounded-lg border border-slate-200 bg-white text-slate-700 text-xs font-medium"
            >
              <option value="all">Tất cả các khối</option>
              <option value="3">Khối 3</option>
              <option value="4">Khối 4</option>
              <option value="5">Khối 5</option>
              <option value="6">Khối 6</option>
              <option value="7">Khối 7</option>
              <option value="8">Khối 8</option>
              <option value="9">Khối 9</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            {mistakes.length > 0 && (
              <button
                type="button"
                onClick={() => {
                  if (confirm('Bạn có chắc chắn muốn xóa toàn bộ danh sách câu sai?')) {
                    onClearAll();
                  }
                }}
                className="text-xs font-semibold text-slate-500 hover:text-rose-600 px-2 py-1 flex items-center gap-1 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Xóa hết</span>
              </button>
            )}

            <button
              type="button"
              disabled={filteredMistakes.length === 0}
              onClick={handleStartPractice}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 disabled:opacity-40 text-white font-bold text-xs sm:text-sm shadow-md shadow-rose-600/20 transition-all cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Luyện tập ngay ({filteredMistakes.length} câu)</span>
            </button>
          </div>
        </div>

        {/* Content list */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1">
          {filteredMistakes.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-slate-800 text-base">
                Không có câu hỏi nào cần ôn lại!
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Khi làm bài kiểm tra nếu có câu chưa đúng, hệ thống sẽ tự động lưu vào đây để em ôn tập lại bất kỳ lúc nào.
              </p>
            </div>
          ) : (
            filteredMistakes.map((record, idx) => {
              const q = record.question;
              return (
                <div
                  key={record.id || idx}
                  className="p-4 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-3 hover:border-slate-300 transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-md bg-rose-100 text-rose-800 font-extrabold text-[11px]">
                          Câu {idx + 1}
                        </span>
                        <span className="text-xs font-semibold text-slate-500">
                          {record.lessonTitle}
                        </span>
                      </div>
                      <p className="text-sm font-bold text-slate-900 leading-snug">
                        {q.question}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => onRemoveMistake(q.id)}
                      className="text-xs font-semibold text-slate-400 hover:text-emerald-600 p-1 rounded-lg hover:bg-emerald-50 transition-colors flex items-center gap-1 shrink-0"
                      title="Đánh dấu đã hiểu để xóa khỏi sổ tay"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="hidden sm:inline">Đã hiểu</span>
                    </button>
                  </div>

                  {/* Options if multiple choice */}
                  {(!q.type || q.type === 'multiple_choice') && q.options && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {q.options.map((opt, optIdx) => {
                        const isCorrect = optIdx === q.correctAnswer;
                        const isUserChoice = optIdx === record.userAnswer;

                        return (
                          <div
                            key={optIdx}
                            className={`p-2 rounded-xl border flex items-center gap-2 ${
                              isCorrect
                                ? 'border-emerald-300 bg-emerald-50/80 text-emerald-950 font-semibold'
                                : isUserChoice
                                ? 'border-rose-300 bg-rose-50/80 text-rose-950 line-through'
                                : 'border-slate-100 bg-slate-50 text-slate-600'
                            }`}
                          >
                            <span className="font-bold">{optionLetters[optIdx]}.</span>
                            <span>{opt}</span>
                            {isCorrect && (
                              <span className="ml-auto text-[10px] bg-emerald-200 text-emerald-800 font-bold px-1.5 py-0.5 rounded">
                                Đáp án đúng
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Explanation */}
                  <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-950 space-y-1">
                    <div className="font-bold flex items-center gap-1.5 text-amber-900">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Hướng dẫn chuẩn SGK:</span>
                    </div>
                    <p className="leading-relaxed">{q.explanation}</p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
