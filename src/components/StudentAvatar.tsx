import React from 'react';
import {
  Laptop,
  GraduationCap,
  Bot,
  Rocket,
  Sparkles,
  User,
  Star,
  BookOpen
} from 'lucide-react';

export interface AvatarOption {
  id: string;
  name: string;
  emoji?: string;
  bgGradient: string;
  borderColor: string;
}

export const PRESET_AVATARS: AvatarOption[] = [
  {
    id: 'star',
    name: 'Ngôi sao',
    emoji: '⭐',
    bgGradient: 'from-amber-100 to-yellow-200',
    borderColor: 'border-amber-300',
  },
  {
    id: 'unicorn',
    name: 'Kỳ lân',
    emoji: '🦄',
    bgGradient: 'from-purple-100 to-pink-200',
    borderColor: 'border-purple-300',
  },
  {
    id: 'robot-ai',
    name: 'Robot',
    emoji: '🤖',
    bgGradient: 'from-blue-100 to-indigo-200',
    borderColor: 'border-blue-400',
  },
  {
    id: 'tiger',
    name: 'Hổ con',
    emoji: '🐯',
    bgGradient: 'from-orange-100 to-amber-200',
    borderColor: 'border-orange-300',
  },
  {
    id: 'dolphin',
    name: 'Cá heo',
    emoji: '🐬',
    bgGradient: 'from-cyan-100 to-blue-200',
    borderColor: 'border-cyan-300',
  },
  {
    id: 'fox-clever',
    name: 'Cáo nhỏ',
    emoji: '🦊',
    bgGradient: 'from-rose-100 to-orange-200',
    borderColor: 'border-rose-300',
  },
  {
    id: 'boy-coder',
    name: 'Nam sinh Tin học',
    emoji: '👨‍💻',
    bgGradient: 'from-blue-600 via-indigo-600 to-cyan-500',
    borderColor: 'border-blue-400',
  },
  {
    id: 'girl-coder',
    name: 'Nữ sinh Tin học',
    emoji: '👩‍💻',
    bgGradient: 'from-purple-600 via-pink-600 to-rose-500',
    borderColor: 'border-pink-400',
  },
  {
    id: 'boy-student',
    name: 'Nam sinh Chăm chỉ',
    emoji: '🧑‍🎓',
    bgGradient: 'from-emerald-600 via-teal-600 to-cyan-500',
    borderColor: 'border-emerald-400',
  },
  {
    id: 'girl-student',
    name: 'Nữ sinh Xuất sắc',
    emoji: '👩‍🎓',
    bgGradient: 'from-amber-500 via-orange-500 to-red-500',
    borderColor: 'border-amber-400',
  },
  {
    id: 'astronaut',
    name: 'Phi hành gia Số',
    emoji: '🚀',
    bgGradient: 'from-violet-700 via-purple-700 to-indigo-900',
    borderColor: 'border-purple-400',
  },
  {
    id: 'owl-genius',
    name: 'Cú vọ Thông thái',
    emoji: '🦉',
    bgGradient: 'from-yellow-600 via-amber-600 to-orange-700',
    borderColor: 'border-yellow-400',
  },
];

interface StudentAvatarProps {
  avatarIdOrUrl: string;
  name?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showRing?: boolean;
  rounded?: 'full' | '2xl';
}

export const StudentAvatar: React.FC<StudentAvatarProps> = ({
  avatarIdOrUrl,
  name = '',
  size = 'md',
  className = '',
  showRing = true,
  rounded = '2xl',
}) => {
  const sizeMap = {
    xs: 'w-7 h-7 text-xs',
    sm: 'w-9 h-9 text-base',
    md: 'w-11 h-11 text-lg',
    lg: 'w-14 h-14 text-xl',
    xl: 'w-20 h-20 text-3xl',
  };

  const roundedStyle = rounded === 'full' ? 'rounded-full' : 'rounded-2xl';
  const ringStyle = showRing ? 'ring-2 ring-white/80 shadow-xs' : '';

  // Check if it's a custom uploaded image (data URL or http URL)
  const isImage =
    avatarIdOrUrl &&
    (avatarIdOrUrl.startsWith('data:image/') ||
      avatarIdOrUrl.startsWith('http://') ||
      avatarIdOrUrl.startsWith('https://') ||
      avatarIdOrUrl.startsWith('blob:'));

  if (isImage) {
    return (
      <div
        className={`relative inline-block ${roundedStyle} overflow-hidden shrink-0 border border-slate-200 ${sizeMap[size]} ${ringStyle} ${className}`}
      >
        <img
          src={avatarIdOrUrl}
          alt={name || 'Học sinh'}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  // Find preset
  const preset = PRESET_AVATARS.find((p) => p.id === avatarIdOrUrl) || PRESET_AVATARS[0];

  return (
    <div
      className={`relative inline-flex items-center justify-center ${roundedStyle} shrink-0 bg-gradient-to-tr ${preset.bgGradient} text-slate-800 font-bold select-none ${sizeMap[size]} ${ringStyle} ${className}`}
      title={name || preset.name}
    >
      <span className="drop-shadow-xs transform hover:scale-110 transition-transform">
        {preset.emoji || '🧑‍🎓'}
      </span>
    </div>
  );
};
