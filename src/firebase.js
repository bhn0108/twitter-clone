// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNNKPbqTvE9lIhQovSuUOI9RIhfDjVvFk",
    authDomain: "twitter-clone-bc4bd.firebaseapp.com",
    projectId: "twitter-clone-bc4bd",
    storageBucket: "twitter-clone-bc4bd.appspot.com",
    messagingSenderId: "368382163925",
    appId: "1:368382163925:web:1ab67e408fb6e93e7e1b5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;