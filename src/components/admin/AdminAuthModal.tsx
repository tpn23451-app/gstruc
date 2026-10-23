import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Lock,
  Mail,
  KeyRound,
  LogOut,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  X,
  Eye,
  EyeOff,
  UserCheck,
  GraduationCap
} from 'lucide-react';
import {
  ADMIN_EMAIL,
  AdminSession,
  getStoredAdminSession,
  signInAdminWithGoogle,
  signInAdminWithPasscode,
  signOutAdmin,
  changeAdminPasscode,
} from '../../services/firebase';
import { sound } from '../../utils/sound';

interface AdminAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessOpenStudio: () => void;
  adminSession: AdminSession | null;
  setAdminSession: (sess: AdminSession | null) => void;
}

export const AdminAuthModal: React.FC<AdminAuthModalProps> = ({
  isOpen,
  onClose,
  onSuccessOpenStudio,
  adminSession,
  setAdminSession,
}) => {
  const [tab, setTab] = useState<'login' | 'change_passcode'>('login');
  const [loginMethod, setLoginMethod] = useState<'google' | 'passcode'>('google');
  const [passcode, setPasscode] = useState('');
  const [showPasscode, setShowPasscode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Đổi passcode
  const [newPasscode, setNewPasscode] = useState('');
  const [confirmPasscode, setConfirmPasscode] = useState('');

  useEffect(() => {
    if (isOpen) {
      setErrorMessage('');
      setSuccessMessage('');
      setPasscode('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Xử lý đăng nhập Google
  const handleGoogleSignIn = async () => {
    sound.playClick();
    setIsLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const res = await signInAdminWithGoogle();
      if (res.success && res.session) {
        sound.playCorrect();
        setAdminSession(res.session);
        setSuccessMessage('Đăng nhập Quản trị viên thành công!');
        setTimeout(() => {
          onSuccessOpenStudio();
        }, 800);
      } else {
        sound.playWrong();
        setErrorMessage(
          res.error ||
            `Tài khoản không hợp lệ. Chỉ có tài khoản ${ADMIN_EMAIL} mới có quyền truy cập Studio!`
        );
      }
    } catch (err: any) {
      sound.playWrong();
      setErrorMessage(err.message || 'Lỗi kết nối khi đăng nhập Google.');
    } finally {
      setIsLoading(false);
    }
  };

  // Xử lý đăng nhập bằng mã bảo vệ
  const handlePasscodeSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playClick();
    if (!passcode.trim()) {
      setErrorMessage('Vui lòng nhập mật mã quản trị viên!');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    setTimeout(() => {
      const res = signInAdminWithPasscode(passcode);
      if (res.success && res.session) {
        sound.playCorrect();
        setAdminSession(res.session);
        setSuccessMessage('Xác thực quản trị viên thành công!');
        setTimeout(() => {
          onSuccessOpenStudio();
        }, 700);
      } else {
        sound.playWrong();
        setErrorMessage(res.error || 'Mật mã quản trị viên không chính xác!');
      }
      setIsLoading(false);
    }, 400);
  };

  // Xử lý đăng xuất
  const handleSignOut = async () => {
    sound.playClick();
    setIsLoading(true);
    await signOutAdmin();
    setAdminSession(null);
    setPasscode('');
    setSuccessMessage('Đã đăng xuất khỏi tài khoản Quản trị viên.');
    setIsLoading(false);
  };

  // Xử lý đổi mật mã
  const handleChangePasscode = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playClick();
    if (newPasscode.length < 4) {
      setErrorMessage('Mật mã mới phải có ít nhất 4 ký tự!');
      return;
    }
    if (newPasscode !== confirmPasscode) {
      setErrorMessage('Xác nhận mật mã không khớp!');
      return;
    }

    const ok = changeAdminPasscode(newPasscode);
    if (ok) {
      sound.playCorrect();
      setSuccessMessage('Đã đổi mật mã quản trị viên thành công!');
      setNewPasscode('');
      setConfirmPasscode('');
      setTab('login');
    } else {
      sound.playWrong();
      setErrorMessage('Không thể lưu mật mã mới. Vui lòng thử lại.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full border border-slate-200 overflow-hidden relative">
        {/* Header decoration */}
        <div className="bg-gradient-to-r from-indigo-700 via-blue-700 to-indigo-900 p-6 text-white relative">
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Đóng"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner">
              <ShieldCheck className="w-7 h-7 text-amber-300" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400 text-amber-950 text-[11px] font-black uppercase tracking-wider">
                <Sparkles className="w-3 h-3" />
                Admin Studio Security
              </div>
              <h2 className="text-xl font-black mt-1">Xác thực Quản trị viên</h2>
            </div>
          </div>
          <p className="text-xs text-indigo-100 mt-2 leading-relaxed">
            Khu vực quản trị dành riêng cho Giáo viên / Admin: <strong className="text-amber-300 font-bold">{ADMIN_EMAIL}</strong>
          </p>
        </div>

        {/* Body content */}
        <div className="p-6">
          {/* Notifications */}
          {errorMessage && (
            <div className="mb-4 p-3 rounded-2xl bg-rose-50 border border-rose-200 flex items-start gap-2.5 text-rose-800 text-xs animate-shake">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div className="font-medium leading-relaxed">{errorMessage}</div>
            </div>
          )}

          {successMessage && (
            <div className="mb-4 p-3 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-2.5 text-emerald-800 text-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div className="font-semibold leading-relaxed">{successMessage}</div>
            </div>
          )}

          {/* Nếu ĐÃ ĐĂNG NHẬP */}
          {adminSession ? (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 flex items-center gap-3.5">
                {adminSession.photoURL ? (
                  <img
                    src={adminSession.photoURL}
                    alt="Admin Avatar"
                    className="w-13 h-13 rounded-2xl border-2 border-indigo-300 shadow-sm object-cover"
                  />
                ) : (
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-indigo-600 to-blue-500 text-white font-black text-xl flex items-center justify-center shadow-md">
                    👑
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-sm text-slate-900 truncate">
                      {adminSession.displayName || 'Quản trị viên'}
                    </span>
                    <span className="px-2 py-0.5 text-[10px] font-extrabold rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                      Đã xác thực
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-indigo-700 truncate mt-0.5">
                    {adminSession.email}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Phương thức: {adminSession.authType === 'google' ? 'Tài khoản Google' : 'Mật mã bí mật'}
                  </p>
                </div>
              </div>

              {tab === 'change_passcode' ? (
                <form onSubmit={handleChangePasscode} className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Đổi Mật mã bảo vệ Quản trị viên
                  </h4>
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">
                      Mật mã mới (ít nhất 4 ký tự)
                    </label>
                    <input
                      type="password"
                      value={newPasscode}
                      onChange={(e) => setNewPasscode(e.target.value)}
                      placeholder="Nhập mật mã mới..."
                      className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">
                      Xác nhận mật mã mới
                    </label>
                    <input
                      type="password"
                      value={confirmPasscode}
                      onChange={(e) => setConfirmPasscode(e.target.value)}
                      placeholder="Nhập lại mật mã mới..."
                      className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="flex gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setTab('login')}
                      className="flex-1 py-2 text-xs font-bold rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100"
                    >
                      Hủy
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-2 text-xs font-bold rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-600/20"
                    >
                      Lưu mật mã mới
                    </button>
                  </div>
                </form>
              ) : (
                <div className="space-y-2.5 pt-2">
                  <button
                    onClick={() => {
                      sound.playClick();
                      onSuccessOpenStudio();
                    }}
                    className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition-transform active:scale-98 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>Mở Admin Studio ngay</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        setTab('change_passcode');
                      }}
                      className="flex-1 py-2.5 px-3 rounded-xl border border-slate-200 hover:border-indigo-300 text-slate-700 text-xs font-bold hover:bg-indigo-50/50 flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <KeyRound className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Đổi mật mã</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSignOut}
                      disabled={isLoading}
                      className="flex-1 py-2.5 px-3 rounded-xl border border-rose-200 hover:border-rose-300 text-rose-700 text-xs font-bold hover:bg-rose-50 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <LogOut className="w-3.5 h-3.5 text-rose-600" />
                      <span>Đăng xuất</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* CHƯA ĐĂNG NHẬP */
            <div className="space-y-4">
              {/* Method tabs */}
              <div className="flex p-1 bg-slate-100 rounded-2xl border border-slate-200">
                <button
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    setLoginMethod('google');
                    setErrorMessage('');
                  }}
                  className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
                    loginMethod === 'google'
                      ? 'bg-white text-indigo-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Đăng nhập Google
                </button>
                <button
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    setLoginMethod('passcode');
                    setErrorMessage('');
                  }}
                  className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
                    loginMethod === 'passcode'
                      ? 'bg-white text-indigo-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Mật mã Quản trị viên
                </button>
              </div>

              {loginMethod === 'google' ? (
                <div className="space-y-3 pt-2 text-center">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Nhấn nút bên dưới để chọn tài khoản Google của bạn. Hệ thống sẽ tự động cấp quyền truy cập nếu tài khoản là{' '}
                    <strong className="text-indigo-700 font-bold">{ADMIN_EMAIL}</strong>.
                  </p>

                  <button
                    type="button"
                    onClick={handleGoogleSignIn}
                    disabled={isLoading}
                    className="w-full py-3 px-4 rounded-2xl border-2 border-slate-200 hover:border-indigo-400 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm flex items-center justify-center gap-3 shadow-xs transition-all active:scale-98 cursor-pointer disabled:opacity-50"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                    <span>{isLoading ? 'Đang xác thực Google...' : 'Đăng nhập với Google'}</span>
                  </button>

                  <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-left">
                    <p className="text-[11px] text-amber-900 leading-relaxed flex items-start gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>
                        Nếu trình duyệt chặn cửa sổ pop-up của Google hoặc bạn chưa bật Google Sign-In trên Firebase Console, vui lòng chuyển sang tab <strong>"Mật mã Quản trị viên"</strong> để đăng nhập ngay tức thì.
                      </span>
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handlePasscodeSignIn} className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Quản trị viên (Cố định)
                    </label>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 border border-slate-300 text-slate-700 text-xs font-semibold">
                      <Mail className="w-4 h-4 text-indigo-600 shrink-0" />
                      <span>{ADMIN_EMAIL}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Mật mã quản trị viên (Admin Passcode)
                    </label>
                    <div className="relative">
                      <input
                        type={showPasscode ? 'text' : 'password'}
                        value={passcode}
                        onChange={(e) => setPasscode(e.target.value)}
                        placeholder="Nhập mã bảo vệ quản trị viên..."
                        className="w-full pl-3 pr-10 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 font-mono"
                        autoFocus
                      />
                      <button
                        type="button"
                        onClick={() => setShowPasscode(!showPasscode)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                      >
                        {showPasscode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 italic">
                      Gợi ý: Mật mã khởi tạo mặc định là <strong className="text-indigo-700 font-bold">saohom@2002</strong> (có thể đổi sau khi vào Studio).
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 px-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/30 flex items-center justify-center gap-2 transition-transform active:scale-98 cursor-pointer disabled:opacity-50"
                  >
                    <KeyRound className="w-4 h-4" />
                    <span>{isLoading ? 'Đang kiểm tra...' : 'Xác thực & Vào Studio'}</span>
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
