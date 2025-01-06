translateButton(16, 3, 4);
function translateTxt(page, language) {
    const id8 = document.getElementById('8');
    const id9 = document.getElementById('9');
    const id10 = document.getElementById('10');
    const id201 = document.getElementById('201');
    const id202 = document.getElementById('202');
    const id203 = document.getElementById('203');
    const id205 = document.querySelectorAll('.tbtn');
    const id25 = document.getElementById('25');
    const id26 = document.getElementById('26');
    const id27 = document.getElementById('27');
    const id28 = document.getElementById('28');
    const id29 = document.getElementById('29');
    const id30 = document.getElementById('30');
    const id31 = document.getElementById('31');
    const id33 = document.getElementById('33');
    const id34 = document.getElementById('34');
    const id35 = document.getElementById('35');
    const id36 = document.getElementById('36');
    const id37 = document.getElementById('37');
    const id38 = document.getElementById('38');
    const id39 = document.getElementById('39');
    const id265 = document.querySelectorAll('.logoutbtn');

    

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

            const elementClasses = [12, 14, 15, 17, 19, 249, 250, 251, 23, 24, 32, 206, 208, 209, 210];
            elementClasses.forEach(classNum => {
                translateMultipleElements(document.querySelectorAll(`.${CSS.escape(classNum)}`), pageObj, key, classNum);
            });

            translateMultipleElements(id205, pageObj, key, 205);
            translateMultipleElements(id265, pageObj, key, 265);

        });
    }
}



