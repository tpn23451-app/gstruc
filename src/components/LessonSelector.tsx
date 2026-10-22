import React, { useState, useMemo } from 'react';
import { LessonTopic, EducationLevel } from '../types/quiz';
import { CURRICULUM_LESSONS } from '../data/curriculum';
import {
  Search,
  BookOpen,
  Laptop,
  Binary,
  Compass,
  Sparkles,
  Calculator,
  Divide,
  Shapes,
  FileText,
  BookMarked,
  Sun,
  Scroll,
  GitBranch,
  Zap,
  Globe2,
  PenTool,
  Check,
  FileSpreadsheet,
  BookCheck,
  CheckSquare,
  Square,
  Layers,
  GraduationCap,
  Award,
  X
} from 'lucide-react';
import { sound } from '../utils/sound';

interface LessonSelectorProps {
  selectedLessons: LessonTopic[];
  onToggleLesson: (lesson: LessonTopic) => void;
  onSelectAllInGrade: (gradeNum: 3 | 4 | 5 | 6 | 7 | 8 | 9) => void;
  onDeselectAll: () => void;
  currentGradeFilter: 3 | 4 | 5 | 6 | 7 | 8 | 9;
  setCurrentGradeFilter: (grade: 3 | 4 | 5 | 6 | 7 | 8 | 9) => void;
  educationLevel: EducationLevel;
  setEducationLevel: (level: EducationLevel) => void;

  customLessonTitle: string;
  setCustomLessonTitle: (title: string) => void;
  customSubject: string;
  setCustomSubject: (subject: string) => void;
  customGrade: string;
  setCustomGrade: (grade: string) => void;
  customNotes: string;
  setCustomNotes: (notes: string) => void;
  isCustomMode: boolean;
  setIsCustomMode: (val: boolean) => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Laptop,
  Binary,
  Compass,
  Sparkles,
  Calculator,
  Divide,
  Shapes,
  FileText,
  BookMarked,
  Sun,
  Scroll,
  GitBranch,
  Zap,
  Globe2,
  Award,
  FileSpreadsheet,
  PenTool,
};

const GRADE_INFO: Record<number, { title: string; subtitle: string; icon: string; badge: string; color: string }> = {
  3: {
    title: 'Khối 3',
    subtitle: '15 bài học SGK Kết Nối Tri Thức',
    icon: '🎨',
    badge: 'Lớp 3',
    color: 'from-orange-500 to-amber-500',
  },
  4: {
    title: 'Khối 4',
    subtitle: '14 bài học SGK Kết Nối Tri Thức',
    icon: '📝',
    badge: 'Lớp 4',
    color: 'from-amber-500 to-orange-600',
  },
  5: {
    title: 'Khối 5',
    subtitle: '16 bài học SGK Kết Nối Tri Thức',
    icon: '🚀',
    badge: 'Lớp 5',
    color: 'from-orange-600 to-rose-500',
  },
  6: {
    title: 'Khối 6',
    subtitle: '16 bài học SGK Kết Nối Tri Thức',
    icon: '🎒',
    badge: 'Lớp 6',
    color: 'from-blue-600 to-indigo-600',
  },
  7: {
    title: 'Khối 7',
    subtitle: '16 bài học SGK Kết Nối Tri Thức',
    icon: '💻',
    badge: 'Lớp 7',
    color: 'from-indigo-600 to-cyan-600',
  },
  8: {
    title: 'Khối 8',
    subtitle: '16 bài học SGK Kết Nối Tri Thức',
    icon: '⚡',
    badge: 'Lớp 8',
    color: 'from-blue-700 to-teal-700',
  },
  9: {
    title: 'Khối 9',
    subtitle: '16 bài học SGK Kết Nối Tri Thức',
    icon: '🚀',
    badge: 'Lớp 9',
    color: 'from-purple-600 to-indigo-800',
  },
};

