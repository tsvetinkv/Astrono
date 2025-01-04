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
