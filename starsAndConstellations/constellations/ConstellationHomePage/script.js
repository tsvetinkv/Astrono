let currentLanguage = window.currentLanguage;
translate();
function switchLanguage() {
    changeLanguage();
    currentLanguage = window.currentLanguage;
    translate();
}
function translate() {
    const changeLanguageButton = document.getElementById("translateBtn");
    const navEvents = document.getElementById("navEvents");
    const navStarsAndConstellations = document.getElementById("navStarsAndConstellations");
    const navStars = document.getElementById("navStars");
    const navConstellations = document.getElementById("navConstellations");
    const heading1 = document.getElementById("heading1");
    const heading2 = document.getElementById("heading2");
    const heading3 = document.getElementById("heading3");
    const heading4 = document.getElementById("heading4");
    const generate = document.getElementById("generate");
    const starChart = document.getElementById("starChart");
    const generateBtn = document.getElementById("generateBtn");
    const time = document.getElementById("time");
    const constellationsP = document.getElementById("constellationsP");
    const visibleConstellationsP = document.getElementById("visibleConstellationsP");
    const figcaption = document.getElementById("figcaption");
    const constellationsBySeasonsP = document.getElementById("constellationsBySeasonsP");
    const learnMore = document.getElementById("learnMore");



    const translations = {
        en: {
            cngLangButton: "translate",
            navEvents: "Events",
            navStarsAndConstellations: "Stars & Constellations",
            navStars: "Stars",
            navConstellations: "Constellations by seasons",
            heading1: "Constellations",
            heading2: "What are constellations?",
            heading3: "What constellations can you see in the night sky?",
            heading4: "Constellations by seasons",
            generate: "Generate",
            starChart: "Star Chart",
            generateBtn: "Generate!",
            time: "It may take 10-15 seconds to generate a star chart.",
            constellationsP: `There are a few different definitions of constellations, but many people think of
            constellations as
            a
            group of stars. The constellations you can see at night depend on your location on Earth and
            the
            time of
            year. Constellations were named after objects, animals, and people long ago. Astronomers today
            still
            use
            constellations to name stars and meteor showers.`,
            visibleConstellationsP: `The constellations you can see at night depend on the time of year. Earth orbits around the Sun once
            each year. Our view into space through the night sky changes as we orbit. So, the night sky
            looks
            slightly different each night because Earth is in a different spot in its orbit. The stars
            appear each
            night to move slightly west of where they were the night before.
            Your location on Earth also determines what stars and constellations you see, and how high they
            appear
            to rise in the sky. The Northern Hemisphere is always pointing in a different direction than the
            Southern Hemisphere. This means that stargazers in Australia, for example, get a slightly
            different view
            of the sky and can see a few different constellations than those in the United States.
            It can be a little confusing to picture how the night sky changes as we orbit the Sun. You can see
            how
            it all works in the illustration below.`,
            figcaption: `A chart showing some of the constellations that are visible from the Northern Hemisphere in
            different times of year. Credit: NASA/JPL-Caltech`,
            constellationsBySeasonsP: `Constellations are ever-changing patterns of stars that grace our night sky, varying with the
            seasons. From the wintry brilliance of Orion and Taurus to the summer's Cygnus and Lyra, these
            celestial arrangements have inspired cultures throughout history. Join us as we explore the
            constellations by season, delving into their rich history and captivating lore.`,
            learnMore: "Learn more"
        },
        bg: {
            cngLangButton: "преведи",
            navEvents: "Събития",
            navStarsAndConstellations: "Звезди и Съзвездия",
            navStars: "Звезди",
            navConstellations: "Съзвездия по сезони",
            heading1: "Съзвездия",
            heading2: "Какво представляват съзвездията?",
            heading3: "Какви съзвездия можете да видите на нощното небе?",
            heading4: "Съзвездия по сезони",
            generate: "Генерирай",
            starChart: "Звездна Карта",
            generateBtn: "Генерирай!",
            time: "Отнема около 10-15 секунди да се генерира.",
            constellationsP: `Има няколко различни определения за съзвездия, но много хора се сещат за съзвездия като група от звезди. Съзвездията, които можете да видите през нощта зависят от вашето местоположение на Земята и времето от годината. Съзвездията бяха наречени на предмети, животни и хора отдавна. Астрономите и днес използвайте съзвездия, за да назовавате звезди и метеорни потоци.`,
            visibleConstellationsP: `Съзвездията, които можете да видите през нощта, зависят от времето на годината. Земята обикаля около Слънцето веднъж годишно. Нашият поглед към космоса през нощното небе се променя, докато орбитираме. И така, нощното небе изглежда малко по-различно всяка вечер, защото Земята е на различно място в своята орбита. Звездите се появяват всяка вечер, за да се движат леко на запад от мястото, където са били предната нощ. Вашето местоположение на Земята също определя какви звезди и съзвездия виждате и колко високо изглеждат, че се издигат в небето. Северното полукълбо винаги сочи в различна посока от южното полукълбо. Това означава, че наблюдателите на звезди в Австралия например получават малко по-различен изглед на небето и могат да видят няколко различни съзвездия отколкото тези в Съединените щати. Може да е малко объркващо да си представим как нощното небе се променя, докато обикаляме около Слънцето. Можете да видите как работи всичко в илюстрацията по-долу.`,
            figcaption: "Диаграма, показваща някои от съзвездията, които се виждат от Северното полукълбо през по различно време на годината. Кредит: NASA/JPL-Caltech",
            constellationsBySeasonsP: `Съзвездията са постоянно променящи се шарки от звезди, които красят нашето нощно небе, вариращи според сезоните. От зимния блясък на Орион и Телец до Лебед и Лира през лятото, тези небесни подредби са вдъхновявали култури през цялата история. Присъединете се към нас, докато изследваме съзвездията по сезон, задълбочавайки се в тяхната богата история и завладяващо знание.`,
            learnMore: "Научи повече"
        },
    };

    changeLanguageButton.innerHTML = translations[currentLanguage].cngLangButton;
    navStarsAndConstellations.innerHTML = translations[currentLanguage].navStarsAndConstellations;
    navStars.innerHTML = translations[currentLanguage].navStars;
    navConstellations.innerHTML = translations[currentLanguage].navConstellations;
    heading1.innerHTML = translations[currentLanguage].heading1;
    heading2.innerHTML = translations[currentLanguage].heading2;
    heading3.innerHTML = translations[currentLanguage].heading3;
    heading4.innerHTML = translations[currentLanguage].heading4;
    generateBtn.innerHTML = translations[currentLanguage].generateBtn;
    navEvents.innerHTML = translations[currentLanguage].navEvents;
    generate.innerHTML = translations[currentLanguage].generate;
    starChart.innerHTML = translations[currentLanguage].starChart;
    time.innerHTML = translations[currentLanguage].time;
    constellationsP.innerHTML = translations[currentLanguage].constellationsP;
    visibleConstellationsP.innerHTML = translations[currentLanguage].visibleConstellationsP;
    figcaption.innerHTML = translations[currentLanguage].figcaption;
    constellationsBySeasonsP.innerHTML = translations[currentLanguage].constellationsBySeasonsP;
    learnMore.innerHTML = translations[currentLanguage].learnMore;
}

