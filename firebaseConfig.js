// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtxkyNiB3aqgumnNMMUR59wxafPxkF078",
  authDomain: "quixaguia.firebaseapp.com",
  projectId: "quixaguia",
  storageBucket: "quixaguia.firebasestorage.app",
  messagingSenderId: "832333029612",
  appId: "1:832333029612:web:3301406547d39de81ec5c9",
  measurementId: "G-VP81H428SF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);