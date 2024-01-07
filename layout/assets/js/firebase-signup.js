// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhopxP73zHx-50YWytjgCPLj8Tcb-BWJY",
  authDomain: "nextgen-noname.firebaseapp.com",
  projectId: "nextgen-noname",
  storageBucket: "nextgen-noname.appspot.com",
  messagingSenderId: "394991714016",
  appId: "1:394991714016:web:5884668b48c5044f5b1a85",
  measurementId: "G-ZVLH4R2JM2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();

//Signup

const form_singup = document.getElementById("signup-MainForm");

form_singup.addEventListener('submit', (e) => {
  e.preventDefault();
  const email_input = document.getElementById("email-signup").value;
  const password_input = document.getElementById("Password-signup").value;
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email_input, password_input)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("Account Created!");
      window.location.href = "signin.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
});