function generateStarChart() {
    let latitude = 43.2049178;
    let longitude = 23.5567589;
    let date = document.getElementById("dateInput").value;
    const constellationSelect = document.getElementById("constellationSelect");
    const selectedConstellation = constellationSelect.options[constellationSelect.selectedIndex].value;
    const closeButton = document.getElementById("closeButton");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;

            const data = {
                style: "navy",
                observer: {
                    latitude,
                    longitude,
                    date,
                },
                view: {
                    type: "constellation",
                    parameters: {
                        constellation: selectedConstellation,
                    },
                },
            };

            sendDataToAPI(data);
        }, function (error) {
            console.error("Geolocation error:", error);

            const data = {
                style: "navy",
                observer: {
                    latitude,
                    longitude,
                    date,
                },
                view: {
                    type: "constellation",
                    parameters: {
                        constellation: selectedConstellation,
                    },
                },
            };

            sendDataToAPI(data);
        });
    } else {
        const data = {
            style: "navy",
            observer: {
                latitude,
                longitude,
                date,
            },
            view: {
                type: "constellation",
                parameters: {
                    constellation: selectedConstellation,
                },
            },
        };

        sendDataToAPI(data);
    }
}

function sendDataToAPI(data) {
    fetch("https://api.astronomyapi.com/api/v2/studio/star-chart", {
        method: "POST",
        headers: {
            "Authorization":  btoa(`Basic 052bbf9f-94d8-4113-8ad1-9e325eb1f6b0:052bbf9f-94d8-4113-8ad1-9e325eb1f6b0`),
            "Content-Type": "application/json", // Set the content type to JSON
        },
        body: JSON.stringify(data), // Convert the data object to a JSON string
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseText => {
            showImage(responseText);
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

function showImage(responseText) {
    if (popupContainer.style.display === "none" || popupContainer.style.display === "") {
        popupContainer.style.display = "block";
        document.getElementById("popupImage").src = responseText.data.imageUrl;
    } else {
        popupContainer.style.display = "none";
    }
    setTimeout(function () {
        closeButton.style.display = "block";
    }, 5000);
    closeButton.addEventListener("click", function () {
        popupContainer.style.display = "none";
    });
}

