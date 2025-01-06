translateButton(16, 15, null);
function translateTxt(page, language) {
    const id8 = document.getElementById('8');
    const id9 = document.getElementById('9');
    const id10 = document.getElementById('10');
    const id201 = document.getElementById('201');
    const id202 = document.getElementById('202');
    const id203 = document.getElementById('203');
    const id205 = document.querySelectorAll('.tbtn');
    const id181 = document.getElementById('181');
    const id182 = document.getElementById('182');
    const id183 = document.getElementById('183');
    const id184 = document.getElementById('184');
    const id185 = document.getElementById('185');
    const id186 = document.getElementById('186');
    const id187 = document.getElementById('187');
    const id188 = document.getElementById('188');
    const id189 = document.getElementById('189');
    const id190 = document.getElementById('190');
    const id191 = document.getElementById('191');
    const id192 = document.getElementById('192');
    const id193 = document.getElementById('193');
    const id194 = document.getElementById('194');
    const id195 = document.getElementById('195');
    const id196 = document.getElementById('196');
    const id197 = document.getElementById('197');
    const id198 = document.getElementById('198');
    const id199 = document.getElementById('199');
    const id200 = document.getElementById('200');
    const id265 = document.querySelectorAll('.logoutbtn');


    let elements = [id8, id9, id10, id201, id202, id203, id181, id182, id183, id184, id185, id186, id187, id188, id189, id190, id191, id192, id193, id194, id195, id196, id197, id198, id199, id200];
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