export const LessonSelector: React.FC<LessonSelectorProps> = ({
  selectedLessons,
  onToggleLesson,
  onSelectAllInGrade,
  onDeselectAll,
  currentGradeFilter,
  setCurrentGradeFilter,
  educationLevel,
  setEducationLevel,
  customLessonTitle,
  setCustomLessonTitle,
  customSubject,
  setCustomSubject,
  customGrade,
  setCustomGrade,
  customNotes,
  setCustomNotes,
  isCustomMode,
  setIsCustomMode,
}) => {
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<string>('Tất cả');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const isTieuHoc = educationLevel === 'tieu_hoc';

  // Grade list according to education level
  const gradeNumbersToDisplay = useMemo(() => {
    return isTieuHoc ? ([3, 4, 5] as const) : ([6, 7, 8, 9] as const);
  }, [isTieuHoc]);

  // Lessons of current grade
  const gradeLessons = useMemo(() => {
    return CURRICULUM_LESSONS.filter((l) => l.gradeNumber === currentGradeFilter);
  }, [currentGradeFilter]);

  // Subjects in current grade
  const subjects = useMemo(() => {
    const list = Array.from(new Set(gradeLessons.map((l) => l.subject)));
    return ['Tất cả', ...list];
  }, [gradeLessons]);

  // Filtered lessons
  const filteredLessons = useMemo(() => {
    const list = gradeLessons.filter((item) => {
      const matchSubject =
        selectedSubjectFilter === 'Tất cả' || item.subject === selectedSubjectFilter;
      const matchQuery =
        searchQuery.trim() === '' ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subject.toLowerCase().includes(searchQuery.toLowerCase());
      return matchSubject && matchQuery;
    });

    // Bring special exam to the top
    return list.sort((a, b) => {
      if (a.isSpecialExam && !b.isSpecialExam) return -1;
      if (!a.isSpecialExam && b.isSpecialExam) return 1;
      return 0;
    });
  }, [gradeLessons, selectedSubjectFilter, searchQuery]);

  const selectedCountInCurrentGrade = useMemo(() => {
    return selectedLessons.filter((l) => l.gradeNumber === currentGradeFilter).length;
  }, [selectedLessons, currentGradeFilter]);

  const isAllInCurrentGradeSelected =
    gradeLessons.length > 0 && selectedCountInCurrentGrade === gradeLessons.length;

  return (
    <div className="space-y-4">
      {/* Textbook banner */}
      <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-indigo-50/90 border border-indigo-200 text-indigo-950 text-xs sm:text-sm font-semibold">
        <BookCheck className="w-4 h-4 text-indigo-700 shrink-0" />
        <span>
          Chuẩn chương trình GDPT 2018: <strong>SGK Tin học {isTieuHoc ? 'Tiểu học (Khối 3, 4, 5)' : 'THCS (Khối 6, 7, 8, 9)'} - Bộ sách "Kết Nối Tri Thức Với Cuộc Sống"</strong>
        </span>
      </div>

      {/* 1 CHỌN CẤP HỌC (TIỂU HỌC • THCS • THPT) - MATCHING USER SCREENSHOT */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-indigo-600 text-white flex items-center justify-center font-black text-xs shadow-xs shrink-0">
              1
            </span>
            <h2 className="text-sm sm:text-base md:text-lg font-black text-slate-800 tracking-wide uppercase font-['Lexend']">
              CHỌN CẤP HỌC (TIỂU HỌC • THCS • THPT)
            </h2>
          </div>

          {/* Tab switch between Curated and Custom */}
          <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200 self-start sm:self-auto text-xs font-semibold">
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                setIsCustomMode(false);
              }}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                !isCustomMode
                  ? 'bg-white text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Mục lục SGK {isTieuHoc ? 'Tiểu học (3-4-5)' : 'THCS (6-7-8-9)'}
            </button>
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                setIsCustomMode(true);
              }}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                isCustomMode
                  ? 'bg-white text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <PenTool className="w-3.5 h-3.5" />
              Tự nhập bài / Dán tài liệu
            </button>
          </div>
        </div>

        {/* 2 Big Level Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Card 1: CẤP TIỂU HỌC */}
          <button
            type="button"
            onClick={() => {
              sound.playClick();
              setEducationLevel('tieu_hoc');
              if (![3, 4, 5].includes(currentGradeFilter)) {
                setCurrentGradeFilter(3);
                setSelectedSubjectFilter('Tất cả');
              }
            }}
            className={`text-left p-4 sm:p-5 rounded-2xl sm:rounded-3xl transition-all relative overflow-hidden flex flex-col justify-between min-h-[105px] cursor-pointer group ${
              isTieuHoc
                ? 'bg-gradient-to-r from-orange-500 via-[#ff6a00] to-amber-500 text-white shadow-lg shadow-orange-500/25 ring-2 ring-orange-400'
                : 'bg-white border-2 border-slate-200 text-slate-800 hover:border-orange-300 hover:shadow-sm'
            }`}
          >
            <div className="flex items-start justify-between gap-3 w-full mb-2">
              <div
                className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${
                  isTieuHoc
                    ? 'bg-white/20 text-white shadow-xs'
                    : 'bg-orange-50 text-orange-500 group-hover:scale-105'
                }`}
              >
                <Sparkles className="w-5 h-5" />
              </div>
              <span
                className={`text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider ${
                  isTieuHoc
                    ? 'bg-white/20 text-white backdrop-blur-xs'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                Khối 3 – 5
              </span>
            </div>

            <div>
              <h3
                className={`text-lg sm:text-xl font-black uppercase tracking-tight ${
                  isTieuHoc ? 'text-white' : 'text-slate-800 group-hover:text-orange-600'
                }`}
              >
                CẤP TIỂU HỌC
              </h3>
              <p
                className={`text-xs sm:text-sm font-medium mt-0.5 ${
                  isTieuHoc ? 'text-white/90' : 'text-slate-500'
                }`}
              >
                Làm quen máy tính, Paint & Scratch
              </p>
            </div>
          </button>

          {/* Card 2: CẤP THCS */}
          <button
            type="button"
            onClick={() => {
              sound.playClick();
              setEducationLevel('thcs');
              if (![6, 7, 8, 9].includes(currentGradeFilter)) {
                setCurrentGradeFilter(8);
                setSelectedSubjectFilter('Tất cả');
              }
            }}
            className={`text-left p-4 sm:p-5 rounded-2xl sm:rounded-3xl transition-all relative overflow-hidden flex flex-col justify-between min-h-[105px] cursor-pointer group ${
              !isTieuHoc
                ? 'bg-gradient-to-r from-blue-700 via-indigo-700 to-indigo-800 text-white shadow-lg shadow-indigo-600/25 ring-2 ring-indigo-400'
                : 'bg-white border-2 border-slate-200 text-slate-800 hover:border-indigo-300 hover:shadow-sm'
            }`}
          >
            <div className="flex items-start justify-between gap-3 w-full mb-2">
              <div
                className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${
                  !isTieuHoc
                    ? 'bg-white/20 text-white shadow-xs'
                    : 'bg-indigo-50 text-indigo-600 group-hover:scale-105'
                }`}
              >
                <GraduationCap className="w-5 h-5" />
              </div>
              <span
                className={`text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider ${
                  !isTieuHoc
                    ? 'bg-white/20 text-white backdrop-blur-xs'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                Khối 6 – 9
              </span>
            </div>

            <div>
              <h3
                className={`text-lg sm:text-xl font-black uppercase tracking-tight ${
                  !isTieuHoc ? 'text-white' : 'text-slate-800 group-hover:text-indigo-600'
                }`}
              >
                CẤP THCS
              </h3>
              <p
                className={`text-xs sm:text-sm font-medium mt-0.5 ${
                  !isTieuHoc ? 'text-white/90' : 'text-slate-500'
                }`}
              >
                Tin học cơ bản, Bảng tính & Python
              </p>
            </div>
          </button>
        </div>

        {/* Subtitle label matching image: 🎓 Khối lớp thuộc CẤP TIỂU HỌC: */}
        <div className="pt-1 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700">
            <GraduationCap className={`w-4 h-4 ${isTieuHoc ? 'text-orange-600' : 'text-indigo-600'}`} />
            <span>
              Khối lớp thuộc <strong>{isTieuHoc ? 'CẤP TIỂU HỌC' : 'CẤP THCS'}</strong>:
            </span>
          </div>
          <span className="text-xs text-slate-500 hidden sm:inline">
            Chọn bài học để ôn tập hoặc kết hợp nhiều bài
          </span>
        </div>
      </div>

      {!isCustomMode ? (
        <div className="space-y-3.5">
          {/* GRADE TABS SELECTOR (3 Grades for Tiểu học OR 4 Grades for THCS) */}
          <div className={`grid gap-2.5 ${isTieuHoc ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-2 sm:grid-cols-4'}`}>
            {gradeNumbersToDisplay.map((gradeNum) => {
              const info = GRADE_INFO[gradeNum];
              const isActive = currentGradeFilter === gradeNum;
              const countSelected = selectedLessons.filter((l) => l.gradeNumber === gradeNum).length;

              return (
                <button
                  key={gradeNum}
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    setCurrentGradeFilter(gradeNum);
                    setSelectedSubjectFilter('Tất cả');
                  }}
                  className={`p-3 rounded-2xl border-2 text-left transition-all relative flex flex-col justify-between cursor-pointer ${
                    isActive
                      ? isTieuHoc
                        ? 'border-orange-500 bg-orange-50/80 shadow-sm ring-2 ring-orange-400/30'
                        : 'border-indigo-600 bg-indigo-50/70 shadow-sm ring-2 ring-indigo-500/20'
                      : isTieuHoc
                      ? 'border-slate-200 bg-white hover:border-orange-300 hover:bg-orange-50/30'
                      : 'border-slate-200 bg-white hover:border-indigo-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1.5 mb-1">
                    <span className="text-xl">{info.icon}</span>
                    {countSelected > 0 && (
                      <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded-full text-white shadow-2xs ${isTieuHoc ? 'bg-orange-600' : 'bg-indigo-600'}`}>
                        Đã chọn {countSelected} bài
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className={`font-black text-sm sm:text-base ${isActive ? (isTieuHoc ? 'text-orange-900' : 'text-indigo-800') : 'text-slate-800'}`}>
                      {info.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                      {info.subtitle}
                    </p>
                  </div>

                  {isActive && (
                    <div className={`absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full text-white flex items-center justify-center text-[10px] ${isTieuHoc ? 'bg-orange-500' : 'bg-indigo-600'}`}>
                      ✓
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick Selection Toolbar */}
          <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 flex flex-wrap items-center justify-between gap-2.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <Layers className={`w-3.5 h-3.5 ${isTieuHoc ? 'text-orange-600' : 'text-indigo-600'}`} />
                Đang xem: <strong>Khối {currentGradeFilter}</strong>
              </span>

              <span className="text-slate-300">•</span>

              <span className="text-xs font-semibold text-slate-600">
                Đã chọn:{' '}
                <strong className={`px-2 py-0.5 rounded-md ${isTieuHoc ? 'text-orange-700 bg-orange-100/80' : 'text-indigo-700 bg-indigo-100/80'}`}>
                  {selectedLessons.length} bài học
                </strong>
                {selectedCountInCurrentGrade > 0 && (
                  <span className="text-slate-500 text-[11px] ml-1">
                    ({selectedCountInCurrentGrade} bài thuộc Khối {currentGradeFilter})
                  </span>
                )}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  onSelectAllInGrade(currentGradeFilter);
                }}
                className={`text-xs font-bold px-2.5 py-1.5 rounded-xl bg-white border transition-colors flex items-center gap-1 shadow-2xs cursor-pointer ${
                  isTieuHoc
                    ? 'border-orange-200 text-orange-700 hover:bg-orange-50'
                    : 'border-indigo-200 text-indigo-700 hover:bg-indigo-50'
                }`}
              >
                <CheckSquare className="w-3.5 h-3.5" />
                <span>Chọn tất cả Khối {currentGradeFilter}</span>
              </button>

              {selectedLessons.length > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    onDeselectAll();
                  }}
                  className="text-xs font-semibold px-2 py-1.5 rounded-xl text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                >
                  Bỏ chọn tất cả
                </button>
              )}
            </div>
          </div>

          {/* Selected Lessons Chips Preview */}
          {selectedLessons.length > 0 && (
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              <span className="text-[11px] font-bold text-slate-500 shrink-0">Các bài sẽ tạo đề:</span>
              {selectedLessons.map((l) => (
                <span
                  key={l.id}
                  className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-800 shrink-0 shadow-2xs animate-in zoom-in-95"
                >
                  <span className="text-slate-400 font-normal">K{l.gradeNumber || ''}:</span>
                  <span>{l.title.split(':')[0]}</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      sound.playClick();
                      onToggleLesson(l);
                    }}
                    className="hover:text-rose-600 p-0.5"
                    title="Bỏ bài này"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          )}

          {/* Search bar and Subject filters */}
          <div className="flex flex-col gap-2.5">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Tìm bài học Khối ${currentGradeFilter} (Ví dụ: Bài 1, Bảng tính, Thuật toán, Internet, Email, Sơ đồ khối...)`}
                className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 p-1"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Subject pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs font-medium">
              {subjects.map((sub) => (
                <button
                  key={sub}
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    setSelectedSubjectFilter(sub);
                  }}
                  className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition-all border ${
                    selectedSubjectFilter === sub
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs font-bold'
                      : 'bg-white text-slate-600 hover:bg-slate-50 border-slate-200'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[460px] overflow-y-auto pr-1">
            {filteredLessons.map((lesson) => {
              const isSelected = selectedLessons.some((l) => l.id === lesson.id);
              const IconComp = ICON_MAP[lesson.iconName] || BookOpen;
              const isSpecial = lesson.isSpecialExam;

              return (
                <div
                  key={lesson.id}
                  onClick={() => {
                    sound.playClick();
                    onToggleLesson(lesson);
                  }}
                  className={`cursor-pointer text-left p-3.5 rounded-2xl border-2 transition-all relative group flex flex-col justify-between ${
                    isSpecial
                      ? isSelected
                        ? 'border-amber-500 bg-amber-50/80 ring-2 ring-amber-400/40 shadow-lg'
                        : 'border-amber-400/80 bg-linear-to-br from-amber-50/40 via-white to-purple-50/30 hover:border-amber-500 hover:shadow-md'
                      : isSelected
                      ? 'border-indigo-600 bg-indigo-50/70 ring-2 ring-indigo-500/20 shadow-md'
                      : 'border-slate-200 bg-white hover:border-indigo-300 hover:shadow-xs'
                  }`}
                >
                  <div>
                    {isSpecial && (
                      <div className="mb-2 -mt-0.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-linear-to-r from-amber-400 to-orange-400 text-amber-950 font-black text-[10px] tracking-wide uppercase shadow-xs">
                        <Award className="w-3 h-3 fill-amber-950" />
                        Đề cương trọng tâm Giữa kì 1 (2026 - 2027)
                      </div>
                    )}

                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-8 h-8 rounded-xl bg-linear-to-tr ${lesson.color} text-white flex items-center justify-center shrink-0 shadow-xs`}
                        >
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-700">
                            {lesson.subject}
                          </span>
                          <span className="text-[11px] text-slate-400 ml-1.5 font-medium">
                            • SGK Tin {lesson.gradeNumber} KNTT
                          </span>
                        </div>
                      </div>

                      {/* Selection checkbox indicator */}
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center text-xs transition-all ${
                          isSelected
                            ? isSpecial
                              ? 'bg-amber-500 text-white shadow-xs'
                              : 'bg-indigo-600 text-white shadow-xs'
                            : 'border border-slate-300 text-transparent group-hover:border-indigo-400'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    </div>

                    <h3 className={`font-bold text-sm group-hover:text-indigo-700 transition-colors line-clamp-2 ${isSpecial ? 'text-amber-950 font-black' : 'text-slate-800'}`}>
                      {lesson.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {lesson.description}
                    </p>
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">Khối {lesson.gradeNumber}</span>
                    <span className={`font-semibold ${isSelected ? (isSpecial ? 'text-amber-700 font-bold' : 'text-indigo-700 font-bold') : 'text-slate-500'}`}>
                      {isSelected ? '✓ Đã chọn vào đề' : '+ Nhấp để chọn'}
                    </span>
                  </div>
                </div>
              );
            })}

            {filteredLessons.length === 0 && (
              <div className="col-span-full py-8 text-center bg-white rounded-2xl border border-dashed border-slate-300">
                <Search className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                <p className="text-sm font-semibold text-slate-700">
                  Không tìm thấy bài học nào phù hợp với từ khóa "{searchQuery}"
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Hãy thử tìm từ khác hoặc chuyển sang chế độ "Tự nhập bài / Dán tài liệu" bên trên nhé!
                </p>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Custom lesson input card */
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-indigo-200/80 shadow-xs space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2 space-y-1">
              <label className="text-xs font-bold text-slate-700">
                Tên bài học hoặc chủ đề muốn ôn tập <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={customLessonTitle}
                onChange={(e) => setCustomLessonTitle(e.target.value)}
                placeholder="Ví dụ: Ôn tập kiểm tra giữa kì Tin học 6, Thuật toán sắp xếp, Bảng tính Excel..."
                className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Môn & Khối lớp</label>
              <input
                type="text"
                value={customSubject}
                onChange={(e) => setCustomSubject(e.target.value)}
                placeholder={`Tin học ${currentGradeFilter} - Kết Nối Tri Thức`}
                className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <FileSpreadsheet className="w-3.5 h-3.5 text-indigo-600" />
                Dán ghi chú, tóm tắt bài giảng hoặc câu hỏi ôn tập riêng của bạn (Tùy chọn)
              </label>
              <span className="text-[11px] text-slate-400">Cô Trúc AI sẽ tạo câu hỏi bám sát tài liệu</span>
            </div>
            <textarea
              rows={4}
              value={customNotes}
              onChange={(e) => setCustomNotes(e.target.value)}
              placeholder="Dán nội dung bài học, định nghĩa SGK hoặc các câu hỏi trong đề cương ôn tập vào đây..."
              className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all font-mono leading-relaxed resize-y text-xs sm:text-sm"
            />
          </div>
        </div>
      )}
    </div>
  );
};
