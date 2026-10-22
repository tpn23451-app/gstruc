import { initializeApp, getApps, getApp } from 'firebase/app';
import { getDatabase, ref, set, get, onValue, remove, child } from 'firebase/database';
import { StudentScoreRecord } from '../types/quiz';

export const firebaseConfig = {
  apiKey: "AIzaSyC8tvxuX0hGZBifaFzd4ZY2WhkI-R8wop4",
  authDomain: "tpn123-cb59c.firebaseapp.com",
  databaseURL: "https://tpn123-cb59c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tpn123-cb59c",
  storageBucket: "tpn123-cb59c.firebasestorage.app",
  messagingSenderId: "445798785890",
  appId: "1:445798785890:web:0c6dafab32ed5eca40823b",
  measurementId: "G-RE6KJ1N3H5"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const db = getDatabase(app);

const SCORES_REF_PATH = 'ontap_scores';

/**
 * Lắng nghe thay đổi điểm số thời gian thực từ Firebase Realtime Database
 */
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
        // Convert object of objects or array to StudentScoreRecord[]
        const scoreList: StudentScoreRecord[] = Object.keys(data).map((key) => {
          return {
            ...data[key],
            id: data[key].id || key,
          };
        });
        // Sắp xếp ngày mới nhất lên đầu
        scoreList.sort((a, b) => (b.date || 0) - (a.date || 0));
        onSuccess(scoreList);
      } else {
        onSuccess([]);
      }
    },
    (error) => {
      console.warn('Lỗi đọc Firebase Realtime Database:', error);
      if (onError) onError(error);
    }
  );

  return unsubscribe;
}

/**
 * Lưu 1 bản ghi điểm lên Firebase
 */
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

/**
 * Xóa 1 bản ghi điểm khỏi Firebase
 */
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

/**
 * Đồng bộ toàn bộ danh sách điểm từ Local lên Firebase (nếu Firebase trống)
 */
export async function syncBatchScoresToFirebase(scores: StudentScoreRecord[]): Promise<boolean> {
  try {
    const scoresRef = ref(db, SCORES_REF_PATH);
    const snapshot = await get(scoresRef);
    
    // Nếu Firebase chưa có dữ liệu nào, đẩy toàn bộ dữ liệu mẫu / local lên
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
