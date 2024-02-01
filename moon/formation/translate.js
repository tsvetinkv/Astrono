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
    const moonMaps = document.getElementById("moonMaps");
    const moonPhases = document.getElementById("moonPhases");
    const eclipses = document.getElementById("eclipses");
    const tbtn = document.querySelectorAll(".tbtn");

    const moonHeading = document.querySelectorAll(".moonHeading");
    const moonP = document.querySelectorAll(".moonP");
    const moonMapsSubnav = document.getElementById("moonMapsSubnav");
    const moonFormationSubnav = document.getElementById("moonFormationSubnav");
    const moonPhasesSubnav = document.getElementById("moonPhasesSubnav");
    const eclipsesSubnav = document.getElementById("eclipsesSubnav");

    const overlayP = document.getElementById("overlayP");
    const heading1 = document.getElementById("heading1");
    const formationP = document.getElementById("formationP");
    const lunarArchaeologyHeading = document.getElementById("lunarArchaeologyHeading");
    const lunarArchaeology1 = document.getElementById("lunarArchaeology1");
    const leftP = document.getElementById("leftP");
    const figcaption1 = document.getElementById("figcaption1");
    const lunarArchaeology2 = document.getElementById("lunarArchaeology2");
    const figcaption2 = document.getElementById("figcaption2");
    const textMedium2 = document.getElementById("textMedium2");
    const footer = document.getElementById("footer");

    let htmlElements = [eventsNav, sAndCNav, starBasics, typesStars, multipleStarSystems, constellations, constellationsBySeasons, eventsS, starsAndConstellationsS, starBasicsS, typesStarsS, multipleStarSystemsS, constellationsS, constellationsBySeasonsS, moonMaps, moonPhases, eclipses];
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
        } else if (t.page == 3) {
            let elements = [moonMapsSubnav, moonFormationSubnav, moonPhasesSubnav, eclipsesSubnav];
            for (let i = 0; i < elements.length; i++) {
                if (t.en.trim() == elements[i].innerHTML.trim() || t.bg.trim() == elements[i].innerHTML.trim()) {
                    if (currentLanguage == "en") {
                        elements[i].innerHTML = t.en;
                    } else if (currentLanguage == "bg") {
                        elements[i].innerHTML = t.bg;
                    }
                }
            }
            moonHeading.forEach(mh => {
                if (t.en.trim() == mh.innerHTML.trim() || t.bg.trim() == mh.innerHTML.trim()) {
                    if (currentLanguage == "en") {
                        mh.innerHTML = t.en;
                    } else if (currentLanguage == "bg") {
                        mh.innerHTML = t.bg;
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
        } else if (t.page == 5) {
            let elements = [figcaption1, lunarArchaeology2, lunarArchaeologyHeading, figcaption2, textMedium2, overlayP, heading1, formationP, lunarArchaeology1, leftP, footer];
            for (let i = 0; i < elements.length; i++) {
                if (t.en.trim() == elements[i].innerHTML.trim() || t.bg.trim() == elements[i].innerHTML.trim()) {
                    if (currentLanguage == "en") {
                        elements[i].innerHTML = t.en;
                    } else if (currentLanguage == "bg") {
                        elements[i].innerHTML = t.bg;
                    }
                }
            }
        }
    })
}