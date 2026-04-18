import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Native integration for the Public Clone
const firebaseConfig = {
  apiKey: "AIzaSyBNsF8pQNLWcoC723n-xlrjg7nNuTY_Hxs",
  authDomain: "trustfeed-48496.firebaseapp.com",
  projectId: "trustfeed-48496",
  storageBucket: "trustfeed-48496.firebasestorage.app",
  messagingSenderId: "551221110767",
  appId: "1:551221110767:web:91a40db4ce7342d237f81a",
  measurementId: "G-NKXCNK23J6"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export { app, db };
