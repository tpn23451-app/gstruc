import { initializeApp, getApps, getApp } from 'firebase/app';
import { getDatabase, ref, set, get, onValue, remove } from 'firebase/database';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth';
import { StudentScoreRecord, CustomExam } from '../types/quiz';
import { DEFAULT_CUSTOM_EXAMS } from '../data/defaultCustomExams';

export const firebaseConfig = {
  apiKey: 'AIzaSyC8tvxuX0hGZBifaFzd4ZY2WhkI-R8wop4',
  authDomain: 'tpn123-cb59c.firebaseapp.com',
  databaseURL: 'https://tpn123-cb59c-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'tpn123-cb59c',
  storageBucket: 'tpn123-cb59c.firebasestorage.app',
  messagingSenderId: '445798785890',
  appId: '1:445798785890:web:0c6dafab32ed5eca40823b',
  measurementId: 'G-RE6KJ1N3H5',
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const db = getDatabase(app);
export const auth = getAuth(app);

// ============================================================================
// ADMIN CONSTANTS & AUTHENTICATION (CHỈ DÀNH CHO saohom2002@gmail.com)
// ============================================================================
export const ADMIN_EMAIL = 'saohom2002@gmail.com';
const ADMIN_SESSION_KEY = 'ontap_admin_session_info';
const ADMIN_PASSCODE_KEY = 'ontap_admin_secure_passcode';
const DEFAULT_ADMIN_PASSCODE = 'saohom@2002';

export interface AdminSession {
  email: string;
  displayName: string;
  photoURL?: string;
  authType: 'google' | 'passcode';
  loginTime: number;
}

/**
 * Kiểm tra xem một email có phải là admin saohom2002@gmail.com hay không
 */
export function isAuthorizedAdmin(email?: string | null): boolean {
  if (!email) return false;
  return email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase();
}

/**
 * Đọc phiên đăng nhập admin hiện tại từ localStorage
 */
export function getStoredAdminSession(): AdminSession | null {
  try {
    const raw = localStorage.getItem(ADMIN_SESSION_KEY);
    if (!raw) return null;
    const session: AdminSession = JSON.parse(raw);
    if (session && isAuthorizedAdmin(session.email)) {
      return session;
    }
  } catch (e) {
    console.error('Lỗi đọc admin session:', e);
  }
  return null;
}

/**
 * Lưu phiên đăng nhập admin
 */
export function saveAdminSession(session: AdminSession): void {
  try {
    localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(session));
  } catch (e) {
    console.error('Lỗi lưu admin session:', e);
  }
}

/**
 * Xóa phiên đăng nhập admin
 */
export function clearAdminSession(): void {
  try {
    localStorage.removeItem(ADMIN_SESSION_KEY);
  } catch (e) {
    console.error('Lỗi xóa admin session:', e);
  }
}

/**
 * Đăng nhập Admin bằng Google Popup
 */
export async function signInAdminWithGoogle(): Promise<{
  success: boolean;
  session?: AdminSession;
  error?: string;
}> {
  try {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    if (!isAuthorizedAdmin(user.email)) {
      // Đăng xuất ngay lập tức nếu không phải saohom2002@gmail.com
      await signOut(auth);
      clearAdminSession();
      return {
        success: false,
        error: `Quyền truy cập bị từ chối! Email "${user.email}" không có quyền Quản trị viên. Chỉ có ${ADMIN_EMAIL} mới được phép truy cập Studio.`,
      };
    }

    const session: AdminSession = {
      email: user.email!,
      displayName: user.displayName || 'Quản trị viên (Ms. Trúc)',
      photoURL: user.photoURL || undefined,
      authType: 'google',
      loginTime: Date.now(),
    };
    saveAdminSession(session);
    return { success: true, session };
  } catch (err: any) {
    console.error('Lỗi đăng nhập Google Admin:', err);
    return {
      success: false,
      error: err.message || 'Đăng nhập Google thất bại. Vui lòng thử lại hoặc dùng mật mã quản trị.',
    };
  }
}

/**
 * Đăng nhập Admin bằng Mã bảo vệ Quản trị viên
 */
