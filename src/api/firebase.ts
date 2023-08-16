import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth';
import { getDatabase, ref, child, get, set, remove } from 'firebase/database';
import { CartProduct } from 'types/cart.types';
import { Product } from 'types/product.types';
import { v4 as uuid } from 'uuid';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase();

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
    const snapshot = await get(child(ref(database), `admins/`));

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

export async function addNewProduct(product: Product, image: string) {
  const id = uuid();
  return set(ref(database, `product/${id}`), {
    ...product,
    id,
    price: product.price,
    image,
    options: product.options.split(','),
  });
}

export async function getProducts() {
  return get(ref(database, 'product')).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
}

export async function getCart(userId: string) {
  return get(ref(database, `carts/${userId}`)).then((snapshot) => {
    const items = snapshot.val() || {};
    return Object.values(items);
  });
}

export async function addOrUpdateToCart(userId: string, product: CartProduct) {
  return set(ref(database, `carts/${userId}/${product.id}`), product);
}

export async function removeFromCart(userId: string, productId: string) {
  return remove(ref(database, `carts/${userId}/${productId}`));
}
