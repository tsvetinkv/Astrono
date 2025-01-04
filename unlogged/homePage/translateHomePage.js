translateButton(16, 1, null);
function translateTxt(page, language) {
    const id8 = document.getElementById('8');
    const id9 = document.getElementById('9');
    const id10 = document.getElementById('10');
    // const id11 = document.getElementById('11');
    const id12 = document.querySelectorAll(`.${CSS.escape("12")}`);
    const id14 = document.querySelectorAll(`.${CSS.escape("14")}`);
    const id15 = document.querySelectorAll(`.${CSS.escape("15")}`);
    const id17 = document.querySelectorAll(`.${CSS.escape("17")}`);
    const id19 = document.querySelectorAll(`.${CSS.escape("19")}`);
    const id249 = document.querySelectorAll(`.${CSS.escape("249")}`);
    const id250 = document.querySelectorAll(`.${CSS.escape("250")}`);
    const id251 = document.querySelectorAll(`.${CSS.escape("251")}`);
    const id201 = document.getElementById('201');
    const id202 = document.getElementById('202');
    const id203 = document.getElementById('203');
    // const id204 = document.getElementById('204');
    const id205 = document.querySelectorAll('.tbtn');
    const id1 = document.getElementById('1');
    const id3 = document.getElementById('3');
    const id4 = document.getElementById('4');
    const id5 = document.querySelectorAll(`.${CSS.escape("5")}`);
    const id6 = document.getElementById('6');
    const id7 = document.querySelectorAll(`.${CSS.escape("7")}`);
    const id265 = document.querySelectorAll('.logoutbtn');

    let elements = [id8, id9, id10, id201, id202, id203, id1, id3, id4, id6];

    const translationsObj = translations[language];
    const pageObj = translationsObj[page];
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const elementId = parseInt(element.id, 10)
        Object.keys(pageObj).forEach(key => {
            if (key == elementId) {
                element.innerHTML = pageObj[key];
            }
            translateMultipleElements(id205, pageObj, key, 205);
            translateMultipleElements(id12, pageObj, key, 12);
            translateMultipleElements(id14, pageObj, key, 14);
            translateMultipleElements(id15, pageObj, key, 15);
            translateMultipleElements(id17, pageObj, key, 17);
            translateMultipleElements(id19, pageObj, key, 19);
            translateMultipleElements(id249, pageObj, key, 249);
            translateMultipleElements(id250, pageObj, key, 250);
            translateMultipleElements(id251, pageObj, key, 251);
            translateMultipleElements(id5, pageObj, key, 5);
            translateMultipleElements(id7, pageObj, key, 7);
            translateMultipleElements(id265, pageObj, key, 265);
        });
        swapImages();
    }
}

function swapImages() {
    const eventImgs = document.querySelectorAll(".eventImg");
    const starsAndConstellationsImg = document.getElementById("starsAndConstellationsImg");
    const moonImg = document.querySelectorAll(".moonImg");

    if (currentLanguage === "En") {
        eventImgs.forEach(img => img.src = "/images/eventsEn.png");
        starsAndConstellationsImg.src = "/images/starsAndConstellationsEn.png";
        moonImg.forEach(img => img.src = "/images/moonEn.png");
    } else {
        eventImgs.forEach(img => img.src = "/images/eventsBg.png");
        starsAndConstellationsImg.src = "/images/starsAndConstellationsBg.png";
        moonImg.forEach(img => img.src = "/images/moonBg.png");
    }
}
