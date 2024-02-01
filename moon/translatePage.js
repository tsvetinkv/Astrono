translateButton(16, 3, 4);
function translateTxt(translations) {
    const id8 = document.getElementById('8');
    const id9 = document.getElementById('9');
    const id12 = document.querySelectorAll(`.${CSS.escape("12")}`);
    const id14 = document.querySelectorAll(`.${CSS.escape("14")}`);
    const id15 = document.querySelectorAll(`.${CSS.escape("15")}`);
    const id17 = document.querySelectorAll(`.${CSS.escape("17")}`);
    const id19 = document.querySelectorAll(`.${CSS.escape("19")}`);
    const id201 = document.getElementById('201');
    const id203 = document.getElementById('203');
    const id205 = document.querySelectorAll('.tbtn');
    const id23 = document.querySelectorAll(`.${CSS.escape("23")}`);
    const id24 = document.querySelectorAll(`.${CSS.escape("24")}`);
    const id25 = document.getElementById('25');
    const id26 = document.getElementById('26');
    const id27 = document.getElementById('27');
    const id28 = document.getElementById('28');
    const id29 = document.getElementById('29');
    const id30 = document.getElementById('30');
    const id31 = document.getElementById('31');
    const id32 = document.querySelectorAll(`.${CSS.escape("32")}`);
    const id33 = document.getElementById('33');
    const id34 = document.getElementById('34');
    const id35 = document.getElementById('35');
    const id36 = document.getElementById('36');
    const id37 = document.getElementById('37');
    const id38 = document.getElementById('38');
    const id39 = document.getElementById('39');
    const id206 = document.querySelectorAll(`.${CSS.escape("206")}`);
    const id208 = document.querySelectorAll(`.${CSS.escape("208")}`);
    const id209 = document.querySelectorAll(`.${CSS.escape("209")}`);
    const id210 = document.querySelectorAll(`.${CSS.escape("210")}`);
    

    let elements = [id8, id9, id201, id203, id25, id26, id27, id28, id29, id30, id31, id33, id34, id35, id36, id37, id38, id39];
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
        translateMultipleElements(id23, t, 23);
        translateMultipleElements(id24, t, 24);
        translateMultipleElements(id32, t, 32);
        translateMultipleElements(id206, t, 206);
        translateMultipleElements(id208, t, 208);
        translateMultipleElements(id209, t, 209);
        translateMultipleElements(id210, t, 210);
    });
}



