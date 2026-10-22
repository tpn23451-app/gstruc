import React from 'react';
import { QuizMode } from '../types/quiz';
import { Timer, Lightbulb, Check } from 'lucide-react';
import { sound } from '../utils/sound';

interface ModeSelectorProps {
  mode: QuizMode;
  onSelectMode: (mode: QuizMode) => void;
}

export const ModeSelector: React.FC<ModeSelectorProps> = ({ mode, onSelectMode }) => {
  return (
    <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-bold text-slate-800">
            Chọn Phương Thức Làm Bài
          </h3>
          <p className="text-xs text-slate-500">
            Tùy chọn phong cách học tập phù hợp với mục tiêu của học sinh
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Exam Mode */}
        <div
          onClick={() => {
            sound.playClick();
            onSelectMode('exam');
          }}
          className={`cursor-pointer p-3.5 rounded-xl border transition-all flex items-start gap-3 relative ${
            mode === 'exam'
              ? 'border-indigo-600 bg-indigo-50/70 ring-2 ring-indigo-500/20 shadow-xs'
              : 'border-slate-200 hover:border-indigo-200 bg-white'
          }`}
        >
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
              mode === 'exam'
                ? 'bg-indigo-600 text-white'
                : 'bg-slate-100 text-slate-600'
            }`}
          >
            <Timer className="w-5 h-5" />
          </div>
          <div className="flex-1 pr-6">
            <div className="flex items-center gap-2">
              <h4 className="font-bold text-sm text-slate-800">
                Chế độ Thi Thử (Bấm giờ)
              </h4>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-indigo-100 text-indigo-700">
                Chuẩn thi
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Có đồng hồ đếm giờ, làm toàn bộ đề rồi mới nộp bài để xem điểm số và phân tích xếp loại.
            </p>
          </div>
          {mode === 'exam' && (
            <span className="absolute top-3 right-3 w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </span>
          )}
        </div>

        {/* Practice Mode */}
        <div
          onClick={() => {
            sound.playClick();
            onSelectMode('practice');
          }}
          className={`cursor-pointer p-3.5 rounded-xl border transition-all flex items-start gap-3 relative ${
            mode === 'practice'
              ? 'border-indigo-600 bg-indigo-50/70 ring-2 ring-indigo-500/20 shadow-xs'
              : 'border-slate-200 hover:border-indigo-200 bg-white'
          }`}
        >
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
              mode === 'practice'
                ? 'bg-amber-500 text-white'
                : 'bg-slate-100 text-slate-600'
            }`}
          >
            <Lightbulb className="w-5 h-5" />
          </div>
          <div className="flex-1 pr-6">
            <div className="flex items-center gap-2">
              <h4 className="font-bold text-sm text-slate-800">
                Chế độ Học Tập (Xem giải thích ngay)
              </h4>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-amber-100 text-amber-800">
                Gợi ý & Mẹo
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Không tính thời gian. Trả lời câu nào xem ngay đáp án đúng và lời giải chi tiết để ghi nhớ bài học.
            </p>
          </div>
          {mode === 'practice' && (
            <span className="absolute top-3 right-3 w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
