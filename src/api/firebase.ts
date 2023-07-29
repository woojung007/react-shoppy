import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

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
    callback(user);
  });
}
