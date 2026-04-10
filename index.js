// Handle Button Clicks (remove '#' from getElementById)
const changeColorButton = document.getElementById('changeColorButton');
const resetColorButton = document.getElementById('resetColorButton');

// Function to change the background color – must produce an rgb(r,g,b) string
function changeBackgroundColor() {
  // Generate random RGB values (0–255) to pass the regex test
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// Function to reset background – test expects empty string (remove inline style)
function resetBackgroundColor() {
  document.body.style.backgroundColor = '';   // clears inline style
}

// Capture Keyboard Input – update element with id 'keyPressDisplay'
function displayKeyPress(event) {
  const keyDisplay = document.getElementById('keyPressDisplay');
  if (keyDisplay) {
    keyDisplay.textContent = `Key pressed: ${event.key}`;
  }
}

// Process Text Input – update element with id 'textInputDisplay'
function displayUserInput() {
  const textInput = document.getElementById('textInput');
  const inputDisplay = document.getElementById('textInputDisplay');
  if (textInput && inputDisplay) {
    inputDisplay.textContent = `You typed: ${textInput.value}`;
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