// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBicTnwdsOnQ6CYWXR3Z7C2Pyo6M4MnPr0",
  authDomain: "netflixgpt-28e0b.firebaseapp.com",
  projectId: "netflixgpt-28e0b",
  storageBucket: "netflixgpt-28e0b.firebasestorage.app",
  messagingSenderId: "363116441646",
  appId: "1:363116441646:web:6933555b8b8f1efe1d6fbf",
  measurementId: "G-KBBFKRF2LR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();