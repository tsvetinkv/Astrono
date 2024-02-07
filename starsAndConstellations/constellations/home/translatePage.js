translateButton(16, 14, null);
function translateTxt(translations) {
    const id8 = document.getElementById('8');
    const id9 = document.getElementById('9');
    const id10 = document.getElementById('10');
    const id12 = document.querySelectorAll(`.${CSS.escape("12")}`);
    const id14 = document.querySelectorAll(`.${CSS.escape("14")}`);
    const id15 = document.querySelectorAll(`.${CSS.escape("15")}`);
    const id19 = document.querySelectorAll(`.${CSS.escape("19")}`);
    const id201 = document.getElementById('201');
    const id202 = document.getElementById('202');
    const id203 = document.getElementById('203');
    const id205 = document.querySelectorAll('.tbtn');
    const id168 = document.getElementById('168');
    const id170 = document.getElementById('170');
    const id171 = document.getElementById('171');
    const id172 = document.getElementById('172');
    const id173 = document.getElementById('173');
    const id174 = document.getElementById('174');
    const id175 = document.getElementById('175');
    const id176 = document.getElementById('176');
    const id177 = document.getElementById('177');
    const id178 = document.getElementById('178');
    const id179 = document.getElementById('179');
    const id180 = document.getElementById('180');
    const id248 = document.getElementById('248');


    let elements = [id8, id9, id10, id201, id202, id203, id168, id170, id171, id172, id173, id174, id175, id176, id177, id178, id179, id180, id248];
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
        translateMultipleElements(id19, t, 19);
    })

}

