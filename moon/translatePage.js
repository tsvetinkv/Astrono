translateButton(16, 3, 4);
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
    const id23 = document.querySelectorAll(`.${CSS.escape("23")}`);
    const id24 = document.querySelectorAll(`.${CSS.escape("24")}`);
    const id25 = document.getElementById('25');
    const id26 = document.getElementById('26');
    const id27 = document.getElementById('27');
    const id28 = document.getElementById('28');
    const id29 = document.getElementById('29');
    const id30 = document.getElementById('30');
    const id31 = document.getElementById('31');
    const id32 = document.querySelectorAll(`.${CSS.escape("32")}`);
    const id33 = document.getElementById('33');
    const id34 = document.getElementById('34');
    const id35 = document.getElementById('35');
    const id36 = document.getElementById('36');
    const id37 = document.getElementById('37');
    const id38 = document.getElementById('38');
    const id39 = document.getElementById('39');
    const id206 = document.querySelectorAll(`.${CSS.escape("206")}`);
    const id208 = document.querySelectorAll(`.${CSS.escape("208")}`);
    const id209 = document.querySelectorAll(`.${CSS.escape("209")}`);
    const id210 = document.querySelectorAll(`.${CSS.escape("210")}`);
    

    let elements = [id8, id9, id10, id201, id202, id203, id25, id26, id27, id28, id29, id30, id31, id33, id34, id35, id36, id37, id38, id39];
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
            translateMultipleElements(id23, pageObj, key, 23);
            translateMultipleElements(id24, pageObj, key, 24);
            translateMultipleElements(id32, pageObj, key, 32);
            translateMultipleElements(id206, pageObj, key, 206);
            translateMultipleElements(id208, pageObj, key, 208);
            translateMultipleElements(id209, pageObj, key, 209);
            translateMultipleElements(id210, pageObj, key, 210);

        });
    }
}



