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
            "Authorization": "Basic NWNkMzhjNDYtNDVhMC00ZmZkLTkyMTAtMTVhYjUzZWZmNDIyOmM2ZDAxNmI1MzFmZmVjZjJiMDdlNGQ4OTgzNDQ5ZDdjNzJjYmVmMTJiYWRhYjFkOGRmMDAyNDUwNDNiYjE4MGQzNTMyNGFhN2VmNjcyNTllY2NiZDRkNTdjNDEyZTAwYzFjODkxZjliYzI3NWFiMGQ0ZjlmMTAwOTllNWQ4MzVlZTUzYjhjNWI5MmZjZTQyZWI0YWRkMzgyNTdhNWNmNjFlODlmNjU4ZDUyZjg3YmU5M2ZiOTRhZTc2ODJjM2VlYWQ3NTgzMTU1MTUyNTVhMmVlNjkxMThiNjRmOWUyZjhk",
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