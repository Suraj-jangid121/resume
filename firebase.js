// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

// 🔐 Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGALyet-KO-n2je5rBgg5mDWfYyIfaRS0",
  authDomain: "apnaresumebuilder.firebaseapp.com",
  projectId: "apnaresumebuilder",
  storageBucket: "apnaresumebuilder.firebasestorage.app",
  messagingSenderId: "478270455880",
  appId: "1:478270455880:web:8a52a65ad267b1277e587d",
  measurementId: "G-WY6RGH36C8"
};

// 🚀 Initialize Firebase
export const app = initializeApp(firebaseConfig);

// 🔐 Firebase Auth
export const auth = getAuth(app);

// 🌐 Google Auth Provider
export const googleProvider = new GoogleAuthProvider();
