translateButton(16, 14, null);
function translateTxt(page, language) {
    const id8 = document.getElementById('8');
    const id9 = document.getElementById('9');
    const id10 = document.getElementById('10');
    const id201 = document.getElementById('201');
    const id202 = document.getElementById('202');
    const id203 = document.getElementById('203');
    const id205 = document.querySelectorAll('.tbtn');
    const id168 = document.getElementById('168');
    const id173 = document.getElementById('173');
    const id174 = document.getElementById('174');
    const id175 = document.getElementById('175');
    const id176 = document.getElementById('176');
    const id177 = document.getElementById('177');
    const id178 = document.getElementById('178');
    const id179 = document.getElementById('179');
    const id180 = document.getElementById('180');
    const id265 = document.querySelectorAll('.logoutbtn');

    let elements = [id8, id9, id10, id201, id202, id203, id168, id173, id174, id175, id176, id177, id178, id179, id180];
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

