translateButton(16, 3, 6);
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
    const id52 = document.getElementById('52');
    const id53 = document.getElementById('53');
    const id54 = document.getElementById('54');
    const id55 = document.getElementById('55');
    const id56 = document.getElementById('56');
    const id57 = document.getElementById('57');
    const id58 = document.getElementById('58');
    const id59 = document.getElementById('59');
    const id60 = document.getElementById('60');
    const id61 = document.getElementById('61');
    const id62 = document.getElementById('62');
    const id63 = document.getElementById('63');
    const id64 = document.getElementById('64');
    const id65 = document.getElementById('65');
    const id66 = document.getElementById('66');
    const id67 = document.getElementById('67');
    const id68 = document.getElementById('68');
    const id70 = document.getElementById('70');
    const id71 = document.getElementById('71');
    const id72 = document.getElementById('72');
    const id74 = document.getElementById('74');
    const id75 = document.getElementById('75');
    const id76 = document.getElementById('76');
    const id77 = document.getElementById('77');
    const id265 = document.querySelectorAll('.logoutbtn');


    let elements = [id8, id9, id10, id201, id202, id203, id25, id26, id27, id28, id52, id53, id54, id55, id56, id57, id58, id59, id60, id61, id62, id63, id64, id65, id66, id67, id68, id70, id71, id72, id74, id75, id76, id77];
    const translationsObj = translations[language];
    const pageObj = translationsObj[page];
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const elementId = parseInt(element.id, 10)
        Object.keys(pageObj).forEach(key => {
            if (key == elementId) {
                element.innerHTML = pageObj[key];
            }

            const elementClasses = [12, 14, 15, 17, 19, 249, 251, 23, 24];
            elementClasses.forEach(classNum => {
                translateMultipleElements(document.querySelectorAll(`.${CSS.escape(classNum)}`), pageObj, key, classNum);
            });

            translateMultipleElements(id205, pageObj, key, 205);
            translateMultipleElements(id265, pageObj, key, 265);

        });
    }
}
