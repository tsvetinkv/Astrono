translateButton(16, 3, 5);
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
    const id42 = document.getElementById('42');
    const id40 = document.getElementById('40');
    const id41 = document.getElementById('41');
    const id43 = document.getElementById('43');
    const id44 = document.getElementById('44');
    const id46 = document.getElementById('46');
    const id47 = document.getElementById('47');
    const id48 = document.getElementById('48');
    const id49 = document.getElementById('49');
    const id50 = document.getElementById('50');
    const id51 = document.getElementById('51');
    const id265 = document.querySelectorAll('.logoutbtn');


    let elements = [id8, id9, id10, id201, id202, id203, id25, id26, id27, id28, id42, id40, id41, id43, id44, id46, id47, id48, id49, id50, id51];
    const translationsObj = translations[language];
    const pageObj = translationsObj[page];
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const elementId = parseInt(element.id, 10)
        Object.keys(pageObj).forEach(key => {
            if (key == elementId) {
                element.innerHTML = pageObj[key];
            }

            const elementClasses = [12, 14, 15, 17, 19, 250, 251, 23, 24];
            elementClasses.forEach(classNum => {
                translateMultipleElements(document.querySelectorAll(`.${CSS.escape(classNum)}`), pageObj, key, classNum);
            });

            translateMultipleElements(id205, pageObj, key, 205);
            translateMultipleElements(id265, pageObj, key, 265);

        });
    }
}



