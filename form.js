function swap() {
    const signUpButtons = document.querySelectorAll('.signUp');
    const signInButtons = document.querySelectorAll('.signIn');
    const container = document.getElementById('container');
    signUpButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });
    });

    signInButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });
    });
}
window.onload = function () {
    swap();
}

const passwordInput = document.querySelectorAll('.password');
const togglePasswordIcon = document.querySelectorAll('.toggle-password');

togglePasswordIcon.forEach(el => {
    el.addEventListener('click', () =>{
        passwordInput.forEach(input =>{
        if (input.type === "password") {
            input.type = "text";
            el.setAttribute('uk-icon', 'icon: eye');
            UIkit.icon(el);
        } else {
            input.type = "password";
            el.setAttribute('uk-icon', 'icon: eye-slash');
            UIkit.icon(el);
        }
    })
})
})

