import { initializeApp } from "firebase/app";
import dotenv from 'dontenv';
import { getAuth } from "firebase/auth";

dotenv.config()
 
const firebaseConfig = {
  apiKey: process.env.FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: "fill-my-bag",
  storageBucket: "fill-my-bag.appspot.com",
  messagingSenderId: "522155540819",
  appId: "1:522155540819:web:21c6a512bdb5d5a2c261a6",
  measurementId: "G-SZXYXHMHHL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(); 