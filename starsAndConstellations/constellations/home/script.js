const submitButton = document.getElementById("submit")
submitButton.addEventListener("click", function(){
    generateStarChart()
});
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
            "Authorization": "Basic YmQ2MzdmM2UtMGM2ZC00MjljLWE2YWEtNTRhZTY0NmNkYjlkOmYyN2E0YmNkZjc4YTQ3N2E1YTFhOGZkYWNkNzU1ZjBhYjI3YWZiMjEzYjRkYzg3Njk2YjQwMDRmZjczNjYwNWZiZTE3M2Y1ODZkNTAyZDcxNGMxOGYwZDcxZTQyMGZhNzFmNzVhNjk5NTY0YmZiNjBhM2Q1ZmQ1MGUwYTEzYTQ0NzBmNzU1YTNkZjIwYzBjNmIyOWZiNjEyODFjNjc1MzEyYTYwOGI1MWM0MWQ5YzMwYWQ2ZGM1MmVhMDI4MmExYjgzNmRmMjEwNzAwMjU2Y2Q0Mzk4MGNjMThhOTM2NWVh",
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
