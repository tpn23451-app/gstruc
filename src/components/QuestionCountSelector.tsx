import React from 'react';
import { Clock, HelpCircle } from 'lucide-react';
import { sound } from '../utils/sound';

interface QuestionCountSelectorProps {
  count: number;
  onSelectCount: (count: number) => void;
}

const PRESET_COUNTS = [5, 10, 15, 20, 25, 30];

export const QuestionCountSelector: React.FC<QuestionCountSelectorProps> = ({
  count,
  onSelectCount,
}) => {
  const estimatedMinutes = Math.max(1, Math.round(count * 1.5));

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    if (isNaN(val)) {
      onSelectCount(5);
    } else {
      const clamped = Math.min(50, Math.max(1, val));
      onSelectCount(clamped);
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-800 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-black shadow-xs">
              2
            </span>
            Chọn Số Câu Hỏi Ôn Tập
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Lựa chọn số lượng câu hỏi phù hợp với thời gian và mục tiêu ôn luyện của bạn
          </p>
        </div>

        {/* Estimated time */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-semibold self-start sm:self-auto">
          <Clock className="w-3.5 h-3.5 text-amber-600" />
          <span>Thời gian ước tính: ~{estimatedMinutes} phút</span>
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
        {PRESET_COUNTS.map((preset) => {
          const isSelected = count === preset;
          return (
            <button
              key={preset}
              type="button"
              onClick={() => {
                sound.playClick();
                onSelectCount(preset);
              }}
              className={`py-3 px-2 rounded-2xl border text-center transition-all relative ${
                isSelected
                  ? 'border-indigo-600 bg-indigo-600 text-white shadow-md shadow-indigo-600/20 font-bold scale-[1.02]'
                  : 'border-slate-200 bg-white hover:border-indigo-300 text-slate-700 hover:bg-indigo-50/40 font-semibold'
              }`}
            >
              <div className="text-lg sm:text-xl font-extrabold font-['Lexend']">
                {preset}
              </div>
              <div
                className={`text-[11px] ${
                  isSelected ? 'text-indigo-100' : 'text-slate-400'
                }`}
              >
                câu hỏi
              </div>
              {preset === 10 && (
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[9px] px-1.5 py-0.2 rounded-full bg-amber-400 text-amber-950 font-bold uppercase tracking-wider shadow-xs whitespace-nowrap">
                  Phổ biến
                </span>
              )}
              {preset === 20 && (
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-500 text-white font-bold uppercase tracking-wider shadow-xs whitespace-nowrap">
                  Thi học kỳ
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Custom input slider/field */}
      <div className="bg-white p-3.5 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
        <div className="flex items-center gap-2 text-slate-600">
          <HelpCircle className="w-4 h-4 text-slate-400 shrink-0" />
          <span>Tùy chỉnh số lượng câu hỏi khác (từ 1 đến 50 câu):</span>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="range"
            min={1}
            max={50}
            value={count}
            onChange={handleCustomChange}
            className="w-32 sm:w-40 accent-indigo-600 cursor-pointer"
          />
          <div className="flex items-center gap-1.5">
            <input
              type="number"
              min={1}
              max={50}
              value={count}
              onChange={handleCustomChange}
              className="w-16 px-2.5 py-1 text-center font-bold text-slate-800 bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:bg-white text-sm"
            />
            <span className="text-slate-500 text-xs font-semibold">câu</span>
          </div>
        </div>
      </div>
    </div>
  );
};
