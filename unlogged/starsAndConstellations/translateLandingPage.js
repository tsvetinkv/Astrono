translateButton(16, 8, null);
function translateTxt(page, language) {
    const id8 = document.getElementById('8');
    const id9 = document.getElementById('9');
    const id10 = document.getElementById('10');
    const id201 = document.getElementById('201');
    const id202 = document.getElementById('202');
    const id203 = document.getElementById('203');
    const id205 = document.querySelectorAll('.tbtn');
    const id101 = document.getElementById('101');
    const id102 = document.getElementById('102');
    const id103 = document.getElementById('103');
    const id104 = document.getElementById('104');
    const id105 = document.getElementById('105');
    const id106 = document.getElementById('106');
    const id265 = document.querySelectorAll('.logoutbtn');



    let elements = [id8, id9, id10, id201, id202, id203, id101, id102, id103, id104, id105, id106];
    const translationsObj = translations[language];
    const pageObj = translationsObj[page];
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const elementId = parseInt(element.id, 10)
        Object.keys(pageObj).forEach(key => {
            if (key == elementId) {
                element.innerHTML = pageObj[key];
            }

            const elementClasses = [12, 14, 15, 17, 19, 249, 250, 251];
            elementClasses.forEach(classNum => {
                translateMultipleElements(document.querySelectorAll(`.${CSS.escape(classNum)}`), pageObj, key, classNum);
            });

            translateMultipleElements(id205, pageObj, key, 205);
            translateMultipleElements(id265, pageObj, key, 265);

        });
    }
}

