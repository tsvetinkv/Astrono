translateButton(16, 3, 5);
function translateTxt(translations) {
    const id8 = document.getElementById('8');
    const id9 = document.getElementById('9');
    const id10 = document.getElementById('10');
    const id12 = document.querySelectorAll(`.${CSS.escape("12")}`);
    const id14 = document.querySelectorAll(`.${CSS.escape("14")}`);
    const id15 = document.querySelectorAll(`.${CSS.escape("15")}`);
    const id17 = document.querySelectorAll(`.${CSS.escape("17")}`);
    const id19 = document.querySelectorAll(`.${CSS.escape("19")}`);
    const id250 = document.querySelectorAll(`.${CSS.escape("250")}`);
    const id251 = document.querySelectorAll(`.${CSS.escape("251")}`);
    const id201 = document.getElementById('201');
    const id202 = document.getElementById('202');
    const id203 = document.getElementById('203');
    const id205 = document.querySelectorAll('.tbtn');
    const id23 = document.querySelectorAll(`.${CSS.escape("23")}`);
    const id24 = document.querySelectorAll(`.${CSS.escape("24")}`);
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

    

    let elements = [id8, id9, id10, id201, id202, id203, id25, id26, id27, id28, id42, id40, id41, id43, id44, id46, id47, id48, id49, id50, id51];
    translations.forEach(t => {
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            const elementId = parseInt(element.id, 10)
            if (t.id === elementId) {
                element.innerHTML = t.text;
            }
        }

        translateMultipleElements(id205, t, 205);
        translateMultipleElements(id12, t, 12);
        translateMultipleElements(id14, t, 14);
        translateMultipleElements(id15, t, 15);
        translateMultipleElements(id17, t, 17);
        translateMultipleElements(id19, t, 19);
        translateMultipleElements(id250, t, 250);
        translateMultipleElements(id251, t, 251);
        translateMultipleElements(id23, t, 23);
        translateMultipleElements(id24, t, 24);
    });
}



