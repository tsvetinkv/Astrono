translateButton(16, 9, 12);
function translateTxt(page, language) {
    const id8 = document.getElementById('8');
    const id9 = document.getElementById('9');
    const id10 = document.getElementById('10');
    const id201 = document.getElementById('201');
    const id202 = document.getElementById('202');
    const id203 = document.getElementById('203');
    const id205 = document.querySelectorAll('.tbtn');
    const id108 = document.getElementById('108');
    const placeholder = document.getElementById('placeholder');
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
            if (key == 109) {
                placeholder.placeholder = pageObj[key];
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

