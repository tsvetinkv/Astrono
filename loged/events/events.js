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
fetchEvents();
let eventPhotoFileName;
let events;
const section = document.querySelector(".events");
const translateBtns = document.querySelectorAll(".translate");
for (let i = 0; i < translateBtns.length; i++) {
    translateBtns[i].addEventListener('click', function () {
        fetchEvents();
    });
}
function fetchEvents(){
    fetch('./eventsCalendar.json', {
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

}

function formatDate(date) {
    const options = { month: "long", day: "numeric" };
    if (currentLanguage === "Bg") {
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

        if (currentLanguage == 'En') {
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
            if (currentLanguage == 'En') {
                eventName = event.name;
            } else {
                eventName = event.translatedName;
            }
            createEventCard(event, eventName, lineOfEvents);
        });

    }

}

function createEventCard(event, eventName, lineOfEvents) {
    console.log(eventName)
    if (eventName.includes("Meteor Shower") || eventName.includes("Метеоритен дъжд")) {
        eventPhotoFileName = eventPhotos["Meteor Shower"];
    } else if (eventName.includes("Conjunction") || eventName.includes("Съвпад")) {
        eventPhotoFileName = eventPhotos["Conjunction"];
    } else if (eventName.includes("Moon") || eventName.includes("Лун")) {
        if (eventName.includes("New Moon")) {
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
    }else if (eventName.includes("Solar Eclipse") || eventName.includes("слънчево затъмнение")) {
        eventPhotoFileName = eventPhotos["Solar Eclipse"];
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
    if (currentLanguage === "En") {
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