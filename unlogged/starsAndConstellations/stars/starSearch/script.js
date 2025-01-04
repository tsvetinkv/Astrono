let urlParams = window.location.search;
const indexOfEqual = urlParams.indexOf('=');
const value = urlParams.slice(indexOfEqual + 1);

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
    if (data.length == 0) {
        const h1Error = document.getElementById('error');
        const main = document.getElementById('main');
        h1Error.style.height = "86vh";
        h1Error.style.display = "flex";
        h1Error.style.alignItems = "center";
        h1Error.style.justifyContent = "center";
        h1Error.style.fontSize = "3vw";
        main.style.display = "none";
    } else {
        const ukFlex = document.querySelector('.uk-flex');
        if (innerWidth <= 850) {
            ukFlex.style.display = "block";
        }
        window.addEventListener("resize", () => {
            if (innerWidth <= 850) {
                ukFlex.style.display = "block";
            }else{
                ukFlex.style.display = "flex";
            }
        });
        let starName = document.getElementById("name");
        let starConstellation = document.getElementById("constellation");
        let starDistance = document.getElementById("distance");
        let starSpectralClass = document.getElementById("spectralClass");

        starName.innerHTML = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        starConstellation.innerHTML = data[0].constellation;
        starDistance.innerHTML = data[0].distance_light_year;
        starSpectralClass.innerHTML = data[0].spectral_class;
    }
}



function searchNASAImagesForStars() {
    let apiUrl = "https://images-api.nasa.gov/search?q=" + value;

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
    let apiUrl = "https://images-api.nasa.gov/search?q=" + constellation;

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