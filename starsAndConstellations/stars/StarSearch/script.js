let starName = document.getElementById('name');
let starConstellation = document.getElementById('constellation');
let starDistance = document.getElementById('distance');
let starSpectralClass = document.getElementById('spectralClass');
var urlParams = new URLSearchParams(window.location.search);
var value = urlParams.get('value');
const apiKeyStars = 'SRIwQNPeQVP2YX3/42hjGA==f3SP2fo4djU6Tg21';
fetch(`https://api.api-ninjas.com/v1/stars?name=${value}`, {
    method: 'GET',
    headers: {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/json',
    }
})
    .then(response => {
        if (!response.ok) {
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
    starName.innerHTML = value;
    starConstellation.innerHTML = data[0].constellation;
    starDistance.innerHTML = data[0].distance_light_year;
    starSpectralClass.innerHTML = data[0].spectral_class;
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
