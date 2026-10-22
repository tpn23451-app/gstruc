import { StudentScoreRecord } from '../types/quiz';

export const GOOGLE_SHEET_ID = '14y9AAFojF-LybLPELwynwVu37e-yTM2-G55gmWlzF7I';
export const GOOGLE_SHEET_URL = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/edit?gid=0#gid=0`;

/**
 * Xuất dữ liệu bảng điểm sang định dạng CSV tương thích 100% với Google Sheets (UTF-8 with BOM)
 */
export function exportScoresToGoogleSheetCSV(scores: StudentScoreRecord[]): void {
  const headers = [
    'Mã bản ghi',
    'Họ và tên',
    'Lớp',
    'Trường',
    'Khối',
    'Đợt thi / Chuyên đề',
    'Bài học',
    'Điểm số (thang 10)',
    'Tỷ lệ đúng (%)',
    'Số câu đúng',
    'Tổng số câu',
    'Thời gian (giây)',
    'Ngày làm bài',
    'Danh hiệu / Xếp loại',
    'Ghi chú',
  ];

  const rows = scores.map((s) => {
    const dateFormatted = new Date(s.date).toLocaleString('vi-VN');
    return [
      `"${s.id || ''}"`,
      `"${s.studentName || ''}"`,
      `"${s.className || ''}"`,
      `"${s.schoolName || ''}"`,
      `"${s.grade || ('Khối ' + s.gradeNumber)}"`,
      `"${s.examBatch || ''}"`,
      `"${s.lessonTitle || ''}"`,
      `"${s.score}"`,
      `"${s.percentage}%"`,
      `"${s.correctAnswersCount}"`,
      `"${s.totalQuestions}"`,
      `"${s.timeSpentSeconds}"`,
      `"${dateFormatted}"`,
      `"${s.rankTitle || ''}"`,
      `"${s.notes || ''}"`,
    ].join(',');
  });

  const csvContent = '\uFEFF' + [headers.join(','), ...rows].join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `Bang_Diem_Hoc_Sinh_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Gửi tự động 1 bản ghi điểm sang Google Apps Script (nếu người dùng cấu hình Webhook URL)
 */
export async function sendScoreToGoogleSheetWebhook(
  score: StudentScoreRecord,
  webhookUrl?: string
): Promise<boolean> {
  const url = webhookUrl || localStorage.getItem('ontap_gsheet_webhook_url');
  if (!url) return false;

  try {
    const payload = {
      id: score.id,
      studentName: score.studentName,
      className: score.className,
      schoolName: score.schoolName,
      grade: score.grade || `Khối ${score.gradeNumber}`,
      examBatch: score.examBatch,
      lessonTitle: score.lessonTitle,
      score: score.score,
      percentage: score.percentage,
      correctCount: score.correctAnswersCount,
      totalCount: score.totalQuestions,
      timeSpentSeconds: score.timeSpentSeconds,
      date: new Date(score.date).toLocaleString('vi-VN'),
      rankTitle: score.rankTitle || '',
    };

    await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    return true;
  } catch (error) {
    console.warn('Không thể gửi đến Google Sheets Webhook:', error);
    return false;
  }
}
