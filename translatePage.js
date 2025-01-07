translateButton(0, null, null)

function translateTxt(page, language) {

    const id266 = document.querySelectorAll('.tbtn');
    const id267 = document.querySelectorAll('.signIn');
    const id269 = document.querySelectorAll('.password');
    const id278 = document.querySelectorAll('.email');

    const id270 = document.querySelectorAll('.signUp');
    const id271 = document.querySelectorAll(`.${CSS.escape("271")}`);
    const id272 = document.getElementById('272');
    const id273 = document.getElementById('273');
    const id275 = document.getElementById('275');
    const id276 = document.getElementById('276');
    const id279 = document.querySelectorAll(`.${CSS.escape("279")}`);
    const id300 = document.querySelectorAll('.invalidEmail');
    const id301 = document.querySelectorAll('.invalidPassword');
    const id302 = document.querySelectorAll('.forgotPass');



    let elements = [id272, id273, id275, id276];

    const translationsObj = translations[language];
    const pageObj = translationsObj[page];
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const elementId = parseInt(element.id, 10)
        Object.keys(pageObj).forEach(key => {
            if (key == elementId) {
                element.innerHTML = pageObj[key];
            }

            const elementClasses = [274, 277, 292];
            elementClasses.forEach(classNum => {
                translateMultipleElements(document.querySelectorAll(`.${CSS.escape(classNum)}`), pageObj, key, classNum);
            });

            translateMultipleElements(id266, pageObj, key, 266);
            translateMultipleElements(id267, pageObj, key, 267);
            translateMultiplePlaceHolders(id278, pageObj, key, 278);
            translateMultiplePlaceHolders(id269, pageObj, key, 269);
            translateMultipleElements(id270, pageObj, key, 270);
            translateMultipleElements(id271, pageObj, key, 271);
            translateMultipleElements(id279, pageObj, key, 279);
            translateMultipleElements(id300, pageObj, key, 300);
            translateMultipleElements(id301, pageObj, key, 301);
            translateMultipleElements(id302, pageObj, key, 302);

        });
    }
    createBElements(id270, id267, id271, id279);
}

function createBElements(id270, id267, id271, id279){
    let boldElement = document.createElement("b");
    let boldElement2 = document.createElement("b");
    boldElement.classList.add("signUp");
    let signInText = id270[0].innerHTML;
    boldElement.textContent = signInText;
    boldElement2.textContent = signInText;
    id271[0].append(boldElement);
    id271[1].append(boldElement2)
    const signInForm = document.getElementById('signInMobile');
    const signUpForm = document.getElementById('signUpMobile');

    boldElement2.addEventListener('click', event =>{
    signUpForm.style.display = 'flex';
    signInForm.style.display = 'none';
    });
    let boldElement3 = document.createElement("b");
    let boldElement4 = document.createElement("b");

    boldElement3.classList.add("signIn");
    let logInText = id267[0].innerHTML;
    boldElement3.textContent = logInText;
    boldElement4.textContent = logInText;
    id279[0].append(boldElement3);
    id279[1].append(boldElement4);
    boldElement4.addEventListener('click', event =>{
        signInForm.style.display = 'flex';
        signUpForm.style.display = 'none';
    });
    swap();
}


