// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMGN4f1bM-Vr8QbKP5085Ks1ga8yAl55w",
  authDomain: "lexaar-857b0.firebaseapp.com",
  projectId: "lexaar-857b0",
  storageBucket: "lexaar-857b0.firebasestorage.app",
  messagingSenderId: "990473744023",
  appId: "1:990473744023:web:58756ce937d339459c03d2",
  measurementId: "G-H2TZLREXYK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics (только если пользователь согласился на куки)
export const initFirebaseAnalytics = () => {
  const cookieConsent = localStorage.getItem("cookieConsent");
  if (cookieConsent === "accepted") {
    return getAnalytics(app);
  }
  return null;
};

export default app;
