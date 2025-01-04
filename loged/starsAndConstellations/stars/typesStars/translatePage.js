translateButton(16, 9, 11);
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
    const id108 = document.getElementById('108');
    const placeholder = document.getElementById('placeholder');
    const id110 = document.getElementById('110');
    const id111 = document.getElementById('111');
    const id112 = document.getElementById('112');
    const id127 = document.getElementById('127');
    const id128 = document.getElementById('128');
    const id129 = document.getElementById('129');
    const id130 = document.getElementById('130');
    const id131 = document.querySelectorAll(`.${CSS.escape("131")}`);
    const id132 = document.getElementById('132');
    const id133 = document.getElementById('133');
    const id134 = document.getElementById('134');
    const id135 = document.getElementById('135');
    const id136 = document.getElementById('136');
    const id137 = document.getElementById('137');
    const id138 = document.getElementById('138');
    const id139 = document.getElementById('139');
    const id140 = document.getElementById('140');
    const id141 = document.getElementById('141');
    const id142 = document.getElementById('142');
    const id143 = document.getElementById('143');
    const id144 = document.getElementById('144');
    const id145 = document.getElementById('145');
    const id146 = document.getElementById('146');
    const id147 = document.getElementById('147');
    const id148 = document.getElementById('148');
    const id149 = document.getElementById('149');
    const id150 = document.getElementById('150');
    const id151 = document.getElementById('151');
    const id265 = document.querySelectorAll('.logoutbtn');



    let elements = [id8, id9, id10, id108, id203, id201, id202, id110, id111, id112, id127, id128, id129, id130, id132, id133, id134, id135, id136, id137, id138, id139, id140, id141, id142, id143, id144, id145, id146, id147, id148, id149, id150, id151];
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
            translateMultipleElements(id205, pageObj, key, 205);
            translateMultipleElements(id12, pageObj, key, 12);
            translateMultipleElements(id14, pageObj, key, 14);
            translateMultipleElements(id15, pageObj, key, 15);
            translateMultipleElements(id17, pageObj, key, 17);
            translateMultipleElements(id19, pageObj, key, 19);
            translateMultipleElements(id249, pageObj, key, 249);
            translateMultipleElements(id250, pageObj, key, 250);
            translateMultipleElements(id251, pageObj, key, 251);
            translateMultipleElements(id131, pageObj, key, 131);
            translateMultipleElements(id265, pageObj, key, 265);


        });
    }

    if (currentLanguage == 'Bg') {
        changeCssBg();
    } else {
        changeCssEn();
    }
}

function changeCssBg() {
    const elements = document.querySelectorAll(".uk-flex-bottom");
    elements.forEach(e => {
        e.className = "uk-flex uk-flex-center uk-flex-top uk-margin-medium-top uk-column-1-2";
    })
}

function changeCssEn() {
    const elements = document.querySelectorAll(".uk-flex-top");
    elements.forEach(e => {
        e.className = "uk-flex uk-flex-center uk-flex-bottom uk-margin-medium-top uk-column-1-2";
    })
}
