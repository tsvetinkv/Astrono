// helper.js
window.currentLanguage = localStorage.getItem('currentLanguage') || "en";

function changeLanguage() {
    window.currentLanguage = window.currentLanguage === "en" ? "bg" : "en";
    localStorage.setItem('currentLanguage', window.currentLanguage);
}
