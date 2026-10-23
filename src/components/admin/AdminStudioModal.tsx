import React, { useState, useMemo } from 'react';
import {
  CustomExam,
  Question,
  DifficultyLevel,
} from '../../types/quiz';
import {
  AdminSession,
  saveCustomExamToFirebase,
  deleteCustomExamFromFirebase,
  ADMIN_EMAIL,
} from '../../services/firebase';
import { QuestionEditorModal } from './QuestionEditorModal';
import { BUILT_IN_QUESTIONS } from '../../data/questionBank';
import { generateFallbackQuestions, CURRICULUM_LESSONS } from '../../data/curriculum';
import { parseQuestionsFromRawText } from '../../utils/documentQuestionParser';
import { sound } from '../../utils/sound';
import {
  Sparkles,
  Plus,
  Trash2,
  Edit3,
  Copy,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  CheckCircle2,
  Clock,
  Layers,
  FileQuestion,
  BookOpen,
  Search,
  Filter,
  Check,
  X,
  Play,
  Printer,
  Bot,
  Download,
  Upload,
  AlertTriangle,
  GraduationCap,
  ShieldCheck,
  LogOut,
  FolderPlus,
  RefreshCw,
  FileUp,
  FileText,
  Eye
} from 'lucide-react';

interface AdminStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  adminSession: AdminSession | null;
  onOpenAuth: () => void;
  customExams: CustomExam[];
  setCustomExams: React.Dispatch<React.SetStateAction<CustomExam[]>>;
  onLaunchExam: (exam: CustomExam, mode?: 'exam' | 'practice') => void;
  onPrintExam: (exam: CustomExam) => void;
}

