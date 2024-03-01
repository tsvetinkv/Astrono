const elevationLearnMore = document.getElementById("elevationLearnMore");
const gravityLearnMore = document.getElementById("gravityLearnMore");
const hydrogenLearnMore = document.getElementById("hydrogenLearnMore");
const roughnessLearnMore = document.getElementById("roughnessLearnMore");

function fetchTranslationsForPopup(func) {
    let currentLanguage = window.currentLanguage;
    const fetchUrl = `https://astronoapi.azurewebsites.net/Translations/GetAllTranslations/4?language=${currentLanguage}`;
    fetch(fetchUrl, {
        method: 'GET',
        headers: {
            accept: "application/json",
        }
    })
        .then(response => {
            return response.json()
        })
        .then(data => {
            func(data);
        })
        .catch(error => console.error('Error:', error))
}

elevationLearnMore.addEventListener("click", () => {
    const typeMoon = {
        name: "",
        img: "https://moon.nasa.gov/system/internal_resources/details/original/108_Copernicus_800x600.jpg",
        figcaption: "",
        description: ""
    };

    fetchTranslationsForPopup(translateTxt)
    function translateTxt(translations) {
        translations.forEach(t => {
            if (t.id == 206) {
                typeMoon.name = t.text;
            }
            if (t.id == 228) {
                typeMoon.figcaption = t.text;
            }
            if (t.id == 234) {
                typeMoon.description = t.text;
            }
        });
        displayPopup(typeMoon)
    }
});

gravityLearnMore.addEventListener("click", () => {
    const typeMoon = {
        name: "",
        img: "https://moon.nasa.gov/system/internal_resources/details/original/106_711351main_Zuber-3-pia16587-43_800-600.jpg",
        figcaption: "",
        description: ""
    };

    fetchTranslationsForPopup(translateTxt)
    function translateTxt(translations) {
        translations.forEach(t => {
            if (t.id == 238) {
                typeMoon.name = t.text;
            }
            if (t.id == 237) {
                typeMoon.figcaption = t.text;
            }
            if (t.id == 239) {
                typeMoon.description = t.text;
            }
        });
        displayPopup(typeMoon)
    }
});

hydrogenLearnMore.addEventListener("click", () => {
    const typeMoon = {
        name: "",
        img: "https://moon.nasa.gov/system/internal_resources/details/original/110_Water_Ice_800x600.jpg",
        figcaption: "",
        description: ""
    };

    fetchTranslationsForPopup(translateTxt)
    function translateTxt(translations) {
        translations.forEach(t => {
            if (t.id == 241) {
                typeMoon.name = t.text;
            }
            if (t.id == 240) {
                typeMoon.figcaption = t.text;
            }
            if (t.id == 242) {
                typeMoon.description = t.text;
            }
        });
        displayPopup(typeMoon)
    }
});

roughnessLearnMore.addEventListener("click", () => {
    const typeMoon = {
        name: "",
        img: "https://moon.nasa.gov/system/internal_resources/details/original/111_555516main_053111a_800x600.jpg",
        figcaption: "",
        description: ""
    };
    
    fetchTranslationsForPopup(translateTxt)
    function translateTxt(translations) {
        translations.forEach(t => {
            if (t.id == 244) {
                typeMoon.name = t.text;
            }
            if (t.id == 243) {
                typeMoon.figcaption = t.text;
            }
            if (t.id == 245) {
                typeMoon.description = t.text;
            }
        });
        displayPopup(typeMoon)
    }
});

function displayPopup(typeMoon) {
    const popupContent = `
    <style>
        body {
            background: linear-gradient(0deg, rgba(5,26,70,1) 0%, rgba(43,2,85,1) 100%);
            background-repeat: no-repeat;
            color: #EDDCFF;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            text-align:center;
        }  
        img{
        width: 80vw;
        heiht: auto;
        } 
        p{
        width: 80vw;
        }
        .center{
            display: flex;
            justify-content: center;
        }
    </style>
    <figure>
    <img src="${typeMoon.img}" />
    <figcaption>
    <div class="center">
        <p><em>${typeMoon.figcaption}</em></p>
    </div>
    </figcaption>
    </figure>
    <h2>${typeMoon.name}</h2>
    <div class="center">
        <p>${typeMoon.description}</p>
    </div>
    `;

    // Open a new window with the content
    const popupWindow = window.open("", "EventPopup", "width=600,height=450");
    popupWindow.document.body.innerHTML = popupContent;
}
