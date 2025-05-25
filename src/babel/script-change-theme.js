"use strict";

document.getElementById("button__change-theme").addEventListener("click", function () {
    return changeTheme();
});

function changeTheme() {
    var themeLink = document.getElementById('changeTheme');
    var currentTheme = themeLink.getAttribute('href');

    if (currentTheme === 'styles-night.css') {
        themeLink.setAttribute('href', 'styles-day.css');
    } else if (currentTheme === 'styles-day.css') {
        themeLink.setAttribute('href', 'styles-night.css');
    }
}