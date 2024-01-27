const monthsEn = [
    "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
    "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
];

const monthsBg = [
    "ЯНУАРИ", "ФЕВРУАРИ", "МАРТ", "АПРИЛ", "МАЙ", "ЮНИ",
    "ЮЛИ", "АВГУСТ", "СЕПТЕМВРИ", "ОКТОМВРИ", "НОЕМВРИ", "ДЕКЕМВРИ"
];

const eventPhotos = {
    "Full Moon": "fullMoon.jpg",
    "New Moon": "newMoon.jpg",
    "Solar Eclipse": "solarEclipse.jpg",
    "Lunar Eclipse": "lunarEclipse.jpg",
    "Meteor Shower": "meteorShower.jpg",
    "Moon": "moon.jpg",
    "Comet": "comet.jpg",
    "Conjunction": "moonConjunction.jpg"
};

let eventPhotoFileName;
let translateBtn = document.querySelectorAll(".translate");
let currentLanguage = window.currentLanguage;


function switchLanguage() {
    changeLanguage();
    currentLanguage = window.currentLanguage;
}
let events;
const section = document.querySelector(".events");


fetch('https://apiastrono.bsite.net/Events/GetAllEvents', {
    method: 'GET',
    headers: {
        accept: "application/json",
    }
})
    .then(response => {
        return response.json()
    })
    .then(data => {
        events = data;
        displayEvents();

    })
    .catch(error => console.error('Error:', error))

function formatDate(date) {
    const options = { month: "long", day: "numeric" };
    if (currentLanguage === "bg") {
        return date.toLocaleDateString("bg-BG", options);
    } else {
        return date.toLocaleDateString("en-US", options)
    }
}

function displayEvents() {
    section.innerHTML = "";

    // Set the current month text
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();

    for (let i = currentMonth; i <= monthsEn.length; i++) {
        const monthName = document.createElement("h2");
        monthName.classList.add("monthName");
        const lineOfEvents = document.createElement("div");
        lineOfEvents.classList.add("lineOfEvents");

        if (currentLanguage == 'en') {
            monthName.textContent = monthsEn[i];
        } else {
            monthName.textContent = monthsBg[i];
        }
        lineOfEvents.appendChild(monthName);

        const currentMonthEvents = events.filter(event => {
            const date = new Date(event.startDate);
            const month = date.getMonth();
            return month === i; // Return true if it's the current month
        });

        // Loop through events for the current month
        currentMonthEvents.forEach(event => {
            let eventName;
            if (currentLanguage == 'en') {
                eventName = event.name;
            } else {
                eventName = event.translatedName;
            }
            createEventCard(event, eventName, lineOfEvents);
        });

    }

}

function createEventCard(event, eventName, lineOfEvents) {

    if (eventName.includes("Meteor Shower") || eventName.includes("Метеоритен дъжд")) {
        eventPhotoFileName = eventPhotos["Meteor Shower"];
    } else if (eventName.includes("Moon") || eventName.includes("Лун")) {
        if (eventName.includes("Conjunction") || eventName.includes("Съвпад")) {
            eventPhotoFileName = eventPhotos["Conjunction"];
        } else if (eventName.includes("New Moon")) {
            eventPhotoFileName = eventPhotos["New Moon"];
        } else if (eventName.includes("Full Moon")) {
            eventPhotoFileName = eventPhotos["Full Moon"];
        } else {
            eventPhotoFileName = eventPhotos["Moon"];
        }
    } else if (eventName.includes("Новолуние")) {
        eventPhotoFileName = eventPhotos["New Moon"];
    } else if (eventName.includes("Пълнолуние")) {
        eventPhotoFileName = eventPhotos["Full Moon"];
    } else if (eventName.includes("Comet") || eventName.includes("Кометата")) {
        eventPhotoFileName = eventPhotos["Comet"];
    } else if (eventName.includes("Lunar Eclipse") || eventName.includes("лунно затъмнение")) {
        eventPhotoFileName = eventPhotos["Lunar Eclipse"];
    }
    else {
        eventPhotoFileName = eventPhotos[eventName];
    }
    if (eventPhotoFileName) {
        const eventCard = document.createElement("div");
        eventCard.classList.add("eventCard");
        const h3 = document.createElement("h3");
        h3.id = "nameOfTheEvent";
        h3.textContent = eventName;
        const img = document.createElement("img");
        img.classList.add("eventPhoto");
        img.src = `./images/${eventPhotoFileName}`;
        img.alt = eventName;

        const dateOfTheEvent = document.createElement("p");
        dateOfTheEvent.id = "dateOfTheEvent";
        dateOfTheEvent.textContent = formatDate(new Date(event.startDate));

        eventCard.addEventListener("click", () => {
            displayPopup(event);
        });

        eventCard.appendChild(h3);
        eventCard.appendChild(img);
        eventCard.appendChild(dateOfTheEvent);
        lineOfEvents.appendChild(eventCard);
        section.appendChild(lineOfEvents);

    }
}

