// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "inko-8b9d5.firebaseapp.com",
  projectId: "inko-8b9d5",
  storageBucket: "inko-8b9d5.appspot.com",
  messagingSenderId: "644356875361",
  appId: "1:644356875361:web:3784162124bd9f3f1ef620"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);