import React, { useState, useRef } from 'react';
import { StudentProfile } from '../types/quiz';
import { PRESET_AVATARS, StudentAvatar } from './StudentAvatar';
import {
  Check,
  ChevronDown,
  ChevronUp,
  Settings,
  Volume2,
  VolumeX,
  Trash2,
  Camera,
  School,
  Sparkles,
  Clock,
  GraduationCap,
  X
} from 'lucide-react';
import { sound } from '../utils/sound';

interface StudentProfileCardProps {
  profile: StudentProfile;
  onSaveProfile: (profile: StudentProfile) => void;
  isInline?: boolean;
  soundEnabled?: boolean;
  onToggleSound?: () => void;
  onClearHistory?: () => void;
  onClose?: () => void;
}

const GRADE_LIST = [
  {
    grade: 'Khối 3',
    classes: ['3A1', '3A2', '3A3', '3A4', '3A5', '3A', '3B', '3C', '3/1', '3/2'],
  },
  {
    grade: 'Khối 4',
    classes: ['4A1', '4A2', '4A3', '4A4', '4A5', '4A', '4B', '4C', '4/1', '4/2'],
  },
  {
    grade: 'Khối 5',
    classes: ['5A1', '5A2', '5A3', '5A4', '5A5', '5A', '5B', '5C', '5/1', '5/2'],
  },
  {
    grade: 'Khối 6',
    classes: ['6A1', '6A2', '6A3', '6A4', '6A5', '6A', '6B', '6C', '6/1', '6/2'],
  },
  {
    grade: 'Khối 7',
    classes: ['7A1', '7A2', '7A3', '7A4', '7A5', '7A', '7B', '7C', '7/1', '7/2'],
  },
  {
    grade: 'Khối 8',
    classes: [
      '8A1', '8A2', '8A3', '8A4', '8A5', '8A6', '8A7', '8A8',
      '8A', '8B', '8C', '8D', '8/1', '8/2', '8/3', '8/4'
    ],
  },
  {
    grade: 'Khối 9',
    classes: ['9A1', '9A2', '9A3', '9A4', '9A5', '9A', '9B', '9C', '9/1', '9/2'],
  },
];

