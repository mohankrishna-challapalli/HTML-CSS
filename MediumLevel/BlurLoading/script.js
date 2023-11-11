// Select the loading text element and background element
const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

// Initialize the loading progress variable
let load = 0;

// Create an interval to call the blurring function every 30 milliseconds
let int = setInterval(blurring, 30);

// Function to update the loading progress and apply the blur effect
function blurring() {
  // Increment the loading progress
  load++;

  // Clear the interval when loading reaches 100%
  if (load > 99) {
    clearInterval(int);
  }

  // Update the loading text with the current progress percentage
  loadText.innerText = `${load}%`;

  // Adjust the opacity of the loading text to create a fading effect
  loadText.style.opacity = scale(load, 0, 100, 1, 0);

  // Apply a blur filter to the background with varying strength
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// Utility function to map a value from one range to another
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
