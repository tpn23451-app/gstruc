import React from 'react';
import { GraduationCap, History, Volume2, VolumeX, Sparkles, BookOpenCheck, UserCheck, BookOpen, Trophy } from 'lucide-react';
import { sound } from '../utils/sound';
import { StudentProfile } from '../types/quiz';
import { StudentAvatar } from './StudentAvatar';

interface HeaderProps {
  onOpenHistory: () => void;
  historyCount: number;
  onGoHome: () => void;
  isHome: boolean;
  soundEnabled: boolean;
  onToggleSound: () => void;
  studentProfile?: StudentProfile;
  onOpenProfileModal?: () => void;
  onOpenMistakes?: () => void;
  mistakesCount?: number;
  onOpenScorebook?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenHistory,
  historyCount,
  onGoHome,
  isHome,
  soundEnabled,
  onToggleSound,
  studentProfile,
  onOpenProfileModal,
  onOpenMistakes,
  mistakesCount = 0,
  onOpenScorebook,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        {/* Logo and Brand */}
        <button
          onClick={onGoHome}
          className="flex items-center gap-3 text-left group transition-transform active:scale-95 shrink-0"
          title="Về trang chọn bài học"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base sm:text-xl tracking-tight bg-gradient-to-r from-blue-700 via-indigo-800 to-slate-900 bg-clip-text text-transparent font-['Lexend']">
                GIA SƯ TIN HỌC
              </span>
              <span className="hidden xs:inline-block text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 border border-indigo-300">
                {studentProfile?.grade || 'Lớp 3 - 9'}
              </span>
            </div>
            <p className="text-[11px] sm:text-xs font-semibold text-indigo-700 flex items-center gap-1">
              <span>Tác giả:</span>
              <strong className="text-slate-800 font-bold">GV: Ms. Trúc Tin Học</strong>
            </p>
          </div>
        </button>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          {/* Student Profile Quick Badge & Class Selector */}
          {studentProfile && onOpenProfileModal && (
            <button
              onClick={() => {
                sound.playClick();
                onOpenProfileModal();
              }}
              className="flex items-center gap-2 px-2.5 py-1 sm:py-1.5 rounded-xl border border-indigo-200 bg-gradient-to-r from-indigo-50/80 to-blue-50/80 hover:from-indigo-100 hover:to-blue-100 text-slate-800 transition-all shadow-2xs group"
              title="Nhấn để đổi tên học sinh hoặc chọn lớp"
            >
              <StudentAvatar
                avatarIdOrUrl={studentProfile.avatar}
                name={studentProfile.fullName}
                size="xs"
              />
              <div className="text-left hidden sm:block max-w-[130px] md:max-w-[170px]">
                <div className="text-xs font-bold text-slate-800 truncate leading-tight group-hover:text-indigo-700">
                  {studentProfile.fullName || 'Học sinh'}
                </div>
                <div className="text-[10px] font-bold text-indigo-600 leading-tight">
                  Lớp: <span className="underline decoration-indigo-400">{studentProfile.className || '8A1'}</span>
                </div>
              </div>
              <span className="sm:hidden text-xs font-bold text-indigo-700">
                {studentProfile.className || 'Lớp 8'}
              </span>
            </button>
          )}

          {!isHome && (
            <button
              onClick={() => {
                sound.playClick();
                onGoHome();
              }}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg border border-slate-200 transition-colors"
            >
              <BookOpenCheck className="w-4 h-4 text-indigo-600" />
              <span className="hidden md:inline">Đổi bài học</span>
            </button>
          )}

          {/* Sound Toggle */}
          <button
            onClick={onToggleSound}
            className="p-1.5 sm:p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors border border-transparent hover:border-slate-200"
            title={soundEnabled ? 'Tắt âm thanh hiệu ứng' : 'Bật âm thanh hiệu ứng'}
            aria-label="Toggle Sound"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
            ) : (
              <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
            )}
          </button>

          {/* Sổ tay câu sai */}
          {onOpenMistakes && (
            <button
              onClick={() => {
                sound.playClick();
                onOpenMistakes();
              }}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg border border-rose-200 hover:border-rose-300 bg-rose-50/70 hover:bg-rose-100 text-rose-700 text-xs sm:text-sm font-bold transition-all shadow-2xs"
              title="Mở Sổ tay câu sai để ôn lại các kiến thức bị hổng"
            >
              <BookOpen className="w-4 h-4 text-rose-600" />
              <span className="hidden sm:inline">Câu sai</span>
              {mistakesCount > 0 && (
                <span className="px-1.5 py-0.2 rounded-full bg-rose-600 text-white text-[10px] font-black">
                  {mistakesCount}
                </span>
              )}
            </button>
          )}

          {/* Bảng Vàng & Sổ Điểm */}
          {onOpenScorebook && (
            <button
              onClick={() => {
                sound.playClick();
                onOpenScorebook();
              }}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg border border-amber-300 hover:border-amber-400 bg-amber-50 hover:bg-amber-100/80 text-amber-900 text-xs sm:text-sm font-bold transition-all shadow-2xs"
              title="Mở Bảng Vàng Vinh Danh & Sổ Lưu Điểm Học Sinh"
            >
              <Trophy className="w-4 h-4 text-amber-600" />
              <span className="hidden sm:inline">Bảng Vàng</span>
            </button>
          )}

          {/* History Modal Trigger */}
          <button
            onClick={() => {
              sound.playClick();
              onOpenHistory();
            }}
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg border border-slate-200 hover:border-indigo-300 bg-white hover:bg-indigo-50/50 text-slate-700 hover:text-indigo-700 text-xs sm:text-sm font-medium transition-all shadow-xs"
          >
            <History className="w-4 h-4 text-slate-500" />
            <span className="hidden xs:inline">Lịch sử</span>
            {historyCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-indigo-600 text-white text-[11px] font-bold flex items-center justify-center">
                {historyCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
