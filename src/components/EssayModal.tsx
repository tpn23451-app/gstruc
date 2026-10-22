import React, { useState } from 'react';
import { GRADE_8_MIDTERM_ESSAY_QUESTIONS } from '../data/grade8MidtermReview';
import { GRADE_9_MIDTERM_ESSAY_QUESTIONS } from '../data/grade9MidtermReview';
import { BookOpen, X, ChevronDown, ChevronUp, Printer, Sparkles, CheckCircle2, Award } from 'lucide-react';
import { sound } from '../utils/sound';

interface EssayModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialGrade?: number;
}

export const EssayModal: React.FC<EssayModalProps> = ({ isOpen, onClose, initialGrade = 9 }) => {
  const [activeTabGrade, setActiveTabGrade] = useState<number>(initialGrade === 8 ? 8 : 9);
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    'g9-tl-1': true,
    'g9-tl-2': true,
    'gk1-tl-1': true,
    'gk1-tl-7': true,
  });

  if (!isOpen) return null;

  const currentQuestions =
    activeTabGrade === 8 ? GRADE_8_MIDTERM_ESSAY_QUESTIONS : GRADE_9_MIDTERM_ESSAY_QUESTIONS;

  const toggleExpand = (id: string) => {
    sound.playClick();
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden animate-in zoom-in-95">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-slate-100 flex items-center justify-between gap-4 bg-linear-to-r from-indigo-50/70 via-purple-50/50 to-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-600/20">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  Phần Tự Luận & Xử Lý Tình Huống Giữa Kì 1
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-amber-400 text-amber-950 font-black text-[10px] uppercase">
                  Năm 2026 - 2027
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Trích xuất 100% tài liệu ôn tập của giáo viên kèm hướng dẫn chấm và đáp án chuẩn
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors hidden sm:flex items-center gap-1.5 text-xs font-semibold"
              title="In phần tự luận"
            >
              <Printer className="w-4 h-4" />
              <span>In tài liệu</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab switch between Grade 9 and Grade 8 */}
        <div className="px-4 sm:px-6 pt-3 pb-2 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                setActiveTabGrade(9);
              }}
              className={`px-3.5 py-1.5 rounded-xl font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTabGrade === 9
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Tin học 9 (5 câu hỏi & tình huống)</span>
            </button>

            <button
              type="button"
              onClick={() => {
                sound.playClick();
                setActiveTabGrade(8);
              }}
              className={`px-3.5 py-1.5 rounded-xl font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTabGrade === 8
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Tin học 8 (7 câu hỏi & tình huống)</span>
            </button>
          </div>

          <span className="text-xs text-slate-500 hidden sm:inline">
            Khối lớp đang xem: <strong>Tin học {activeTabGrade}</strong>
          </span>
        </div>

        {/* Content list */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1">
          <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-amber-900 text-xs sm:text-sm flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong>Ghi chú của Giáo viên:</strong> Các câu trả lời dưới đây là khung gợi ý tham khảo theo chuẩn kiến thức kỹ năng GDPT 2018 (Bài 1, 2, 3, 4, 5). Học sinh có thể diễn đạt theo ngôn từ và hiểu biết thực tế của mình để đạt điểm tối đa.
            </div>
          </div>

          <div className="space-y-3">
            {currentQuestions.map((item, idx) => {
              const isExpanded = expandedIds[item.id] ?? false;

              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleExpand(item.id)}
                    className="w-full p-4 sm:p-4.5 text-left flex items-start justify-between gap-3 hover:bg-slate-50/80 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-xl bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div>
                        <div className="text-xs font-bold text-indigo-600 mb-0.5">
                          {item.topic}
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-slate-800 leading-snug whitespace-pre-line">
                          {item.question}
                        </h3>
                      </div>
                    </div>

                    <div className="shrink-0 p-1 text-slate-400">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-2 border-t border-slate-100 bg-slate-50/50 space-y-3">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 uppercase tracking-wider">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Gợi ý trả lời chi tiết / Hướng dẫn chấm:</span>
                      </div>

                      <div className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line bg-white p-4 rounded-xl border border-slate-200 font-mono text-[13px]">
                        {item.suggestedAnswer}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Tổng cộng: <strong>{currentQuestions.length} câu hỏi tự luận & tình huống</strong> (Tin học {activeTabGrade})
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 transition-colors shadow-xs cursor-pointer"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
