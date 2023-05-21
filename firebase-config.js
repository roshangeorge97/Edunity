// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0uYwFVNFcmN11JipsKB9lPzNwfN17oKY",
  authDomain: "edunity-e582b.firebaseapp.com",
  projectId: "edunity-e582b",
  storageBucket: "edunity-e582b.appspot.com",
  messagingSenderId: "1072910471111",
  appId: "1:1072910471111:web:d777c12baea67c6f0753e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();
