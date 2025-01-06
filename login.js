// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// Your web app's Firebase configuration
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
const submit = document.getElementById('loginBtn');
const submitMobile = document.getElementById('loginBtnMobile');
const invalidEmail = document.querySelectorAll('.invalidEmail');
const invalidPassword = document.querySelectorAll('.invalidPassword');

submit.addEventListener('click', event => {
    event.preventDefault();
    handleFormSubmission('emailLogin', 'passwordLogin');
});

submitMobile.addEventListener('click', event => {
    event.preventDefault();
    handleFormSubmission('emailLoginMobile', 'passwordLoginMobile');
});

function handleFormSubmission(emailElementId, passwordElementId) {
    const email = document.getElementById(emailElementId).value;
    const password = document.getElementById(passwordElementId).value;

    console.log(email);

    if (validateEmail(email) && validatePassword(password)) {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                // ...
                window.location.href = "/loged/homePage/"
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                alert(errorMessage);
            });
    } else {
        if (!validateEmail(email)) {
            invalidEmail.forEach(el => {
                el.style.display = "block";
            });
            document.getElementById(emailElementId).classList.replace('uk-margin-medium-bottom', 'uk-margin-bottom');
        }
        if (!validatePassword(password)) {
            invalidPassword.forEach(el => {
                el.style.display = "block";
            });
        }
    }
}