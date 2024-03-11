import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBJRqj71nywMENq7qvBoca_8o0yo4PmEFE",
    authDomain: "microproyecto2lp.firebaseapp.com",
    databaseURL: "https://microproyecto2lp-default-rtdb.firebaseio.com",
    projectId: "microproyecto2lp",
    storageBucket: "microproyecto2lp.appspot.com",
    messagingSenderId: "428653266306",
    appId: "1:428653266306:web:528483250e5579794afb9b",
    measurementId: "G-6YEPPJ2V7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { auth, createUserWithEmailAndPassword, googleProvider, db, signInWithPopup, onAuthStateChanged };