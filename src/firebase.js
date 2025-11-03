// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC1mvASW4rbca0PCOeTSITHiTI2VdonGTM",
    authDomain: "study-forge-d5db6.firebaseapp.com",
    projectId: "study-forge-d5db6",
    storageBucket: "study-forge-d5db6.firebasestorage.app",
    messagingSenderId: "674080432797",
    appId: "1:674080432797:web:8f36fd94bb589bf8686a74",
    measurementId: "G-YPCGHTRTGC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);