import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

 
const firebaseConfig = {
  apiKey: process.env.firebaseApiKey,
  authDomain: "fill-my-bag.firebaseapp.com",
  projectId: "fill-my-bag",
  storageBucket: "fill-my-bag.appspot.com",
  messagingSenderId: "522155540819",
  appId: "1:522155540819:web:21c6a512bdb5d5a2c261a6",
  measurementId: "G-SZXYXHMHHL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(); 

export const db = getFirestore();