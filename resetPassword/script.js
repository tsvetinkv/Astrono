const btn = document.getElementById("sendBtn");
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyBHdyXlzEPf5MMqBPV9crqnaqvZsctEwI8",
    authDomain: "astrono-8c431.firebaseapp.com",
    projectId: "astrono-8c431",
    storageBucket: "astrono-8c431.firebasestorage.app",
    messagingSenderId: "559934246380",
    appId: "1:559934246380:web:c2ead3db04e1ea59f144c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
btn.addEventListener('click', event =>{
    event.preventDefault();
    const email = document.getElementById("resetEmail").value;
    console.log(email)

    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
        .then(() => {
            // Password reset email sent!
            window.location.href = "/"
            // ..
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert(errorMessage)
        });
} )