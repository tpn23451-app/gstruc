import React from 'react';
import { DifficultyLevel } from '../types/quiz';
import { ShieldCheck, Zap, Flame, Sparkles } from 'lucide-react';

interface DifficultyBadgeProps {
  difficulty: DifficultyLevel;
  size?: 'sm' | 'md' | 'lg';
  showSubtext?: boolean;
}

export const DifficultyBadge: React.FC<DifficultyBadgeProps> = ({
  difficulty,
  size = 'md',
  showSubtext = false,
}) => {
  const configs = {
    de: {
      label: 'Dễ',
      subtext: 'Nhận biết kiến thức',
      icon: ShieldCheck,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200 ring-emerald-500/10',
      badgeColor: 'bg-emerald-500',
    },
    trung_binh: {
      label: 'Trung bình',
      subtext: 'Thông hiểu & Vận dụng',
      icon: Zap,
      color: 'bg-amber-50 text-amber-700 border-amber-200 ring-amber-500/10',
      badgeColor: 'bg-amber-500',
    },
    kho: {
      label: 'Khó',
      subtext: 'Vận dụng cao & Phân tích',
      icon: Flame,
      color: 'bg-rose-50 text-rose-700 border-rose-200 ring-rose-500/10',
      badgeColor: 'bg-rose-500',
    },
    tong_hop: {
      label: 'Tổng hợp 3 cấp độ',
      subtext: 'Chuẩn cấu trúc đề thi',
      icon: Sparkles,
      color: 'bg-indigo-50 text-indigo-700 border-indigo-200 ring-indigo-500/10',
      badgeColor: 'bg-indigo-500',
    },
  };

  const config = configs[difficulty] || configs.tong_hop;
  const Icon = config.icon;

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5 gap-1',
    md: 'text-xs sm:text-sm px-2.5 py-1 gap-1.5',
    lg: 'text-sm sm:text-base px-3 py-1.5 gap-2',
  };

  const iconSizes = {
    sm: 12,
    md: 14,
    lg: 16,
  };

  return (
    <span
      className={`inline-flex items-center font-semibold rounded-full border shadow-xs ${config.color} ${sizeClasses[size]}`}
    >
      <Icon size={iconSizes[size]} className="shrink-0" />
      <span>{config.label}</span>
      {showSubtext && (
        <span className="opacity-75 font-normal ml-0.5 text-[0.85em] hidden sm:inline">
          • {config.subtext}
        </span>
      )}
    </span>
  );
};
