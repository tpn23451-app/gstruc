import React, { useState, useMemo } from 'react';
import { StudentScoreRecord, CertificateData } from '../types/quiz';
import { DEFAULT_EXAM_BATCHES } from '../data/defaultScores';
import {
  Trophy,
  Award,
  Medal,
  BookOpen,
  Search,
  Plus,
  Trash2,
  FileSpreadsheet,
  Printer,
  X,
  Crown,
  Sparkles,
  Calendar,
  Filter,
  CheckCircle2,
  User,
  GraduationCap,
  ExternalLink,
  Cloud
} from 'lucide-react';
import { sound } from '../utils/sound';
import { StudentAvatar } from './StudentAvatar';
import { GOOGLE_SHEET_URL, exportScoresToGoogleSheetCSV } from '../services/googleSheets';

interface ScorebookLeaderboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  scores: StudentScoreRecord[];
  onAddScore: (score: StudentScoreRecord) => void;
  onDeleteScore: (scoreId: string) => void;
  onResetDemoScores?: () => void;
  onOpenCertificate: (cert: CertificateData) => void;
  onOpenBatchCertificates: (certs: CertificateData[]) => void;
}

export const ScorebookLeaderboardModal: React.FC<ScorebookLeaderboardModalProps> = ({
  isOpen,
  onClose,
  scores,
  onAddScore,
  onDeleteScore,
  onResetDemoScores,
  onOpenCertificate,
  onOpenBatchCertificates,
}) => {
  const [activeTab, setActiveTab] = useState<'leaderboard' | 'gradebook'>('leaderboard');

  // Filter states
  const [selectedBatch, setSelectedBatch] = useState<string>('all');
  const [selectedGrade, setSelectedGrade] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Add manual score modal state
  const [isAddScoreOpen, setIsAddScoreOpen] = useState<boolean>(false);
  const [manualName, setManualName] = useState<string>('');
  const [manualClass, setManualClass] = useState<string>('8A1');
  const [manualSchool, setManualSchool] = useState<string>('THCS');
  const [manualBatch, setManualBatch] = useState<string>(DEFAULT_EXAM_BATCHES[0]);
  const [manualLesson, setManualLesson] = useState<string>('Bài kiểm tra khảo sát');
  const [manualScore, setManualScore] = useState<string>('10');
  const [manualNotes, setManualNotes] = useState<string>('');

  // Distinct exam batches available
  const availableBatches = useMemo(() => {
    const set = new Set<string>(DEFAULT_EXAM_BATCHES);
    scores.forEach((s) => {
      if (s.examBatch) set.add(s.examBatch);
    });
    return Array.from(set);
  }, [scores]);

  // Filtered scores
  const filteredScores = useMemo(() => {
    return scores.filter((s) => {
      if (selectedBatch !== 'all' && s.examBatch !== selectedBatch) return false;
      if (selectedGrade !== 'all' && String(s.gradeNumber) !== selectedGrade) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = s.studentName.toLowerCase().includes(q);
        const matchesClass = s.className.toLowerCase().includes(q);
        const matchesLesson = s.lessonTitle.toLowerCase().includes(q);
        if (!matchesName && !matchesClass && !matchesLesson) return false;
      }
      return true;
    });
  }, [scores, selectedBatch, selectedGrade, searchQuery]);

  // Leaderboard ranking (sorted by score desc, then timeSpent asc)
  const rankedLeaderboard = useMemo(() => {
    return [...filteredScores].sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return (a.timeSpentSeconds || 0) - (b.timeSpentSeconds || 0);
    });
  }, [filteredScores]);

  if (!isOpen) return null;

  // Convert a score record to CertificateData
  const createCertFromScore = (record: StudentScoreRecord): CertificateData => {
    return {
      studentName: record.studentName,
      className: record.className,
      schoolName: record.schoolName || 'Trường THCS',
      examBatch: record.examBatch || 'Đợt khảo sát năng lực Tin học',
      lessonTitle: record.lessonTitle,
      score: record.score,
      percentage: record.percentage || Math.round((record.score / 10) * 100),
      rankTitle: record.score >= 9.5 ? 'Thủ khoa Xuất sắc' : record.score >= 9.0 ? 'Xuất sắc' : record.score >= 8.0 ? 'Giỏi' : 'Khá',
      date: record.date || Date.now(),
      certificateCode: `VINH-DANH-${record.className}-${record.id.slice(-6).toUpperCase()}`,
    };
  };

  // Handle batch certificate export
  const handleExportAllCertificates = () => {
    sound.playClick();
    // Export certificate for all students with score >= 8.0 in current view
    const eligible = rankedLeaderboard.filter((s) => s.score >= 7.5);
    if (eligible.length === 0) {
      alert('Không có học sinh nào đạt tiêu chuẩn (điểm >= 7.5) trong danh sách đang lọc!');
      return;
    }
    const certList = eligible.map(createCertFromScore);
    onOpenBatchCertificates(certList);
  };

  // Export Gradebook to CSV
  const handleExportCSV = () => {
    sound.playClick();
    const headers = ['STT', 'Họ và tên', 'Lớp', 'Trường', 'Đợt thi', 'Nội dung bài thi', 'Điểm số', 'Tỷ lệ %', 'Xếp loại', 'Ngày thi'];
    const rows = filteredScores.map((s, idx) => [
      idx + 1,
      `"${s.studentName}"`,
      `"${s.className}"`,
      `"${s.schoolName || ''}"`,
      `"${s.examBatch}"`,
      `"${s.lessonTitle}"`,
      s.score.toFixed(1),
      `${s.percentage}%`,
      `"${s.rankTitle || (s.score >= 9 ? 'Xuất sắc' : s.score >= 8 ? 'Giỏi' : 'Khá')}"`,
      `"${new Date(s.date).toLocaleDateString('vi-VN')}"`,
    ]);

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `So_Diem_Hoc_Sinh_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Handle manual score save
  const handleSaveManualScore = (e: React.FormEvent) => {
    e.preventDefault();
    if (!manualName.trim()) {
      alert('Vui lòng nhập họ và tên học sinh!');
      return;
    }
    const numScore = Math.max(0, Math.min(10, parseFloat(manualScore) || 10));
    const gradeNum = parseInt(manualClass.replace(/\D/g, ''), 10) || 8;

    const newRecord: StudentScoreRecord = {
      id: `score-manual-${Date.now()}`,
      studentName: manualName.trim(),
      className: manualClass.trim(),
      schoolName: manualSchool.trim() || 'Trường THCS',
      gradeNumber: gradeNum,
      grade: `Khối ${gradeNum}`,
      examBatch: manualBatch,
      lessonTitle: manualLesson.trim() || 'Bài thi Tin học',
      score: numScore,
      percentage: Math.round((numScore / 10) * 100),
      totalQuestions: 10,
      correctAnswersCount: Math.round((numScore / 10) * 10),
      timeSpentSeconds: 300,
      date: Date.now(),
      rankTitle: numScore >= 9.5 ? 'Thủ khoa Xuất sắc' : numScore >= 9 ? 'Xuất sắc' : numScore >= 8 ? 'Giỏi' : 'Khá',
      notes: manualNotes.trim(),
      avatar: 'robot-ai',
    };

    onAddScore(newRecord);
    sound.playSuccess();
    setIsAddScoreOpen(false);
    setManualName('');
    setManualNotes('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in overflow-y-auto">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-5xl w-full max-h-[92vh] flex flex-col overflow-hidden animate-in zoom-in-95 my-auto">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4 bg-gradient-to-r from-amber-50 via-yellow-50/50 to-indigo-50/40">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-600 text-white flex items-center justify-center shadow-lg shadow-amber-500/20 shrink-0">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-xl font-black text-slate-900 font-['Lexend']">
                  Bảng Vàng Vinh Danh & Sổ Lưu Điểm Học Sinh
                </h2>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-amber-950 font-black text-[11px] uppercase tracking-wider">
                  Năm học 2026 - 2027
                </span>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Firebase Online
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Lưu giữ điểm số, xếp hạng thi đua và xuất Giấy chứng nhận khen thưởng theo từng đợt khảo sát
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Tab switchers */}
            <div className="flex items-center bg-slate-100 p-1 rounded-2xl border border-slate-200 text-xs font-bold">
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  setActiveTab('leaderboard');
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
                  activeTab === 'leaderboard'
                    ? 'bg-amber-400 text-amber-950 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Crown className="w-4 h-4 text-amber-700" />
                <span>Bảng Vàng</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  setActiveTab('gradebook');
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
                  activeTab === 'gradebook'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Sổ Điểm Lớp ({scores.length})</span>
              </button>
            </div>

            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="w-8 h-8 rounded-full hover:bg-slate-200/80 flex items-center justify-center text-slate-400 hover:text-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter bar */}
        <div className="px-4 sm:px-6 py-3 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-3">
            {/* Filter by Exam Batch */}
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span className="font-bold text-slate-700">Đợt thi:</span>
              <select
                value={selectedBatch}
                onChange={(e) => setSelectedBatch(e.target.value)}
                className="px-2.5 py-1.5 rounded-xl border border-slate-300 bg-white font-medium text-slate-800 text-xs max-w-[240px] truncate"
              >
                <option value="all">Tất cả các đợt thi</option>
                {availableBatches.map((b, idx) => (
                  <option key={idx} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            {/* Filter by Grade */}
            <div className="flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
              <span className="font-bold text-slate-700">Khối:</span>
              <select
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="px-2 py-1.5 rounded-xl border border-slate-300 bg-white font-medium text-slate-800 text-xs"
              >
                <option value="all">Tất cả</option>
                <option value="3">Khối 3</option>
                <option value="4">Khối 4</option>
                <option value="5">Khối 5</option>
                <option value="6">Khối 6</option>
                <option value="7">Khối 7</option>
                <option value="8">Khối 8</option>
                <option value="9">Khối 9</option>
              </select>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2" />
              <input
                type="text"
                placeholder="Tìm tên học sinh, lớp..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 pr-3 py-1.5 rounded-xl border border-slate-300 bg-white text-xs w-44 sm:w-56 focus:outline-indigo-500"
              />
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            {activeTab === 'leaderboard' ? (
              <button
                type="button"
                onClick={handleExportAllCertificates}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-md shadow-amber-500/20 transition-all cursor-pointer"
                title="Xuất Giấy khen hàng loạt cho các em đạt điểm cao"
              >
                <Award className="w-3.5 h-3.5" />
                <span>Xuất Giấy Khen Đợt Này</span>
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => setIsAddScoreOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/20 transition-all cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Nhập điểm</span>
                </button>
                <button
                  type="button"
                  onClick={handleExportCSV}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs transition-all cursor-pointer"
                  title="Tải tệp bảng điểm CSV tương thích Google Sheets / Excel"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Xuất Excel/CSV</span>
                </button>
                <a
                  href={GOOGLE_SHEET_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs transition-all cursor-pointer shadow-xs"
                  title="Mở trực tiếp bảng điểm trên Google Sheets"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Mở Google Sheets</span>
                </a>
              </>
            )}
          </div>
        </div>

        {/* Tab 1: Leaderboard (Bảng Vàng Vinh Danh) */}
        {activeTab === 'leaderboard' && (
          <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1">
            {/* Top 3 Podium (If we have at least 1 result) */}
            {rankedLeaderboard.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                {/* 2nd Place (Silver) */}
                {rankedLeaderboard[1] && (
                  <div className="p-4 rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white text-center flex flex-col justify-between order-2 md:order-1 shadow-xs">
                    <div className="space-y-2">
                      <div className="w-12 h-12 rounded-2xl bg-slate-300 text-slate-800 font-black text-xl flex items-center justify-center mx-auto shadow-sm">
                        🥈 2
                      </div>
                      <StudentAvatar avatarIdOrUrl={rankedLeaderboard[1].avatar || 'girl-1'} size="md" className="mx-auto" />
                      <div>
                        <h4 className="font-extrabold text-slate-900 text-sm">{rankedLeaderboard[1].studentName}</h4>
                        <p className="text-xs text-indigo-700 font-bold">Lớp {rankedLeaderboard[1].className}</p>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-slate-100 mt-3 space-y-2">
                      <div className="text-2xl font-black text-slate-800 font-['Lexend']">
                        {rankedLeaderboard[1].score.toFixed(1)} <span className="text-xs text-slate-500 font-normal">/10</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          sound.playClick();
                          onOpenCertificate(createCertFromScore(rankedLeaderboard[1]));
                        }}
                        className="w-full py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1"
                      >
                        <Award className="w-3.5 h-3.5 text-amber-600" />
                        <span>Xem Giấy Khen</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* 1st Place (Gold Champion) */}
                {rankedLeaderboard[0] && (
                  <div className="p-5 rounded-3xl border-2 border-amber-400 bg-gradient-to-b from-amber-50/80 to-white text-center flex flex-col justify-between order-1 md:order-2 shadow-lg relative transform md:-translate-y-2">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-950 font-black text-[10px] uppercase px-3 py-0.5 rounded-full shadow-md flex items-center gap-1">
                      <Crown className="w-3 h-3" /> THỦ KHOA
                    </div>
                    <div className="space-y-2 pt-2">
                      <div className="w-14 h-14 rounded-2xl bg-amber-400 text-amber-950 font-black text-2xl flex items-center justify-center mx-auto shadow-md">
                        🥇 1
                      </div>
                      <StudentAvatar avatarIdOrUrl={rankedLeaderboard[0].avatar || 'boy-1'} size="lg" className="mx-auto" />
                      <div>
                        <h4 className="font-black text-slate-900 text-base">{rankedLeaderboard[0].studentName}</h4>
                        <p className="text-xs text-indigo-700 font-bold">Lớp {rankedLeaderboard[0].className}</p>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-amber-200 mt-3 space-y-2">
                      <div className="text-3xl font-black text-amber-900 font-['Lexend']">
                        {rankedLeaderboard[0].score.toFixed(1)} <span className="text-xs text-slate-500 font-normal">/10</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          sound.playClick();
                          onOpenCertificate(createCertFromScore(rankedLeaderboard[0]));
                        }}
                        className="w-full py-2 px-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-xs shadow-md shadow-amber-500/20 flex items-center justify-center gap-1.5"
                      >
                        <Award className="w-4 h-4 text-amber-200" />
                        <span>Cấp Giấy Khen Thủ Khoa</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* 3rd Place (Bronze) */}
                {rankedLeaderboard[2] && (
                  <div className="p-4 rounded-3xl border border-slate-200 bg-gradient-to-b from-amber-50/40 to-white text-center flex flex-col justify-between order-3 md:order-3 shadow-xs">
                    <div className="space-y-2">
                      <div className="w-12 h-12 rounded-2xl bg-amber-700/20 text-amber-900 font-black text-xl flex items-center justify-center mx-auto shadow-sm">
                        🥉 3
                      </div>
                      <StudentAvatar avatarIdOrUrl={rankedLeaderboard[2].avatar || 'boy-2'} size="md" className="mx-auto" />
                      <div>
                        <h4 className="font-extrabold text-slate-900 text-sm">{rankedLeaderboard[2].studentName}</h4>
                        <p className="text-xs text-indigo-700 font-bold">Lớp {rankedLeaderboard[2].className}</p>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-slate-100 mt-3 space-y-2">
                      <div className="text-2xl font-black text-slate-800 font-['Lexend']">
                        {rankedLeaderboard[2].score.toFixed(1)} <span className="text-xs text-slate-500 font-normal">/10</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          sound.playClick();
                          onOpenCertificate(createCertFromScore(rankedLeaderboard[2]));
                        }}
                        className="w-full py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1"
                      >
                        <Award className="w-3.5 h-3.5 text-amber-600" />
                        <span>Xem Giấy Khen</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Complete Ranking List */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Toàn Bộ Bảng Vàng Vinh Danh ({rankedLeaderboard.length} học sinh)
              </h3>

              {rankedLeaderboard.length === 0 ? (
                <div className="text-center py-12 text-slate-500 space-y-2">
                  <Trophy className="w-10 h-10 mx-auto text-slate-300" />
                  <p className="text-sm font-semibold">Chưa có kết quả thi nào khớp với bộ lọc!</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {rankedLeaderboard.map((item, idx) => (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-2xl border border-slate-200 bg-white hover:border-amber-300 hover:shadow-xs transition-all flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-7 h-7 rounded-xl font-mono font-bold text-xs flex items-center justify-center shrink-0 ${
                            idx === 0
                              ? 'bg-amber-400 text-amber-950 shadow-xs'
                              : idx === 1
                              ? 'bg-slate-300 text-slate-800'
                              : idx === 2
                              ? 'bg-amber-700/30 text-amber-900'
                              : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {idx + 1}
                        </span>

                        <StudentAvatar avatarIdOrUrl={item.avatar || 'robot-ai'} size="xs" />

                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs sm:text-sm font-bold text-slate-900">
                              {item.studentName}
                            </span>
                            <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md">
                              Lớp {item.className}
                            </span>
                            <span className="hidden sm:inline-block text-[11px] text-slate-400">
                              • {item.examBatch}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 line-clamp-1">
                            {item.lessonTitle}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <div className="text-right">
                          <div className="text-sm sm:text-base font-black text-indigo-950 font-['Lexend']">
                            {item.score.toFixed(1)}/10
                          </div>
                          <span
                            className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                              item.score >= 9
                                ? 'bg-amber-100 text-amber-800'
                                : item.score >= 8
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-slate-100 text-slate-600'
                            }`}
                          >
                            {item.rankTitle || (item.score >= 9 ? 'Xuất sắc' : 'Giỏi')}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => {
                            sound.playClick();
                            onOpenCertificate(createCertFromScore(item));
                          }}
                          className="px-2.5 py-1.5 rounded-xl border border-amber-300 bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-bold flex items-center gap-1 transition-colors"
                          title="Cấp Giấy chứng nhận cho học sinh này"
                        >
                          <Award className="w-3.5 h-3.5 text-amber-600" />
                          <span className="hidden sm:inline">Giấy Khen</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 2: Gradebook (Sổ Lưu Điểm Lớp Học) */}
        {activeTab === 'gradebook' && (
          <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1">
            <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs bg-white">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100/80 text-slate-700 font-bold border-b border-slate-200 uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="py-3 px-3 w-12 text-center">STT</th>
                    <th className="py-3 px-3">Học sinh</th>
                    <th className="py-3 px-3">Lớp & Trường</th>
                    <th className="py-3 px-3">Đợt thi</th>
                    <th className="py-3 px-3">Bài kiểm tra</th>
                    <th className="py-3 px-3 text-center">Điểm</th>
                    <th className="py-3 px-3 text-center">Xếp loại</th>
                    <th className="py-3 px-3 text-center">Ngày thi</th>
                    <th className="py-3 px-3 text-center">Hành động</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {filteredScores.length === 0 ? (
                    <tr>
                      <td colSpan={9} className="py-8 text-center text-slate-400">
                        Chưa có dữ liệu điểm nào trong sổ!
                      </td>
                    </tr>
                  ) : (
                    filteredScores.map((s, idx) => (
                      <tr key={s.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-2.5 px-3 text-center font-mono font-semibold text-slate-500">
                          {idx + 1}
                        </td>
                        <td className="py-2.5 px-3 font-bold text-slate-900">
                          <div className="flex items-center gap-1.5">
                            <StudentAvatar avatarIdOrUrl={s.avatar || 'robot-ai'} size="xs" />
                            <span>{s.studentName}</span>
                          </div>
                        </td>
                        <td className="py-2.5 px-3">
                          <span className="font-semibold text-indigo-700">{s.className}</span>
                          {s.schoolName && <div className="text-[10px] text-slate-400">{s.schoolName}</div>}
                        </td>
                        <td className="py-2.5 px-3 text-slate-600 max-w-[160px] truncate" title={s.examBatch}>
                          {s.examBatch}
                        </td>
                        <td className="py-2.5 px-3 font-medium text-slate-800 max-w-[180px] truncate" title={s.lessonTitle}>
                          {s.lessonTitle}
                        </td>
                        <td className="py-2.5 px-3 text-center font-black text-sm text-indigo-950 font-['Lexend']">
                          {s.score.toFixed(1)}
                        </td>
                        <td className="py-2.5 px-3 text-center">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                              s.score >= 9
                                ? 'bg-amber-100 text-amber-800'
                                : s.score >= 8
                                ? 'bg-emerald-100 text-emerald-800'
                                : s.score >= 6.5
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-rose-100 text-rose-800'
                            }`}
                          >
                            {s.rankTitle || (s.score >= 9 ? 'Xuất sắc' : s.score >= 8 ? 'Giỏi' : s.score >= 6.5 ? 'Khá' : 'Đạt')}
                          </span>
                        </td>
                        <td className="py-2.5 px-3 text-center text-slate-500 text-[11px]">
                          {new Date(s.date).toLocaleDateString('vi-VN')}
                        </td>
                        <td className="py-2.5 px-3 text-center">
                          <div className="flex items-center justify-center gap-1">
                            <button
                              type="button"
                              onClick={() => {
                                sound.playClick();
                                onOpenCertificate(createCertFromScore(s));
                              }}
                              className="p-1 rounded-lg hover:bg-amber-50 text-amber-600 transition-colors"
                              title="Xuất giấy chứng nhận vinh danh"
                            >
                              <Award className="w-4 h-4" />
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                if (confirm(`Bạn có chắc muốn xóa điểm của học sinh ${s.studentName}?`)) {
                                  sound.playClick();
                                  onDeleteScore(s.id);
                                }
                              }}
                              className="p-1 rounded-lg hover:bg-rose-50 text-slate-400 hover:text-rose-600 transition-colors"
                              title="Xóa dòng điểm này"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Bottom tools for gradebook */}
            <div className="flex items-center justify-between pt-2 text-xs text-slate-500">
              <div>Tổng số: <strong>{filteredScores.length} lượt điểm</strong> đã lưu</div>
              {onResetDemoScores && (
                <button
                  type="button"
                  onClick={onResetDemoScores}
                  className="text-slate-400 hover:text-slate-700 underline text-xs"
                >
                  Nạp lại danh sách mẫu
                </button>
              )}
            </div>
          </div>
        )}

        {/* Modal: Nhập điểm thủ công */}
        {isAddScoreOpen && (
          <div className="fixed inset-0 z-60 bg-slate-900/60 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4 animate-in zoom-in-95">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                  <Plus className="w-4 h-4 text-indigo-600" />
                  Nhập Điểm Học Sinh Vào Sổ
                </h3>
                <button
                  type="button"
                  onClick={() => setIsAddScoreOpen(false)}
                  className="w-7 h-7 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-400"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleSaveManualScore} className="space-y-3 text-xs">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Họ và tên học sinh *</label>
                  <input
                    type="text"
                    required
                    placeholder="VD: Nguyễn Văn An"
                    value={manualName}
                    onChange={(e) => setManualName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:outline-indigo-600"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Lớp *</label>
                    <input
                      type="text"
                      required
                      placeholder="VD: 8A1, 5A2..."
                      value={manualClass}
                      onChange={(e) => setManualClass(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Điểm số (0 - 10) *</label>
                    <input
                      type="number"
                      step="0.5"
                      min="0"
                      max="10"
                      required
                      value={manualScore}
                      onChange={(e) => setManualScore(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-bold text-indigo-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Đợt thi / Khảo sát *</label>
                  <select
                    value={manualBatch}
                    onChange={(e) => setManualBatch(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs"
                  >
                    {availableBatches.map((b, i) => (
                      <option key={i} value={b}>{b}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Nội dung bài thi / Chuyên đề</label>
                  <input
                    type="text"
                    placeholder="VD: Bài 1 - Lược sử công cụ tính toán"
                    value={manualLesson}
                    onChange={(e) => setManualLesson(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Ghi chú nhận xét</label>
                  <input
                    type="text"
                    placeholder="VD: Nắm chắc kiến thức, thao tác tốt"
                    value={manualNotes}
                    onChange={(e) => setManualNotes(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsAddScoreOpen(false)}
                    className="px-3 py-2 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-50"
                  >
                    Hủy
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-md shadow-indigo-600/20"
                  >
                    Lưu vào Sổ điểm
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
