// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
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
const auth = getAuth();

//Login
const form_login = document.getElementById("login-MainForm");
form_login.addEventListener("submit", (e) => {
  e.preventDefault();
  const email_input = document.getElementById("Email-login").value;
  const password_input = document.getElementById("password-login").value;
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email_input, password_input)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("Signin Successfully!");
      window.location.href = "home.html";
      // ...
    })
    .catch((error) => {
      alert("Signin Failed!");
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});

document.getElementById("login_w_google").addEventListener("submit", (p) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
});
