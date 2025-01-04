translateButton(16, 9, 12);
function translateTxt(page, language) {
    const id8 = document.getElementById('8');
    const id9 = document.getElementById('9');
    const id10 = document.getElementById('10');
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
    const id205 = document.querySelectorAll('.tbtn');
    const id108 = document.getElementById('108');
    const id110 = document.getElementById('110');
    const id111 = document.getElementById('111');
    const id112 = document.getElementById('112');
    const id152 = document.getElementById('152');
    const id153 = document.getElementById('153');
    const id154 = document.getElementById('154');
    const id155 = document.getElementById('155');
    const id156 = document.getElementById('156');
    const id157 = document.getElementById('157');
    const id158 = document.getElementById('158');
    const id159 = document.getElementById('159');
    const id160 = document.getElementById('160');
    const id265 = document.querySelectorAll('.logoutbtn');



    let elements = [id8, id9, id10, id108, id203, id201, id202, id110, id111, id112, id152, id153, id154, id155, id156, id157, id158, id159, id160];
    
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
            translateMultipleElements(id265, pageObj, key, 265);

        });
    }
}