export const StudentProfileCard: React.FC<StudentProfileCardProps> = ({
  profile,
  onSaveProfile,
  isInline = true,
  soundEnabled = true,
  onToggleSound,
  onClearHistory,
  onClose,
}) => {
  // Main form states matching user's image
  const [fullName, setFullName] = useState<string>(profile.fullName || '');
  const [avatar, setAvatar] = useState<string>(profile.avatar || 'robot-ai');
  const [grade, setGrade] = useState<string>(profile.grade || 'Khối 8');
  const [className, setClassName] = useState<string>(profile.className || '8A1');
  const [schoolName, setSchoolName] = useState<string>(profile.schoolName || 'THCS');

  // Dropdown states for "KHI TÔI NHẤP CHỌN KHỐI SẼ SỔ XUỐNG DANH SÁCH LỚP"
  const [isGradeDropdownOpen, setIsGradeDropdownOpen] = useState<boolean>(false);
  const [customClass, setCustomClass] = useState<string>('');
  const [isCustomClassMode, setIsCustomClassMode] = useState<boolean>(false);

  // Settings toggle for "CUỐI CÙNG CÓ CHỨC NĂNG CÀI ĐẶT"
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [timerEnabled, setTimerEnabled] = useState<boolean>(true);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Synchronize internal state whenever profile prop updates
  React.useEffect(() => {
    setFullName(profile.fullName || '');
    setAvatar(profile.avatar || 'robot-ai');
    setGrade(profile.grade || 'Khối 8');
    setClassName(profile.className || '8A1');
    setSchoolName(profile.schoolName || 'THCS');
  }, [profile]);

  // The 6 avatars matching the exact image provided: ⭐, 🦄, 🤖, 🐯, 🐬, 🦊
  const mainAvatars = PRESET_AVATARS.slice(0, 6);

  const handleSelectGrade = (selectedGrade: string) => {
    sound.playClick();
    setGrade(selectedGrade);
    // Auto-select first class of that grade if class doesn't start with the grade number
    const found = GRADE_LIST.find((g) => g.grade === selectedGrade);
    if (found && found.classes.length > 0) {
      const gradeNum = selectedGrade.replace('Khối ', '');
      if (!className.startsWith(gradeNum)) {
        setClassName(found.classes[0]);
      }
    }
  };

  const handleSelectClass = (selectedClass: string) => {
    sound.playClick();
    setClassName(selectedClass);
    setIsCustomClassMode(false);
    setIsGradeDropdownOpen(false); // smoothly collapse once chosen
  };

  const handleSave = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    const finalName = fullName.trim() || 'Bạn Nhỏ Thông Thái';
    const finalClass = isCustomClassMode
      ? customClass.trim() || className || '8A1'
      : className || '8A1';

    const updated: StudentProfile = {
      fullName: finalName,
      grade,
      className: finalClass,
      schoolName: schoolName.trim() || 'THCS',
      avatar,
    };

    onSaveProfile(updated);
    sound.playSuccess();

    // Immediately close modal so popup window disappears as requested
    if (onClose) {
      onClose();
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      alert('Vui lòng chọn ảnh dung lượng dưới 2MB!');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setAvatar(event.target.result as string);
        sound.playClick();
      }
    };
    reader.readAsDataURL(file);
  };

  const activeGradeObj = GRADE_LIST.find((g) => g.grade === grade) || GRADE_LIST[0];

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Container with bright yellow border matching the user's reference image */}
      <div className="relative rounded-[32px] border-[5px] border-[#ffd028] bg-white p-5 sm:p-7 shadow-2xl transition-all">
        {/* Optional Close button if in modal */}
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors"
            title="Đóng"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        <form onSubmit={handleSave} className="space-y-4 sm:space-y-5">
          {/* Row of 6 Avatars from user's image */}
          <div className="flex items-center justify-between gap-1.5 sm:gap-2 pt-1 pb-1">
            {mainAvatars.map((item) => {
              const isSelected = avatar === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    setAvatar(item.id);
                  }}
                  className={`w-11 h-11 sm:w-13 sm:h-13 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl transition-all select-none ${
                    isSelected
                      ? 'border-2 border-[#3b82f6] bg-[#eff6ff] shadow-sm ring-2 ring-blue-200 scale-105'
                      : 'border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300'
                  }`}
                  title={item.name}
                >
                  <span className="transform hover:scale-110 transition-transform">
                    {item.emoji}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Input "Tên của em:" */}
          <div className="space-y-1.5 text-left">
            <label className="block text-sm sm:text-base font-bold text-slate-800">
              Tên của em:
            </label>
            <div className="relative">
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Bạn Nhỏ Thông Thái"
                className="w-full px-4 py-3 sm:py-3.5 rounded-2xl border-2 border-[#5c67f2] focus:border-[#4338ca] focus:ring-4 focus:ring-indigo-100/50 text-slate-700 font-bold text-base sm:text-lg placeholder:text-slate-400 placeholder:font-bold outline-none transition-all shadow-xs"
              />
            </div>
          </div>

          {/* Section: "KHI TÔI NHẤP CHỌN KHỐI SẼ SỔ XUỐNG DANH SÁCH LỚP" */}
          <div className="space-y-2 text-left">
            <label className="block text-sm sm:text-base font-bold text-slate-800">
              Khối và Lớp của em:
            </label>

            {/* Khối button that toggles/sổ xuống danh sách lớp */}
            <div className="space-y-2">
              {/* Grade Tabs / Selector */}
              <div className="grid grid-cols-4 gap-1.5 p-1 bg-slate-100 rounded-2xl border border-slate-200">
                {GRADE_LIST.map((g) => {
                  const isSelected = grade === g.grade;
                  return (
                    <button
                      key={g.grade}
                      type="button"
                      onClick={() => {
                        handleSelectGrade(g.grade);
                        setIsGradeDropdownOpen(true); // Sổ xuống danh sách lớp khi nhấp chọn khối
                      }}
                      className={`py-2 px-1 rounded-xl text-xs sm:text-sm font-bold text-center transition-all ${
                        isSelected
                          ? 'bg-white text-indigo-700 shadow-sm border border-slate-200/80 font-black'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {g.grade}
                    </button>
                  );
                })}
              </div>

              {/* Collapsible Trigger to drop down / collapse class list */}
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  setIsGradeDropdownOpen(!isGradeDropdownOpen);
                }}
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-2xl border-2 border-indigo-200 bg-indigo-50/70 hover:bg-indigo-50 text-indigo-900 font-bold text-xs sm:text-sm transition-all"
              >
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-indigo-600" />
                  <span>
                    {grade}: Lớp <strong className="text-indigo-700 underline underline-offset-2">{className}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-indigo-600">
                  <span>{isGradeDropdownOpen ? 'Thu gọn' : 'Sổ danh sách lớp'}</span>
                  {isGradeDropdownOpen ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </div>
              </button>

              {/* SỔ XUỐNG DANH SÁCH LỚP */}
              {isGradeDropdownOpen && (
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 animate-in fade-in slide-in-from-top-2">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Chọn lớp thuộc {grade}:
                  </div>
                  <div className="grid grid-cols-4 sm:grid-cols-4 gap-1.5 max-h-44 overflow-y-auto pr-1">
                    {activeGradeObj.classes.map((cls) => {
                      const isSelected = className === cls && !isCustomClassMode;
                      return (
                        <button
                          key={cls}
                          type="button"
                          onClick={() => handleSelectClass(cls)}
                          className={`py-2 px-1 rounded-xl text-xs sm:text-sm font-bold transition-all text-center ${
                            isSelected
                              ? 'bg-indigo-600 text-white shadow-sm ring-2 ring-indigo-300'
                              : 'bg-white text-slate-700 border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/40'
                          }`}
                        >
                          {cls}
                        </button>
                      );
                    })}
                  </div>

                  {/* Nhập lớp khác tùy chọn */}
                  <div className="pt-1.5 border-t border-slate-200 flex items-center gap-2">
                    <input
                      type="text"
                      value={customClass}
                      onChange={(e) => {
                        setCustomClass(e.target.value);
                        setIsCustomClassMode(true);
                      }}
                      placeholder="Hoặc tự gõ lớp khác (VD: 8A10, 8 Chuyên...)"
                      className="flex-1 px-3 py-1.5 text-xs rounded-xl border border-slate-300 focus:border-indigo-500 bg-white font-semibold text-slate-800"
                    />
                    {isCustomClassMode && customClass && (
                      <button
                        type="button"
                        onClick={() => {
                          setClassName(customClass);
                          setIsGradeDropdownOpen(false);
                        }}
                        className="px-2.5 py-1.5 rounded-xl bg-indigo-600 text-white text-xs font-bold"
                      >
                        Chọn
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Success Message Banner */}
          {saveSuccessMsg && (
            <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold text-center animate-in fade-in">
              ✓ {saveSuccessMsg}
            </div>
          )}

          {/* Nút "Lưu lại" màu cam bo tròn như hình mẫu */}
          <button
            type="submit"
            className="w-full py-3.5 sm:py-4 rounded-2xl bg-[#ff6e00] hover:bg-[#ea580c] active:scale-98 text-white font-black text-base sm:text-lg shadow-md transition-all flex items-center justify-center gap-2 shadow-orange-500/20"
          >
            <Check className="w-5 h-5 stroke-[3]" />
            <span>Lưu lại</span>
          </button>

          {/* CUỐI CÙNG CÓ CHỨC NĂNG CÀI ĐẶT */}
          <div className="pt-1 border-t border-slate-100">
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                setShowSettings(!showSettings);
              }}
              className="w-full py-2.5 px-3 rounded-xl hover:bg-slate-100 text-slate-600 hover:text-slate-800 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors"
            >
              <Settings className={`w-4 h-4 text-slate-500 ${showSettings ? 'rotate-90 text-indigo-600' : ''} transition-transform`} />
              <span>Cài đặt</span>
              {showSettings ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            {/* Expandable Settings Box */}
            {showSettings && (
              <div className="mt-2.5 p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3.5 text-left text-xs animate-in fade-in slide-in-from-top-2">
                <div className="font-bold text-slate-800 text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <Settings className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Tùy Chọn Cài Đặt Hệ Thống</span>
                </div>

                {/* 1. Âm thanh hiệu ứng */}
                <div className="flex items-center justify-between py-1 border-b border-slate-200/80">
                  <div className="flex items-center gap-2 text-slate-700 font-semibold">
                    {soundEnabled ? (
                      <Volume2 className="w-4 h-4 text-indigo-600" />
                    ) : (
                      <VolumeX className="w-4 h-4 text-slate-400" />
                    )}
                    <span>Âm thanh hiệu ứng làm bài</span>
                  </div>
                  <button
                    type="button"
                    onClick={onToggleSound}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                      soundEnabled
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {soundEnabled ? 'Bật' : 'Tắt'}
                  </button>
                </div>

                {/* 2. Trường học */}
                <div className="space-y-1">
                  <label className="text-slate-700 font-semibold flex items-center gap-1.5">
                    <School className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Tên trường THCS (in trên đề thi):</span>
                  </label>
                  <input
                    type="text"
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    placeholder="VD: THCS Nguyễn Du, THCS Chu Văn An..."
                    className="w-full px-3 py-1.5 rounded-xl border border-slate-300 bg-white text-xs font-medium text-slate-800 focus:border-indigo-500"
                  />
                </div>

                {/* 3. Tải ảnh đại diện riêng từ máy tính */}
                <div className="pt-1 flex items-center justify-between">
                  <span className="text-slate-700 font-semibold flex items-center gap-1.5">
                    <Camera className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Tải ảnh riêng từ thiết bị:</span>
                  </span>
                  <div>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileUpload}
                      accept="image/*"
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-2.5 py-1 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-[11px] font-bold text-slate-700"
                    >
                      Chọn file ảnh
                    </button>
                  </div>
                </div>

                {/* 4. Xóa lịch sử ôn tập nếu muốn */}
                {onClearHistory && (
                  <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Làm mới dữ liệu ôn tập:</span>
                    <button
                      type="button"
                      onClick={() => {
                        if (confirm('Bạn có chắc muốn xóa lịch sử các bài đã làm để bắt đầu lại từ đầu?')) {
                          onClearHistory();
                          sound.playClick();
                          alert('Đã đặt lại lịch sử thành công!');
                        }
                      }}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-600 hover:text-rose-800 underline"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Xóa lịch sử</span>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
