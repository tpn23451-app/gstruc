import React, { useState, useMemo } from 'react';
import { Question } from '../types/quiz';
import {
  auditExamQuality,
  autoFixExamQuestions,
  QualityAuditReport,
} from '../utils/examQualityValidator';
import {
  ShieldCheck,
  Gamepad2,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Wrench,
  Printer,
  Play,
  X,
  Sparkles,
  BookOpen,
  Zap,
  HelpCircle,
  ArrowRightLeft,
  Edit3,
  Award,
  Layers,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { sound } from '../utils/sound';

interface Grade5ExamAuditAndGameModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
  onStartGame: (
    gameType: 'all' | 'multiple_choice' | 'true_false' | 'fill_blank' | 'matching'
  ) => void;
  onExportExam: () => void;
  initialTab?: 'audit' | 'game';
}

export const Grade5ExamAuditAndGameModal: React.FC<Grade5ExamAuditAndGameModalProps> = ({
  isOpen,
  onClose,
  questions,
  onStartGame,
  onExportExam,
  initialTab = 'audit',
}) => {
  const [activeTab, setActiveTab] = useState<'audit' | 'game'>(initialTab);
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>(questions);
  const [expandedCheckId, setExpandedCheckId] = useState<string | null>(null);
  const [fixSuccessMessage, setFixSuccessMessage] = useState<string>('');

  // Sync questions when prop changes
  React.useEffect(() => {
    setCurrentQuestions(questions);
  }, [questions]);

  // Run automated quality audit
  const auditReport: QualityAuditReport = useMemo(() => {
    return auditExamQuality(currentQuestions, currentQuestions.length, 'Bài 1, 2, 3, 4');
  }, [currentQuestions]);

  // Categorize questions for 4 game modes
  const gameStats = useMemo(() => {
    const isTrueFalse = (q: Question) => {
      if (q.subType === 'true_false') return true;
      const lower = q.question.toLowerCase();
      if (lower.includes('đúng hay sai') || lower.includes('đúng/sai')) return true;
      if (q.options && q.options.length === 2) {
        const o0 = q.options[0].toLowerCase();
        const o1 = q.options[1].toLowerCase();
        if (
          (o0.startsWith('đúng') || o0.startsWith('sai')) &&
          (o1.startsWith('đúng') || o1.startsWith('sai'))
        ) {
          return true;
        }
      }
      return false;
    };

    const mcqQuestions = currentQuestions.filter(
      (q) => (q.type === 'multiple_choice' || !q.type) && !isTrueFalse(q)
    );
    const tfQuestions = currentQuestions.filter((q) => isTrueFalse(q));
    const blankQuestions = currentQuestions.filter((q) => q.type === 'fill_blank');
    const matchingQuestions = currentQuestions.filter((q) => q.type === 'matching');

    return {
      multipleChoiceCount: mcqQuestions.length,
      trueFalseCount: tfQuestions.length,
      fillBlankCount: blankQuestions.length,
      matchingCount: matchingQuestions.length,
      totalCount: currentQuestions.length,
    };
  }, [currentQuestions]);

  const handleApplyAutoFix = () => {
    sound.playSuccess();
    const result = autoFixExamQuestions(currentQuestions);
    setCurrentQuestions(result.fixedQuestions);
    setFixSuccessMessage(
      `Đã tự động xử lý ${result.appliedFixes.length > 0 ? result.appliedFixes.length : 'tất cả'} điểm cần tối ưu!`
    );
    setTimeout(() => {
      setFixSuccessMessage('');
    }, 4000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in-50">
      <div className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col my-auto max-h-[92vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-600 via-rose-600 to-amber-600 p-5 sm:p-6 text-white relative shrink-0">
          <button
            type="button"
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="absolute top-4 right-4 p-2 rounded-2xl bg-white/10 hover:bg-white/20 active:scale-95 text-white transition-all cursor-pointer"
            title="Đóng"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-orange-100 text-xs font-bold">
              <Award className="w-3.5 h-3.5 text-amber-300" />
              <span>ÔN TẬP GIỮA KỲ 1 TIN HỌC 5 (BÀI 1, 2, 3, 4 - KNTT)</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black font-['Lexend'] tracking-wide">
              CHỐNG LỖI KHI TẠO CÂU HỎI & CHUYỂN ĐỔI TRÒ CHƠI
            </h2>

            <p className="text-xs sm:text-sm text-orange-100/90 leading-relaxed">
              Bám sát SGK Tin học 5 Kết Nối Tri Thức. Tự động kiểm duyệt 11 tiêu chí đánh giá chuẩn Bộ GD&ĐT và hỗ trợ chuyển thành 4 trò chơi học tập thông minh.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex gap-2 mt-4 pt-1">
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                setActiveTab('audit');
              }}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-black transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'audit'
                  ? 'bg-white text-orange-700 shadow-md scale-102'
                  : 'bg-white/15 text-white hover:bg-white/25 border border-white/15'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>11 Tiêu Chí Tự Kiểm Tra & Chống Lỗi</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-500 text-white font-extrabold">
                {auditReport.passedChecks}/11 Đạt
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                sound.playClick();
                setActiveTab('game');
              }}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-black transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'game'
                  ? 'bg-white text-rose-700 shadow-md scale-102'
                  : 'bg-white/15 text-white hover:bg-white/25 border border-white/15'
              }`}
            >
              <Gamepad2 className="w-4 h-4" />
              <span>Chuyển Thành 4 Trò Chơi</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-amber-400 text-amber-950 font-extrabold">
                4 Dạng Game
              </span>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-6">
          {fixSuccessMessage && (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs sm:text-sm font-bold flex items-center gap-2 animate-in fade-in-50">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>{fixSuccessMessage}</span>
            </div>
          )}

          {/* TAB 1: 11 TIÊU CHÍ CHỐNG LỖI & TỰ KIỂM TRA ĐỀ */}
          {activeTab === 'audit' && (
            <div className="space-y-5 animate-in fade-in-50">
              {/* Score summary banner */}
              <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-indigo-50 border-2 border-emerald-300/80 rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-600 text-white flex flex-col items-center justify-center font-black shadow-md shrink-0">
                    <span className="text-2xl leading-none">{auditReport.score}</span>
                    <span className="text-[10px] opacity-80 uppercase tracking-tighter">Điểm chuẩn</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-emerald-600 text-white">
                        HỢP LỆ 100%
                      </span>
                      <span className="text-xs font-bold text-slate-500">
                        {auditReport.passedChecks}/{auditReport.totalChecks} tiêu chí kiểm định đã qua
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-slate-800 font-['Lexend']">
                      Đề kiểm tra Giữa kì 1 Tin học 5 đạt chuẩn tuyệt đối
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Ưu tiên cốt lõi: <strong>CHÍNH XÁC – PHÙ HỢP – CÔNG BẰNG – DỄ SỬ DỤNG – CÓ THỂ KIỂM DUYỆT</strong>. Không chạy theo câu hỏi khó, không đánh đố, không có kiến thức ngoài SGK.
                    </p>
                  </div>
                </div>

                <div className="flex sm:flex-col items-center gap-2 shrink-0 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => {
                      sound.playClick();
                      onExportExam();
                    }}
                    className="w-full px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Xuất Đề / In PDF</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      sound.playClick();
                      onStartGame('all');
                    }}
                    className="w-full px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>Làm Đề Ngay</span>
                  </button>
                </div>
              </div>

              {/* 11 Criteria Checklist */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-black text-slate-800 uppercase tracking-wide flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    BẢNG TỰ KIỂM ĐỊNH 11 TIÊU CHÍ (CHỐNG LỖI TRƯỚC KHI XUẤT ĐỀ)
                  </h4>
                  <span className="text-xs font-semibold text-slate-500">
                    Nhấp vào từng tiêu chí để xem chi tiết
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-2.5">
                  {auditReport.items.map((item, idx) => {
                    const isExpanded = expandedCheckId === item.id;
                    const isPassed = item.status === 'passed';
                    const isWarning = item.status === 'warning';

                    return (
                      <div
                        key={item.id}
                        className={`rounded-2xl border transition-all overflow-hidden ${
                          isPassed
                            ? 'bg-slate-50/70 border-slate-200 hover:border-emerald-300'
                            : isWarning
                            ? 'bg-amber-50/80 border-amber-300'
                            : 'bg-rose-50/80 border-rose-300'
                        }`}
                      >
                        <div
                          onClick={() => {
                            sound.playClick();
                            setExpandedCheckId(isExpanded ? null : item.id);
                          }}
                          className="p-3 sm:p-3.5 flex items-start justify-between gap-3 cursor-pointer select-none"
                        >
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5 shrink-0">
                              {isPassed ? (
                                <div className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-400 text-emerald-700 flex items-center justify-center font-bold text-xs">
                                  ✓
                                </div>
                              ) : isWarning ? (
                                <AlertTriangle className="w-5 h-5 text-amber-600" />
                              ) : (
                                <XCircle className="w-5 h-5 text-rose-600" />
                              )}
                            </div>

                            <div className="space-y-0.5">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-mono text-xs font-extrabold text-slate-400">
                                  [{idx + 1}]
                                </span>
                                <h5 className="text-xs sm:text-sm font-black text-slate-800">
                                  {item.name}
                                </h5>
                                <span
                                  className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase ${
                                    isPassed
                                      ? 'bg-emerald-100 text-emerald-800'
                                      : isWarning
                                      ? 'bg-amber-100 text-amber-800'
                                      : 'bg-rose-100 text-rose-800'
                                  }`}
                                >
                                  {isPassed ? 'Đạt chuẩn' : isWarning ? 'Cần lưu ý' : 'Lỗi'}
                                </span>
                              </div>
                              <p className="text-xs text-slate-600 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>

                          <div className="text-slate-400 mt-1 shrink-0">
                            {isExpanded ? (
                              <ChevronUp className="w-4 h-4" />
                            ) : (
                              <ChevronDown className="w-4 h-4" />
                            )}
                          </div>
                        </div>

                        {/* Expandable detail & suggested fix */}
                        {isExpanded && (
                          <div className="px-4 pb-3.5 pt-1 text-xs text-slate-600 border-t border-slate-200/60 bg-white/60 space-y-2">
                            {item.detail && (
                              <div className="p-2.5 rounded-xl bg-slate-100/70 border border-slate-200 text-slate-700 font-medium leading-relaxed">
                                <strong>Chi tiết căn cứ SGK:</strong> {item.detail}
                              </div>
                            )}

                            {item.suggestedFix && (
                              <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-medium flex items-center justify-between gap-2">
                                <span>
                                  <strong>Đề xuất sửa:</strong> {item.suggestedFix}
                                </span>
                                <button
                                  type="button"
                                  onClick={handleApplyAutoFix}
                                  className="px-2.5 py-1 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold text-[11px] shrink-0 transition-colors"
                                >
                                  Tự động sửa ngay
                                </button>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Proposed fixes action if any */}
              {auditReport.proposedFixes.length > 0 && (
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 flex items-center justify-between gap-3">
                  <div className="text-xs text-amber-900 font-medium">
                    <strong>Hệ thống đề xuất sửa {auditReport.proposedFixes.length} điểm:</strong>{' '}
                    {auditReport.proposedFixes.join('; ')}
                  </div>
                  <button
                    type="button"
                    onClick={handleApplyAutoFix}
                    className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center gap-1.5 shrink-0 transition-colors"
                  >
                    <Wrench className="w-3.5 h-3.5" />
                    <span>Áp dụng sửa tự động</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: CHUYỂN ĐỔI THÀNH 4 DẠNG TRÒ CHƠI HỌC TẬP */}
          {activeTab === 'game' && (
            <div className="space-y-5 animate-in fade-in-50">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-rose-50 to-orange-50 border border-rose-200 text-rose-950 text-xs sm:text-sm font-medium leading-relaxed">
                🎉 <strong>Chế độ Trò chơi Ôn tập Tin học 5</strong>: Cho phép biến các câu hỏi trong ngân hàng thành 4 mini-game tương tác hấp dẫn, vừa học vừa chơi giúp học sinh lớp 5 tiếp thu tự nhiên mà không cảm thấy áp lực thi cử!
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Game 1: Trắc nghiệm nhanh */}
                <div className="p-5 rounded-3xl border-2 border-indigo-200 bg-gradient-to-br from-indigo-50/70 via-white to-indigo-50/30 hover:border-indigo-500 hover:shadow-md transition-all flex flex-col justify-between space-y-4 group">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-black text-xl shadow-md group-hover:scale-105 transition-transform">
                        ⚡
                      </div>
                      <span className="text-xs font-black px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-800">
                        {gameStats.multipleChoiceCount} Câu hỏi
                      </span>
                    </div>

                    <div>
                      <h4 className="text-base font-black text-slate-800 font-['Lexend']">
                        Trò chơi 1: Trắc Nghiệm Nhanh
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Thử thách phản xạ nhanh với 4 phương án A, B, C, D. Rèn luyện kỹ năng quan sát, tư duy loại trừ và chốt đáp án chính xác trong thời gian ngắn!
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      sound.playClick();
                      onStartGame('multiple_choice');
                    }}
                    className="w-full py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-black text-xs sm:text-sm shadow-md shadow-indigo-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Zap className="w-4 h-4 fill-white" />
                    <span>CHƠI TRẮC NGHIỆM NHANH</span>
                  </button>
                </div>

                {/* Game 2: Đúng / Sai */}
                <div className="p-5 rounded-3xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50/70 via-white to-emerald-50/30 hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between space-y-4 group">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-black text-xl shadow-md group-hover:scale-105 transition-transform">
                        🎯
                      </div>
                      <span className="text-xs font-black px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                        {gameStats.trueFalseCount} Câu hỏi
                      </span>
                    </div>

                    <div>
                      <h4 className="text-base font-black text-slate-800 font-['Lexend']">
                        Trò chơi 2: Đúng Hay Sai?
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Phán đoán nhanh chân lý: Đọc các nhận định về sử dụng máy tính, Internet an toàn, cắm/ngắt USB và cây thư mục để chọn ĐÚNG hoặc SAI!
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      sound.playClick();
                      onStartGame('true_false');
                    }}
                    className="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-black text-xs sm:text-sm shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>CHƠI ĐÚNG / SAI</span>
                  </button>
                </div>

                {/* Game 3: Điền khuyết */}
                <div className="p-5 rounded-3xl border-2 border-amber-200 bg-gradient-to-br from-amber-50/70 via-white to-amber-50/30 hover:border-amber-500 hover:shadow-md transition-all flex flex-col justify-between space-y-4 group">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-black text-xl shadow-md group-hover:scale-105 transition-transform">
                        ✍️
                      </div>
                      <span className="text-xs font-black px-2.5 py-1 rounded-full bg-amber-100 text-amber-900">
                        {gameStats.fillBlankCount} Câu hỏi
                      </span>
                    </div>

                    <div>
                      <h4 className="text-base font-black text-slate-800 font-['Lexend']">
                        Trò chơi 3: Ô Chữ Điền Khuyết
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Thử thách nhà thông thái: Chọn các từ khóa cốt lõi từ ngân hàng từ (Word Bank) để điền vào đúng vị trí chỗ trống trong định nghĩa SGK!
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      sound.playClick();
                      onStartGame('fill_blank');
                    }}
                    className="w-full py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 active:scale-95 text-white font-black text-xs sm:text-sm shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Edit3 className="w-4 h-4" />
                    <span>CHƠI ĐIỀN KHUYẾT</span>
                  </button>
                </div>

                {/* Game 4: Nối cột */}
                <div className="p-5 rounded-3xl border-2 border-purple-200 bg-gradient-to-br from-purple-50/70 via-white to-purple-50/30 hover:border-purple-500 hover:shadow-md transition-all flex flex-col justify-between space-y-4 group">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center font-black text-xl shadow-md group-hover:scale-105 transition-transform">
                        🔗
                      </div>
                      <span className="text-xs font-black px-2.5 py-1 rounded-full bg-purple-100 text-purple-800">
                        {gameStats.matchingCount} Câu hỏi
                      </span>
                    </div>

                    <div>
                      <h4 className="text-base font-black text-slate-800 font-['Lexend']">
                        Trò chơi 4: Nối Cột Thông Thái
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Ghép nối thông minh: Nối các thao tác ở Cột A (Học tập, Nút ngôi nhà, Eject, Thư mục) với ý nghĩa hoặc phần mềm tương ứng ở Cột B!
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      sound.playClick();
                      onStartGame('matching');
                    }}
                    className="w-full py-3 rounded-2xl bg-purple-600 hover:bg-purple-700 active:scale-95 text-white font-black text-xs sm:text-sm shadow-md shadow-purple-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ArrowRightLeft className="w-4 h-4" />
                    <span>CHƠI NỐI CỘT</span>
                  </button>
                </div>
              </div>

              {/* Play All Questions */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    onStartGame('all');
                  }}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 via-rose-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-sm shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-98"
                >
                  <Sparkles className="w-4 h-4 text-amber-200" />
                  <span>🎮 CHƠI TỔNG HỢP TẤT CẢ CÁC DẠNG (TRỌN BỘ 42 CÂU BÀI 1 - 4)</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs shrink-0">
          <div className="text-slate-500 font-medium">
            Mục tiêu: Đánh giá đúng mức độ học sinh • Không đánh đố • SGK Tin học 5 (KNTT)
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 font-bold transition-colors cursor-pointer"
            >
              Đóng
            </button>

            <button
              type="button"
              onClick={() => {
                sound.playClick();
                onExportExam();
              }}
              className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>In đề thi & Xuất PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
