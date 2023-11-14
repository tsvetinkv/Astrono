document.querySelector('#input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        var value = e.target.value;
        window.location.href = '/starsAndConstellations/stars/StarSearch/index.html?value=' + encodeURIComponent(value);
    }
});

document.querySelector('#input').addEventListener('click', function (e) {
    let value = e.target.value;
    if (value) {
        window.location.href = '/starsAndConstellations/stars/StarSearch/index.html?value=' + encodeURIComponent(value);
    }
});
