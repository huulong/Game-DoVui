// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDw6JbLPPoYnfRM03czrM8-sgt6wYsc6dE",
    authDomain: "testdulieu-a017c.firebaseapp.com",
    databaseURL: "https://testdulieu-a017c-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "testdulieu-a017c",
    storageBucket: "testdulieu-a017c.appspot.com",
    messagingSenderId: "263117973737",
    appId: "1:263117973737:web:809fa0b2aa3d4d25002878",
    measurementId: "G-QZC0Q0FXZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

