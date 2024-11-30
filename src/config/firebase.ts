import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC1mMlSnaJENjM2dM0NyOVzKEUxyc8ill8",
  authDomain: "ecommerce-catalog-64a81.firebaseapp.com",
  projectId: "ecommerce-catalog-64a81",
  storageBucket: "ecommerce-catalog-64a81.firebasestorage.app",
  messagingSenderId: "839563851295",
  appId: "1:839563851295:web:8d029132049289c385c72a",
  measurementId: "G-14XQYVW4SH"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();