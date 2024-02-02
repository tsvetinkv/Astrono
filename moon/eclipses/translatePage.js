translateButton(16, 3, 7);
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
    const id78 = document.getElementById('78');
    const id79 = document.getElementById('79');
    const id80 = document.getElementById('80');
    const id81 = document.getElementById('81');
    const id82 = document.getElementById('82');
    const id83 = document.getElementById('83');
    const id84 = document.getElementById('84');
    const id85 = document.getElementById('85');
    const id87 = document.getElementById('87');
    const id88 = document.getElementById('88');
    const id89 = document.getElementById('89');
    const id90 = document.getElementById('90');
    const id91 = document.getElementById('91');
    const id92 = document.getElementById('92');
    const id93 = document.getElementById('93');
    const id94 = document.getElementById('94');
    const id95 = document.getElementById('95');
    const id96 = document.getElementById('96');
    const id97 = document.getElementById('97');
    const id98 = document.getElementById('98');
    const id99 = document.getElementById('99');
    const id100 = document.getElementById('100');

    let elements = [id8, id9, id201, id203, id25, id26, id27, id28, id78, id79, id80, id81, id82, id83, id84, id85, id87, id88, id89, id90, id91, id92, id93, id94, id95, id96, id97, id98, id99, id100];
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
    });
}
