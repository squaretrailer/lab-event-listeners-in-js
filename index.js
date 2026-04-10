// Handle Button Clicks
// Remove '#' from getElementById
const changeColorButton = document.getElementById('changeColorButton');
const resetColorButton = document.getElementById('resetColorButton');

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  document.body.style.backgroundColor = "lightcoral";
}

// Function to reset the background color when double-clicked
function resetBackgroundColor() {
  document.body.style.backgroundColor = 'white';
}

// Capture Keyboard Input
// Function to display the key pressed by the user
function displayKeyPress(event) {
  const keyDisplay = document.getElementById('keyDisplay');
  if (keyDisplay) {
    let key = event.key;
    if (key === ' ') key = 'Space';  // Make space visible
    keyDisplay.textContent = `Last key pressed: ${key}`;
  }
}

// Process Text Input
// Function to display user input in real-time
function displayUserInput() {
  const textInput = document.getElementById('textInput');
  const inputDisplay = document.getElementById('inputDisplay');
  if (textInput && inputDisplay) {
    inputDisplay.textContent = `Real‑time input: ${textInput.value}`;
  }
}

// Attach Event Listeners
function setupEventListeners() {
  document.getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor);

  document.getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor);

  document.addEventListener('keydown', displayKeyPress);

  document.getElementById('textInput')
    .addEventListener('input', displayUserInput);
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners);
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
};