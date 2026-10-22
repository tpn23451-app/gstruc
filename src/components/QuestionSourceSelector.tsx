import React, { useState } from 'react';
import { QuestionSourcePreference } from '../types/quiz';
import {
  BrainCircuit,
  Database,
  Key,
  CheckCircle2,
  AlertCircle,
  Eye,
  EyeOff,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Trash2,
  Loader2,
  Wifi,
  WifiOff
} from 'lucide-react';
import { sound } from '../utils/sound';

interface QuestionSourceSelectorProps {
  sourcePreference: QuestionSourcePreference;
  onSelectSourcePreference: (val: QuestionSourcePreference) => void;
  apiKey: string;
  onSaveApiKey: (key: string) => void;
}

export const QuestionSourceSelector: React.FC<QuestionSourceSelectorProps> = ({
  sourcePreference,
  onSelectSourcePreference,
  apiKey,
  onSaveApiKey,
}) => {
  const [showApiKeyDrawer, setShowApiKeyDrawer] = useState<boolean>(Boolean(apiKey));
  const [keyInput, setKeyInput] = useState<string>(apiKey || '');
  const [showSecret, setShowSecret] = useState<boolean>(false);
  const [isVerifying, setIsVerifying] = useState<boolean>(false);
  const [verifyStatus, setVerifyStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleToggleKey = () => {
    sound.playClick();
    setShowApiKeyDrawer(!showApiKeyDrawer);
  };

  const handleSave = () => {
    sound.playClick();
    onSaveApiKey(keyInput.trim());
    setVerifyStatus({
      success: true,
      message: 'Đã lưu khóa API thành công vào trình duyệt của bạn!',
    });
    setTimeout(() => {
      setVerifyStatus(null);
    }, 3500);
  };

  const handleClear = () => {
    sound.playClick();
    setKeyInput('');
    onSaveApiKey('');
    setVerifyStatus({
      success: true,
      message: 'Đã xóa khóa API cá nhân. Hệ thống sẽ dùng AI mặc định hoặc Offline.',
    });
    setTimeout(() => {
      setVerifyStatus(null);
    }, 3500);
  };

  const handleVerify = async () => {
    if (!keyInput.trim()) {
      setVerifyStatus({
        success: false,
        message: 'Vui lòng nhập khóa API trước khi kiểm tra!',
      });
      return;
    }

    sound.playClick();
    setIsVerifying(true);
    setVerifyStatus(null);

    try {
      const res = await fetch('/api/check-api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ apiKey: keyInput.trim() }),
      });
      const data = await res.json();
      if (data && data.success) {
        sound.playCorrect();
        onSaveApiKey(keyInput.trim());
        setVerifyStatus({
          success: true,
          message: 'Tuyệt vời! API Key hợp lệ và đang hoạt động tốt.',
        });
      } else {
        sound.playWrong();
        setVerifyStatus({
          success: false,
          message: data?.message || 'Không thể xác thực API Key. Vui lòng kiểm tra lại!',
        });
      }
    } catch {
      sound.playWrong();
      setVerifyStatus({
        success: false,
        message: 'Lỗi kết nối tới máy chủ khi kiểm tra API.',
      });
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-xs space-y-4">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-800 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-black shadow-xs">
              5
            </span>
            Nguồn Tạo Câu Hỏi & Tích Hợp AI / API
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Linh hoạt sử dụng AI thông minh (không bị lặp lại) hoặc Kho câu hỏi chuẩn SGK offline không cần mạng
          </p>
        </div>

        {/* Status indicator */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-100 text-xs font-semibold text-slate-700 self-start sm:self-auto">
          {sourcePreference === 'ai' ? (
            <>
              <Wifi className="w-3.5 h-3.5 text-emerald-600" />
              <span>Chế độ: <strong>AI Sinh Đề</strong></span>
            </>
          ) : (
            <>
              <WifiOff className="w-3.5 h-3.5 text-blue-600" />
              <span>Chế độ: <strong>Dữ Liệu Offline</strong></span>
            </>
          )}
        </div>
      </div>

      {/* Choice Grid: AI vs Offline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {/* Option 1: AI (Gemini) */}
        <div
          onClick={() => {
            sound.playClick();
            onSelectSourcePreference('ai');
          }}
          className={`cursor-pointer p-4 rounded-2xl border-2 transition-all relative group flex flex-col justify-between ${
            sourcePreference === 'ai'
              ? 'border-indigo-600 bg-indigo-50/70 ring-2 ring-indigo-500/20 shadow-md'
              : 'border-slate-200 bg-white hover:border-indigo-300 hover:shadow-xs'
          }`}
        >
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shadow-xs ${
                    sourcePreference === 'ai'
                      ? 'bg-gradient-to-tr from-indigo-600 to-violet-600 text-white'
                      : 'bg-indigo-100 text-indigo-700'
                  }`}
                >
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm sm:text-base group-hover:text-indigo-700 transition-colors">
                    AI Sinh Đề Thông Minh
                  </h3>
                  <span className="text-[11px] font-bold text-indigo-600 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-500" />
                    Google Gemini AI
                  </span>
                </div>
              </div>

              {sourcePreference === 'ai' && (
                <span className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs shadow-xs">
                  ✓
                </span>
              )}
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Tạo câu hỏi đa dạng, phong phú, <strong>không bị lặp lại</strong>, bao quát mọi bài học đã chọn và kèm lời giải sư phạm chi tiết.
            </p>
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-200/70 flex items-center justify-between text-[11px]">
            <span className="text-slate-500 font-medium">Khuyên dùng cho ôn thi</span>
            <span className="font-bold text-indigo-700">Tự động + API cá nhân</span>
          </div>
        </div>

        {/* Option 2: Offline Question Bank */}
        <div
          onClick={() => {
            sound.playClick();
            onSelectSourcePreference('offline');
          }}
          className={`cursor-pointer p-4 rounded-2xl border-2 transition-all relative group flex flex-col justify-between ${
            sourcePreference === 'offline'
              ? 'border-blue-600 bg-blue-50/70 ring-2 ring-blue-500/20 shadow-md'
              : 'border-slate-200 bg-white hover:border-blue-300 hover:shadow-xs'
          }`}
        >
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shadow-xs ${
                    sourcePreference === 'offline'
                      ? 'bg-gradient-to-tr from-blue-600 to-cyan-600 text-white'
                      : 'bg-blue-100 text-blue-700'
                  }`}
                >
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm sm:text-base group-hover:text-blue-700 transition-colors">
                    Kho Câu Hỏi SGK Offline
                  </h3>
                  <span className="text-[11px] font-bold text-emerald-600">
                    ● Dữ liệu chuẩn SGK 4 Khối
                  </span>
                </div>
              </div>

              {sourcePreference === 'offline' && (
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs shadow-xs">
                  ✓
                </span>
              )}
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Tạo đề thi tức thì từ ngân hàng câu hỏi chuẩn có sẵn của <strong>đủ 4 khối (6, 7, 8, 9)</strong>. Hoạt động 100% không cần mạng hay API.
            </p>
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-200/70 flex items-center justify-between text-[11px]">
            <span className="text-slate-500 font-medium">Tốc độ tức thì</span>
            <span className="font-bold text-emerald-700">100% Hoạt động Offline</span>
          </div>
        </div>
      </div>

      {/* Accordion: Tích hợp API Key cá nhân */}
      <div className="border border-indigo-100 bg-gradient-to-r from-indigo-50/40 via-blue-50/30 to-purple-50/40 rounded-2xl p-3.5 sm:p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Key className="w-4 h-4 text-indigo-600" />
            <span className="text-xs sm:text-sm font-bold text-slate-800">
              Cài Đặt Gemini API Key Cá Nhân (Tùy chọn nâng cao)
            </span>
            {apiKey ? (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold border border-emerald-300">
                <CheckCircle2 className="w-3 h-3" />
                Đã kết nối
              </span>
            ) : (
              <span className="hidden xs:inline-block text-[10px] text-slate-500 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                Không bắt buộc
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={handleToggleKey}
            className="text-xs text-indigo-700 hover:text-indigo-900 font-bold flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-white/80 transition-colors"
          >
            <span>{showApiKeyDrawer ? 'Thu gọn' : 'Thiết lập Key'}</span>
            {showApiKeyDrawer ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {showApiKeyDrawer && (
          <div className="space-y-3 pt-2 border-t border-indigo-100/80 animate-in fade-in">
            <p className="text-xs text-slate-600 leading-relaxed">
              💡 <em>Mẹo:</em> Khi bạn nhập Gemini API Key của riêng mình, AI sẽ tạo câu hỏi theo yêu cầu với hạn mức cá nhân cao nhất, siêu phong phú và hoàn toàn không lo giới hạn. Khóa được lưu an toàn trên máy bạn.
            </p>

            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <input
                  type={showSecret ? 'text' : 'password'}
                  value={keyInput}
                  onChange={(e) => setKeyInput(e.target.value)}
                  placeholder="Dán Gemini API Key của bạn (Ví dụ: AIzaSy...)"
                  className="w-full pl-3.5 pr-10 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500 font-mono shadow-xs"
                />
                <button
                  type="button"
                  onClick={() => setShowSecret(!showSecret)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                  title={showSecret ? 'Ẩn' : 'Hiện'}
                >
                  {showSecret ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleVerify}
                  disabled={isVerifying || !keyInput.trim()}
                  className="px-3.5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 disabled:opacity-50"
                >
                  {isVerifying ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Đang thử...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      <span>Kiểm tra & Lưu</span>
                    </>
                  )}
                </button>

                {apiKey && (
                  <button
                    type="button"
                    onClick={handleClear}
                    className="p-2.5 rounded-xl border border-slate-300 hover:bg-rose-50 text-slate-500 hover:text-rose-600 transition-colors"
                    title="Xóa khóa API"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Status message */}
            {verifyStatus && (
              <div
                className={`p-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 animate-in fade-in ${
                  verifyStatus.success
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    : 'bg-rose-50 text-rose-800 border border-rose-200'
                }`}
              >
                {verifyStatus.success ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                )}
                <span>{verifyStatus.message}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
