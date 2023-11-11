// Get the container element by its ID
const container = document.getElementById("container");

// Array of colors to choose from
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

// Define the number of squares to create
const SQUARES = 500;

// Loop to create and set up each square
for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div"); // Create a new <div> element
  square.classList.add("square"); // Add the "square" class to the element

  // Add event listeners to handle mouseover and mouseout events
  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));

  container.appendChild(square); // Append the square to the container
}

// Function to set a random color and box shadow for an element
function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

// Function to reset the color and box shadow of an element
function removeColor(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
}

// Function to get a random color from the colors array
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
