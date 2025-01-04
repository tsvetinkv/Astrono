function chekIfNotNull(page, language) {
    if (page != null) {
        // fetchTranslations(page, language);
        translateTxt(page, language);
    }
}
function translateButton(page1, page2, page3) {
    const translateBtns = document.querySelectorAll(".translate");
    let currentLanguage = window.currentLanguage;
    chekIfNotNull(page1, currentLanguage);
    chekIfNotNull(page2, currentLanguage);
    chekIfNotNull(page3, currentLanguage);

    for (var i = 0; i < translateBtns.length; i++) {
        translateBtns[i].addEventListener('click', function () {
            switchLanguage(page1, page2, page3);
        });
    }
}

function switchLanguage(page1, page2, page3) {
    changeLanguage();
    currentLanguage = window.currentLanguage;
    chekIfNotNull(page1, currentLanguage);
    chekIfNotNull(page2, currentLanguage);
    chekIfNotNull(page3, currentLanguage);
}


/*function fetchTranslations(page, language) {
    const fetchUrl = `https://astronoapi.azurewebsites.net/Translations/GetAllTranslations/${page}?language=${language}`;
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
            translateTxt(data);
        })
        .catch(error => console.error('Error:', error))
}*/

function translateMultipleElements(element, obj, key, id) {
    element.forEach(el => {
        if (key == id) {
            el.innerHTML = obj[key];
        }
    })
}


function translateMultiplePlaceHolders(element, obj, key, id) {
    element.forEach(el => {
        if (key == id) {
            el.placeholder = obj[key];
        }
    })
}



