let starName = document.getElementById('name');
let starConstellation = document.getElementById('constellation');
let starDistance = document.getElementById('distance');
let starSpectralClass = document.getElementById('spectralClass');
var urlParams = new URLSearchParams(window.location.search);
var value = urlParams.get('value');
let main = document.getElementById('content');
let h1Error = document.getElementById('error')
const apiKeyStars = 'tV2McOe2kgdAkVncwvVDeA==aN9tqSIW2Er3B4ru';
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
        starConstellation.innerHTML = `Съзвездие: ${data[0].constellation}`;
        starDistance.innerHTML = `Разстояние в светлинни години: ${data[0].distance_light_year}`;
        starSpectralClass.innerHTML = `Спектрален клас: ${data[0].spectral_class}`;
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
