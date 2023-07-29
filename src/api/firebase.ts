import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase, ref, child, get } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

const provider = new GoogleAuthProvider();

export function login() {
  signInWithPopup(auth, provider)
    // * .catch((error) => console.error(error))랑 같은 의미
    .catch(console.error);
}

export function logout() {
  signOut(auth);
}

export function onUserStateChange(callback: CallableFunction) {
  onAuthStateChanged(auth, (user) => {
    // 1. 사용자가 로그인한 경우
    // 2. 사용자가 어드민 권한을 가지고 있는지 확인!
    // 3. {...user, isAdmin: true/false}
    callback(user);
  });
}

export async function getAdmins() {
  try {
    const dbRef = ref(getDatabase());
    const snapshot = await get(child(dbRef, `admins/`));

    if (snapshot.exists()) {
      console.log(snapshot.val());
      return;
    }
    console.log('No data available');
  } catch (error) {
    console.error(error);
  }
}
