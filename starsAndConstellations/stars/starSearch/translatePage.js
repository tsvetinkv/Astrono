translateButton(16, 13, null);
function translateTxt(translations) {
    const id8 = document.getElementById('8');
    const id9 = document.getElementById('9');
    const id10 = document.getElementById('10');
    const id12 = document.querySelectorAll(`.${CSS.escape("12")}`);
    const id14 = document.querySelectorAll(`.${CSS.escape("14")}`);
    const id15 = document.querySelectorAll(`.${CSS.escape("15")}`);
    const id17 = document.querySelectorAll(`.${CSS.escape("17")}`);
    const id19 = document.querySelectorAll(`.${CSS.escape("19")}`);
    const id201 = document.getElementById('201');
    const id202 = document.getElementById('202');
    const id203 = document.getElementById('203');
    const id205 = document.querySelectorAll('.tbtn');
    const id166 = document.getElementById('166');
    const id167 = document.getElementById('167');
    const id161 = document.getElementById("161");
    const id163 = document.getElementById("163");
    const id165 = document.getElementById("165");
    const error = document.getElementById("error");

    let elements = [id8, id9, id10, id203, id201, id202, id166, id167, id161, id163, id165];
    translations.forEach(t => {
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            const elementId = parseInt(element.id, 10)
            if (t.id === elementId) {
                element.innerHTML = t.text;
            }

            if (t.id == 162) {
                const tooltip = UIkit.tooltip(id161);
                tooltip.$el.setAttribute("title", t.text);
            } else if (t.id == 164) {
                const tooltip = UIkit.tooltip(id163);
                tooltip.$el.setAttribute("title", t.text);
            } else if (t.id == 246) {
                const tooltip = UIkit.tooltip(id165);
                tooltip.$el.setAttribute("title", t.text);
            }else if (t.id == 247) {
                error.innerHTML = t.text;
            }
        }

        translateMultipleElements(id205, t, 205);
        translateMultipleElements(id12, t, 12);
        translateMultipleElements(id14, t, 14);
        translateMultipleElements(id15, t, 15);
        translateMultipleElements(id17, t, 17);
        translateMultipleElements(id19, t, 19);
    })

}

