// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "otakutv-82c57.firebaseapp.com",
  projectId: "otakutv-82c57",
  storageBucket: "otakutv-82c57.appspot.com",
  messagingSenderId: "913039501658",
  appId: "1:913039501658:web:586a11370fac5f02a06b63",
  measurementId: "G-310WH7NX6E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)