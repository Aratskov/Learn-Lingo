import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0YX03IrGL1C3-UQoJ4Tvt8cPxvbTjRfE",
  authDomain: "learnlingo-ac0c7.firebaseapp.com",
  projectId: "learnlingo-ac0c7",
  storageBucket: "learnlingo-ac0c7.appspot.com",
  messagingSenderId: "86494732429",
  appId: "1:86494732429:web:bbdbebc0cc6b4aadf702c4",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

