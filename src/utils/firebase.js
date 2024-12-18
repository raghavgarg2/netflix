import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2yimyV5xO5MV--bsRXy8tIBzFxeowDkk",
  authDomain: "netflix-clone-f6fce.firebaseapp.com",
  projectId: "netflix-clone-f6fce",
  storageBucket: "netflix-clone-f6fce.firebasestorage.app",
  messagingSenderId: "31331544812",
  appId: "1:31331544812:web:859e7de672e06430f5ffc9",
  measurementId: "G-JESWZ0H3H7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
