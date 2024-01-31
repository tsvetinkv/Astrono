window.currentLanguage = localStorage.getItem('currentLanguage') || "En";

function changeLanguage() {
    window.currentLanguage = window.currentLanguage === "En" ? "Bg" : "En";
    localStorage.setItem('currentLanguage', window.currentLanguage);
}