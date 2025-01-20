// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "netflixgpt-28e0b.firebaseapp.com",
  projectId: "netflixgpt-28e0b",
  storageBucket: "netflixgpt-28e0b.firebasestorage.app",
  messagingSenderId: "363116441646",
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: "G-KBBFKRF2LR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();