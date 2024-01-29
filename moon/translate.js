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
    const moonFormation = document.getElementById("moonFormation");
    const moonPhases = document.getElementById("moonPhases");
    const eclipses = document.getElementById("eclipses");
    const tbtn = document.querySelectorAll(".tbtn");

    const moonHeading = document.querySelectorAll(".moonHeading");
    const moonP = document.querySelectorAll(".moonP");
    const moonMapsSubnav = document.getElementById("moonMapsSubnav");
    const moonFormationSubnav = document.getElementById("moonFormationSubnav");
    const moonPhasesSubnav = document.getElementById("moonPhasesSubnav");
    const eclipsesSubnav = document.getElementById("eclipsesSubnav");

    const gravity = document.querySelectorAll(".gravity");
    const hydrogen = document.querySelectorAll(".hydrogen");
    const roughness = document.querySelectorAll(".roughness");
    const elevation = document.querySelectorAll(".elevation");
    const gravityCapitals = document.querySelector(".gravityCapitals");
    const hydrogenCapitals = document.querySelector(".hydrogenCapitals");
    const roughnessCapitals = document.querySelector(".roughnessCapitals");
    const elevationCapitals = document.querySelector(".elevationCapitals");
    const elP = document.getElementById("elP");
    const unitsEl = document.querySelector(".unitsEl");
    const learnMore = document.querySelectorAll(".learnMore");
    const gravityP = document.getElementById("gravityP");
    const hidrogenP = document.getElementById("hidrogenP");
    const ppm = document.getElementById("ppm");
    const roughnessP = document.getElementById("roughnessP");


    let htmlElements = [eventsNav, sAndCNav, starBasics, typesStars, multipleStarSystems, constellations, constellationsBySeasons, eventsS, starsAndConstellationsS, starBasicsS, typesStarsS, multipleStarSystemsS, constellationsS, constellationsBySeasonsS, moonFormation, moonPhases, eclipses];
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
        } else if (t.page == 4) {
            let elements = [gravityCapitals, hydrogenCapitals, roughnessCapitals, elevationCapitals, elP, unitsEl, gravityP, hidrogenP, ppm, roughnessP];
            for (let i = 0; i < elements.length; i++) {
                if (t.en.trim() == elements[i].innerHTML.trim() || t.bg.trim() == elements[i].innerHTML.trim()) {
                    if (currentLanguage == "en") {
                        elements[i].innerHTML = t.en;
                    } else if (currentLanguage == "bg") {
                        elements[i].innerHTML = t.bg;
                    }
                }
            }
            gravity.forEach(g => {
                if (t.en.trim() == g.innerHTML.trim() || t.bg.trim() == g.innerHTML.trim()) {
                    if (currentLanguage == "en") {
                        g.innerHTML = t.en;
                    } else if (currentLanguage == "bg") {
                        g.innerHTML = t.bg;
                    }
                }
            })

            elevation.forEach(el => {
                if (t.en.trim() == el.innerHTML.trim() || t.bg.trim() == el.innerHTML.trim()) {
                    if (currentLanguage == "en") {
                        el.innerHTML = t.en;
                    } else if (currentLanguage == "bg") {
                        el.innerHTML = t.bg;
                    }
                }
            })

            hydrogen.forEach(h => {
                if (t.en.trim() == h.innerHTML.trim() || t.bg.trim() == h.innerHTML.trim()) {
                    if (currentLanguage == "en") {
                        h.innerHTML = t.en;
                    } else if (currentLanguage == "bg") {
                        h.innerHTML = t.bg;
                    }
                }
            })

            roughness.forEach(r => {
                if (t.en.trim() == r.innerHTML.trim() || t.bg.trim() == r.innerHTML.trim()) {
                    if (currentLanguage == "en") {
                        r.innerHTML = t.en;
                    } else if (currentLanguage == "bg") {
                        r.innerHTML = t.bg;
                    }
                }
            })

            learnMore.forEach(l => {
                if (t.en.trim() == l.innerHTML.trim() || t.bg.trim() == l.innerHTML.trim()) {
                    if (currentLanguage == "en") {
                        l.innerHTML = t.en;
                    } else if (currentLanguage == "bg") {
                        l.innerHTML = t.bg;
                    }
                }
            })
        }
    })
}