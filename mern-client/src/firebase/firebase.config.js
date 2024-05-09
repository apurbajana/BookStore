// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAboTDQ28m65fwPG39sHEsdW7xCBrha1ZY",
  authDomain: "bookstore-288a5.firebaseapp.com",
  projectId: "bookstore-288a5",
  storageBucket: "bookstore-288a5.appspot.com",
  messagingSenderId: "959699411228",
  appId: "1:959699411228:web:28ec234262f22081b25ad9",
  measurementId: "G-49KQQFXHWK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;