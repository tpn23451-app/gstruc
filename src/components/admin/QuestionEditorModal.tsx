import React, { useState, useEffect } from 'react';
import { Question, QuestionType, DifficultyLevel } from '../../types/quiz';
import {
  X,
  Check,
  Plus,
  Trash2,
  Sparkles,
  HelpCircle,
  BookOpen,
  ArrowRight,
  ListOrdered,
  Shuffle,
  FileQuestion,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { sound } from '../../utils/sound';

interface QuestionEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  questionToEdit?: Question | null;
  onSaveQuestion: (savedQuestion: Question) => void;
  examGradeNumber?: number;
}

export const QuestionEditorModal: React.FC<QuestionEditorModalProps> = ({
  isOpen,
  onClose,
  questionToEdit,
  onSaveQuestion,
  examGradeNumber = 8,
}) => {
  const isEditing = Boolean(questionToEdit);

  // Form states
  const [qType, setQType] = useState<QuestionType>('multiple_choice');
  const [difficulty, setDifficulty] = useState<'de' | 'trung_binh' | 'kho'>('trung_binh');
  const [topic, setTopic] = useState('');
  const [questionText, setQuestionText] = useState('');
  const [hint, setHint] = useState('');
  const [explanation, setExplanation] = useState('');

  // Options for multiple_choice
  const [options, setOptions] = useState<string[]>(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState<number>(0);

  // States for fill_blank
  const [blankAnswersStr, setBlankAnswersStr] = useState('');
  const [wordBankStr, setWordBankStr] = useState('');

  // States for matching (Nối cột)
  const [matchingPairs, setMatchingPairs] = useState<{ left: string; right: string }[]>([
    { left: '', right: '' },
    { left: '', right: '' },
  ]);

  // States for drag_drop_order (Sắp xếp thứ tự)
  const [orderSteps, setOrderSteps] = useState<string[]>(['', '', '']);

  // Error state
  const [errorMsg, setErrorMsg] = useState('');

  // Load question data when modal opens
  useEffect(() => {
    if (isOpen) {
      setErrorMsg('');
      if (questionToEdit) {
        setQType(questionToEdit.type || (questionToEdit.subType === 'true_false' ? 'multiple_choice' : 'multiple_choice'));
        setDifficulty(questionToEdit.difficulty || 'trung_binh');
        setTopic(questionToEdit.topic || '');
        setQuestionText(questionToEdit.question || '');
        setHint(questionToEdit.hint || '');
        setExplanation(questionToEdit.explanation || '');

        // Multiple choice / True False
        if (questionToEdit.options && questionToEdit.options.length > 0) {
          setOptions(
            questionToEdit.options.length === 4
              ? [...questionToEdit.options]
              : [...questionToEdit.options, ...Array(Math.max(0, 4 - questionToEdit.options.length)).fill('')]
          );
        } else {
          setOptions(['', '', '', '']);
        }
        setCorrectAnswer(questionToEdit.correctAnswer ?? 0);

        // Fill blank
        if (questionToEdit.blankAnswers) {
          setBlankAnswersStr(questionToEdit.blankAnswers.join(' | '));
        } else {
          setBlankAnswersStr('');
        }
        if (questionToEdit.wordBank) {
          setWordBankStr(questionToEdit.wordBank.join(' | '));
        } else {
          setWordBankStr('');
        }

        // Matching
        if (questionToEdit.matchingLeft && questionToEdit.matchingRight && questionToEdit.correctMatches) {
          const pairs = questionToEdit.matchingLeft.map((l) => {
            const matchedRightId = questionToEdit.correctMatches?.[l.id];
            const rObj = questionToEdit.matchingRight?.find((r) => r.id === matchedRightId);
            return {
              left: l.text,
              right: rObj ? rObj.text : '',
            };
          });
          setMatchingPairs(pairs.length > 0 ? pairs : [{ left: '', right: '' }, { left: '', right: '' }]);
        } else if (questionToEdit.pairs) {
          setMatchingPairs([...questionToEdit.pairs]);
        } else {
          setMatchingPairs([{ left: '', right: '' }, { left: '', right: '' }]);
        }

        // Order
        if (questionToEdit.orderItems) {
          setOrderSteps(questionToEdit.orderItems.map((o) => o.text));
        } else if (questionToEdit.items) {
          setOrderSteps([...questionToEdit.items]);
        } else {
          setOrderSteps(['', '', '']);
        }
      } else {
        // Reset to default new question
        setQType('multiple_choice');
        setDifficulty('trung_binh');
        setTopic(`Bài học Tin học ${examGradeNumber}`);
        setQuestionText('');
        setHint('');
        setExplanation('');
        setOptions(['', '', '', '']);
        setCorrectAnswer(0);
        setBlankAnswersStr('');
        setWordBankStr('');
        setMatchingPairs([{ left: '', right: '' }, { left: '', right: '' }]);
        setOrderSteps(['', '', '']);
      }
    }
  }, [isOpen, questionToEdit, examGradeNumber]);

  if (!isOpen) return null;

  // Validation & Save
  const handleSave = () => {
    sound.playClick();
    if (!questionText.trim()) {
      setErrorMsg('Vui lòng nhập nội dung câu hỏi!');
      return;
    }

    const baseQuestion: Question = {
      id: questionToEdit ? questionToEdit.id : `q-admin-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      type: qType,
      question: questionText.trim(),
      difficulty,
      topic: topic.trim() || `Tin học ${examGradeNumber}`,
      hint: hint.trim() || 'Hãy đọc kỹ đề bài và vận dụng kiến thức sách giáo khoa.',
      explanation: explanation.trim() || 'Giải thích chuẩn kiến thức SGK Tin học Kết Nối Tri Thức.',
      options: [],
    };

    if (qType === 'multiple_choice') {
      const trimmedOptions = options.map((opt) => opt.trim());
      if (trimmedOptions.some((opt) => !opt)) {
        setErrorMsg('Vui lòng điền đủ 4 phương án A, B, C, D cho câu hỏi trắc nghiệm!');
        return;
      }
      baseQuestion.options = trimmedOptions;
      baseQuestion.correctAnswer = correctAnswer;
    } else if (qType === 'fill_blank') {
      const blanks = blankAnswersStr
        .split('|')
        .map((s) => s.trim())
        .filter(Boolean);
      if (blanks.length === 0) {
        setErrorMsg('Vui lòng nhập ít nhất 1 từ đáp án điền khuyết (ngăn cách bằng dấu | )!');
        return;
      }
      const words = wordBankStr
        .split('|')
        .map((s) => s.trim())
        .filter(Boolean);

      baseQuestion.blankAnswers = blanks;
      baseQuestion.wordBank = words.length > 0 ? words : blanks;
      baseQuestion.options = baseQuestion.wordBank;
    } else if (qType === 'matching') {
      const validPairs = matchingPairs.filter((p) => p.left.trim() && p.right.trim());
      if (validPairs.length < 2) {
        setErrorMsg('Dạng nối cột cần ít nhất 2 cặp vế trái và vế phải!');
        return;
      }
      const leftItems = validPairs.map((p, idx) => ({ id: `L${idx + 1}`, text: p.left.trim() }));
      const rightItems = validPairs.map((p, idx) => ({ id: `R${idx + 1}`, text: p.right.trim() }));
      const matches: Record<string, string> = {};
      leftItems.forEach((l, idx) => {
        matches[l.id] = rightItems[idx].id;
      });

      baseQuestion.matchingLeft = leftItems;
      baseQuestion.matchingRight = rightItems;
      baseQuestion.correctMatches = matches;
      baseQuestion.pairs = validPairs;
      baseQuestion.options = rightItems.map((r) => r.text);
    } else if (qType === 'drag_drop_order') {
      const validSteps = orderSteps.map((s) => s.trim()).filter(Boolean);
      if (validSteps.length < 2) {
        setErrorMsg('Dạng sắp xếp thứ tự cần ít nhất 2 bước!');
        return;
      }
      const items = validSteps.map((text, idx) => ({ id: `step-${idx + 1}`, text }));
      baseQuestion.orderItems = items;
      baseQuestion.correctOrder = items.map((i) => i.id);
      baseQuestion.items = validSteps;
      baseQuestion.options = validSteps;
    }

    sound.playCorrect();
    onSaveQuestion(baseQuestion);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full border border-slate-200 overflow-hidden my-6">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-indigo-700 via-blue-700 to-indigo-800 p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center font-bold">
              <FileQuestion className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black leading-tight">
                {isEditing ? 'Chỉnh sửa câu hỏi đề thi' : 'Soạn câu hỏi mới cho đề thi'}
              </h3>
              <p className="text-xs text-indigo-100">
                Chuẩn kiến thức & sư phạm theo GDPT 2018 (SGK Kết Nối Tri Thức)
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-4 max-h-[80vh] overflow-y-auto">
          {errorMsg && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold">
              ⚠️ {errorMsg}
            </div>
          )}

          {/* Type & Difficulty Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Dạng câu hỏi
              </label>
              <select
                value={qType}
                onChange={(e) => setQType(e.target.value as QuestionType)}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 font-medium"
              >
                <option value="multiple_choice">Trắc nghiệm 4 lựa chọn (A, B, C, D)</option>
                <option value="fill_blank">Điền khuyết / Điền từ vào chỗ trống</option>
                <option value="matching">Nối cột ghép đôi (Cột A - Cột B)</option>
                <option value="drag_drop_order">Kéo thả sắp xếp thứ tự các bước</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Mức độ nhận thức
              </label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value as 'de' | 'trung_binh' | 'kho')}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 font-medium"
              >
                <option value="de">🟢 Dễ (Nhận biết kiến thức cốt lõi)</option>
                <option value="trung_binh">🟡 Trung bình (Thông hiểu & Vận dụng)</option>
                <option value="kho">🔴 Khó (Vận dụng cao & Phân hóa)</option>
              </select>
            </div>
          </div>

          {/* Topic */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Bài học / Chủ đề SGK
            </label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="VD: Bài 1: Lược sử công cụ tính toán"
              className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Question text */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Nội dung câu hỏi <span className="text-rose-500">*</span>
            </label>
            <textarea
              rows={3}
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
              placeholder="Nhập nội dung câu hỏi rõ ràng, chính xác..."
              className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 leading-relaxed"
            />
            {qType === 'fill_blank' && (
              <p className="text-[11px] text-indigo-600 mt-1">
                💡 Mẹo: Với dạng điền khuyết, hãy dùng dấu <strong>[1]</strong>, <strong>[2]</strong> làm chỗ trống trong câu hỏi.
              </p>
            )}
          </div>

          {/* Conditional Input based on qType */}
          {qType === 'multiple_choice' && (
            <div className="space-y-2.5 pt-2 border-t border-slate-200">
              <label className="block text-xs font-bold text-slate-800">
                Các phương án lựa chọn (Click chọn nút tròn bên trái để chỉ định ĐÁP ÁN ĐÚNG)
              </label>

              {['A', 'B', 'C', 'D'].map((label, idx) => (
                <div
                  key={label}
                  className={`flex items-center gap-2 p-2 rounded-xl border transition-all ${
                    correctAnswer === idx
                      ? 'border-emerald-500 bg-emerald-50/70 shadow-xs'
                      : 'border-slate-200 bg-slate-50'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => {
                      sound.playClick();
                      setCorrectAnswer(idx);
                    }}
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shrink-0 cursor-pointer transition-all ${
                      correctAnswer === idx
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-white border-2 border-slate-300 text-slate-500 hover:border-emerald-400'
                    }`}
                    title="Đánh dấu là đáp án đúng"
                  >
                    {correctAnswer === idx ? <Check className="w-4 h-4 stroke-[3]" /> : label}
                  </button>
                  <input
                    type="text"
                    value={options[idx] || ''}
                    onChange={(e) => {
                      const newOpts = [...options];
                      newOpts[idx] = e.target.value;
                      setOptions(newOpts);
                    }}
                    placeholder={`Nội dung phương án ${label}...`}
                    className="flex-1 px-3 py-1.5 text-xs sm:text-sm rounded-lg bg-white border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-indigo-400 font-medium"
                  />
                  {correctAnswer === idx && (
                    <span className="text-[11px] font-black text-emerald-700 uppercase pr-1 shrink-0">
                      Đáp án đúng
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Dạng Điền khuyết */}
          {qType === 'fill_blank' && (
            <div className="space-y-3 pt-2 border-t border-slate-200">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Đáp án điền đúng (ngăn cách các vị trí [1], [2] bằng dấu gạch đứng | )
                </label>
                <input
                  type="text"
                  value={blankAnswersStr}
                  onChange={(e) => setBlankAnswersStr(e.target.value)}
                  placeholder="VD: máy tính cá nhân | Internet | bảo mật"
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Ngân hàng từ khóa gợi ý (các từ để học sinh chọn kéo thả, ngăn cách bằng dấu | )
                </label>
                <input
                  type="text"
                  value={wordBankStr}
                  onChange={(e) => setWordBankStr(e.target.value)}
                  placeholder="VD: máy tính cá nhân | Internet | bảo mật | thiết bị ngoại vi | CPU"
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          )}

          {/* Dạng Nối cột */}
          {qType === 'matching' && (
            <div className="space-y-3 pt-2 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-800">
                  Các cặp nối tương ứng (Cột Trái ghép với Cột Phải)
                </label>
                <button
                  type="button"
                  onClick={() => setMatchingPairs([...matchingPairs, { left: '', right: '' }])}
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" /> Thêm cặp nối
                </button>
              </div>

              {matchingPairs.map((pair, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-500 w-5">{idx + 1}.</span>
                  <input
                    type="text"
                    value={pair.left}
                    onChange={(e) => {
                      const next = [...matchingPairs];
                      next[idx].left = e.target.value;
                      setMatchingPairs(next);
                    }}
                    placeholder={`Vế trái ${idx + 1}...`}
                    className="flex-1 px-3 py-1.5 text-xs rounded-xl border border-slate-300"
                  />
                  <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                  <input
                    type="text"
                    value={pair.right}
                    onChange={(e) => {
                      const next = [...matchingPairs];
                      next[idx].right = e.target.value;
                      setMatchingPairs(next);
                    }}
                    placeholder={`Vế phải ${idx + 1}...`}
                    className="flex-1 px-3 py-1.5 text-xs rounded-xl border border-slate-300"
                  />
                  {matchingPairs.length > 2 && (
                    <button
                      type="button"
                      onClick={() => setMatchingPairs(matchingPairs.filter((_, i) => i !== idx))}
                      className="p-1.5 text-rose-500 hover:bg-rose-50 rounded-lg"
                      title="Xóa cặp"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Dạng Kéo thả sắp xếp */}
          {qType === 'drag_drop_order' && (
            <div className="space-y-3 pt-2 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-800">
                  Các bước theo thứ tự ĐÚNG từ trên xuống dưới
                </label>
                <button
                  type="button"
                  onClick={() => setOrderSteps([...orderSteps, ''])}
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" /> Thêm bước
                </button>
              </div>

              {orderSteps.map((step, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-xs font-black text-indigo-700 w-16">
                    Bước {idx + 1}:
                  </span>
                  <input
                    type="text"
                    value={step}
                    onChange={(e) => {
                      const next = [...orderSteps];
                      next[idx] = e.target.value;
                      setOrderSteps(next);
                    }}
                    placeholder={`Nội dung bước ${idx + 1}...`}
                    className="flex-1 px-3 py-1.5 text-xs rounded-xl border border-slate-300"
                  />
                  {orderSteps.length > 2 && (
                    <button
                      type="button"
                      onClick={() => setOrderSteps(orderSteps.filter((_, i) => i !== idx))}
                      className="p-1.5 text-rose-500 hover:bg-rose-50 rounded-lg"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Hint & Explanation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-200">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Gợi ý cho học sinh (Hint)
              </label>
              <input
                type="text"
                value={hint}
                onChange={(e) => setHint(e.target.value)}
                placeholder="Gợi ý ngắn gọn 1 câu hướng suy nghĩ..."
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Lời giải chi tiết sư phạm (Explanation)
              </label>
              <textarea
                rows={2}
                value={explanation}
                onChange={(e) => setExplanation(e.target.value)}
                placeholder="Trích dẫn SGK và phân tích vì sao đáp án đúng..."
                className="w-full px-3 py-1.5 text-xs rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-indigo-400 leading-relaxed"
              />
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-2.5">
          <button
            type="button"
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
          >
            Hủy bỏ
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md shadow-indigo-600/30 flex items-center gap-2 transition-transform active:scale-98 cursor-pointer"
          >
            <Check className="w-4 h-4 stroke-[3]" />
            <span>{isEditing ? 'Lưu cập nhật' : 'Thêm vào đề thi'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
