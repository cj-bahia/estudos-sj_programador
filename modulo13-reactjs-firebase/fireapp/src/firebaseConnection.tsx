import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtvXVEcLATSDSCU_ZwFK9LENlE3igiJeI",
  authDomain: "curso-2d6d5.firebaseapp.com",
  projectId: "curso-2d6d5",
  storageBucket: "curso-2d6d5.firebasestorage.app",
  messagingSenderId: "74736057772",
  appId: "1:74736057772:web:e397d388dfa1e673518e09",
  measurementId: "G-CEBYJ7N12V",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };