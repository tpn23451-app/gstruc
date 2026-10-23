import React, { useState, useMemo } from 'react';
import { CustomExam } from '../../types/quiz';
import {
  ShieldCheck,
  Award,
  Sparkles,
  Clock,
  FileQuestion,
  Play,
  BookOpen,
  Printer,
  Plus,
  ArrowRight,
  GraduationCap,
  Layers,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';
import { sound } from '../../utils/sound';

interface AdminExamSectionProps {
  customExams: CustomExam[];
  currentGradeFilter: 3 | 4 | 5 | 6 | 7 | 8 | 9;
  onLaunchExam: (exam: CustomExam, mode: 'exam' | 'practice') => void;
  onPrintExam: (exam: CustomExam) => void;
  onOpenAdminStudio: () => void;
  isAdmin: boolean;
}

export const AdminExamSection: React.FC<AdminExamSectionProps> = ({
  customExams,
  currentGradeFilter,
  onLaunchExam,
  onPrintExam,
  onOpenAdminStudio,
  isAdmin,
}) => {
  const [filterMode, setFilterMode] = useState<'current_grade' | 'all'>('current_grade');

  // Filter exams based on currentGradeFilter or all
  const displayedExams = useMemo(() => {
    if (filterMode === 'current_grade') {
      const inGrade = customExams.filter((e) => e.gradeNumber === currentGradeFilter && e.isPublished !== false);
      if (inGrade.length > 0) return inGrade;
      // If none in this grade, show all exams
      return customExams.filter((e) => e.isPublished !== false);
    }
    return customExams.filter((e) => e.isPublished !== false);
  }, [customExams, currentGradeFilter, filterMode]);

  return (
    <section className="rounded-3xl border-2 border-indigo-200/80 bg-gradient-to-br from-white via-indigo-50/40 to-blue-50/50 p-5 sm:p-7 shadow-lg shadow-indigo-100/50 space-y-5">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-indigo-100">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-md shadow-indigo-500/25 shrink-0">
            <ShieldCheck className="w-7 h-7 text-amber-300 stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-400 text-amber-950 shadow-2xs">
                Chính thức từ Giáo viên
              </span>
              <span className="text-xs text-indigo-700 font-bold hidden sm:inline">
                Admin Studio (saohom2002@gmail.com)
              </span>
            </div>
            <h2 className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight font-['Plus_Jakarta_Sans'] mt-0.5">
              ⭐ Đề Thi & Đề Ôn Tập Từ Giáo Viên
            </h2>
          </div>
        </div>

        {/* Action button */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
          {/* Switch tab: Grade vs All */}
          <div className="inline-flex p-1 bg-white rounded-xl border border-indigo-100 shadow-2xs text-xs font-bold">
            <button
              onClick={() => {
                sound.playClick();
                setFilterMode('current_grade');
              }}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                filterMode === 'current_grade'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Khối {currentGradeFilter}
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setFilterMode('all');
              }}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                filterMode === 'all'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Tất cả ({customExams.length})
            </button>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onOpenAdminStudio();
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md shadow-indigo-600/25 transition-transform active:scale-95 cursor-pointer shrink-0"
            title="Mở Studio để Quản trị hoặc Biên soạn thêm đề thi"
          >
            {isAdmin ? (
              <>
                <Plus className="w-4 h-4 stroke-[3]" />
                <span>Quản trị đề thi</span>
              </>
            ) : (
              <>
                <ShieldCheck className="w-4 h-4 text-amber-300" />
                <span>Admin Studio</span>
              </>
            )}
          </button>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
        Các bộ đề khảo sát chất lượng, kiểm tra 15 – 45 phút và đề ôn tập chuyên sâu bám sát chương trình GDPT 2018 (SGK Kết Nối Tri Thức Với Cuộc Sống). Học sinh có thể làm bài tính giờ trực tiếp hoặc mở bản in PDF kèm đáp án chi tiết.
      </p>

      {/* Exam Cards Grid */}
      {displayedExams.length === 0 ? (
        <div className="p-8 text-center bg-white/80 rounded-2xl border border-indigo-100 space-y-2">
          <p className="text-xs font-semibold text-slate-600">
            Chưa có đề thi nào cho Khối {currentGradeFilter}.
          </p>
          <button
            onClick={onOpenAdminStudio}
            className="text-xs font-bold text-indigo-600 hover:text-indigo-800 underline"
          >
            Mở Studio để thêm đề thi mới cho khối này
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedExams.map((exam) => (
            <div
              key={exam.id}
              className="bg-white rounded-2xl border border-slate-200/90 hover:border-indigo-400 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-2.5">
                {/* Badges */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-indigo-100 text-indigo-800 border border-indigo-200">
                    {exam.grade || `Khối ${exam.gradeNumber}`}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                      exam.category === 'exam'
                        ? 'bg-amber-100 text-amber-900 border border-amber-300'
                        : 'bg-blue-100 text-blue-800 border border-blue-200'
                    }`}
                  >
                    {exam.category === 'exam' ? 'Đề thi tính giờ' : 'Đề ôn tập'}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-sm sm:text-base font-black text-slate-900 group-hover:text-indigo-700 transition-colors leading-snug line-clamp-2">
                    {exam.title}
                  </h3>
                  {exam.description && (
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {exam.description}
                    </p>
                  )}
                </div>

                {/* Meta info */}
                <div className="flex items-center gap-3 text-xs font-bold text-slate-600 pt-1">
                  <span className="flex items-center gap-1">
                    <FileQuestion className="w-3.5 h-3.5 text-indigo-600" />
                    {exam.questions?.length || 0} câu
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    {exam.durationMinutes || 45} phút
                  </span>
                  <span>•</span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    GV: Ms. Trúc
                  </span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => onLaunchExam(exam, exam.category)}
                  className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm shadow-indigo-600/20 transition-transform active:scale-95 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>{exam.category === 'exam' ? 'Vào thi ngay' : 'Bắt đầu ôn'}</span>
                </button>

                <button
                  onClick={() => onPrintExam(exam)}
                  className="p-2 rounded-xl text-slate-600 hover:text-indigo-700 hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer"
                  title="In đề thi / Xem đáp án chi tiết"
                >
                  <Printer className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