function displayPopup(event) {
    let description;
    let name
    if (currentLanguage === "en") {
        description = event.description;
        name = event.name;
    } else {
        description = event.translatedDescription;
        name = event.translatedName;
    }
    const popupContent = `
        <style>
            body {
                background: linear-gradient(0deg, rgba(5,26,70,1) 0%, rgba(43,2,85,1) 100%);
                background-repeat: no-repeat;
                color: #EDDCFF;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                text-align:center;
            }   
            p{
                width: 80%;
            }
            .center{
                display: flex;
                justify-content: center;
            }
        </style>
            <h2>${name}</h2>
            <div class="center">
            <p>${formatDate(new Date(event.startDate))} - ${formatDate(new Date(event.endDate))}</p>
            </div>
            <div class="center">
            <p>${description}</p>
            </div>
        `;

    const popupWindow = window.open("", "EventPopup", "width=600,height=350");
    popupWindow.document.body.innerHTML = popupContent;
}

translate();

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
    const sAndCNav = document.getElementById("hoveredNav");
    const moonNav = document.getElementById("moonNav");
    const starBasics = document.getElementById("starBasics");
    const typesStars = document.getElementById("typesStars");
    const multipleStarSystems = document.getElementById("multipleStarSystems");
    const constellations = document.getElementById("constellations");
    const constellationsBySeasons = document.getElementById("constellationsBySeasons");
    const starsAndConstellationsS = document.getElementById("starsAndConstellationsS");
    const starBasicsS = document.getElementById("starBasicsS");
    const typesStarsS = document.getElementById("typesStarsS");
    const multipleStarSystemsS = document.getElementById("multipleStarSystemsS");
    const constellationsS = document.getElementById("constellationsS");
    const constellationsBySeasonsS = document.getElementById("constellationsBySeasonsS");
    const moonS = document.getElementById("moonS");
    const title = document.getElementById("title");
    const p = document.getElementById("p");
    let htmlElements = [sAndCNav, moonNav, starBasics, typesStars, multipleStarSystems, constellations, constellationsBySeasons, starsAndConstellationsS, starBasicsS, typesStarsS, multipleStarSystemsS, constellationsS, constellationsBySeasonsS, moonS];
    translations.forEach(t => {
        if (t.page == 17) {
            if (t.en != "EVENTS" && t.en != "ABOUT") {
                for (let i = 0; i < htmlElements.length; i++) {
                    if (t.en == htmlElements[i].innerHTML || t.bg == htmlElements[i].innerHTML) {
                        if (currentLanguage == "en") {
                            htmlElements[i].innerHTML = t.en;
                        } else if (currentLanguage == "bg") {
                            htmlElements[i].innerHTML = t.bg;
                        }
                    }
                }
            }
        } else if (t.page == 2) {
            let elements = [title, p];
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

function translate() {
    for (var i = 0; i < translateBtn.length; i++) {
        translateBtn[i].addEventListener('click', function () {
            switchLanguage();
            fetchTranslations();
            displayEvents();
        });
    }
}