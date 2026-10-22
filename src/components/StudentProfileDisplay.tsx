import React from 'react';
import { StudentProfile } from '../types/quiz';
import { StudentAvatar } from './StudentAvatar';
import {
  GraduationCap,
  Sparkles,
  School,
  Edit3,
  CheckCircle2,
  ChevronRight,
  UserCheck
} from 'lucide-react';
import { sound } from '../utils/sound';

interface StudentProfileDisplayProps {
  profile: StudentProfile;
  onOpenEdit: () => void;
  lastUpdatedMsg?: string;
}

export const StudentProfileDisplay: React.FC<StudentProfileDisplayProps> = ({
  profile,
  onOpenEdit,
  lastUpdatedMsg,
}) => {
  const handleClick = () => {
    sound.playClick();
    onOpenEdit();
  };

  return (
    <div className="w-full">
      {/* Thẻ hiển thị hồ sơ học sinh - Nhấp vào để đổi tên, lớp, hình đại diện */}
      <div
        onClick={handleClick}
        className="group relative overflow-hidden rounded-3xl bg-white border-2 border-indigo-100 hover:border-indigo-300 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer p-4 sm:p-5"
        title="Nhấp vào để đổi tên, lớp hoặc hình đại diện"
      >
        {/* Subtle decorative background gradient accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-100/40 via-indigo-50/30 to-transparent rounded-full -mr-20 -mt-20 pointer-events-none transition-all group-hover:scale-105" />

        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left section: Avatar & Information */}
          <div className="flex items-center gap-3.5 sm:gap-5 w-full sm:w-auto">
            {/* Student Avatar with hover indicator */}
            <div className="relative shrink-0">
              <div className="p-1 rounded-2xl bg-gradient-to-tr from-amber-300 via-indigo-200 to-blue-300 shadow-xs group-hover:rotate-3 transition-transform">
                <StudentAvatar
                  avatarIdOrUrl={profile.avatar}
                  name={profile.fullName}
                  size="md"
                />
              </div>
              <div
                className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-xs border-2 border-white group-hover:scale-110 transition-transform"
                title="Đổi hình đại diện"
              >
                <Edit3 className="w-3 h-3" />
              </div>
            </div>

            {/* Name, Class & Badges */}
            <div className="text-left space-y-1 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200/80">
                  <UserCheck className="w-3 h-3 text-indigo-600" />
                  HỒ SƠ HỌC SINH
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Đang hoạt động
                </span>
              </div>

              {/* Student Name */}
              <h2 className="text-lg sm:text-2xl font-black text-slate-800 tracking-tight group-hover:text-indigo-700 transition-colors">
                {profile.fullName || 'Bạn Nhỏ Thông Thái'}
              </h2>

              {/* Class, Grade, School */}
              <div className="flex items-center flex-wrap gap-2 text-xs font-semibold text-slate-600">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-indigo-100/80 text-indigo-900 font-bold border border-indigo-200">
                  <GraduationCap className="w-3.5 h-3.5 text-indigo-700" />
                  {profile.grade || 'Khối 8'} • Lớp{' '}
                  <strong className="text-indigo-700">{profile.className || '8A1'}</strong>
                </span>

                {profile.schoolName && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-slate-100 text-slate-700">
                    <School className="w-3 h-3 text-slate-500" />
                    {profile.schoolName}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right section: Action button */}
          <div className="flex items-center gap-2 sm:self-center shrink-0 w-full sm:w-auto justify-end pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleClick();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-[#ff7a00] to-[#ff5500] hover:from-[#ea6700] hover:to-[#e04500] text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow active:scale-95 transition-all shadow-orange-500/20"
            >
              <Edit3 className="w-4 h-4" />
              <span>Đổi tên, lớp & avatar</span>
              <ChevronRight className="w-3.5 h-3.5 text-orange-200 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Temporary update notification if present */}
        {lastUpdatedMsg && (
          <div className="mt-2.5 p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center justify-center gap-1.5 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{lastUpdatedMsg}</span>
          </div>
        )}
      </div>
    </div>
  );
};
