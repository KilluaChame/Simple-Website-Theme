/* ============================ STRICT MODE ============================ */
'use strict';

/* ============================ SELECTORS ============================ */
const switcher = document.querySelector('.btn'); // Selects the toggle button

/* ============================ EVENT LISTENERS ============================ */
switcher.addEventListener('click', function () {
    /* ============================ THEME TOGGLING ============================ */
    document.body.classList.toggle('dark-theme'); // Toggles between themes

    /* ============================ BUTTON TEXT ============================ */
    var className = document.body.className; // Gets the current class of the body
    if (className == 'light-theme') {
        this.textContent = 'Dark'; // Changes the button text to "Dark"
    } else {
        this.textContent = 'Light'; // Changes the button text to "Light"
    }

    /* ============================ LOGGING ============================ */
    console.log('Current class name: ' + className); // Logs the current class name to the console
});