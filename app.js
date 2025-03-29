/* ============================ STRICT MODE ============================ */
'use strict'; // Enables strict mode for better error handling

/* ============================ SELECTORS ============================ */
const button = document.querySelector('.btn'); // Selects the button element
const body = document.body; // Selects the body element

/* ============================ EVENT LISTENER ============================ */
// Adds a click event listener to the button
button.addEventListener('click', () => {
  /* ============================ THEME TOGGLE LOGIC ============================ */
  // Checks if the current theme is light
  if (body.classList.contains('light-theme')) {
    body.classList.remove('light-theme'); // Removes the light theme
    body.classList.add('dark-theme'); // Adds the dark theme
    button.textContent = 'Light'; // Updates the button text to "Light"
  } else {
    body.classList.remove('dark-theme'); // Removes the dark theme
    body.classList.add('light-theme'); // Adds the light theme
    button.textContent = 'Dark'; // Updates the button text to "Dark"
  }
});