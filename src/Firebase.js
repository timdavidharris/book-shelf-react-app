// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM-n4b52ZnZuFNfb-SahJiV5-edTDmjPI",
  authDomain: "book-shelf-94fb6.firebaseapp.com",
  projectId: "book-shelf-94fb6",
  storageBucket: "book-shelf-94fb6.appspot.com",
  messagingSenderId: "1017404521347",
  appId: "1:1017404521347:web:a51d21821e943a26bc54b6",
  measurementId: "G-T9SBMFQBXD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);