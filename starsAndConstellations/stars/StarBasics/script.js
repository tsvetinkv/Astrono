// Set the flag and redirect when 'Enter' key is pressed
document.querySelector('#placeholder').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        var value = e.target.value;
        window.location.href = '/starsAndConstellations/stars/StarSearch/index.html?value=' + encodeURIComponent(value);
        localStorage.setItem('clearInput', 'true');
    }
});

// Set the flag and redirect when input field is clicked
document.querySelector('#placeholder').addEventListener('click', function (e) {
    let value = e.target.value;
    if (value) {
        window.location.href = '/starsAndConstellations/stars/StarSearch/index.html?value=' + encodeURIComponent(value);
        localStorage.setItem('clearInput', 'true');
    }
});

// Clear the input field when the page loads, if the flag is set
window.onload = function() {
    if (localStorage.getItem('clearInput') === 'true') {
        document.querySelector('#placeholder').value = '';
        localStorage.removeItem('clearInput');
    }
};

