let currentLanguage = window.currentLanguage;
translate();
function switchLanguage() {
    changeLanguage();
    currentLanguage = window.currentLanguage;
    translate();
}

const monthTranslations = {
    "JANUARY": { en: "JANUARY", bg: "ЯНУАРИ" },
    "FEBRUARY": { en: "FEBRUARY", bg: "ФЕВРУАРИ" },
    "MARCH": { en: "MARCH", bg: "МАРТ" },
    "APRIL": { en: "APRIL", bg: "АПРИЛ" },
    "MAY": { en: "MAY", bg: "МАЙ" },
    "JUNE": { en: "JUNE", bg: "ЮНИ" },
    "JULY": { en: "JULY", bg: "ЮЛИ" },
    "AUGUST": { en: "AUGUST", bg: "АВГУСТ" },
    "SEPTEMBER": { en: "SEPTEMBER", bg: "СЕПТЕМВРИ" },
    "OCTOBER": { en: "OCTOBER", bg: "ОКТОМВРИ" },
    "NOVEMBER": { en: "NOVEMBER", bg: "НОЕМВРИ" },
    "DECEMBER": { en: "DECEMBER", bg: "ДЕКЕМВРИ" },

};

const months = [
    "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
    "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
];

const eventPhotos = {
    "Пълнолуние": "fullMoon.jpg",
    "Full Moon": "fullMoon.jpg",
    "Новолуние": "newMoon.jpg",
    "New Moon": "newMoon.jpg",
    "Слънчево затъмнение": "solarEclipse.jpg",
    "Solar Eclipse": "solarEclipse.jpg",
    "Лунно затъмнение": "lunarEclipse.jpg",
    "Lunar Eclipse": "lunarEclipse.jpg",
    "Метеоритен дъжд": "meteorShower.jpg",
    "Meteor Shower": "meteorShower.jpg"
};


const eventTranslations = {
    "Full Moon": {
        en: "Full Moon",
        bg: "Пълнолуние"
    },
    "New Moon": {
        en: "New Moon",
        bg: "Новолуние"
    },
    "Lunar Eclipse": {
        en: "Lunar Eclipse",
        bg: "Лунно затъмнение"
    },
    "Solar Eclipse": {
        en: "Solar Eclipse",
        bg: "Слънчево затъмнение"
    },
    "Meteor Shower": {
        en: "Meteor Shower",
        bg: "Метеоритен дъжд"
    },
};

const keywords = ["затъмнение", "луние", "Метеоритен дъжд", "Eclipse", "Moon", "Meteor Shower"];

function translate(){
    const changeLanguageButton = document.getElementById("translateBtn");
    const navStarsAndConstellations = document.getElementById("navStarsAndConstellations");
    const navStars = document.getElementById("navStars");
    const navConstellations = document.getElementById("navConstellations");
    const heading1 = document.getElementById("heading1");
    const p = document.getElementById("p");
    
    const translations = {
        en: {
            cngLangButton: "translate",
            navStarsAndConstellations: "Stars & Constellations",
            navStars: "Stars",
            navConstellations: "Constellations",
            heading1: "Are you interested in astronomy?",
            p: "If so, then scroll down to learn what events are coming and information about them."
        },
        bg: {
            cngLangButton: "преведи",
            navStarsAndConstellations: "Звезди и Съзвездия",
            navStars: "Звезди",
            navConstellations: "Съзвездия",
            heading1: "Заинтересован ли си в предстоящите астрономически събития?",
            p: "Ако е така скролни надолу за да научиш кои събития предстоят и научи повече за тях."
        },
    };
    
    changeLanguageButton.innerHTML = translations[currentLanguage].cngLangButton;
    navStarsAndConstellations.innerHTML = translations[currentLanguage].navStarsAndConstellations;
    navStars.innerHTML = translations[currentLanguage].navStars;
    navConstellations.innerHTML = translations[currentLanguage].navConstellations;
    heading1.innerHTML = translations[currentLanguage].heading1;
    p.innerHTML = translations[currentLanguage].p;
    fetchICalendarEventData();
}

function fetchICalendarEventData() {
    fetch('./astronomy-calendar.ical')
        .then(response => response.text())
        .then(calendarContent => {
            // Split the content into individual event blocks
            const eventBlocks = calendarContent.split("BEGIN:VEVENT");
            eventBlocks.shift(); // Remove the empty element at the beginning

            // Initialize an array to hold parsed event objects
            const parsedEvents = [];

            // Process each event block
            eventBlocks.forEach(eventBlock => {
                // Extract DESCRIPTION field from the event block
                const descriptionMatch = eventBlock.match(/DESCRIPTION:(.*?)(?=(\r?\n[A-Z]))/s);
                const description = descriptionMatch ? descriptionMatch[1].trim() : "";

                // Extract other relevant data for each event
                const eventData = {};
                eventBlock.split(/\r?\n/).forEach(line => {
                    const [key, ...values] = line.split(":");
                    eventData[key] = values.join(":");
                });

                const event = {
                    name: eventData.SUMMARY,
                    language: eventData.LANGUAGE,
                    isMeteor: eventData.ISMETEOR,
                    startDate: parseICalDate(eventData['DTSTART;VALUE=DATE']),
                    endDate: parseICalDate(eventData['DTEND;VALUE=DATE']),
                    description: description
                };

                parsedEvents.push(event);
            });

            const currentDate = new Date();
            const currentMonth = currentDate.getMonth();
            const currentYear = currentDate.getFullYear();

            filterEvents(parsedEvents, currentMonth, currentYear);

            const remainingMonths = months.slice(currentMonth);

            remainingMonths.forEach((month, index) => {
                // Calculate the month index for the events array
                const eventsMonthIndex = (currentMonth + index) % 12;
                const currentMonthEvents = parsedEvents.filter(event => {
                    const eventMonth = event.startDate.getMonth();
                    const eventYear = event.startDate.getFullYear();

                    return eventMonth === eventsMonthIndex && eventYear === currentYear;
                });

                displayEvents(currentMonthEvents);
            });
        })
        .catch(error => {
            console.error("Error fetching or processing calendar data:", error);
        });
}

