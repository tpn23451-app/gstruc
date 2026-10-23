import React from 'react';
import {
  GraduationCap,
  History,
  Volume2,
  VolumeX,
  Sparkles,
  BookOpenCheck,
  UserCheck,
  BookOpen,
  Trophy,
  ShieldCheck,
  Lock,
  Play,
  Loader2
} from 'lucide-react';
import { sound } from '../utils/sound';
import { StudentProfile } from '../types/quiz';
import { StudentAvatar } from './StudentAvatar';

export interface HeaderSummaryInfo {
  lesson: string;
  count: number;
  difficulty: string;
  source: string;
}

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
  onOpenAdminStudio?: () => void;
  isAdminLoggedIn?: boolean;

  // Nút cố định trên thanh tiêu đề thay thế thanh trôi nổi ở dưới
  onStartGenerateQuiz?: () => void;
  isGenerating?: boolean;
  canStartQuiz?: boolean;
  summaryInfo?: HeaderSummaryInfo;
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
  onOpenAdminStudio,
  isAdminLoggedIn = false,
  onStartGenerateQuiz,
  isGenerating = false,
  canStartQuiz = true,
  summaryInfo,
}) => {
  return (
    <header className="no-print sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-2 sm:gap-3">
        {/* Logo and Brand */}
        <button
          onClick={onGoHome}
          className="flex items-center gap-2.5 sm:gap-3 text-left group transition-transform active:scale-95 shrink-0"
          title="Về trang chọn bài học"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-sm sm:text-lg tracking-tight bg-gradient-to-r from-blue-700 via-indigo-800 to-slate-900 bg-clip-text text-transparent font-['Lexend']">
                GIA SƯ TIN HỌC
              </span>
              <span className="hidden md:inline-block text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 border border-indigo-300">
                {studentProfile?.grade || 'Lớp 3 - 9'}
              </span>
            </div>
            <p className="text-[10px] sm:text-xs font-semibold text-indigo-700 flex items-center gap-1">
              <span>Tác giả:</span>
              <strong className="text-slate-800 font-bold">GV: Ms. Trúc Tin Học</strong>
            </p>
          </div>
        </button>

        {/* NÚT CỐ ĐỊNH TRÊN THANH TIÊU ĐỀ: TẠO CÂU HỎI & BẮT ĐẦU ÔN TẬP (NẰM CHÍNH GIỮA / NỔI BẬT) */}
        {isHome && onStartGenerateQuiz && (
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                onStartGenerateQuiz();
              }}
              disabled={isGenerating || !canStartQuiz}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-black text-xs sm:text-sm shadow-md shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shrink-0 animate-pulse hover:animate-none border border-indigo-400/30"
              title={summaryInfo ? `Bắt đầu: ${summaryInfo.lesson} (${summaryInfo.count} câu)` : 'Tạo câu hỏi & Bắt đầu ôn tập'}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white shrink-0" />
                  <span className="whitespace-nowrap">Đang tạo câu hỏi...</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white shrink-0" />
                  <span className="hidden sm:inline whitespace-nowrap">TẠO CÂU HỎI & BẮT ĐẦU ÔN TẬP</span>
                  <span className="sm:hidden whitespace-nowrap">BẮT ĐẦU ÔN TẬP</span>
                  {summaryInfo && (
                    <span className="hidden xl:inline-block px-1.5 py-0.5 rounded-md bg-white/20 text-[10px] font-bold text-cyan-200">
                      {summaryInfo.count} câu
                    </span>
                  )}
                </>
              )}
            </button>
          </div>
        )}

        {/* Action Controls */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Student Profile Quick Badge & Class Selector */}
          {studentProfile && onOpenProfileModal && (
            <button
              onClick={() => {
                sound.playClick();
                onOpenProfileModal();
              }}
              className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-xl border border-indigo-200 bg-gradient-to-r from-indigo-50/80 to-blue-50/80 hover:from-indigo-100 hover:to-blue-100 text-slate-800 transition-all shadow-2xs group"
              title="Nhấn để đổi tên học sinh hoặc chọn lớp"
            >
              <StudentAvatar
                avatarIdOrUrl={studentProfile.avatar}
                name={studentProfile.fullName}
                size="xs"
              />
              <div className="text-left hidden lg:block max-w-[120px]">
                <div className="text-xs font-bold text-slate-800 truncate leading-tight group-hover:text-indigo-700">
                  {studentProfile.fullName || 'Học sinh'}
                </div>
                <div className="text-[10px] font-bold text-indigo-600 leading-tight">
                  Lớp: <span className="underline decoration-indigo-400">{studentProfile.className || '8A1'}</span>
                </div>
              </div>
              <span className="lg:hidden text-[11px] font-bold text-indigo-700">
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
            className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors border border-transparent hover:border-slate-200"
            title={soundEnabled ? 'Tắt âm thanh hiệu ứng' : 'Bật âm thanh hiệu ứng'}
            aria-label="Toggle Sound"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-indigo-600" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-400" />
            )}
          </button>

          {/* Sổ tay câu sai */}
          {onOpenMistakes && (
            <button
              onClick={() => {
                sound.playClick();
                onOpenMistakes();
              }}
              className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-lg border border-rose-200 hover:border-rose-300 bg-rose-50/70 hover:bg-rose-100 text-rose-700 text-xs font-bold transition-all shadow-2xs"
              title="Mở Sổ tay câu sai để ôn lại các kiến thức bị hổng"
            >
              <BookOpen className="w-3.5 h-3.5 text-rose-600" />
              <span className="hidden xl:inline">Câu sai</span>
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
              className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-lg border border-amber-300 hover:border-amber-400 bg-amber-50 hover:bg-amber-100/80 text-amber-900 text-xs font-bold transition-all shadow-2xs"
              title="Mở Bảng Vàng Vinh Danh & Sổ Lưu Điểm Học Sinh"
            >
              <Trophy className="w-3.5 h-3.5 text-amber-600" />
              <span className="hidden xl:inline">Bảng Vàng</span>
            </button>
          )}

          {/* Admin Studio Trigger (Chỉ dành cho saohom2002@gmail.com) */}
          {onOpenAdminStudio && (
            <button
              onClick={() => {
                sound.playClick();
                onOpenAdminStudio();
              }}
              className={`inline-flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-lg border text-xs font-bold transition-all shadow-2xs cursor-pointer ${
                isAdminLoggedIn
                  ? 'border-indigo-400 bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-indigo-500/20'
                  : 'border-indigo-200 hover:border-indigo-400 bg-indigo-50/80 hover:bg-indigo-100/80 text-indigo-900'
              }`}
              title={isAdminLoggedIn ? 'Mở Admin Studio (Đã đăng nhập)' : 'Mở Studio Quản trị (Dành riêng cho saohom2002@gmail.com)'}
            >
              <ShieldCheck className={`w-3.5 h-3.5 ${isAdminLoggedIn ? 'text-amber-300 stroke-[2.5]' : 'text-indigo-600'}`} />
              <span className="hidden md:inline">Studio Admin</span>
              {isAdminLoggedIn ? (
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              ) : (
                <span className="hidden sm:inline px-1 py-0.2 rounded-md bg-indigo-200 text-indigo-800 text-[9px] font-black uppercase">
                  Admin
                </span>
              )}
            </button>
          )}

          {/* History Modal Trigger */}
          <button
            onClick={() => {
              sound.playClick();
              onOpenHistory();
            }}
            className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-lg border border-slate-200 hover:border-indigo-300 bg-white hover:bg-indigo-50/50 text-slate-700 hover:text-indigo-700 text-xs font-medium transition-all shadow-xs"
            title="Lịch sử làm bài"
          >
            <History className="w-3.5 h-3.5 text-slate-500" />
            <span className="hidden 2xl:inline">Lịch sử</span>
            {historyCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-indigo-600 text-white text-[10px] font-bold flex items-center justify-center">
                {historyCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* DẢI THÔNG TIN CỐ ĐỊNH PHỤ: BẠN ĐANG CHỌN (GẮN CỐ ĐỊNH NGAY DƯỚI HEADER) */}
      {isHome && summaryInfo && (
        <div className="bg-slate-900/95 text-slate-200 text-[11px] sm:text-xs py-1.5 px-4 border-t border-slate-800 flex items-center justify-between gap-3 overflow-x-auto whitespace-nowrap shadow-inner">
          <div className="max-w-6xl mx-auto w-full flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 truncate">
              <span className="text-slate-400 shrink-0">Bạn đang chọn:</span>
              <strong className="text-amber-300 font-bold truncate">
                {summaryInfo.lesson}
              </strong>
              <span className="text-slate-500">•</span>
              <strong className="text-indigo-300 shrink-0">{summaryInfo.count} câu</strong>
              <span className="text-slate-500 hidden xs:inline">•</span>
              <span className="text-slate-300 shrink-0 hidden xs:inline">{summaryInfo.difficulty}</span>
              <span className="text-slate-500 hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1 font-bold text-cyan-300 bg-white/10 px-2 py-0.5 rounded-md text-[10px] shrink-0 hidden sm:inline-flex">
                {summaryInfo.source}
              </span>
            </div>

            <div className="text-[10px] text-indigo-300 font-semibold shrink-0 hidden md:block">
              👉 Nhấn nút <strong>"TẠO CÂU HỎI & BẮT ĐẦU ÔN TẬP"</strong> ở trên để làm bài
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

