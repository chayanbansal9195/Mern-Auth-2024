// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-2024.firebaseapp.com",
  projectId: "mern-auth-2024",
  storageBucket: "mern-auth-2024.appspot.com",
  messagingSenderId: "557224567796",
  appId: "1:557224567796:web:98b2b7d8213203c16f4fa1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
