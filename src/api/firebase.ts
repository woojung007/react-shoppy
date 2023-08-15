import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  User,
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
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await checkAdminUser(user) : null;

    callback(updatedUser);
  });
}

export async function checkAdminUser(user: User) {
  try {
    const dbRef = ref(getDatabase());
    const snapshot = await get(child(dbRef, `admins/`));

    if (snapshot.exists()) {
      const admins = snapshot.val();
      const isAdmin = admins.includes(user.uid);

      return { ...user, isAdmin };
    }
    console.log('No data available');
    return user;
  } catch (error) {
    console.error(error);
  }
}