export function signInAdminWithPasscode(passcode: string): {
  success: boolean;
  session?: AdminSession;
  error?: string;
} {
  try {
    const savedCode = localStorage.getItem(ADMIN_PASSCODE_KEY) || DEFAULT_ADMIN_PASSCODE;
    if (passcode.trim() === savedCode.trim()) {
      const session: AdminSession = {
        email: ADMIN_EMAIL,
        displayName: 'Quản trị viên (saohom2002)',
        authType: 'passcode',
        loginTime: Date.now(),
      };
      saveAdminSession(session);
      return { success: true, session };
    }
    return {
      success: false,
      error: 'Mật mã quản trị viên không chính xác! Vui lòng kiểm tra lại.',
    };
  } catch (err: any) {
    return { success: false, error: 'Đã có lỗi xảy ra khi xác thực mật mã.' };
  }
}

/**
 * Đổi mật mã quản trị viên (chỉ thực hiện khi đã đăng nhập Admin)
 */
export function changeAdminPasscode(newPasscode: string): boolean {
  if (!newPasscode || newPasscode.trim().length < 4) return false;
  try {
    localStorage.setItem(ADMIN_PASSCODE_KEY, newPasscode.trim());
    return true;
  } catch {
    return false;
  }
}

/**
 * Đăng xuất Admin
 */
export async function signOutAdmin(): Promise<void> {
  try {
    await signOut(auth);
  } catch (e) {
    // Ignore sign out errors
  }
  clearAdminSession();
}

// ============================================================================
// STUDENT SCORES
// ============================================================================
const SCORES_REF_PATH = 'ontap_scores';

export function subscribeToScores(
  onSuccess: (scores: StudentScoreRecord[]) => void,
  onError?: (err: Error) => void
): () => void {
  const scoresRef = ref(db, SCORES_REF_PATH);

  const unsubscribe = onValue(
    scoresRef,
    (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const scoreList: StudentScoreRecord[] = Object.keys(data).map((key) => {
          return {
            ...data[key],
            id: data[key].id || key,
          };
        });
        scoreList.sort((a, b) => (b.date || 0) - (a.date || 0));
        onSuccess(scoreList);
      } else {
        onSuccess([]);
      }
    },
    (error) => {
      console.warn('Lỗi đọc Firebase Realtime Database (Scores):', error);
      if (onError) onError(error);
    }
  );

  return unsubscribe;
}

export async function saveScoreToFirebase(score: StudentScoreRecord): Promise<boolean> {
  try {
    const scoreRef = ref(db, `${SCORES_REF_PATH}/${score.id}`);
    await set(scoreRef, score);
    return true;
  } catch (error) {
    console.error('Lỗi lưu điểm lên Firebase:', error);
    return false;
  }
}

export async function deleteScoreFromFirebase(scoreId: string): Promise<boolean> {
  try {
    const scoreRef = ref(db, `${SCORES_REF_PATH}/${scoreId}`);
    await remove(scoreRef);
    return true;
  } catch (error) {
    console.error('Lỗi xóa điểm khỏi Firebase:', error);
    return false;
  }
}

export async function syncBatchScoresToFirebase(scores: StudentScoreRecord[]): Promise<boolean> {
  try {
    const scoresRef = ref(db, SCORES_REF_PATH);
    const snapshot = await get(scoresRef);

    if (!snapshot.exists()) {
      const payload: Record<string, StudentScoreRecord> = {};
      scores.forEach((s) => {
        payload[s.id] = s;
      });
      await set(scoresRef, payload);
      return true;
    }
    return false;
  } catch (error) {
    console.warn('Lỗi kiểm tra / đồng bộ điểm ban đầu lên Firebase:', error);
    return false;
  }
}

// ============================================================================
// ADMIN CUSTOM EXAMS & PRACTICE TESTS (ĐỀ THI & ĐỀ ÔN TẬP TỪ ADMIN)
// ============================================================================
const CUSTOM_EXAMS_REF_PATH = 'admin_custom_exams';
const LOCAL_CUSTOM_EXAMS_KEY = 'ontap_admin_custom_exams';

