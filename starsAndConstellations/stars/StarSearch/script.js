let starName = document.getElementById('name');
let starConstellation = document.getElementById('constellation');
let starDistance = document.getElementById('distance');
let starSpectralClass = document.getElementById('spectralClass');
var urlParams = new URLSearchParams(window.location.search);
var value = urlParams.get('value');
let main = document.getElementById('content');
let h1Error = document.getElementById('error');

function translate() {
    const changeLanguageButton = document.getElementById("translateBtn");
    const navEvents = document.getElementById("navEvents");
    const navStarsAndConstellations = document.getElementById("navStarsAndConstellations");
    const navStars = document.getElementById("navStars");
    const navConstellations = document.getElementById("navConstellations");
    const figcaption1 = document.getElementById("figcaption1");
    const figcaption2 = document.getElementById("figcaption2");
    const tooltip1 = document.getElementById("tooltip1");
    const tooltip2 = document.getElementById("tooltip2");
    const tooltip3 = document.getElementById("tooltip3");
    const starConstellationPlaceholder = document.getElementById("starConstellationPlaceholder");
    const starDistancePlaceholder = document.getElementById("starDistancePlaceholder");
    const starSpectralClassPlaceholder = document.getElementById("starSpectralClassPlaceholder");

    const translations = {
        en: {
            cngLangButton: "translate",
            navEvents: "Events",
            navStarsAndConstellations: "Stars & Constellations",
            navConstellations: "Constellations",
            navStars: "Stars",
            figcaption1: "Image for the star from NASA image library",
            figcaption2: "Image for the constellation from NASA image library",
            constellation: "Constellation:",
            tooltip1: "a group of stars that forms an imaginary outline",
            distance: "Distance in light years:",
            tooltip2: "A light year is about 5.88 trillion miles.",
            spectralClass: "Spectral class:",
            tooltip3: "Stars classification by temperature, color and size."

        },
        bg: {
            cngLangButton: "преведи",
            navEvents: "Събития",
            navStarsAndConstellations: "Звезди и Съзвездия",
            navConstellations: "Съзвездия",
            navStars: "Звезди",
            figcaption1: "Снимка на звездата от библиотеката със снимки на НАСА",
            figcaption2: "Снимка на съзвездието  от библиотеката със снимки на НАСА",
            constellation: "Съзвездие:",
            tooltip1: "Група от звезди, която образува въображаем контур",
            distance: "Разстояние в светлинни години:",
            tooltip2: "1 светлинна година = 9 460 730 472 580,8 км.",
            spectralClass: "Спектрален клас:",
            tooltip3: "Класификация на звездите по температура, цвят и размер."
        },
    };
    changeLanguageButton.innerHTML = translations[currentLanguage].cngLangButton;
    navEvents.innerHTML = translations[currentLanguage].navEvents;
    navStarsAndConstellations.innerHTML = translations[currentLanguage].navStarsAndConstellations;
    navConstellations.innerHTML = translations[currentLanguage].navConstellations;
    navStars.innerHTML = translations[currentLanguage].navStars;
    figcaption1.innerHTML = translations[currentLanguage].figcaption1;
    figcaption2.innerHTML = translations[currentLanguage].figcaption2;
    tooltip1.innerHTML = translations[currentLanguage].tooltip1;
    tooltip2.innerHTML = translations[currentLanguage].tooltip2;
    tooltip3.innerHTML = translations[currentLanguage].tooltip3;
    starConstellationPlaceholder.innerHTML = translations[currentLanguage].constellation;
    starDistancePlaceholder.innerHTML = translations[currentLanguage].distance;
    starSpectralClassPlaceholder.innerHTML = translations[currentLanguage].spectralClass;
}

const apiKeyStars = 'SRIwQNPeQVP2YX3/42hjGA==f3SP2fo4djU6Tg21';
fetch(`https://api.api-ninjas.com/v1/stars?name=${value}`, {
    method: 'GET',
    headers: {
        'X-Api-Key': apiKeyStars,
        'Content-Type': 'application/json',
    }
})
    .then(response => {
        if (!response.ok) {
            error();
            throw new Error(`Request failed with status: ${response.status}`);
        }
        return response.json();
    })
    .then(result => {
        displayInfo(result);
        searchNASAImagesForStars();
        searchNASAImagesForConstellation(result[0].constellation);
    })
    .catch(error => {
        console.error('Error: ', error);
    });

function displayInfo(data) {
    if (data.length === 0) {
        h1Error.style.height = "86vh";
        h1Error.style.display = "flex";
        h1Error.style.alignItems = "center";
        h1Error.style.justifyContent = "center";
        h1Error.style.fontSize = "3vw";
        h1Error.innerHTML = "Няма такава звезда в списъка";
        main.style.display = "none";
    } else {
        starName.innerHTML = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        starConstellation.innerHTML = data[0].constellation;
        starDistance.innerHTML = data[0].distance_light_year;
        starSpectralClass.innerHTML = data[0].spectral_class;
    }
}



function searchNASAImagesForStars() {
    let keyword = value;
    let apiUrl = "https://images-api.nasa.gov/search?q=" + keyword;

    fetch(apiUrl)
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(function (data) {
            displayStarImage(data);
        })
        .catch(function (error) {
            console.error("There was a problem with the fetch operation:", error);
        });
}
function displayStarImage(data) {
    let resultsContainer = document.getElementById("star");
    resultsContainer.src = data.collection.items[3].links[0].href;
}
function searchNASAImagesForConstellation(constellation) {
    let keyword = constellation;
    let apiUrl = "https://images-api.nasa.gov/search?q=" + keyword;

    fetch(apiUrl)
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(function (data) {
            displayConstellationImage(data);
        })
        .catch(function (error) {
            console.error("There was a problem with the fetch operation:", error);
        });
}
function displayConstellationImage(data) {
    let resultsContainer = document.getElementById("constellationImg");
    resultsContainer.src = data.collection.items[1].links[0].href;
}
let currentLanguage = window.currentLanguage;
translate();
function switchLanguage() {
    changeLanguage();
    currentLanguage = window.currentLanguage;
    translate();
}