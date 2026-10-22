import React from 'react';
import { DifficultyLevel } from '../types/quiz';
import { ShieldCheck, Zap, Flame, Sparkles, Check, Layers } from 'lucide-react';
import { sound } from '../utils/sound';

interface DifficultySelectorProps {
  difficulty: DifficultyLevel;
  onSelectDifficulty: (diff: DifficultyLevel) => void;
  count: number;
}

export const DifficultySelector: React.FC<DifficultySelectorProps> = ({
  difficulty,
  onSelectDifficulty,
  count,
}) => {
  // Compute breakdown for tong_hop
  const deCount = Math.max(1, Math.round(count * 0.4));
  const khoCount = Math.max(1, Math.round(count * 0.2));
  const tbCount = Math.max(1, count - deCount - khoCount);

  const levels: {
    id: DifficultyLevel;
    title: string;
    levelTag: string;
    subtitle: string;
    description: string;
    distribution: string;
    icon: React.ElementType;
    borderColor: string;
    activeBg: string;
    badgeBg: string;
    accentColor: string;
  }[] = [
    {
      id: 'de',
      title: 'Cấp độ 1: DỄ',
      levelTag: 'Nhận biết',
      subtitle: 'Nắm chắc kiến thức căn bản',
      description:
        'Kiểm tra định nghĩa, công thức cơ bản, nhận diện khái niệm và dữ kiện trực tiếp. Dành cho học sinh bắt đầu ôn luyện hoặc củng cố nền tảng.',
      distribution: `100% Dễ (${count} câu)`,
      icon: ShieldCheck,
      borderColor: 'hover:border-emerald-300 border-slate-200',
      activeBg: 'border-emerald-600 bg-emerald-50/70 ring-2 ring-emerald-500/20 shadow-md',
      badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      accentColor: 'text-emerald-600',
    },
    {
      id: 'trung_binh',
      title: 'Cấp độ 2: TRUNG BÌNH',
      levelTag: 'Thông hiểu & Vận dụng',
      subtitle: 'Hiểu bản chất & giải bài tập',
      description:
        'Áp dụng công thức vào bài toán tiêu chuẩn, suy luận 1-2 bước, phân tích tình huống và giải thích hiện tượng quen thuộc.',
      distribution: `100% Trung bình (${count} câu)`,
      icon: Zap,
      borderColor: 'hover:border-amber-300 border-slate-200',
      activeBg: 'border-amber-600 bg-amber-50/70 ring-2 ring-amber-500/20 shadow-md',
      badgeBg: 'bg-amber-100 text-amber-800 border-amber-300',
      accentColor: 'text-amber-600',
    },
    {
      id: 'kho',
      title: 'Cấp độ 3: KHÓ',
      levelTag: 'Vận dụng cao',
      subtitle: 'Tư duy logic & phân loại giỏi',
      description:
        'Bài toán tổng hợp nâng cao, ứng dụng thực tiễn, phân tích đa chiều và câu hỏi bẫy trắc nghiệm đòi hỏi suy nghĩ sắc bén.',
      distribution: `100% Khó (${count} câu)`,
      icon: Flame,
      borderColor: 'hover:border-rose-300 border-slate-200',
      activeBg: 'border-rose-600 bg-rose-50/70 ring-2 ring-rose-500/20 shadow-md',
      badgeBg: 'bg-rose-100 text-rose-800 border-rose-300',
      accentColor: 'text-rose-600',
    },
    {
      id: 'tong_hop',
      title: 'TỔNG HỢP 3 CẤP ĐỘ',
      levelTag: 'Chuẩn Đề Thi Bộ GD&ĐT',
      subtitle: 'Toàn diện: Dễ + TB + Khó',
      description:
        'Mô phỏng cấu trúc đề thi thật (40% Dễ - 40% Trung bình - 20% Khó). Rèn luyện phản xạ toàn diện và phân hóa năng lực học sinh chính xác nhất.',
      distribution: `${deCount} Dễ • ${tbCount} TB • ${khoCount} Khó`,
      icon: Sparkles,
      borderColor: 'hover:border-indigo-300 border-slate-200',
      activeBg: 'border-indigo-600 bg-indigo-50/80 ring-2 ring-indigo-500/25 shadow-md',
      badgeBg: 'bg-indigo-100 text-indigo-900 border-indigo-300',
      accentColor: 'text-indigo-600',
    },
  ];

  return (
    <div className="space-y-3">
      <div>
        <h2 className="text-lg sm:text-xl font-bold text-slate-800 flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-black shadow-xs">
            3
          </span>
          Chọn Cấp Độ Đề Ôn Tập (3 Cấp Độ & Tổng Hợp)
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Chọn cấp độ đơn lẻ hoặc đề Tổng hợp kết hợp cả 3 cấp độ theo ma trận đề thi
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {levels.map((lvl) => {
          const isSelected = difficulty === lvl.id;
          const IconComp = lvl.icon;

          return (
            <div
              key={lvl.id}
              onClick={() => {
                sound.playClick();
                onSelectDifficulty(lvl.id);
              }}
              className={`cursor-pointer text-left p-4 rounded-2xl border transition-all relative flex flex-col justify-between group ${
                isSelected ? lvl.activeBg : `bg-white ${lvl.borderColor} hover:shadow-xs`
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-xs ${
                        isSelected
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-100 text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-600'
                      }`}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${lvl.badgeBg}`}
                    >
                      {lvl.levelTag}
                    </span>
                  </div>

                  {isSelected && (
                    <span className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs shadow-xs animate-in zoom-in-50">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                  )}
                </div>

                <h3 className="font-extrabold text-slate-800 text-sm group-hover:text-indigo-600 transition-colors">
                  {lvl.title}
                </h3>
                <p className="text-xs font-semibold text-slate-600 mt-0.5">
                  {lvl.subtitle}
                </p>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {lvl.description}
                </p>
              </div>

              {/* Distribution Tag */}
              <div className="mt-3 pt-2.5 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-semibold">
                <span className="text-slate-400">Phân bổ câu:</span>
                <span className={`font-bold ${lvl.accentColor}`}>
                  {lvl.distribution}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
