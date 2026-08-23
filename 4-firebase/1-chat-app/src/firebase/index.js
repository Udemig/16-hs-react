// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: "hs-chat-app-a0320.firebaseapp.com",
  projectId: "hs-chat-app-a0320",
  storageBucket: "hs-chat-app-a0320.firebasestorage.app",
  messagingSenderId: "124244623462",
  appId: "1:124244623462:web:794214f9e1ad0c10956da7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);