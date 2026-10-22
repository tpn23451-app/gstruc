import React, { useState } from 'react';
import { QuizSession, StudentProfile, Question } from '../types/quiz';
import { Printer, ArrowLeft, CheckSquare, Eye, EyeOff } from 'lucide-react';
import { DifficultyBadge } from './DifficultyBadge';

interface PrintViewProps {
  session: QuizSession;
  onBack: () => void;
  studentProfile?: StudentProfile;
}

export const PrintView: React.FC<PrintViewProps> = ({ session, onBack, studentProfile }) => {
  const [includeAnswers, setIncludeAnswers] = useState<boolean>(true);
  const [includeExplanations, setIncludeExplanations] = useState<boolean>(false);
  const [useStudentInfo, setUseStudentInfo] = useState<boolean>(true);

  const handlePrint = () => {
    window.print();
  };

  const setStudentExamPreset = () => {
    setIncludeAnswers(false);
    setIncludeExplanations(false);
  };

  const setTeacherKeyPreset = () => {
    setIncludeAnswers(true);
    setIncludeExplanations(true);
  };

  const optionLetters = ['A', 'B', 'C', 'D'];

  const getQuestionAnswerSummary = (q: Question): string => {
    const qType = q.type || 'multiple_choice';
    if (qType === 'fill_blank') {
      return q.blankAnswers && q.blankAnswers.length > 0
        ? q.blankAnswers.join(', ')
        : 'Điền từ';
    }
    if (qType === 'matching') {
      if (q.correctMatches && Object.keys(q.correctMatches).length > 0) {
        return Object.entries(q.correctMatches)
          .map(([l, r]) => `${String(l).replace('left-', '')}-${String(r).replace('right-', '')}`)
          .join('; ');
      }
      return 'Nối cặp';
    }
    if (qType === 'drag_drop_order') {
      if (q.correctOrder && q.correctOrder.length > 0) {
        return q.correctOrder.map((id: string) => id.replace('step-', '')).join('→');
      }
      return 'Thứ tự';
    }
    return optionLetters[q.correctAnswer ?? 0] || 'A';
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-16">
      {/* Top Bar (Hidden during print) */}
      <div className="no-print bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs sm:text-sm font-semibold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Quay lại</span>
        </button>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={setStudentExamPreset}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all border ${
              !includeAnswers && !includeExplanations
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            Đề thi học sinh (Ẩn đáp án)
          </button>
          <button
            type="button"
            onClick={setTeacherKeyPreset}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all border ${
              includeAnswers && includeExplanations
                ? 'bg-purple-600 text-white border-purple-600 shadow-xs'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            Đề giáo viên (Kèm đáp án & Lời giải)
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
          <label className="flex items-center gap-1.5 cursor-pointer text-slate-700">
            <input
              type="checkbox"
              checked={includeAnswers}
              onChange={(e) => setIncludeAnswers(e.target.checked)}
              className="accent-indigo-600 rounded"
            />
            <span>Kèm bảng đáp án đúng ở cuối</span>
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer text-slate-700">
            <input
              type="checkbox"
              checked={includeExplanations}
              onChange={(e) => setIncludeExplanations(e.target.checked)}
              className="accent-indigo-600 rounded"
            />
            <span>Kèm lời giải chi tiết dưới mỗi câu</span>
          </label>

          {studentProfile && (
            <label className="flex items-center gap-1.5 cursor-pointer text-slate-700">
              <input
                type="checkbox"
                checked={useStudentInfo}
                onChange={(e) => setUseStudentInfo(e.target.checked)}
                className="accent-indigo-600 rounded"
              />
              <span>In kèm tên học sinh ({studentProfile.fullName} - {studentProfile.className})</span>
            </label>
          )}

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all shadow-md shadow-indigo-600/20"
          >
            <Printer className="w-4 h-4" />
            <span>In đề thi / Lưu PDF</span>
          </button>
        </div>
      </div>

      {/* Printable Sheet */}
      <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm text-slate-900 print:border-none print:shadow-none print:p-0">
        {/* Header exam style */}
        <div className="border-b-2 border-slate-800 pb-4 mb-6">
          <div className="grid grid-cols-2 gap-4 text-xs font-serif leading-relaxed mb-4">
            <div>
              <p className="font-bold uppercase tracking-wider">
                TRƯỜNG THCS: {studentProfile?.schoolName || '.....................................................'}
              </p>
              <p>
                Họ và tên học sinh:{' '}
                {useStudentInfo && studentProfile?.fullName ? (
                  <strong className="underline underline-offset-2 font-bold">{studentProfile.fullName}</strong>
                ) : (
                  '...........................................'
                )}
              </p>
              <p>
                Lớp:{' '}
                {useStudentInfo && studentProfile?.className ? (
                  <strong className="font-bold">{studentProfile.className}</strong>
                ) : (
                  '8........'
                )}{' '}
                Số báo danh: ..................
              </p>
            </div>
            <div className="text-right">
              <p className="font-bold uppercase tracking-wider text-indigo-900">
                GIA SƯ TIN HỌC TIỂU HỌC & THCS - GV: MS. TRÚC TIN HỌC
              </p>
              <p>Môn: <strong>Tin học {session.grade || (studentProfile?.grade ? studentProfile.grade : 'THCS')}</strong></p>
              <p>Thời gian làm bài: <strong>{Math.round(session.totalQuestions * 1.5)} phút</strong></p>
            </div>
          </div>

          <div className="text-center space-y-1">
            <h1 className="text-lg sm:text-xl font-bold uppercase tracking-wide">
              {session.lessonTitle}
            </h1>
            <p className="text-xs italic text-slate-600">
              (Đề gồm {session.totalQuestions} câu hỏi trắc nghiệm khách quan • Biên soạn: GV: Ms. Trúc Tin Học)
            </p>
          </div>
        </div>

        {/* Questions list for printing */}
        <div className="space-y-6">
          {session.questions.map((q, idx) => {
            const qType = q.type || 'multiple_choice';

            return (
              <div key={q.id} className="print-break-inside-avoid space-y-2">
                <div className="text-sm font-semibold flex items-start gap-1.5 leading-relaxed">
                  <span className="font-bold shrink-0">Câu {idx + 1}:</span>
                  <span className="whitespace-pre-line">{q.question}</span>
                </div>

                {qType === 'fill_blank' ? (
                  <div className="pl-4 text-xs space-y-1">
                    <div className="text-slate-600">
                      <strong>Từ / cụm từ gợi ý:</strong> {q.wordBank?.join('  |  ')}
                    </div>
                    {includeExplanations && (
                      <div className="mt-2 p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 italic">
                        <strong>Đáp án điền:</strong> {q.blankAnswers?.map((w, i) => `[${i + 1}] ${w}`).join('; ')} - {q.explanation}
                      </div>
                    )}
                  </div>
                ) : qType === 'matching' ? (
                  <div className="pl-4 text-xs space-y-2">
                    <div className="grid grid-cols-2 gap-4 border border-slate-300 p-2.5 rounded-lg bg-slate-50/50">
                      <div>
                        <div className="font-bold border-b border-slate-300 pb-1 mb-1">Cột A:</div>
                        {q.matchingLeft?.map((l) => (
                          <div key={l.id} className="py-0.5">• {l.text}</div>
                        ))}
                      </div>
                      <div>
                        <div className="font-bold border-b border-slate-300 pb-1 mb-1">Cột B:</div>
                        {q.matchingRight?.map((r) => (
                          <div key={r.id} className="py-0.5">• [{r.id.toUpperCase()}] {r.text}</div>
                        ))}
                      </div>
                    </div>
                    {includeExplanations && (
                      <div className="mt-2 p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 italic">
                        <strong>Đáp án ghép:</strong> {Object.entries(q.correctMatches || {}).map(([l, r]) => `${l}-${r}`).join('; ')} - {q.explanation}
                      </div>
                    )}
                  </div>
                ) : qType === 'drag_drop_order' ? (
                  <div className="pl-4 text-xs space-y-1">
                    <div className="text-slate-600 space-y-0.5">
                      {q.orderItems?.map((it, i) => (
                        <div key={it.id}>[  ] {it.text}</div>
                      ))}
                    </div>
                    {includeExplanations && (
                      <div className="mt-2 p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 italic">
                        <strong>Thứ tự chuẩn:</strong> {q.correctOrder?.map((id, i) => {
                          const it = q.orderItems?.find((x) => x.id === id);
                          return `(${i + 1}) ${it?.text}`;
                        }).join(' → ')} - {q.explanation}
                      </div>
                    )}
                  </div>
                ) : (
                  /* Multiple choice */
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs sm:text-sm pl-4">
                      {q.options.map((opt, optIdx) => (
                        <div key={optIdx} className="flex items-start gap-1.5">
                          <span className="font-bold">{optionLetters[optIdx]}.</span>
                          <span>{opt}</span>
                        </div>
                      ))}
                    </div>

                    {includeExplanations && (
                      <div className="mt-2 p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 italic">
                        <strong>Đáp án: {optionLetters[q.correctAnswer ?? 0]}</strong> - {q.explanation}
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Answer Table at the bottom */}
        {includeAnswers && (
          <div className="mt-10 pt-6 border-t-2 border-dashed border-slate-300 print-break-inside-avoid">
            <h3 className="font-bold text-sm uppercase text-center mb-3">
              BẢNG ĐÁP ÁN THAM KHẢO
            </h3>
            <div className="grid grid-cols-5 sm:grid-cols-10 border border-slate-400 text-center text-xs">
              {session.questions.map((q, idx) => (
                <div key={q.id} className="border border-slate-300 p-1 flex flex-col justify-between min-h-[52px]">
                  <div className="font-bold text-slate-500 text-[10px]">C{idx + 1}</div>
                  <div className="font-extrabold text-indigo-700 text-xs sm:text-sm break-words line-clamp-2 px-0.5">
                    {getQuestionAnswerSummary(q)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
