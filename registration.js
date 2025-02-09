// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

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
const submit = document.getElementById('registrateBtn');
const submitMobile = document.getElementById('registrateBtnMobile');
const invalidEmail = document.querySelectorAll('.invalidEmail');
const invalidPassword = document.querySelectorAll('.invalidPassword');

submitMobile.addEventListener('click', event =>{
    event.preventDefault();

    const emailMobile = document.getElementById('emailRegisterMobile');
    const passwordMobile = document.getElementById('passwordRegisterMobile').value;

    if(validateEmail(emailMobile.value) && validatePassword(passwordMobile)){
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, emailMobile.value, passwordMobile)
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
                alert(errorMessage)
            });
    }else if(validateEmail(emailMobile.value) === false){
        invalidEmail.forEach(el => {
            el.style.display = "block";
        });
        emailMobile.classList.replace('uk-margin-medium-bottom', 'uk-margin-bottom');
    }
    if(validatePassword(passwordMobile) === false){
        invalidPassword.forEach(el => {
            el.style.display = "block";
        });
    }
})
submit.addEventListener('click', event =>{
    event.preventDefault();
    const  email = document.getElementById('emailRegister');
    const password = document.getElementById('passwordRegister').value;

    if(validateEmail(email.value) && validatePassword(password)){
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email.value, password)
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
                alert(errorMessage)
            });
    }else if(validateEmail(email.value) === false){
        invalidEmail.forEach(el => {
            el.style.display = "block"
        });
        email.classList.replace('uk-margin-medium-bottom', 'uk-margin-bottom');
    }
    if(validatePassword(password) === false){
        invalidPassword.forEach(el => {
            el.style.display = "block"
        });
    }
})
