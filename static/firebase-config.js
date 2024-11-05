import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, 
         GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {


    apiKey: "AIzaSyBpfOHD5c-F5Yz6zoJGaCRFADwFk10uliY",
    authDomain: "pruebacrud-18854.firebaseapp.com",
    projectId: "pruebacrud-18854",
    storageBucket: "pruebacrud-18854.appspot.com",
    messagingSenderId: "225589200752",
    appId: "1:225589200752:web:f8ac575681edde772c31b5",
    measurementId: "G-SX57DJQ77T"
  };



  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const db = getFirestore(app);

export { auth, provider, db };