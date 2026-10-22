import { QuizSession, BadgeItem } from '../types/quiz';

export function calculateStudentBadges(history: QuizSession[]): BadgeItem[] {
  const totalQuizzes = history.length;
  const perfectQuizzes = history.filter((h) => h.score >= 10);
  const hardPassQuizzes = history.filter((h) => h.difficultyMode === 'kho' && h.score >= 8);
  const fastQuizzes = history.filter(
    (h) => (h.timeSpentSeconds || 0) > 0 && (h.timeSpentSeconds || 0) <= 180 && h.score >= 8
  );

  const avgScore =
    totalQuizzes > 0
      ? history.reduce((acc, h) => acc + (h.score || 0), 0) / totalQuizzes
      : 0;

  const badges: BadgeItem[] = [
    {
      id: 'first_quiz',
      title: 'Tân Binh Khởi Đầu',
      description: 'Hoàn thành bài ôn tập kiểm tra đầu tiên.',
      icon: '🌱',
      unlocked: totalQuizzes >= 1,
      progressText: totalQuizzes >= 1 ? 'Đã đạt' : '0/1 bài',
    },
    {
      id: 'perfect_score',
      title: 'Tay Thiện Xạ Điểm 10',
      description: 'Đạt điểm 10.0 tuyệt đối trong một bài thi.',
      icon: '🎯',
      unlocked: perfectQuizzes.length >= 1,
      progressText: perfectQuizzes.length >= 1 ? 'Đã đạt' : 'Chưa có điểm 10',
    },
    {
      id: 'hard_master',
      title: 'Bứt Phá Giới Hạn',
      description: 'Vượt qua thử thách cấp độ Khó với điểm >= 8.0.',
      icon: '🚀',
      unlocked: hardPassQuizzes.length >= 1,
      progressText: hardPassQuizzes.length >= 1 ? 'Đã đạt' : 'Chưa vượt qua',
    },
    {
      id: 'diligent_streak',
      title: 'Chăm Chỉ Miệt Mài',
      description: 'Tích lũy hoàn thành từ 5 đề thi trở lên.',
      icon: '🔥',
      unlocked: totalQuizzes >= 5,
      progressText: `${Math.min(totalQuizzes, 5)}/5 bài`,
    },
    {
      id: 'speed_demon',
      title: 'Vua Tốc Độ',
      description: 'Hoàn thành đề thi dưới 3 phút với điểm >= 8.0.',
      icon: '⚡',
      unlocked: fastQuizzes.length >= 1,
      progressText: fastQuizzes.length >= 1 ? 'Đã đạt' : 'Chưa đạt',
    },
    {
      id: 'master_tinhoc',
      title: 'Bậc Thầy Tin Học',
      description: 'Đạt điểm trung bình >= 9.0 qua ít nhất 3 đề thi.',
      icon: '👑',
      unlocked: totalQuizzes >= 3 && avgScore >= 9.0,
      progressText:
        totalQuizzes >= 3
          ? `ĐTB: ${avgScore.toFixed(1)}/10`
          : `${totalQuizzes}/3 bài`,
    },
  ];

  return badges;
}
