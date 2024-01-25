// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "story-book-by-spd6.firebaseapp.com",
  projectId: "story-book-by-spd6",
  storageBucket: "story-book-by-spd6.appspot.com",
  messagingSenderId: "988772987588",
  appId: "1:988772987588:web:5102d491fce1782d6f4f91",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;