export const AdminStudioModal: React.FC<AdminStudioModalProps> = ({
  isOpen,
  onClose,
  adminSession,
  onOpenAuth,
  customExams,
  setCustomExams,
  onLaunchExam,
  onPrintExam,
}) => {
  // Navigation inside Studio
  const [activeView, setActiveView] = useState<'exam_list' | 'manage_questions'>('exam_list');
  const [selectedExamId, setSelectedExamId] = useState<string | null>(null);

  // Filters for exam list
  const [searchKeyword, setSearchKeyword] = useState('');
  const [gradeFilter, setGradeFilter] = useState<'all' | 3 | 4 | 5 | 6 | 7 | 8 | 9>('all');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'exam' | 'practice'>('all');

  // Modal Create/Edit Exam Info
  const [isExamInfoModalOpen, setIsExamInfoModalOpen] = useState(false);
  const [editingExamId, setEditingExamId] = useState<string | null>(null);
  const [examTitle, setExamTitle] = useState('');
  const [examDescription, setExamDescription] = useState('');
  const [examGradeNumber, setExamGradeNumber] = useState<3 | 4 | 5 | 6 | 7 | 8 | 9>(8);
  const [examCategory, setExamCategory] = useState<'exam' | 'practice'>('exam');
  const [examDurationMinutes, setExamDurationMinutes] = useState(45);
  const [autoSeedQuestions, setAutoSeedQuestions] = useState(true);

  // Document Parser (PDF / Word) options & states
  const [docQuestionType, setDocQuestionType] = useState<'multiple_choice' | 'true_false' | 'fill_blank' | 'all'>('multiple_choice');
  const [docQuestionCount, setDocQuestionCount] = useState<'all' | number>('all');
  const [docDifficultyMode, setDocDifficultyMode] = useState<'original' | 'tong_hop' | 'de' | 'trung_binh' | 'kho'>('original');
  const [docStrictOriginal, setDocStrictOriginal] = useState<boolean>(true); // 100% theo tài liệu gốc
  const [docAutoGenerateAnswer, setDocAutoGenerateAnswer] = useState<boolean>(true); // Tự động tạo đáp án nếu chưa có
  const [cachedFileData, setCachedFileData] = useState<{
    fileBase64: string;
    filename: string;
    mimeType: string;
  } | null>(null);

  const [uploadedDocFile, setUploadedDocFile] = useState<{
    name: string;
    size: number;
  } | null>(null);
  const [parsedDocQuestions, setParsedDocQuestions] = useState<Question[]>([]);
  const [isParsingDoc, setIsParsingDoc] = useState(false);
  const [docParseWarning, setDocParseWarning] = useState<string>('');
  const [isPreviewQuestionsModalOpen, setIsPreviewQuestionsModalOpen] = useState(false);

  // Question Editor state
  const [isQuestionEditorOpen, setIsQuestionEditorOpen] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState<Question | null>(null);

  // AI Question Generator states inside Studio
  const [isAIGenerating, setIsAIGenerating] = useState(false);
  const [isAIPanelOpen, setIsAIPanelOpen] = useState(false);
  const [aiTopic, setAiTopic] = useState('');
  const [aiCount, setAiCount] = useState(5);
  const [aiDifficulty, setAiDifficulty] = useState<DifficultyLevel>('tong_hop');

  // Bank importer modal
  const [isBankImporterOpen, setIsBankImporterOpen] = useState(false);

  // Status message
  const [statusMessage, setStatusMessage] = useState<string>('');

  const flashMessage = (msg: string) => {
    setStatusMessage(msg);
    setTimeout(() => {
      setStatusMessage('');
    }, 3500);
  };

  // Selected exam object
  const currentExam = useMemo(() => {
    if (!selectedExamId) return null;
    return customExams.find((e) => e.id === selectedExamId) || null;
  }, [selectedExamId, customExams]);

  // Filtered exams
  const filteredExams = useMemo(() => {
    return customExams.filter((exam) => {
      if (gradeFilter !== 'all' && exam.gradeNumber !== gradeFilter) return false;
      if (categoryFilter !== 'all' && exam.category !== categoryFilter) return false;
      if (searchKeyword.trim()) {
        const lower = searchKeyword.toLowerCase();
        return (
          exam.title.toLowerCase().includes(lower) ||
          exam.description?.toLowerCase().includes(lower) ||
          exam.grade?.toLowerCase().includes(lower)
        );
      }
      return true;
    });
  }, [customExams, gradeFilter, categoryFilter, searchKeyword]);

  if (!isOpen) return null;

  // Nếu chưa đăng nhập hoặc không phải admin saohom2002@gmail.com
  if (!adminSession || adminSession.email.trim().toLowerCase() !== ADMIN_EMAIL.toLowerCase()) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
        <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-200 text-center space-y-4">
          <div className="w-16 h-16 rounded-3xl bg-amber-100 border border-amber-300 text-amber-700 flex items-center justify-center mx-auto text-2xl font-black shadow-inner">
            🛡️
          </div>
          <div>
            <h3 className="text-xl font-black text-slate-900">Yêu cầu Quyền Quản trị viên</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Khu vực Studio tạo đề & quản trị câu hỏi chỉ dành riêng cho Admin có email:
              <br />
              <strong className="text-indigo-700 text-sm font-black">{ADMIN_EMAIL}</strong>
            </p>
          </div>
          <div className="flex gap-2.5 pt-2">
            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="flex-1 py-2.5 px-4 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-100 cursor-pointer"
            >
              Hủy / Đóng
            </button>
            <button
              onClick={() => {
                sound.playClick();
                onOpenAuth();
              }}
              className="flex-1 py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/30 cursor-pointer"
            >
              Đăng nhập Admin
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================================================
  // XỬ LÝ ĐỀ THI
  // ==========================================================================

  // Mở modal tạo đề mới
  const handleOpenCreateExam = () => {
    sound.playClick();
    setEditingExamId(null);
    setExamTitle('');
    setExamDescription('');
    setExamGradeNumber(8);
    setExamCategory('exam');
    setExamDurationMinutes(45);
    setAutoSeedQuestions(true);
    setUploadedDocFile(null);
    setParsedDocQuestions([]);
    setCachedFileData(null);
    setDocParseWarning('');
    setDocStrictOriginal(true);
    setDocAutoGenerateAnswer(true);
    setDocQuestionType('multiple_choice');
    setDocQuestionCount('all');
    setDocDifficultyMode('original');
    setIsExamInfoModalOpen(true);
  };

  // Mở modal sửa thông tin đề
  const handleOpenEditExam = (exam: CustomExam) => {
    sound.playClick();
    setEditingExamId(exam.id);
    setExamTitle(exam.title);
    setExamDescription(exam.description || '');
    setExamGradeNumber(exam.gradeNumber);
    setExamCategory(exam.category);
    setExamDurationMinutes(exam.durationMinutes || 45);
    setAutoSeedQuestions(false);
    setUploadedDocFile(null);
    setParsedDocQuestions([]);
    setCachedFileData(null);
    setDocParseWarning('');
    setIsExamInfoModalOpen(true);
  };

  // Hàm bóc tách tài liệu với đầy đủ các tùy chọn người dùng cấu hình
  const parseDocumentWithOptions = async (
    fileBase64: string,
    filename: string,
    mimeType: string,
    overrides?: {
      gradeNum?: number;
      cat?: 'exam' | 'practice';
      qType?: 'multiple_choice' | 'true_false' | 'fill_blank' | 'all';
      qCount?: 'all' | number;
      diffMode?: 'original' | 'tong_hop' | 'de' | 'trung_binh' | 'kho';
      strict?: boolean;
      autoAns?: boolean;
    }
  ) => {
    setIsParsingDoc(true);
    setDocParseWarning('');

    const targetGrade = overrides?.gradeNum !== undefined ? overrides.gradeNum : examGradeNumber;
    const targetCat = overrides?.cat !== undefined ? overrides.cat : examCategory;
    const targetQType = overrides?.qType !== undefined ? overrides.qType : docQuestionType;
    const targetQCount = overrides?.qCount !== undefined ? overrides.qCount : docQuestionCount;
    const targetDiff = overrides?.diffMode !== undefined ? overrides.diffMode : docDifficultyMode;
    const targetStrict = overrides?.strict !== undefined ? overrides.strict : docStrictOriginal;
    const targetAutoAns = overrides?.autoAns !== undefined ? overrides.autoAns : docAutoGenerateAnswer;

    try {
      const resp = await fetch('/api/parse-exam-document', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          filename,
          fileBase64,
          mimeType,
          gradeNumber: targetGrade,
          examCategory: targetCat,
          questionType: targetQType,
          questionCount: targetQCount,
          difficultyMode: targetDiff,
          strictOriginal: targetStrict,
          autoGenerateAnswerIfMissing: targetAutoAns,
        }),
      });

      const data = await resp.json();

      if (data.success && Array.isArray(data.questions) && data.questions.length > 0) {
        sound.playCorrect();
        setUploadedDocFile({
          name: filename,
          size: Math.round((fileBase64.length * 3) / 4),
        });
        setParsedDocQuestions(data.questions);

        // Gợi ý tên đề nếu ô tên đề đang để trống
        if (!examTitle.trim() && data.suggestedTitle) {
          setExamTitle(data.suggestedTitle);
        }

        // Cập nhật tóm tắt vào mô tả đề thi
        if (data.summary) {
          setExamDescription(data.summary);
        }

        // Tự động bỏ chọn nạp 6 câu mẫu để ưu tiên câu hỏi bóc tách
        setAutoSeedQuestions(false);

        flashMessage(`✅ Đã bóc tách thành công ${data.questions.length} câu hỏi ${targetStrict ? '(100% bám sát tài liệu gốc)' : ''}!`);
      } else {
        // Thử parser offline nếu file là text
        if (filename.endsWith('.txt')) {
          const textContent = atob(fileBase64.split(',')[1] || '');
          const offlineRes = parseQuestionsFromRawText(textContent, {
            gradeNumber: targetGrade,
            questionCount: targetQCount,
            strictOriginal: targetStrict,
            autoGenerateAnswerIfMissing: targetAutoAns,
          });
          if (offlineRes.questions.length > 0) {
            setUploadedDocFile({
              name: filename,
              size: Math.round((fileBase64.length * 3) / 4),
            });
            setParsedDocQuestions(offlineRes.questions);
            if (!examTitle.trim() && offlineRes.suggestedTitle) setExamTitle(offlineRes.suggestedTitle);
            if (offlineRes.summary) setExamDescription(offlineRes.summary);
            setAutoSeedQuestions(false);
            flashMessage(`Đã bóc tách ${offlineRes.questions.length} câu hỏi từ file!`);
            return;
          }
        }
        throw new Error(data.message || 'Không tìm thấy câu hỏi trắc nghiệm hợp lệ trong tệp!');
      }
    } catch (err: any) {
      console.error('Error parsing uploaded document:', err);
      setDocParseWarning(err?.message || 'Lỗi bóc tách tệp. Vui lòng kiểm tra lại cấu trúc file Word/PDF!');
    } finally {
      setIsParsingDoc(false);
    }
  };

  // Xử lý tải lên & bóc tách tệp đề thi (PDF / Word .docx / Text)
  const handleUploadAndParseExamDoc = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    sound.playClick();
    const reader = new FileReader();
    reader.onload = async (event) => {
      const fileBase64 = event.target?.result as string;
      setCachedFileData({
        fileBase64,
        filename: file.name,
        mimeType: file.type,
      });
      await parseDocumentWithOptions(fileBase64, file.name, file.type);
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  // Bóc tách lại với các tùy chọn đã thay đổi mà không cần chọn lại file
  const handleReParseWithCurrentOptions = async (customOverrides?: any) => {
    if (!cachedFileData) return;
    sound.playClick();
    await parseDocumentWithOptions(
      cachedFileData.fileBase64,
      cachedFileData.filename,
      cachedFileData.mimeType,
      customOverrides
    );
  };

  const handleRemoveUploadedDoc = () => {
    sound.playClick();
    setUploadedDocFile(null);
    setParsedDocQuestions([]);
    setCachedFileData(null);
    setDocParseWarning('');
  };

  // Nạp thêm câu hỏi trực tiếp từ file PDF / Word vào đề hiện tại trong View 2
  const handleDirectUploadToCurrentExam = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !currentExam) return;

    sound.playClick();
    setIsParsingDoc(true);

    try {
      const reader = new FileReader();
      reader.onload = async (event) => {
        try {
          const fileBase64 = event.target?.result as string;
          const resp = await fetch('/api/parse-exam-document', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              filename: file.name,
              fileBase64,
              mimeType: file.type,
              gradeNumber: currentExam.gradeNumber,
            }),
          });
          const data = await resp.json();

          if (data.success && Array.isArray(data.questions) && data.questions.length > 0) {
            sound.playCorrect();
            const newQuestions: Question[] = data.questions.map((q: any, idx: number) => ({
              ...q,
              id: `q-doc-${Date.now()}-${idx}-${Math.random().toString(36).slice(2, 6)}`,
            }));

            const updatedExam: CustomExam = {
              ...currentExam,
              questions: [...currentExam.questions, ...newQuestions],
              updatedAt: Date.now(),
            };

            setCustomExams((prev) => prev.map((ex) => (ex.id === updatedExam.id ? updatedExam : ex)));
            await saveCustomExamToFirebase(updatedExam);
            flashMessage(`✅ Đã bóc tách và bổ sung ${newQuestions.length} câu hỏi từ tệp "${file.name}" vào đề thi!`);
          } else {
            alert(data.message || 'Không tìm thấy câu hỏi trắc nghiệm hợp lệ trong tệp!');
          }
        } catch (err: any) {
          alert('Lỗi bóc tách tệp đề thi: ' + (err?.message || 'Không xác định'));
        } finally {
          setIsParsingDoc(false);
        }
      };
      reader.readAsDataURL(file);
    } catch (err: any) {
      setIsParsingDoc(false);
      alert('Không thể đọc tệp');
    }
    e.target.value = '';
  };

  // Lưu đề thi (Tạo mới hoặc Cập nhật)
  const handleSaveExamInfo = async () => {
    sound.playClick();
    if (!examTitle.trim()) {
      alert('Vui lòng nhập tên đề thi!');
      return;
    }

    let questions: Question[] = [];

    if (editingExamId) {
      // Đang sửa đề cũ
      const existing = customExams.find((e) => e.id === editingExamId);
      if (existing) {
        questions = parsedDocQuestions.length > 0
          ? [...existing.questions, ...parsedDocQuestions]
          : existing.questions;
      }
    } else if (parsedDocQuestions.length > 0) {
      // Ưu tiên nạp bộ câu hỏi vừa bóc tách từ file PDF / Word
      questions = parsedDocQuestions;
    } else if (autoSeedQuestions) {
      // Tự nạp 5-6 câu mẫu cho khối lớp đã chọn
      const sample = generateFallbackQuestions(
        `Tin học ${examGradeNumber}`,
        6,
        'tong_hop',
        examGradeNumber
      );
      questions = sample.map((q, idx) => ({
        ...q,
        id: `q-admin-${Date.now()}-${idx}`,
      }));
    }

    const examData: CustomExam = {
      id: editingExamId || `exam-admin-${Date.now()}`,
      title: examTitle.trim(),
      description: examDescription.trim(),
      subject: [3, 4, 5].includes(examGradeNumber) ? 'Tin học Tiểu học' : 'Tin học THCS',
      grade: `Khối ${examGradeNumber}`,
      gradeNumber: examGradeNumber,
      category: examCategory,
      durationMinutes: Number(examDurationMinutes) || 45,
      questions,
      createdAt: editingExamId
        ? customExams.find((e) => e.id === editingExamId)?.createdAt || Date.now()
        : Date.now(),
      updatedAt: Date.now(),
      authorEmail: ADMIN_EMAIL,
      authorName: adminSession.displayName || 'Admin Ms. Trúc',
      isPublished: true,
    };

    // Cập nhật State
    setCustomExams((prev) => {
      const idx = prev.findIndex((e) => e.id === examData.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = examData;
        return copy;
      }
      return [examData, ...prev];
    });

    // Lưu Firebase Realtime Database
    await saveCustomExamToFirebase(examData);

    setIsExamInfoModalOpen(false);
    flashMessage(editingExamId ? 'Đã cập nhật thông tin đề thi!' : 'Đã tạo đề thi mới thành công!');

    if (!editingExamId) {
      // Mở ngay màn hình quản trị câu hỏi của đề vừa tạo
      setSelectedExamId(examData.id);
      setActiveView('manage_questions');
    }
  };

  // Xóa đề thi
  const handleDeleteExam = async (examId: string, examTitle: string) => {
    sound.playClick();
    if (!window.confirm(`Bạn có chắc chắn muốn xóa vĩnh viễn đề thi "${examTitle}"?`)) {
      return;
    }

    setCustomExams((prev) => prev.filter((e) => e.id !== examId));
    if (selectedExamId === examId) {
      setSelectedExamId(null);
      setActiveView('exam_list');
    }
    await deleteCustomExamFromFirebase(examId);
    flashMessage(`Đã xóa đề thi "${examTitle}".`);
  };

  // ==========================================================================
  // XỬ LÝ CÂU HỎI TRONG ĐỀ THI
  // ==========================================================================

  // Mở modal thêm câu hỏi mới
  const handleOpenAddQuestion = () => {
    sound.playClick();
    setEditingQuestion(null);
    setIsQuestionEditorOpen(true);
  };

  // Mở modal sửa câu hỏi
  const handleOpenEditQuestion = (question: Question) => {
    sound.playClick();
    setEditingQuestion(question);
    setIsQuestionEditorOpen(true);
  };

  // Lưu câu hỏi (Thêm mới hoặc Cập nhật)
  const handleSaveQuestion = async (savedQuestion: Question) => {
    if (!currentExam) return;

    let updatedQuestions: Question[] = [];
    const qIndex = currentExam.questions.findIndex((q) => q.id === savedQuestion.id);

    if (qIndex >= 0) {
      updatedQuestions = [...currentExam.questions];
      updatedQuestions[qIndex] = savedQuestion;
    } else {
      updatedQuestions = [...currentExam.questions, savedQuestion];
    }

    const updatedExam: CustomExam = {
      ...currentExam,
      questions: updatedQuestions,
      updatedAt: Date.now(),
    };

    setCustomExams((prev) => prev.map((e) => (e.id === updatedExam.id ? updatedExam : e)));
    await saveCustomExamToFirebase(updatedExam);
    setIsQuestionEditorOpen(false);
    flashMessage(qIndex >= 0 ? 'Đã lưu cập nhật câu hỏi!' : 'Đã thêm câu hỏi vào đề thi!');
  };

  // Xóa câu hỏi khỏi đề
  const handleDeleteQuestion = async (qId: string) => {
    sound.playClick();
    if (!currentExam) return;
    if (!window.confirm('Bạn có chắc chắn muốn xóa câu hỏi này khỏi đề thi?')) return;

    const updatedQuestions = currentExam.questions.filter((q) => q.id !== qId);
    const updatedExam: CustomExam = {
      ...currentExam,
      questions: updatedQuestions,
      updatedAt: Date.now(),
    };

    setCustomExams((prev) => prev.map((e) => (e.id === updatedExam.id ? updatedExam : e)));
    await saveCustomExamToFirebase(updatedExam);
    flashMessage('Đã xóa câu hỏi khỏi đề thi.');
  };

  // Nhân bản câu hỏi
  const handleDuplicateQuestion = async (q: Question) => {
    sound.playClick();
    if (!currentExam) return;

    const clonedQuestion: Question = {
      ...q,
      id: `q-admin-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      question: `${q.question} (Bản sao)`,
    };

    const updatedExam: CustomExam = {
      ...currentExam,
      questions: [...currentExam.questions, clonedQuestion],
      updatedAt: Date.now(),
    };

    setCustomExams((prev) => prev.map((e) => (e.id === updatedExam.id ? updatedExam : e)));
    await saveCustomExamToFirebase(updatedExam);
    flashMessage('Đã nhân bản câu hỏi thành công!');
  };

  // Di chuyển thứ tự câu hỏi
  const handleMoveQuestion = async (index: number, direction: 'up' | 'down') => {
    sound.playClick();
    if (!currentExam) return;
    const targetIdx = direction === 'up' ? index - 1 : index + 1;
    if (targetIdx < 0 || targetIdx >= currentExam.questions.length) return;

    const copy = [...currentExam.questions];
    const temp = copy[index];
    copy[index] = copy[targetIdx];
    copy[targetIdx] = temp;

    const updatedExam: CustomExam = {
      ...currentExam,
      questions: copy,
      updatedAt: Date.now(),
    };

    setCustomExams((prev) => prev.map((e) => (e.id === updatedExam.id ? updatedExam : e)));
    await saveCustomExamToFirebase(updatedExam);
  };

  // ==========================================================================
  // AI SINH CÂU HỎI BỔ SUNG VÀO ĐỀ
  // ==========================================================================
  const handleGenerateAIQuestionsIntoExam = async () => {
    sound.playClick();
    if (!currentExam) return;

    setIsAIGenerating(true);
    try {
      const topicName = aiTopic.trim() || `Tin học ${currentExam.gradeNumber}`;
      const resp = await fetch('/api/generate-quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lesson: topicName,
          lessons: [topicName],
          count: aiCount,
          difficulty: aiDifficulty,
          gradeNumber: currentExam.gradeNumber,
          grade: currentExam.grade,
          sourcePreference: 'ai',
        }),
      });

      const data = await resp.json();
      if (data.success && Array.isArray(data.questions) && data.questions.length > 0) {
        sound.playCorrect();
        const newQuestions: Question[] = data.questions.map((q: any) => ({
          ...q,
          id: `q-ai-admin-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
          topic: q.topic || topicName,
        }));

        const updatedExam: CustomExam = {
          ...currentExam,
          questions: [...currentExam.questions, ...newQuestions],
          updatedAt: Date.now(),
        };

        setCustomExams((prev) => prev.map((e) => (e.id === updatedExam.id ? updatedExam : e)));
        await saveCustomExamToFirebase(updatedExam);
        setIsAIPanelOpen(false);
        flashMessage(`🤖 AI đã soạn và bổ sung thành công ${newQuestions.length} câu hỏi vào đề!`);
      } else {
        throw new Error(data.message || 'Không tạo được câu hỏi từ AI');
      }
    } catch (err: any) {
      console.warn('Lỗi AI sinh đề, chuyển sang ngân hàng SGK:', err);
      // Fallback lấy từ offline bank
      const fallback = generateFallbackQuestions(
        `Tin học ${currentExam.gradeNumber}`,
        aiCount,
        aiDifficulty,
        currentExam.gradeNumber
      );
      const newQuestions: Question[] = fallback.map((q) => ({
        ...q,
        id: `q-sgk-admin-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      }));

      const updatedExam: CustomExam = {
        ...currentExam,
        questions: [...currentExam.questions, ...newQuestions],
        updatedAt: Date.now(),
      };

      setCustomExams((prev) => prev.map((e) => (e.id === updatedExam.id ? updatedExam : e)));
      await saveCustomExamToFirebase(updatedExam);
      setIsAIPanelOpen(false);
      flashMessage(`Đã bổ sung ${newQuestions.length} câu hỏi chuẩn SGK vào đề thi!`);
    } finally {
      setIsAIGenerating(false);
    }
  };

  // ==========================================================================
  // XUẤT VÀ NHẬP JSON ĐỀ THI
  // ==========================================================================
  const handleExportExamJSON = (exam: CustomExam) => {
    sound.playClick();
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(exam, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `${exam.id}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    flashMessage(`Đã xuất file JSON đề thi "${exam.title}"!`);
  };

  const handleImportExamJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (!parsed.title || !Array.isArray(parsed.questions)) {
          alert('Tệp JSON không đúng định dạng đề thi!');
          return;
        }

        const importedExam: CustomExam = {
          ...parsed,
          id: `exam-imported-${Date.now()}`,
          title: `${parsed.title} (Nhập từ file)`,
          updatedAt: Date.now(),
          authorEmail: ADMIN_EMAIL,
        };

        setCustomExams((prev) => [importedExam, ...prev]);
        await saveCustomExamToFirebase(importedExam);
        flashMessage(`Đã nhập thành công đề thi "${importedExam.title}"!`);
      } catch (err) {
        alert('Lỗi đọc tệp JSON. Vui lòng kiểm tra lại cấu trúc tệp!');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full h-[92vh] max-h-[900px] border border-slate-200 flex flex-col overflow-hidden">
        {/* ================================================================= */}
        {/* STUDIO TOP HEADER */}
        {/* ================================================================= */}
        <header className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 text-white px-5 py-3.5 border-b border-indigo-900 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-500 text-slate-950 flex items-center justify-center font-black shadow-md shadow-amber-500/20">
              <ShieldCheck className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-black tracking-tight uppercase font-['Lexend'] bg-gradient-to-r from-amber-300 via-white to-cyan-200 bg-clip-text text-transparent">
                  STUDIO QUẢN TRỊ ĐỀ THI & CÂU HỎI
                </h2>
                <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-black uppercase">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  Admin: {ADMIN_EMAIL}
                </span>
              </div>
              <p className="text-[11px] text-indigo-200">
                Biên soạn đề thi, đề ôn tập và quản trị câu hỏi theo chuẩn GDPT 2018 (SGK Kết Nối Tri Thức)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* User badge */}
            <button
              onClick={() => {
                sound.playClick();
                onOpenAuth();
              }}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-xs font-semibold text-indigo-100 transition-colors"
              title="Thông tin Quản trị viên"
            >
              <span>{adminSession.displayName || 'Admin'}</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </button>

            {/* Close modal */}
            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Đóng Studio"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* ================================================================= */}
        {/* STATUS FLASH BANNER */}
        {/* ================================================================= */}
        {statusMessage && (
          <div className="bg-emerald-600 text-white px-4 py-2 text-xs font-bold flex items-center justify-between shrink-0 shadow-sm animate-in slide-in-from-top-1 duration-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-200" />
              <span>{statusMessage}</span>
            </div>
            <button onClick={() => setStatusMessage('')} className="text-emerald-200 hover:text-white">
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* ================================================================= */}
        {/* MAIN BODY AREA */}
        {/* ================================================================= */}
        <div className="flex-1 overflow-y-auto bg-slate-50 flex flex-col">
          {activeView === 'exam_list' ? (
            /* =============================================================== */
            /* VIEW 1: DANH SÁCH ĐỀ THI & ĐỀ ÔN TẬP */
            /* =============================================================== */
            <div className="p-4 sm:p-6 space-y-5 max-w-6xl mx-auto w-full flex-1">
              {/* Toolbar & Action Bar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    placeholder="Tìm kiếm đề thi theo tên hoặc khối..."
                    className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500 font-medium"
                  />
                  {searchKeyword && (
                    <button
                      onClick={() => setSearchKeyword('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 shrink-0">
                  {/* Import JSON */}
                  <label className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 hover:border-slate-300 bg-white text-slate-700 text-xs font-bold cursor-pointer transition-colors shadow-2xs">
                    <Upload className="w-3.5 h-3.5 text-indigo-600" />
                    <span className="hidden sm:inline">Nhập JSON</span>
                    <input
                      type="file"
                      accept=".json"
                      onChange={handleImportExamJSON}
                      className="hidden"
                    />
                  </label>

                  {/* Create New Exam */}
                  <button
                    onClick={handleOpenCreateExam}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-indigo-600/30 transition-transform active:scale-98 cursor-pointer"
                  >
                    <Plus className="w-4 h-4 stroke-[3]" />
                    <span>Tạo đề mới</span>
                  </button>
                </div>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                {/* Grade tabs */}
                <div className="flex flex-wrap items-center gap-1.5 bg-slate-200/70 p-1 rounded-2xl">
                  <button
                    onClick={() => {
                      sound.playClick();
                      setGradeFilter('all');
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      gradeFilter === 'all'
                        ? 'bg-white text-indigo-700 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Tất cả khối ({customExams.length})
                  </button>
                  {([3, 4, 5, 6, 7, 8, 9] as const).map((g) => {
                    const countInGrade = customExams.filter((e) => e.gradeNumber === g).length;
                    return (
                      <button
                        key={g}
                        onClick={() => {
                          sound.playClick();
                          setGradeFilter(g);
                        }}
                        className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          gradeFilter === g
                            ? 'bg-indigo-600 text-white shadow-xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Khối {g} {countInGrade > 0 && `(${countInGrade})`}
                      </button>
                    );
                  })}
                </div>

                {/* Category tabs */}
                <div className="inline-flex p-1 bg-slate-200/70 rounded-2xl">
                  <button
                    onClick={() => {
                      sound.playClick();
                      setCategoryFilter('all');
                    }}
                    className={`px-3 py-1 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                      categoryFilter === 'all'
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Tất cả loại
                  </button>
                  <button
                    onClick={() => {
                      sound.playClick();
                      setCategoryFilter('exam');
                    }}
                    className={`px-3 py-1 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                      categoryFilter === 'exam'
                        ? 'bg-amber-400 text-amber-950 font-black shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Đề thi ({customExams.filter((e) => e.category === 'exam').length})
                  </button>
                  <button
                    onClick={() => {
                      sound.playClick();
                      setCategoryFilter('practice');
                    }}
                    className={`px-3 py-1 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                      categoryFilter === 'practice'
                        ? 'bg-blue-600 text-white font-bold shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Đề ôn tập ({customExams.filter((e) => e.category === 'practice').length})
                  </button>
                </div>
              </div>

              {/* Exam Cards Grid */}
              {filteredExams.length === 0 ? (
                <div className="p-12 text-center bg-white rounded-3xl border-2 border-dashed border-slate-200 space-y-3">
                  <div className="w-16 h-16 rounded-3xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto text-2xl">
                    📑
                  </div>
                  <h4 className="text-base font-bold text-slate-800">Chưa có đề thi nào trong mục này</h4>
                  <p className="text-xs text-slate-500 max-w-md mx-auto">
                    Bạn có thể bấm nút <strong>"Tạo đề mới"</strong> để bắt đầu soạn đề kiểm tra hoặc đề ôn tập cho học sinh!
                  </p>
                  <button
                    onClick={handleOpenCreateExam}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold shadow-md hover:bg-indigo-700 cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    Tạo đề đầu tiên
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredExams.map((exam) => (
                    <div
                      key={exam.id}
                      className="bg-white rounded-2xl border border-slate-200/90 hover:border-indigo-300 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                    >
                      <div className="space-y-3">
                        {/* Badges Row */}
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5">
                            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black bg-indigo-100 text-indigo-800 border border-indigo-200">
                              {exam.grade || `Khối ${exam.gradeNumber}`}
                            </span>
                            <span
                              className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                                exam.category === 'exam'
                                  ? 'bg-amber-100 text-amber-900 border border-amber-300'
                                  : 'bg-blue-100 text-blue-800 border border-blue-200'
                              }`}
                            >
                              {exam.category === 'exam' ? 'Đề thi tính giờ' : 'Đề ôn tập'}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                            <span className="flex items-center gap-1">
                              <FileQuestion className="w-3.5 h-3.5 text-indigo-600" />
                              {exam.questions?.length || 0} câu
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 text-amber-600" />
                              {exam.durationMinutes || 45} phút
                            </span>
                          </div>
                        </div>

                        {/* Title & Description */}
                        <div>
                          <h3 className="text-base font-black text-slate-900 group-hover:text-indigo-700 transition-colors leading-snug">
                            {exam.title}
                          </h3>
                          {exam.description && (
                            <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                              {exam.description}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Card Action Buttons */}
                      <div className="pt-4 mt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                        {/* Primary action: Manage questions */}
                        <button
                          onClick={() => {
                            sound.playClick();
                            setSelectedExamId(exam.id);
                            setActiveView('manage_questions');
                          }}
                          className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm shadow-indigo-600/20 transition-transform active:scale-95 cursor-pointer"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>Quản trị câu hỏi ({exam.questions?.length || 0})</span>
                        </button>

                        <div className="flex items-center gap-1">
                          {/* Test quiz run */}
                          <button
                            onClick={() => {
                              sound.playClick();
                              onLaunchExam(exam, exam.category);
                            }}
                            className="p-2 rounded-xl text-emerald-700 hover:bg-emerald-50 border border-emerald-200 transition-colors cursor-pointer"
                            title="Làm thử đề thi ngay"
                          >
                            <Play className="w-4 h-4 fill-emerald-600 text-emerald-600" />
                          </button>

                          {/* Print view */}
                          <button
                            onClick={() => {
                              sound.playClick();
                              onPrintExam(exam);
                            }}
                            className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer"
                            title="In đề thi / Xuất PDF"
                          >
                            <Printer className="w-4 h-4" />
                          </button>

                          {/* Export JSON */}
                          <button
                            onClick={() => handleExportExamJSON(exam)}
                            className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer"
                            title="Xuất file JSON"
                          >
                            <Download className="w-4 h-4" />
                          </button>

                          {/* Edit exam metadata */}
                          <button
                            onClick={() => handleOpenEditExam(exam)}
                            className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer"
                            title="Sửa tên, khối, thời gian đề"
                          >
                            <Layers className="w-4 h-4" />
                          </button>

                          {/* Delete exam */}
                          <button
                            onClick={() => handleDeleteExam(exam.id, exam.title)}
                            className="p-2 rounded-xl text-rose-600 hover:bg-rose-50 border border-rose-200 transition-colors cursor-pointer"
                            title="Xóa đề thi"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* =============================================================== */
            /* VIEW 2: QUẢN TRỊ CÂU HỎI CỦA MỘT ĐỀ THI */
            /* =============================================================== */
            <div className="flex-1 flex flex-col">
              {/* Question Manager Top Bar */}
              <div className="bg-white border-b border-slate-200 px-5 py-3.5 flex flex-wrap items-center justify-between gap-3 shrink-0">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      sound.playClick();
                      setActiveView('exam_list');
                    }}
                    className="p-2 rounded-xl hover:bg-slate-100 text-slate-600 border border-slate-200 transition-colors flex items-center gap-1 text-xs font-bold cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">Danh sách đề</span>
                  </button>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-indigo-100 text-indigo-800">
                        {currentExam?.grade}
                      </span>
                      <h3 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                        {currentExam?.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Đang có <strong>{currentExam?.questions?.length || 0} câu hỏi</strong> • Đã đồng bộ Firebase Realtime
                    </p>
                  </div>
                </div>

                {/* Question Actions */}
                <div className="flex flex-wrap items-center gap-2">
                  {/* Upload document button */}
                  <label className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-slate-200 hover:border-indigo-300 text-slate-700 text-xs font-bold shadow-2xs hover:bg-indigo-50/50 transition-colors cursor-pointer">
                    <FileUp className="w-4 h-4 text-indigo-600" />
                    <span>{isParsingDoc ? 'Đang bóc tách...' : 'Nhập PDF / Word'}</span>
                    <input
                      type="file"
                      accept=".pdf,.docx,.doc,.txt"
                      disabled={isParsingDoc}
                      onChange={handleDirectUploadToCurrentExam}
                      className="hidden"
                    />
                  </label>

                  {/* AI Generator button */}
                  <button
                    onClick={() => {
                      sound.playClick();
                      setAiTopic(currentExam?.title || '');
                      setIsAIPanelOpen(!isAIPanelOpen);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold shadow-xs hover:from-purple-700 hover:to-indigo-700 cursor-pointer"
                  >
                    <Bot className="w-4 h-4 text-amber-300" />
                    <span>AI soạn câu hỏi</span>
                  </button>

                  {/* Add question manually */}
                  <button
                    onClick={handleOpenAddQuestion}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-indigo-600/30 transition-transform active:scale-98 cursor-pointer"
                  >
                    <Plus className="w-4 h-4 stroke-[3]" />
                    <span>Thêm câu hỏi mới</span>
                  </button>
                </div>
              </div>

              {/* AI GENERATOR POPOVER PANEL */}
              {isAIPanelOpen && currentExam && (
                <div className="bg-gradient-to-r from-purple-950 via-indigo-950 to-slate-900 text-white p-4 sm:p-5 border-b border-indigo-800 animate-in slide-in-from-top-2 duration-200">
                  <div className="max-w-4xl mx-auto space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Bot className="w-5 h-5 text-amber-300" />
                        <h4 className="text-sm font-black text-amber-300 uppercase tracking-wider">
                          Trợ lý AI soạn câu hỏi chuẩn SGK Kết Nối Tri Thức
                        </h4>
                      </div>
                      <button
                        onClick={() => setIsAIPanelOpen(false)}
                        className="p-1 rounded-full text-indigo-300 hover:text-white"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="sm:col-span-2">
                        <label className="block text-[11px] font-bold text-indigo-200 mb-1">
                          Nội dung trọng tâm bài học / chủ đề SGK
                        </label>
                        <input
                          type="text"
                          value={aiTopic}
                          onChange={(e) => setAiTopic(e.target.value)}
                          placeholder="VD: Bài 1: Lược sử công cụ tính toán..."
                          className="w-full px-3 py-1.5 text-xs rounded-xl bg-white/10 border border-white/20 text-white placeholder-indigo-300 focus:outline-hidden focus:ring-2 focus:ring-amber-400 font-medium"
                        />
                      </div>

                      <div className="flex gap-2">
                        <div className="flex-1">
                          <label className="block text-[11px] font-bold text-indigo-200 mb-1">
                            Số câu
                          </label>
                          <select
                            value={aiCount}
                            onChange={(e) => setAiCount(Number(e.target.value))}
                            className="w-full px-2 py-1.5 text-xs rounded-xl bg-slate-800 border border-white/20 text-white focus:outline-hidden"
                          >
                            <option value={3}>3 câu</option>
                            <option value={5}>5 câu</option>
                            <option value={10}>10 câu</option>
                          </select>
                        </div>
                        <div className="flex-1">
                          <label className="block text-[11px] font-bold text-indigo-200 mb-1">
                            Mức độ
                          </label>
                          <select
                            value={aiDifficulty}
                            onChange={(e) => setAiDifficulty(e.target.value as DifficultyLevel)}
                            className="w-full px-2 py-1.5 text-xs rounded-xl bg-slate-800 border border-white/20 text-white focus:outline-hidden"
                          >
                            <option value="tong_hop">Tổng hợp</option>
                            <option value="de">Dễ</option>
                            <option value="trung_binh">Trung bình</option>
                            <option value="kho">Khó</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end pt-1">
                      <button
                        onClick={handleGenerateAIQuestionsIntoExam}
                        disabled={isAIGenerating}
                        className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-amber-950 font-black text-xs rounded-xl shadow-md flex items-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        {isAIGenerating ? (
                          <>
                            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                            <span>AI đang soạn câu hỏi...</span>
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Tạo & Bổ sung vào đề ngay</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Questions List */}
              <div className="p-4 sm:p-6 space-y-4 max-w-5xl mx-auto w-full flex-1">
                {(!currentExam?.questions || currentExam.questions.length === 0) ? (
                  <div className="p-12 text-center bg-white rounded-3xl border-2 border-dashed border-slate-200 space-y-3">
                    <div className="w-16 h-16 rounded-3xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto text-2xl">
                      📝
                    </div>
                    <h4 className="text-base font-bold text-slate-800">Đề thi hiện chưa có câu hỏi nào</h4>
                    <p className="text-xs text-slate-500 max-w-md mx-auto">
                      Hãy bấm <strong>"Thêm câu hỏi mới"</strong> để tự soạn, hoặc bấm <strong>"AI soạn câu hỏi"</strong> để trợ lý AI tạo tự động chuẩn SGK!
                    </p>
                    <div className="flex justify-center gap-2 pt-2">
                      <button
                        onClick={handleOpenAddQuestion}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 cursor-pointer"
                      >
                        + Thêm thủ công
                      </button>
                      <button
                        onClick={() => {
                          setAiTopic(currentExam?.title || '');
                          setIsAIPanelOpen(true);
                        }}
                        className="px-4 py-2 bg-purple-600 text-white rounded-xl text-xs font-bold hover:bg-purple-700 cursor-pointer"
                      >
                        🤖 Dùng AI sinh câu hỏi
                      </button>
                    </div>
                  </div>
                ) : (
                  currentExam.questions.map((q, idx) => {
                    const isMC = !q.type || q.type === 'multiple_choice';
                    const isFill = q.type === 'fill_blank';
                    const isMatch = q.type === 'matching';
                    const isOrder = q.type === 'drag_drop_order';

                    return (
                      <div
                        key={q.id || idx}
                        className="bg-white rounded-2xl border border-slate-200/90 hover:border-indigo-300 p-5 shadow-xs transition-all space-y-3.5 group"
                      >
                        {/* Header of question card */}
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white text-xs font-black flex items-center justify-center shadow-2xs">
                              {idx + 1}
                            </span>

                            {/* Question Type Badge */}
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-300">
                              {isMC && 'Trắc nghiệm (4 lựa chọn)'}
                              {isFill && 'Điền khuyết'}
                              {isMatch && 'Nối cột ghép đôi'}
                              {isOrder && 'Sắp xếp thứ tự'}
                            </span>

                            {/* Difficulty badge */}
                            <span
                              className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                q.difficulty === 'de'
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : q.difficulty === 'kho'
                                  ? 'bg-rose-100 text-rose-800'
                                  : 'bg-amber-100 text-amber-800'
                              }`}
                            >
                              {q.difficulty === 'de' ? 'Dễ' : q.difficulty === 'kho' ? 'Khó' : 'Trung bình'}
                            </span>

                            {q.topic && (
                              <span className="text-[11px] text-slate-500 font-semibold truncate max-w-[200px]">
                                • {q.topic}
                              </span>
                            )}
                          </div>

                          {/* Control buttons */}
                          <div className="flex items-center gap-1">
                            {/* Move Up */}
                            <button
                              disabled={idx === 0}
                              onClick={() => handleMoveQuestion(idx, 'up')}
                              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg disabled:opacity-30 cursor-pointer"
                              title="Chuyển lên trên"
                            >
                              <ArrowUp className="w-4 h-4" />
                            </button>
                            {/* Move Down */}
                            <button
                              disabled={idx === currentExam.questions.length - 1}
                              onClick={() => handleMoveQuestion(idx, 'down')}
                              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg disabled:opacity-30 cursor-pointer"
                              title="Chuyển xuống dưới"
                            >
                              <ArrowDown className="w-4 h-4" />
                            </button>
                            {/* Duplicate */}
                            <button
                              onClick={() => handleDuplicateQuestion(q)}
                              className="p-1.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg cursor-pointer"
                              title="Nhân bản câu hỏi"
                            >
                              <Copy className="w-4 h-4" />
                            </button>
                            {/* Edit */}
                            <button
                              onClick={() => handleOpenEditQuestion(q)}
                              className="p-1.5 text-indigo-600 hover:bg-indigo-50 rounded-lg font-bold cursor-pointer"
                              title="Chỉnh sửa câu hỏi"
                            >
                              <Edit3 className="w-4 h-4" />
                            </button>
                            {/* Delete */}
                            <button
                              onClick={() => handleDeleteQuestion(q.id)}
                              className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg cursor-pointer"
                              title="Xóa câu hỏi"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        {/* Question Text */}
                        <div className="text-sm font-bold text-slate-900 leading-relaxed">
                          {q.question}
                        </div>

                        {/* Answers display */}
                        {isMC && q.options && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                            {q.options.map((opt, optIdx) => {
                              const isCorrect = q.correctAnswer === optIdx;
                              const label = ['A', 'B', 'C', 'D'][optIdx];
                              return (
                                <div
                                  key={optIdx}
                                  className={`flex items-start gap-2 p-2 rounded-xl text-xs font-medium transition-colors ${
                                    isCorrect
                                      ? 'bg-emerald-50 text-emerald-950 font-bold border border-emerald-300 shadow-2xs'
                                      : 'bg-slate-50 text-slate-700 border border-slate-200'
                                  }`}
                                >
                                  <span
                                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black shrink-0 ${
                                      isCorrect ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600'
                                    }`}
                                  >
                                    {label}
                                  </span>
                                  <span className="flex-1">{opt}</span>
                                  {isCorrect && (
                                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[3]" />
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        )}

                        {isFill && (
                          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                            <div className="font-bold text-slate-700">
                              Đáp án điền: <span className="text-emerald-700">{q.blankAnswers?.join(', ')}</span>
                            </div>
                            {q.wordBank && (
                              <div className="text-[11px] text-slate-500">
                                Ngân hàng từ: {q.wordBank.join(' • ')}
                              </div>
                            )}
                          </div>
                        )}

                        {isMatch && (q.pairs || q.matchingLeft) && (
                          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                            <span className="font-bold text-slate-700">Các cặp nối:</span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                              {(q.pairs || []).map((p, pIdx) => (
                                <div key={pIdx} className="text-[11px] text-indigo-900 bg-white p-1.5 rounded-lg border border-slate-200">
                                  <strong>{p.left}</strong> ➔ <span>{p.right}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Explanation & Hint */}
                        {(q.explanation || q.hint) && (
                          <div className="p-3 rounded-xl bg-indigo-50/50 border border-indigo-100 text-xs space-y-1 text-slate-700">
                            {q.hint && (
                              <p className="text-[11px] text-amber-800">
                                💡 <strong>Gợi ý:</strong> {q.hint}
                              </p>
                            )}
                            {q.explanation && (
                              <p className="text-[11px] text-slate-600">
                                📖 <strong>Giải thích:</strong> {q.explanation}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          )}
        </div>

        {/* ================================================================= */}
        {/* MODAL: TẠO HOẶC SỬA THÔNG TIN ĐỀ THI */}
        {/* ================================================================= */}
        {isExamInfoModalOpen && (
          <div className="fixed inset-0 z-60 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl p-5 sm:p-6 max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 space-y-4">
              <div className="flex items-center justify-between pb-1 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
                    <FileQuestion className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-slate-900 leading-tight">
                      {editingExamId ? 'Chỉnh sửa thông tin đề thi' : 'Tạo đề thi mới'}
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      Thiết lập thông tin và bóc tách câu hỏi từ tài liệu
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsExamInfoModalOpen(false)}
                  className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Tên đề thi / đề ôn tập <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={examTitle}
                  onChange={(e) => setExamTitle(e.target.value)}
                  placeholder="VD: Đề kiểm tra 1 tiết Tin học 8 - Học kì 1"
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                  autoFocus
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Khối lớp
                  </label>
                  <select
                    value={examGradeNumber}
                    onChange={(e) =>
                      setExamGradeNumber(Number(e.target.value) as 3 | 4 | 5 | 6 | 7 | 8 | 9)
                    }
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-hidden"
                  >
                    <option value={3}>Khối 3 (Tiểu học)</option>
                    <option value={4}>Khối 4 (Tiểu học)</option>
                    <option value={5}>Khối 5 (Tiểu học)</option>
                    <option value={6}>Khối 6 (THCS)</option>
                    <option value={7}>Khối 7 (THCS)</option>
                    <option value={8}>Khối 8 (THCS)</option>
                    <option value={9}>Khối 9 (THCS)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Loại đề
                  </label>
                  <select
                    value={examCategory}
                    onChange={(e) => setExamCategory(e.target.value as 'exam' | 'practice')}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-hidden"
                  >
                    <option value="exam">Đề thi kiểm tra (Tính giờ)</option>
                    <option value="practice">Đề ôn tập tự do</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Thời gian làm bài (phút)
                </label>
                <input
                  type="number"
                  min={5}
                  max={120}
                  value={examDurationMinutes}
                  onChange={(e) => setExamDurationMinutes(Number(e.target.value))}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Mô tả / Hướng dẫn đề thi
                </label>
                <textarea
                  rows={2}
                  value={examDescription}
                  onChange={(e) => setExamDescription(e.target.value)}
                  placeholder="Mô tả tóm tắt nội dung kiến thức của đề..."
                  className="w-full px-3 py-1.5 text-xs rounded-xl border border-slate-300 focus:outline-hidden"
                />
              </div>

              {/* MỤC UP FILE PDF / WORD ĐỂ BÓC TÁCH THEO ĐÚNG CẤU TRÚC */}
              <div className="rounded-2xl border-2 border-dashed border-indigo-200 bg-gradient-to-br from-indigo-50/70 via-slate-50 to-blue-50/50 p-4 space-y-3.5 transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-blue-600 text-white flex items-center justify-center shadow-xs shrink-0">
                      <FileUp className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <div>
                      <span className="text-xs font-black text-slate-900 uppercase tracking-tight">
                        Bóc tách câu hỏi từ tệp PDF / Word
                      </span>
                      <p className="text-[10px] text-slate-500">
                        Hỗ trợ .pdf, .docx, .doc, .txt • Tùy chỉnh dạng câu, số câu, đáp án & mức độ
                      </p>
                    </div>
                  </div>
                  {isParsingDoc && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-black animate-pulse shadow-2xs">
                      <RefreshCw className="w-3 h-3 animate-spin" />
                      Đang bóc tách...
                    </span>
                  )}
                </div>

                {/* KHUNG CẤU HÌNH TÙY CHỌN BÓC TÁCH */}
                <div className="bg-white/90 backdrop-blur-xs rounded-xl p-3 border border-indigo-100/90 shadow-2xs space-y-2.5 text-xs">
                  <div className="text-[11px] font-black text-indigo-900 flex items-center justify-between pb-1 border-b border-slate-100">
                    <span className="flex items-center gap-1.5">
                      ⚙️ Tùy chọn cấu trúc bóc tách & tạo đề
                    </span>
                    <span className="text-[10px] font-bold text-slate-500">
                      Áp dụng cho: <strong>Khối {examGradeNumber}</strong> •{' '}
                      <strong>{examCategory === 'exam' ? 'Đề thi tính giờ' : 'Đề ôn tập'}</strong>
                    </span>
                  </div>

                  {/* Grid lựa chọn dạng câu & số câu */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 mb-0.5">
                        Dạng câu hỏi
                      </label>
                      <select
                        value={docQuestionType}
                        onChange={(e) => {
                          const val = e.target.value as 'multiple_choice' | 'true_false' | 'fill_blank' | 'all';
                          setDocQuestionType(val);
                        }}
                        className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-300 bg-white font-medium focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
                      >
                        <option value="multiple_choice">Trắc nghiệm 4 lựa chọn (A, B, C, D)</option>
                        <option value="all">Tất cả các dạng trong tài liệu</option>
                        <option value="true_false">Đúng / Sai</option>
                        <option value="fill_blank">Điền khuyết / Điền từ</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 mb-0.5">
                        Số lượng câu hỏi
                      </label>
                      <select
                        value={docQuestionCount}
                        onChange={(e) => {
                          const val = e.target.value === 'all' ? 'all' : Number(e.target.value);
                          setDocQuestionCount(val);
                        }}
                        className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-300 bg-white font-medium focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
                      >
                        <option value="all">Toàn bộ câu hỏi trong tài liệu</option>
                        <option value={10}>Lấy 10 câu</option>
                        <option value={15}>Lấy 15 câu</option>
                        <option value={20}>Lấy 20 câu</option>
                        <option value={25}>Lấy 25 câu</option>
                        <option value={30}>Lấy 30 câu</option>
                        <option value={40}>Lấy 40 câu</option>
                      </select>
                    </div>
                  </div>

                  {/* Mức độ câu hỏi */}
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 mb-0.5">
                      Mức độ câu hỏi (Độ khó)
                    </label>
                    <select
                      value={docDifficultyMode}
                      onChange={(e) =>
                        setDocDifficultyMode(
                          e.target.value as 'original' | 'tong_hop' | 'de' | 'trung_binh' | 'kho'
                        )
                      }
                      className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-300 bg-white font-medium focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
                    >
                      <option value="original">Theo phân bổ tự nhiên của tài liệu gốc</option>
                      <option value="tong_hop">Tổng hợp ma trận Bộ GD&ĐT (40% Dễ - 40% TB - 20% Khó)</option>
                      <option value="de">Cấp độ Dễ (Nhận biết kiến thức cốt lõi)</option>
                      <option value="trung_binh">Cấp độ Trung bình (Thông hiểu & vận dụng cơ bản)</option>
                      <option value="kho">Cấp độ Khó (Vận dụng cao & tư duy phân tích)</option>
                    </select>
                  </div>

                  {/* KHUNG CHECKBOX QUAN TRỌNG: 100% THEO TÀI LIỆU GỐC & TỰ ĐỘNG TẠO ĐÁP ÁN */}
                  <div className="space-y-2 pt-1 border-t border-slate-100">
                    {/* Checkbox 1: 100% theo tài liệu gốc */}
                    <label
                      className={`flex items-start gap-2.5 p-2.5 rounded-xl border transition-all cursor-pointer ${
                        docStrictOriginal
                          ? 'bg-purple-50/80 border-purple-300 ring-1 ring-purple-400/40 text-purple-950'
                          : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={docStrictOriginal}
                        onChange={(e) => setDocStrictOriginal(e.target.checked)}
                        className="w-4 h-4 rounded-sm text-purple-600 mt-0.5 shrink-0"
                      />
                      <div className="leading-tight">
                        <div className="flex items-center gap-1.5">
                          <span className="font-black text-xs">
                            100% theo tài liệu gốc
                          </span>
                          <span className="px-1.5 py-0.2 rounded-md bg-purple-200/80 text-purple-800 text-[9px] font-black uppercase">
                            Bảo lưu nguyên văn
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-500 mt-0.5">
                          Bảo lưu nguyên văn 100% câu từ & các phương án từ tệp tải lên, không tự ý sửa đổi hay thêm thắt nội dung bên ngoài.
                        </p>
                      </div>
                    </label>

                    {/* Checkbox 2: Tự động tạo đáp án & lời giải nếu tài liệu chưa có */}
                    <label
                      className={`flex items-start gap-2.5 p-2.5 rounded-xl border transition-all cursor-pointer ${
                        docAutoGenerateAnswer
                          ? 'bg-emerald-50/80 border-emerald-300 ring-1 ring-emerald-400/40 text-emerald-950'
                          : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={docAutoGenerateAnswer}
                        onChange={(e) => setDocAutoGenerateAnswer(e.target.checked)}
                        className="w-4 h-4 rounded-sm text-emerald-600 mt-0.5 shrink-0"
                      />
                      <div className="leading-tight">
                        <div className="flex items-center gap-1.5">
                          <span className="font-black text-xs">
                            Tự động tạo đáp án & lời giải nếu tài liệu chưa có
                          </span>
                          <span className="px-1.5 py-0.2 rounded-md bg-emerald-200/80 text-emerald-800 text-[9px] font-black uppercase">
                            AI Giải đề
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-500 mt-0.5">
                          Nếu tài liệu chỉ có câu hỏi mà không kèm đáp án, hệ thống sẽ tự động giải và chọn đáp án chính xác nhất kèm lời giải thích chuẩn SGK.
                        </p>
                      </div>
                    </label>
                  </div>
                </div>

                {/* VÙNG TẢI FILE HOẶC HIỂN THỊ KẾT QUẢ ĐÃ BÓC TÁCH */}
                {!uploadedDocFile ? (
                  <label className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-white border border-indigo-100 hover:border-indigo-300 hover:bg-indigo-50/40 cursor-pointer transition-all group shadow-2xs">
                    <div className="flex items-center gap-2 text-indigo-600 group-hover:text-indigo-700 font-bold text-xs">
                      <Upload className="w-4 h-4" />
                      <span>Chọn hoặc kéo thả tệp PDF / Word (.docx) vào đây</span>
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1">
                      Hệ thống sẽ áp dụng ngay các tùy chọn cấu hình ở trên để bóc tách câu hỏi
                    </span>
                    <input
                      type="file"
                      accept=".pdf,.docx,.doc,.txt"
                      disabled={isParsingDoc}
                      onChange={handleUploadAndParseExamDoc}
                      className="hidden"
                    />
                  </label>
                ) : (
                  <div className="bg-white rounded-xl p-3 border border-emerald-200 shadow-2xs space-y-2.5">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center shrink-0">
                          <FileText className="w-4 h-4" />
                        </div>
                        <div className="truncate">
                          <p className="text-xs font-bold text-slate-800 truncate">
                            {uploadedDocFile.name}
                          </p>
                          <p className="text-[10px] text-slate-500">
                            {(uploadedDocFile.size / 1024).toFixed(1)} KB • Đã bóc tách thành công{' '}
                            <strong className="text-emerald-700 font-black">{parsedDocQuestions.length} câu hỏi</strong>
                            {docStrictOriginal && (
                              <span className="text-purple-700 font-bold ml-1">• 100% nguyên văn</span>
                            )}
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={handleRemoveUploadedDoc}
                        className="p-1 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                        title="Xóa tệp này"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-slate-100">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        Đã sẵn sàng tạo đề
                      </span>

                      <div className="flex flex-wrap items-center gap-1.5">
                        {/* Nút bóc tách lại nếu thay đổi tùy chọn */}
                        {cachedFileData && (
                          <button
                            type="button"
                            onClick={() => handleReParseWithCurrentOptions()}
                            disabled={isParsingDoc}
                            className="px-2.5 py-1 rounded-lg bg-purple-50 hover:bg-purple-100 text-purple-700 text-[11px] font-bold flex items-center gap-1 transition-colors cursor-pointer disabled:opacity-50"
                            title="Áp dụng lại các tùy chọn khối, mức độ, số câu, 100% gốc cho file này"
                          >
                            <RefreshCw className={`w-3 h-3 ${isParsingDoc ? 'animate-spin' : ''}`} />
                            Bóc tách lại
                          </button>
                        )}

                        <button
                          type="button"
                          onClick={() => setIsPreviewQuestionsModalOpen(true)}
                          className="px-2.5 py-1 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-[11px] font-bold flex items-center gap-1 transition-colors cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          Xem trước {parsedDocQuestions.length} câu
                        </button>
                        <label className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold flex items-center gap-1 cursor-pointer transition-colors">
                          <Upload className="w-3 h-3" />
                          Đổi tệp
                          <input
                            type="file"
                            accept=".pdf,.docx,.doc,.txt"
                            disabled={isParsingDoc}
                            onChange={handleUploadAndParseExamDoc}
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {docParseWarning && (
                  <p className="text-[11px] text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200">
                    ⚠️ {docParseWarning}
                  </p>
                )}
              </div>

              {/* Tùy chọn nạp câu hỏi */}
              {parsedDocQuestions.length > 0 ? (
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    Đề thi sẽ được tạo với <strong>{parsedDocQuestions.length} câu hỏi</strong> bóc tách từ tệp!
                  </span>
                </div>
              ) : (
                !editingExamId && (
                  <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer pt-1">
                    <input
                      type="checkbox"
                      checked={autoSeedQuestions}
                      onChange={(e) => setAutoSeedQuestions(e.target.checked)}
                      className="w-4 h-4 rounded-sm text-indigo-600"
                    />
                    <span>Tự động nạp trước 6 câu hỏi mẫu từ ngân hàng đề của khối này</span>
                  </label>
                )
              )}

              <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsExamInfoModalOpen(false)}
                  className="px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 rounded-xl"
                >
                  Hủy
                </button>
                <button
                  type="button"
                  onClick={handleSaveExamInfo}
                  className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md cursor-pointer transition-transform active:scale-95"
                >
                  {editingExamId ? 'Lưu thay đổi' : 'Tạo đề ngay'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* MODAL: XEM TRƯỚC CÂU HỎI BÓC TÁCH TỪ FILE */}
        {/* ================================================================= */}
        {isPreviewQuestionsModalOpen && (
          <div className="fixed inset-0 z-70 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[88vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
              {/* Header */}
              <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 text-white flex items-center justify-between shrink-0">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-black">
                      {parsedDocQuestions.length} câu hỏi
                    </span>
                    <h3 className="text-base sm:text-lg font-black font-['Lexend'] text-white">
                      Xem trước câu hỏi bóc tách từ tệp
                    </h3>
                  </div>
                  <p className="text-xs text-indigo-200 mt-0.5">
                    Tệp: <strong>{uploadedDocFile?.name}</strong> • Kiểm tra cấu trúc câu hỏi, phương án & đáp án
                  </p>
                </div>
                <button
                  onClick={() => setIsPreviewQuestionsModalOpen(false)}
                  className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* List */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-50">
                {parsedDocQuestions.map((q, idx) => (
                  <div
                    key={q.id || idx}
                    className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs space-y-3"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-indigo-600 text-white text-xs font-black flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase ${
                            q.difficulty === 'de'
                              ? 'bg-emerald-100 text-emerald-800'
                              : q.difficulty === 'kho'
                              ? 'bg-rose-100 text-rose-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {q.difficulty === 'de' ? 'Dễ' : q.difficulty === 'kho' ? 'Khó' : 'Trung bình'}
                        </span>
                        {q.topic && (
                          <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                            {q.topic}
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-sm font-bold text-slate-900 leading-snug">
                      {q.question}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {q.options.map((opt, oIdx) => {
                        const isCorrect = oIdx === q.correctAnswer;
                        return (
                          <div
                            key={oIdx}
                            className={`flex items-start gap-2 p-2.5 rounded-xl border text-xs transition-colors ${
                              isCorrect
                                ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-bold ring-1 ring-emerald-400'
                                : 'bg-slate-50 border-slate-200 text-slate-700 font-medium'
                            }`}
                          >
                            <span
                              className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black shrink-0 ${
                                isCorrect
                                  ? 'bg-emerald-600 text-white'
                                  : 'bg-slate-200 text-slate-700'
                              }`}
                            >
                              {String.fromCharCode(65 + oIdx)}
                            </span>
                            <span className="flex-1 leading-snug">{opt}</span>
                            {isCorrect && (
                              <Check className="w-4 h-4 text-emerald-600 shrink-0 ml-1" />
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {q.explanation && (
                      <div className="bg-indigo-50/60 rounded-xl p-2.5 border border-indigo-100 text-xs text-indigo-900">
                        <span className="font-bold">💡 Giải thích:</span> {q.explanation}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between">
                <p className="text-xs text-slate-500">
                  Tổng số <strong>{parsedDocQuestions.length} câu hỏi</strong> đã sẵn sàng đưa vào đề thi.
                </p>
                <button
                  type="button"
                  onClick={() => setIsPreviewQuestionsModalOpen(false)}
                  className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/30 cursor-pointer"
                >
                  Xác nhận & Sử dụng
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* MODAL: CHỈNH SỬA / THÊM CÂU HỎI */}
        {/* ================================================================= */}
        <QuestionEditorModal
          isOpen={isQuestionEditorOpen}
          onClose={() => setIsQuestionEditorOpen(false)}
          questionToEdit={editingQuestion}
          onSaveQuestion={handleSaveQuestion}
          examGradeNumber={currentExam?.gradeNumber || 8}
        />
      </div>
    </div>
  );
};