function parseICalDate(dateString) {
    const year = parseInt(dateString.substr(0, 4));
    const month = parseInt(dateString.substr(4, 2)) - 1; // Month is 0-based in Date object
    const day = parseInt(dateString.substr(6, 2));
    return new Date(year, month, day);
}

function findPhotoURLByKeywords(eventName) {
    const lowerCaseEventName = eventName.toLowerCase();

    for (const keyword in eventPhotos) {
        if (lowerCaseEventName.includes(keyword.toLowerCase())) {
            return eventPhotos[keyword];
        }
    }

    return null;
}
function filterEvents(parsedEvents, currentMonth, currentYear) {
    parsedEvents.filter(event => {
        const eventMonth = event.startDate.getMonth();
        const eventYear = event.startDate.getFullYear();

        const eventContainsKeywords = keywords.some(keyword => event.name.toLowerCase().includes(keyword.toLowerCase()));

        if (eventContainsKeywords) {
            const eventName = event.name;
            document.getElementById("nameOfTheEvent").textContent = eventName;

            // Find the matching photo URL based on the keywords
            const eventPhotoURL = findPhotoURLByKeywords(eventName);

            const eventPhotoElement = document.querySelector(".eventPhoto");
            if (eventPhotoURL) {
                eventPhotoElement.src = `./images/${eventPhotoURL}`;
                eventPhotoElement.alt = eventName;
            }
        }

        return eventMonth === currentMonth && eventYear === currentYear && eventContainsKeywords;
    });
}

function formatDate(date) {
    const options = { month: "long", day: "numeric" };
    if (currentLanguage === "bg") {
        return date.toLocaleDateString("bg-BG", options);
    } else {
        return date.toLocaleDateString("en-US", options)
    }

}

function displayEvents(parsedEvents) {
    const lineOfEvents = document.querySelector(".lineOfEvents");

    // Set the current month text
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();

    // Loop through each month
    for (let i = currentMonth; i <= months.length; i++) {
        // Create a new div for the month container
        const monthContainer = document.createElement("div");
        monthContainer.classList.add("monthContainer");

        // Create a new div for the month name
        const monthName = document.createElement("h2");
        monthName.classList.add("monthName");

        // Check if the translated month exists for the current language
        if (monthTranslations[months[i]] && monthTranslations[months[i]][currentLanguage]) {
            monthName.textContent = monthTranslations[months[i]][currentLanguage];
        } else {
            // Use the default month name if translation is not available
            monthName.textContent = months[i];
        }

        // Append the month name to the month container
        monthContainer.appendChild(monthName);
        const currentMonthEvents = parsedEvents.filter(event => event.startDate.getMonth() === i && event.language === currentLanguage);
        // Loop through events for the current month
        currentMonthEvents.forEach(event => {
            if (event.isMeteor) {
                let eventName = event.name.trim();
                createEventCard(event, eventName, monthContainer);
            } else {
                const eventName = eventTranslations[event.name]?.[currentLanguage];
                if (eventName) {
                    createEventCard(event, eventName, monthContainer);
                }
            }

        });

        if (lineOfEvents.childElementCount > 1) {
            lineOfEvents.appendChild(monthContainer);
            lineOfEvents.removeChild(lineOfEvents.children[0]);
        }
    }
}


function createEventCard(event, eventName, monthContainer) {
    if (eventName.includes("Meteor Shower")) {
        eventPhotoFileName = eventPhotos["Meteor Shower"];
    } else if (eventName.includes("Метеоритен дъжд")) {
        eventPhotoFileName = eventPhotos["Метеоритен дъжд"];
    } else {
        eventPhotoFileName = eventPhotos[eventName];
    }
    if (eventPhotoFileName) {
        // Create a new event card element
        const eventCard = document.createElement("div");
        eventCard.classList.add("eventCard");

        // Update the content of the new event card
        const h3 = document.createElement("h3");
        h3.id = "nameOfTheEvent";
        h3.textContent = eventName;
        const img = document.createElement("img");
        img.classList.add("eventPhoto");
        img.src = `./images/${eventPhotoFileName}`;
        img.alt = eventName;

        const dateOfTheEvent = document.createElement("p");
        dateOfTheEvent.id = "dateOfTheEvent";
        dateOfTheEvent.textContent = formatDate(event.startDate);

        eventCard.addEventListener("click", () => {
            displayPopup(event);
        });

        // Append the new event card to the current month's container
        eventCard.appendChild(h3);
        eventCard.appendChild(img);
        eventCard.appendChild(dateOfTheEvent);
        monthContainer.appendChild(eventCard);
    }
}
function displayPopup(event) {

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
        <h2>${event.name}</h2>
        <div class="center">
        <p>${formatDate(event.startDate)} - ${formatDate(event.endDate)}</p>
        </div>
        <div class="center">
        <p>${event.description}</p>
        </div>
    `;

    // Open a new window with the content
    const popupWindow = window.open("", "EventPopup", "width=600,height=450");
    popupWindow.document.body.innerHTML = popupContent;
}
fetchICalendarEventData();