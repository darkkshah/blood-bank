// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGUQvgYpsBJiY7fOOfn1WCbJiq7aPBzZM",
  authDomain: "shapes-b87d8.firebaseapp.com",
  projectId: "shapes-b87d8",
  storageBucket: "shapes-b87d8.appspot.com",
  messagingSenderId: "657472074512",
  appId: "1:657472074512:web:6492767dbc99bebeb6ab95",
  measurementId: "G-VBDFKD4NC2"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);