/**
 * Đọc đề thi từ LocalStorage dự phòng
 */
export function getLocalCustomExams(): CustomExam[] {
  try {
    const raw = localStorage.getItem(LOCAL_CUSTOM_EXAMS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch {}
  return DEFAULT_CUSTOM_EXAMS;
}

/**
 * Lưu đề thi vào LocalStorage
 */
export function saveLocalCustomExams(exams: CustomExam[]): void {
  try {
    localStorage.setItem(LOCAL_CUSTOM_EXAMS_KEY, JSON.stringify(exams));
  } catch (e) {
    console.error('Lỗi lưu custom exams vào LocalStorage:', e);
  }
}

/**
 * Lắng nghe thay đổi đề thi thời gian thực từ Firebase Realtime Database
 */
export function subscribeToCustomExams(
  onSuccess: (exams: CustomExam[]) => void,
  onError?: (err: Error) => void
): () => void {
  const examsRef = ref(db, CUSTOM_EXAMS_REF_PATH);

  const unsubscribe = onValue(
    examsRef,
    (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const examList: CustomExam[] = Object.keys(data).map((key) => {
          return {
            ...data[key],
            id: data[key].id || key,
            questions: Array.isArray(data[key].questions) ? data[key].questions : [],
          };
        });
        examList.sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
        saveLocalCustomExams(examList);
        onSuccess(examList);
      } else {
        // Nếu Firebase chưa có, lấy từ Local hoặc Đề mẫu
        const local = getLocalCustomExams();
        onSuccess(local);
      }
    },
    (error) => {
      console.warn('Lỗi đọc Firebase Realtime Database (Custom Exams):', error);
      const local = getLocalCustomExams();
      onSuccess(local);
      if (onError) onError(error);
    }
  );

  return unsubscribe;
}

/**
 * Lưu 1 đề thi lên Firebase và LocalStorage
 */
export async function saveCustomExamToFirebase(exam: CustomExam): Promise<boolean> {
  try {
    // Lưu ngay vào local
    const current = getLocalCustomExams();
    const existingIndex = current.findIndex((e) => e.id === exam.id);
    let updated: CustomExam[];
    if (existingIndex >= 0) {
      updated = [...current];
      updated[existingIndex] = exam;
    } else {
      updated = [exam, ...current];
    }
    saveLocalCustomExams(updated);

    // Đẩy lên Firebase
    const examRef = ref(db, `${CUSTOM_EXAMS_REF_PATH}/${exam.id}`);
    await set(examRef, exam);
    return true;
  } catch (error) {
    console.error('Lỗi lưu đề thi lên Firebase:', error);
    // Vẫn trả về true nếu local đã lưu thành công
    return true;
  }
}

/**
 * Xóa 1 đề thi khỏi Firebase và LocalStorage
 */
export async function deleteCustomExamFromFirebase(examId: string): Promise<boolean> {
  try {
    // Xóa trong local
    const current = getLocalCustomExams();
    const updated = current.filter((e) => e.id !== examId);
    saveLocalCustomExams(updated);

    // Xóa trên Firebase
    const examRef = ref(db, `${CUSTOM_EXAMS_REF_PATH}/${examId}`);
    await remove(examRef);
    return true;
  } catch (error) {
    console.error('Lỗi xóa đề thi khỏi Firebase:', error);
    return true;
  }
}

/**
 * Đồng bộ các đề thi mẫu ban đầu lên Firebase nếu trên đám mây chưa có
 */
export async function syncInitialCustomExamsToFirebase(): Promise<boolean> {
  try {
    const examsRef = ref(db, CUSTOM_EXAMS_REF_PATH);
    const snapshot = await get(examsRef);

    if (!snapshot.exists()) {
      const payload: Record<string, CustomExam> = {};
      const initial = getLocalCustomExams();
      initial.forEach((e) => {
        payload[e.id] = e;
      });
      await set(examsRef, payload);
      return true;
    }
    return false;
  } catch (error) {
    console.warn('Lỗi đồng bộ đề thi ban đầu lên Firebase:', error);
    return false;
  }
}
