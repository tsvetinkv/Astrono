const translateBtn = document.querySelectorAll(".translate");
let currentLanguage = window.currentLanguage;
fetchTranslations();
for (var i = 0; i < translateBtn.length; i++) {
    translateBtn[i].addEventListener('click', function () {
        switchLanguage();
    });
}

function switchLanguage() {
    changeLanguage();
    currentLanguage = window.currentLanguage;
    fetchTranslations();
}

function fetchTranslations() {
    fetch('https://apiastrono.bsite.net/Translations/GetAllTranslations', {
        method: 'GET',
        headers: {
            accept: "application/json",
        }
    })
        .then(response => {
            return response.json()
        })
        .then(data => {
            translateTxt(data);
        })
        .catch(error => console.error('Error:', error))

}
function translateTxt(translations) {
    const eventsNav = document.getElementById("eventsNav");
    const sAndCNav = document.getElementById("hoveredNav");
    const moonNav = document.getElementById("moonNav");
    const aboutNav = document.getElementById("aboutNav");
    const starBasics = document.getElementById("starBasics");
    const typesStars = document.getElementById("typesStars");
    const multipleStarSystems = document.getElementById("multipleStarSystems");
    const constellations = document.getElementById("constellations");
    const constellationsBySeasons = document.getElementById("constellationsBySeasons");
    const eventsS = document.getElementById("eventsS");
    const starsAndConstellationsS = document.getElementById("starsAndConstellationsS");
    const starBasicsS = document.getElementById("starBasicsS");
    const typesStarsS = document.getElementById("typesStarsS");
    const multipleStarSystemsS = document.getElementById("multipleStarSystemsS");
    const constellationsS = document.getElementById("constellationsS");
    const constellationsBySeasonsS = document.getElementById("constellationsBySeasonsS");
    const moonS = document.getElementById("moonS");
    const aboutS = document.getElementById("aboutS");
    const heading1 = document.getElementById("heading1");
    const heading2 = document.getElementById("heading2");
    const para1 = document.getElementById("para1");
    const eventsP = document.querySelectorAll(".eventsP");
    const starsAndConstellations = document.getElementById("starsAndConstellations");
    const moonP = document.querySelectorAll(".moonP");
    const tbtn = document.querySelectorAll(".tbtn");
    const eventImgs = document.querySelectorAll(".eventImg");
    const starsAndConstellationsImg = document.getElementById("starsAndConstellationsImg");
    const moonImg = document.querySelectorAll(".moonImg");


    let htmlElements = [eventsNav, sAndCNav, moonNav, aboutNav, starBasics, typesStars, multipleStarSystems, constellations, constellationsBySeasons, eventsS, starsAndConstellationsS, starBasicsS, typesStarsS, multipleStarSystemsS, constellationsS, constellationsBySeasonsS, moonS, aboutS];
    translations.forEach(t => {
        if (t.page == 17) {
            for (let i = 0; i < htmlElements.length; i++) {
                if (t.en == htmlElements[i].innerHTML || t.bg == htmlElements[i].innerHTML) {
                    if (currentLanguage == "en") {
                        htmlElements[i].innerHTML = t.en;
                    } else if (currentLanguage == "bg") {
                        htmlElements[i].innerHTML = t.bg;
                    }
                }
            }
            tbtn.forEach(tb => {
                if (t.en == tb.innerHTML || t.bg == tb.innerHTML) {
                    if (currentLanguage == "en") {
                        tb.innerHTML = t.en;
                    } else if (currentLanguage == "bg") {
                        tb.innerHTML = t.bg;
                    }
                }
            })
        } else if (t.page == 1) {
            let elements = [heading1, heading2, para1, starsAndConstellations];
            for (let i = 0; i < elements.length; i++) {
                if (t.en.trim() == elements[i].innerHTML.trim() || t.bg.trim() == elements[i].innerHTML.trim()) {
                    if (currentLanguage == "en") {
                        elements[i].innerHTML = t.en;
                    } else if (currentLanguage == "bg") {
                        elements[i].innerHTML = t.bg;
                    }
                }
            }
            eventsP.forEach(e => {
                if (t.en.trim() == e.innerHTML.trim() || t.bg.trim() == e.innerHTML.trim()) {
                    if (currentLanguage == "en") {
                        e.innerHTML = t.en;
                    } else if (currentLanguage == "bg") {
                        e.innerHTML = t.bg;
                    }
                }
            })
            moonP.forEach(m => {
                if (t.en.trim() == m.innerHTML.trim() || t.bg.trim() == m.innerHTML.trim()) {
                    if (currentLanguage == "en") {
                        m.innerHTML = t.en;
                    } else if (currentLanguage == "bg") {
                        m.innerHTML = t.bg;
                    }
                }
            })
        }
    })

    if (currentLanguage === "en") {
        eventImgs.forEach(img => img.src = "./images/eventsEn.png");
        starsAndConstellationsImg.src = "./images/starsAndConstellationsEn.png";
        moonImg.forEach(img => img.src = "./images/moonEn.png");
    } else {
        eventImgs.forEach(img => img.src = "./images/eventsBg.png");
        starsAndConstellationsImg.src = "./images/starsAndConstellationsBg.png";
        moonImg.forEach(img => img.src = "./images/moonBg.png");
    }
}