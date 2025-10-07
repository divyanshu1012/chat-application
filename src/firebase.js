import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCC6dIHBoKYCn5Ny2SvpFxon7dFxIfenF0",
  authDomain: "chat-application-divyanshu.firebaseapp.com",
  projectId: "chat-application-divyanshu",
  storageBucket: "chat-application-divyanshu.firebasestorage.app",
  messagingSenderId: "521952849161",
  appId: "1:521952849161:web:05f1afbf7db3a8307bb7d8",
  measurementId: "G-JSN6KZDSR1"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);