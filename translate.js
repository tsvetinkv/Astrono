function chekIfNotNull(page, currentLanguage){
    if (page != null) {
        fetchTranslations(page, currentLanguage);
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


function fetchTranslations(page, language) {
    const fetchUrl = `https://localhost:7160/Translations/GetAllTranslations/${page}?language=${language}`;
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
}

function translateMultipleElements(element, t, id) {
    element.forEach(el => {
        if (t.id == id) {
            el.innerHTML = t.text;
        }
    })
}



