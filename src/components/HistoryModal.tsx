import React from 'react';
import { QuizSession } from '../types/quiz';
import { DifficultyBadge } from './DifficultyBadge';
import { History, X, Trash2, RotateCcw, Eye, Trophy, Calendar, Clock } from 'lucide-react';
import { sound } from '../utils/sound';

interface HistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  history: QuizSession[];
  onSelectSession: (session: QuizSession) => void;
  onClearHistory: () => void;
}

export const HistoryModal: React.FC<HistoryModalProps> = ({
  isOpen,
  onClose,
  history,
  onSelectSession,
  onClearHistory,
}) => {
  if (!isOpen) return null;

  const formatDate = (timestamp: number) => {
    const d = new Date(timestamp);
    return `${d.toLocaleDateString('vi-VN')} ${d.toLocaleTimeString('vi-VN', {
      hour: '2-digit',
      minute: '2-digit',
    })}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200 space-y-4 max-h-[85vh] flex flex-col animate-in zoom-in-95">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
              <History className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-slate-800">
                Lịch Sử Ôn Tập & Đề Thi
              </h3>
              <p className="text-xs text-slate-500">
                Theo dõi tiến độ học tập và xem lại các đề đã làm ({history.length} bài)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List of history items */}
        <div className="flex-1 overflow-y-auto pr-1 space-y-3">
          {history.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-2xl border border-slate-200 hover:border-indigo-300 bg-white hover:bg-slate-50/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs"
            >
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">
                    {item.subject || 'Tổng hợp'}
                  </span>
                  <span className="text-slate-300">•</span>
                  <DifficultyBadge difficulty={item.difficultyMode} size="sm" />
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {formatDate(item.startTime)}
                  </span>
                </div>
                <h4 className="font-bold text-sm text-slate-800 line-clamp-1">
                  {item.lessonTitle}
                </h4>
                <div className="text-xs text-slate-500">
                  Số câu: <strong>{item.totalQuestions} câu</strong> • Thời gian: <strong>{Math.round(item.timeSpentSeconds / 60)} phút</strong>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                <div className="text-right">
                  <div className="text-base sm:text-lg font-black text-indigo-700 font-['Lexend']">
                    {item.score.toFixed(1)}/10
                  </div>
                  <div className="text-[11px] font-semibold text-slate-500">
                    {item.percentage}% đúng
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    onSelectSession(item);
                    onClose();
                  }}
                  className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Xem lại</span>
                </button>
              </div>
            </div>
          ))}

          {history.length === 0 && (
            <div className="py-12 text-center text-slate-400 space-y-2">
              <Trophy className="w-12 h-12 text-slate-300 mx-auto" />
              <p className="font-semibold text-sm text-slate-600">
                Chưa có lịch sử làm bài nào
              </p>
              <p className="text-xs text-slate-400">
                Hãy bắt đầu tạo câu hỏi và làm bài thi đầu tiên của bạn nhé!
              </p>
            </div>
          )}
        </div>

        {/* Footer with Clear button */}
        {history.length > 0 && (
          <div className="flex items-center justify-between pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={() => {
                if (window.confirm('Bạn có chắc muốn xóa toàn bộ lịch sử làm bài không?')) {
                  onClearHistory();
                }
              }}
              className="text-xs font-semibold text-rose-600 hover:text-rose-700 flex items-center gap-1 p-1 rounded-lg"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Xóa toàn bộ lịch sử</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold"
            >
              Đóng
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
