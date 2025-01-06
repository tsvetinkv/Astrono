translateButton(16, 9, 10);
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
    const id113 = document.getElementById('113');
    const id114 = document.getElementById('114');
    const id115 = document.getElementById('115');
    const id116 = document.getElementById('116');
    const id117 = document.getElementById('117');
    const id118 = document.getElementById('118');
    const id119 = document.getElementById('119');
    const id120 = document.getElementById('120');
    const id121 = document.getElementById('121');
    const id122 = document.getElementById('122');
    const id123 = document.getElementById('123');
    const id124 = document.getElementById('124');
    const id125 = document.getElementById('125');
    const id126 = document.getElementById('126');
    const id265 = document.querySelectorAll('.logoutbtn');


    let elements = [id8, id9, id10, id108, id203, id201, id202, id110, id111, id112, id113, id114, id115, id116, id117, id118, id119, id120, id121, id122, id123, id124, id125, id126];
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

