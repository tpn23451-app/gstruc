import React, { useMemo } from 'react';
import { QuizSession, StudentProfile } from '../types/quiz';
import { calculateStudentBadges } from '../utils/gamification';
import {
  BarChart3,
  TrendingUp,
  Award,
  BookOpen,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  RefreshCw,
  Layers,
  ChevronRight,
  Flame,
  Zap,
  ShieldCheck,
  UserCheck,
  Medal,
  Trophy,
} from 'lucide-react';
import { sound } from '../utils/sound';
import { isQuestionAnswerCorrect } from '../utils/questionEvaluator';
import { StudentAvatar } from './StudentAvatar';

interface DashboardProps {
  history: QuizSession[];
  onSelectLessonToPractice?: (lessonTitle: string) => void;
  onLoadDemoData?: () => void;
  studentProfile?: StudentProfile;
  mistakesCount?: number;
  onOpenMistakes?: () => void;
  onOpenScorebook?: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  history,
  onSelectLessonToPractice,
  onLoadDemoData,
  studentProfile,
  mistakesCount = 0,
  onOpenMistakes,
  onOpenScorebook,
}) => {
  const badges = useMemo(() => calculateStudentBadges(history), [history]);
  // Aggregate stats across history
  const stats = useMemo(() => {
    if (!history || history.length === 0) return null;

    const totalQuizzes = history.length;
    const totalQuestions = history.reduce((acc, h) => acc + (h.totalQuestions || 0), 0);
    const totalScore = history.reduce((acc, h) => acc + (h.score || 0), 0);
    const avgScore = totalScore / totalQuizzes;
    const avgPercentage = Math.round(
      history.reduce((acc, h) => acc + (h.percentage || 0), 0) / totalQuizzes
    );
    const totalDurationSeconds = history.reduce((acc, h) => acc + (h.timeSpentSeconds || 0), 0);

    // Group by lesson title
    const lessonMap: Record<
      string,
      { title: string; subject: string; scores: number[]; count: number; totalQ: number }
    > = {};

    history.forEach((h) => {
      const key = h.lessonTitle;
      if (!lessonMap[key]) {
        lessonMap[key] = {
          title: key,
          subject: h.subject || 'Tin học',
          scores: [],
          count: 0,
          totalQ: 0,
        };
      }
      lessonMap[key].scores.push(h.score);
      lessonMap[key].count += 1;
      lessonMap[key].totalQ += h.totalQuestions;
    });

    const lessonAverages = Object.values(lessonMap).map((item) => {
      const sum = item.scores.reduce((a, b) => a + b, 0);
      const avg = Number((sum / item.scores.length).toFixed(1));
      const max = Math.max(...item.scores);
      return {
        ...item,
        avgScore: avg,
        maxScore: max,
      };
    });

    // Sort by avgScore descending
    lessonAverages.sort((a, b) => b.avgScore - a.avgScore);

    // Difficulty breakdown from questions across sessions
    let deTotal = 0;
    let deCorrect = 0;
    let tbTotal = 0;
    let tbCorrect = 0;
    let khoTotal = 0;
    let khoCorrect = 0;

    history.forEach((h) => {
      h.questions.forEach((q, idx) => {
        const isRight = isQuestionAnswerCorrect(q, h.userAnswers[idx]);
        if (q.difficulty === 'de') {
          deTotal++;
          if (isRight) deCorrect++;
        } else if (q.difficulty === 'trung_binh') {
          tbTotal++;
          if (isRight) tbCorrect++;
        } else if (q.difficulty === 'kho') {
          khoTotal++;
          if (isRight) khoCorrect++;
        }
      });
    });

    return {
      totalQuizzes,
      totalQuestions,
      avgScore: Number(avgScore.toFixed(1)),
      avgPercentage,
      totalDurationSeconds,
      lessonAverages,
      difficultyBreakdown: {
        de: { total: deTotal, correct: deCorrect, rate: deTotal > 0 ? Math.round((deCorrect / deTotal) * 100) : 0 },
        trung_binh: { total: tbTotal, correct: tbCorrect, rate: tbTotal > 0 ? Math.round((tbCorrect / tbTotal) * 100) : 0 },
        kho: { total: khoTotal, correct: khoCorrect, rate: khoTotal > 0 ? Math.round((khoCorrect / khoTotal) * 100) : 0 },
      },
      recentSessions: [...history].slice(0, 7).reverse(),
    };
  }, [history]);

  const formatTotalTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    if (mins < 60) return `${mins} phút`;
    const hours = (mins / 60).toFixed(1);
    return `${hours} giờ`;
  };

  // Rank determination
  const getRank = (score: number) => {
    if (score >= 9.0) return { title: 'Xuất Sắc', color: 'text-emerald-700 bg-emerald-100 border-emerald-300' };
    if (score >= 8.0) return { title: 'Giỏi', color: 'text-blue-700 bg-blue-100 border-blue-300' };
    if (score >= 6.5) return { title: 'Khá', color: 'text-indigo-700 bg-indigo-100 border-indigo-300' };
    if (score >= 5.0) return { title: 'Trung Bình', color: 'text-amber-700 bg-amber-100 border-amber-300' };
    return { title: 'Cần Ôn Thêm', color: 'text-rose-700 bg-rose-100 border-rose-300' };
  };

  if (!stats) {
    return (
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <BarChart3 className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-800">
                Dashboard Thống Kê & Phân Tích Kết Quả
              </h2>
              <p className="text-xs text-slate-500">
                Theo dõi tiến độ, điểm trung bình theo bài học và đánh giá năng lực
              </p>
            </div>
          </div>

          {onLoadDemoData && (
            <button
              onClick={() => {
                sound.playClick();
                onLoadDemoData();
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold transition-all border border-blue-200 shadow-xs"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Nạp dữ liệu mẫu để xem thử Dashboard</span>
            </button>
          )}
        </div>

        <div className="py-8 text-center text-slate-400 bg-slate-50/70 rounded-2xl border border-dashed border-slate-200 space-y-2">
          <BookOpen className="w-8 h-8 text-slate-300 mx-auto" />
          <p className="font-semibold text-xs sm:text-sm text-slate-600">
            Chưa có bài thi nào được ghi nhận
          </p>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Sau khi hoàn thành các bài ôn tập, bảng thống kê và biểu đồ phân tích năng lực sẽ tự động hiển thị tại đây!
          </p>
        </div>
      </div>
    );
  }

  const overallRank = getRank(stats.avgScore);

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-6 animate-in fade-in-50">
      {/* Header of Dashboard */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
            <BarChart3 className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg sm:text-xl font-bold text-slate-800 font-['Lexend']">
                Dashboard Thống Kê Học Tập
              </h2>
              <span className={`text-[11px] font-extrabold px-2 py-0.5 rounded-full border ${overallRank.color}`}>
                Xếp loại: {overallRank.title}
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              {studentProfile ? (
                <span>
                  Học sinh: <strong className="text-indigo-700">{studentProfile.fullName}</strong> (Lớp{' '}
                  <strong className="text-indigo-700">{studentProfile.className}</strong>) •{' '}
                </span>
              ) : null}
              Phân tích chi tiết từ <strong>{stats.totalQuizzes} lượt ôn tập</strong> ({stats.totalQuestions} câu hỏi đã làm)
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
          {onOpenScorebook && (
            <button
              onClick={() => {
                sound.playClick();
                onOpenScorebook();
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-bold transition-colors border border-amber-300 shadow-xs cursor-pointer"
            >
              <Trophy className="w-3.5 h-3.5 text-amber-600" />
              <span>Bảng Vàng & Sổ Điểm</span>
            </button>
          )}

          {onOpenMistakes && (
            <button
              onClick={() => {
                sound.playClick();
                onOpenMistakes();
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold transition-colors border border-rose-200 shadow-xs cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-rose-600" />
              <span>Sổ tay câu sai ({mistakesCount})</span>
            </button>
          )}

          {onLoadDemoData && (
            <button
              onClick={() => {
                sound.playClick();
                onLoadDemoData();
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs font-semibold transition-colors border border-slate-200 cursor-pointer"
              title="Cập nhật thêm dữ liệu ngẫu nhiên để quan sát biểu đồ"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Nạp thêm dữ liệu mẫu</span>
            </button>
          )}
        </div>
      </div>

      {/* 4 Key Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {/* Điểm TB */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50/50 border border-blue-200/80 space-y-1">
          <div className="flex items-center justify-between text-xs font-bold text-blue-700">
            <span>Điểm trung bình</span>
            <Award className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-blue-950 font-['Lexend']">
            {stats.avgScore.toFixed(1)}
            <span className="text-sm font-semibold text-blue-500">/10</span>
          </div>
          <div className="text-[11px] text-blue-600 font-medium">
            Tỷ lệ đúng ~{stats.avgPercentage}%
          </div>
        </div>

        {/* Số lượt làm bài */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50/50 border border-indigo-200/80 space-y-1">
          <div className="flex items-center justify-between text-xs font-bold text-indigo-700">
            <span>Lượt làm bài</span>
            <BookOpen className="w-4 h-4 text-indigo-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-indigo-950 font-['Lexend']">
            {stats.totalQuizzes}
            <span className="text-xs font-semibold text-indigo-500 ml-1">đề thi</span>
          </div>
          <div className="text-[11px] text-indigo-600 font-medium">
            {stats.lessonAverages.length} bài học khác nhau
          </div>
        </div>

        {/* Tổng câu hỏi */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50/50 border border-emerald-200/80 space-y-1">
          <div className="flex items-center justify-between text-xs font-bold text-emerald-700">
            <span>Số câu đã luyện</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-emerald-950 font-['Lexend']">
            {stats.totalQuestions}
            <span className="text-xs font-semibold text-emerald-500 ml-1">câu</span>
          </div>
          <div className="text-[11px] text-emerald-700 font-medium">
            Đúng {stats.difficultyBreakdown.de.correct + stats.difficultyBreakdown.trung_binh.correct + stats.difficultyBreakdown.kho.correct} câu
          </div>
        </div>

        {/* Thời gian */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200/80 space-y-1">
          <div className="flex items-center justify-between text-xs font-bold text-amber-800">
            <span>Thời gian ôn</span>
            <Clock className="w-4 h-4 text-amber-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-amber-950 font-['Lexend']">
            {formatTotalTime(stats.totalDurationSeconds)}
          </div>
          <div className="text-[11px] text-amber-700 font-medium">
            Chăm chỉ và đều đặn
          </div>
        </div>
      </div>

      {/* Badges & Achievements Section */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Medal className="w-4 h-4 text-amber-500" />
            <h3 className="text-sm font-bold text-slate-900">
              Bảng Vàng Huy Hiệu & Danh Hiệu Đạt Được
            </h3>
          </div>
          <span className="text-xs font-semibold text-slate-500">
            {badges.filter((b) => b.unlocked).length}/{badges.length} đã mở khóa
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {badges.map((b) => (
            <div
              key={b.id}
              className={`p-3 rounded-xl border transition-all text-center space-y-1.5 flex flex-col justify-between ${
                b.unlocked
                  ? 'border-amber-200 bg-linear-to-b from-amber-50/70 to-orange-50/40 shadow-xs'
                  : 'border-slate-100 bg-slate-50/60 opacity-60'
              }`}
            >
              <div className="text-2xl filter drop-shadow-xs">{b.icon}</div>
              <div>
                <div className={`text-xs font-bold leading-tight ${b.unlocked ? 'text-slate-900' : 'text-slate-500'}`}>
                  {b.title}
                </div>
                <div className="text-[10px] text-slate-500 line-clamp-2 mt-0.5">
                  {b.description}
                </div>
              </div>
              <div
                className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded-full inline-block mx-auto ${
                  b.unlocked
                    ? 'bg-amber-100 text-amber-800'
                    : 'bg-slate-200/80 text-slate-600'
                }`}
              >
                {b.progressText || (b.unlocked ? 'Đã đạt' : 'Chưa đạt')}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chart Section: Điểm trung bình theo bài học */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
        {/* Left Column (2 spans): Biểu đồ cột điểm theo từng bài học */}
        <div className="lg:col-span-2 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm sm:text-base font-bold text-slate-800 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-blue-600" />
              Điểm Trung Bình Theo Từng Bài Học
            </h3>
            <span className="text-[11px] text-slate-400">Thang điểm 10</span>
          </div>

          <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
            {stats.lessonAverages.map((item, idx) => {
              const isExcellent = item.avgScore >= 8.5;
              const isGood = item.avgScore >= 7.0 && item.avgScore < 8.5;
              const isAverage = item.avgScore >= 5.0 && item.avgScore < 7.0;

              let barColor = 'bg-rose-500';
              let badgeColor = 'bg-rose-100 text-rose-800 border-rose-300';
              if (isExcellent) {
                barColor = 'bg-gradient-to-r from-emerald-500 to-teal-500';
                badgeColor = 'bg-emerald-100 text-emerald-800 border-emerald-300';
              } else if (isGood) {
                barColor = 'bg-gradient-to-r from-blue-500 to-indigo-500';
                badgeColor = 'bg-blue-100 text-blue-800 border-blue-300';
              } else if (isAverage) {
                barColor = 'bg-gradient-to-r from-amber-500 to-yellow-500';
                badgeColor = 'bg-amber-100 text-amber-800 border-amber-300';
              }

              return (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl border border-slate-200/90 hover:border-blue-300 bg-slate-50/50 hover:bg-white transition-all space-y-2 group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                        <span>{item.subject}</span>
                        <span>•</span>
                        <span>{item.count} lần làm ({item.totalQ} câu)</span>
                      </div>
                      <h4 className="font-bold text-xs sm:text-sm text-slate-800 line-clamp-1 group-hover:text-blue-700 transition-colors">
                        {item.title}
                      </h4>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className={`text-[11px] font-extrabold px-2 py-0.5 rounded-md border ${badgeColor}`}>
                        ĐTB: {item.avgScore}/10
                      </span>
                      {onSelectLessonToPractice && (
                        <button
                          onClick={() => {
                            sound.playClick();
                            onSelectLessonToPractice(item.title);
                          }}
                          className="p-1 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                          title="Luyện tập lại bài học này"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Horizontal Bar */}
                  <div className="w-full h-2.5 bg-slate-200/70 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${barColor}`}
                      style={{ width: `${Math.min(100, Math.max(5, item.avgScore * 10))}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Thống kê 3 cấp độ & Xu hướng */}
        <div className="space-y-5">
          {/* Tỷ lệ làm đúng theo 3 cấp độ */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-indigo-600" />
              Năng Lực Theo 3 Cấp Độ
            </h3>

            <div className="space-y-2.5">
              {/* Cấp độ Dễ */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-emerald-800 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Cấp độ DỄ (Nhận biết)
                  </span>
                  <span className="font-bold text-emerald-700">
                    {stats.difficultyBreakdown.de.rate}% ({stats.difficultyBreakdown.de.correct}/{stats.difficultyBreakdown.de.total})
                  </span>
                </div>
                <div className="w-full h-2 bg-emerald-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-600 rounded-full"
                    style={{ width: `${stats.difficultyBreakdown.de.rate}%` }}
                  />
                </div>
              </div>

              {/* Cấp độ Trung bình */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-amber-800 flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-amber-600" />
                    Cấp độ TRUNG BÌNH (Vận dụng)
                  </span>
                  <span className="font-bold text-amber-700">
                    {stats.difficultyBreakdown.trung_binh.rate}% ({stats.difficultyBreakdown.trung_binh.correct}/{stats.difficultyBreakdown.trung_binh.total})
                  </span>
                </div>
                <div className="w-full h-2 bg-amber-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-500 rounded-full"
                    style={{ width: `${stats.difficultyBreakdown.trung_binh.rate}%` }}
                  />
                </div>
              </div>

              {/* Cấp độ Khó */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-rose-800 flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-rose-600" />
                    Cấp độ KHÓ (Vận dụng cao)
                  </span>
                  <span className="font-bold text-rose-700">
                    {stats.difficultyBreakdown.kho.rate}% ({stats.difficultyBreakdown.kho.correct}/{stats.difficultyBreakdown.kho.total})
                  </span>
                </div>
                <div className="w-full h-2 bg-rose-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-rose-500 rounded-full"
                    style={{ width: `${stats.difficultyBreakdown.kho.rate}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Lời khuyên ôn tập của cô Trúc */}
          <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-blue-900">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Gợi ý học tập từ GV: Ms. Trúc:</span>
            </div>
            <p className="text-xs text-blue-950 leading-relaxed font-normal">
              {stats.avgScore >= 8.5
                ? 'Phong độ rất vững vàng! Em hãy duy trì luyện các câu hỏi Vận dụng cao (Khó) để sẵn sàng bứt phá điểm 10 trong các kỳ thi nhé!'
                : stats.avgScore >= 6.5
                ? 'Em đã nắm vững kiến thức trọng tâm. Hãy chú ý đọc kỹ các bẫy trắc nghiệm ở phần công thức bảng tính và cấu trúc điều khiển để nâng điểm!'
                : 'Em nên ôn kỹ lại các câu sai ở cấp độ Dễ và Trung bình để nắm chắc lý thuyết nền tảng trước khi làm đề khó hơn nhé!'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
