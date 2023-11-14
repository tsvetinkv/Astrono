const months = [
    "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
    "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
];

const eventPhotos = {
    "Full Moon": "fullMoon.jpg",
    "New Moon": "newMoon.jpg",
    "Solar Eclipse": "solarEclipse.jpg",
    "Lunar Eclipse": "lunarEclipse.jpg",
    "Meteor Shower": "meteorShower.jpg",
};

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

        const keywords = ["eclipse", "moon", "meteor shower"];
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
    return date.toLocaleDateString("en-US", options);
}

function displayEvents(parsedEvents) {
    const lineOfEvents = document.querySelector(".lineOfEvents");

    // Set the current month text
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();

    // Loop through each month
    for (let i = currentMonth; i < months.length; i++) {
        // Create a new div for the month container
        const monthContainer = document.createElement("div");
        monthContainer.classList.add("monthContainer");

        // Create a new div for the month name
        const monthName = document.createElement("h2");
        monthName.classList.add("monthName");
        monthName.textContent = months[i];

        // Append the month name to the month container
        monthContainer.appendChild(monthName);
        const currentMonthEvents = parsedEvents.filter(event => event.startDate.getMonth() === i);
        // Loop through events for the current month
        currentMonthEvents.forEach(event => {

            const eventName = event.name;
            const eventPhotoFileName = findPhotoURLByKeywords(eventName);
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
        });
        if (monthContainer.childElementCount > 1) {
            lineOfEvents.appendChild(monthContainer);
            lineOfEvents.removeChild(lineOfEvents.children[0]);
        }
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
        <p>Description: ${event.description}</p>
        </div>
    `;

    // Open a new window with the content
    const popupWindow = window.open("", "EventPopup", "width=600,height=420");
    popupWindow.document.body.innerHTML = popupContent;
}



fetchICalendarEventData();