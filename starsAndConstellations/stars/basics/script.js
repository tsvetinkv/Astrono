    document.querySelector('#placeholder').addEventListener('keypress', function (e) {
        if (e.keyCode === 13) {
            const value = e.target.value;
            if (value) {
                window.location.href = '/starsAndConstellations/stars/starSearch/index.html?value=' + encodeURIComponent(value);
                localStorage.setItem('clearInput', 'true');
                location.reload();
            }
        }
    });

    document.querySelector('#placeholder').addEventListener('click', function (e) {
        const value = e.target.value;
        if (value) {
            window.location.href = '/starsAndConstellations/stars/starSearch/index.html?value=' + encodeURIComponent(value);
            localStorage.setItem('clearInput', 'true');
            location.reload();
        }
    });

    window.onload = function () {
        if (localStorage.getItem('clearInput') === 'true') {
            document.querySelector('#placeholder').value = '';
            localStorage.removeItem('clearInput');
        }
    };
