// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmECJuAtgZncd4QHxxpbPiQtw_cdGn8io",
  authDomain: "hs-twitter-e7917.firebaseapp.com",
  projectId: "hs-twitter-e7917",
  storageBucket: "hs-twitter-e7917.firebasestorage.app",
  messagingSenderId: "1025743735228",
  appId: "1:1025743735228:web:b4e0c5c73dc7fe0ec1c3b9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth referansını al
export const auth = getAuth(app);

// google sağlaycısının kurulum
export const provider = new GoogleAuthProvider();

// firestore veritabanı referansını al
export const db = getFirestore(app);

// storage referansını al
export const storage = getStorage(app);
