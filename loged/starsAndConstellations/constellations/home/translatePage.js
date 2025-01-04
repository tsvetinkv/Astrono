translateButton(16, 14, null);
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
    const id168 = document.getElementById('168');
    const id170 = document.getElementById('170');
    const id171 = document.getElementById('171');
    const id172 = document.getElementById('172');
    const id173 = document.getElementById('173');
    const id174 = document.getElementById('174');
    const id175 = document.getElementById('175');
    const id176 = document.getElementById('176');
    const id177 = document.getElementById('177');
    const id178 = document.getElementById('178');
    const id179 = document.getElementById('179');
    const id180 = document.getElementById('180');
    const id248 = document.getElementById('248');
    const id265 = document.querySelectorAll('.logoutbtn');



    let elements = [id8, id9, id10, id201, id202, id203, id168, id170, id171, id172, id173, id174, id175, id176, id177, id178, id179, id180, id248];
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

