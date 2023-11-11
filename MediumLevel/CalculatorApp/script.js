const display = document.getElementById("display"); // Get the input field for displaying calculations
const buttons = document.querySelectorAll(".buttons button"); // Get all calculator buttons

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent; // Get the text content of the clicked button

    if (buttonText === "=") {
      // If the button clicked is the "=" button
      try {
        // Use the eval function to evaluate the expression in the display value
        display.value = eval(display.value);
      } catch (error) {
        // If there's an error during evaluation, display "Error"
        display.value = "Error";
      }
    } else if (buttonText === "C") {
      // If the button clicked is the "C" button (clear)
      display.value = ""; // Clear the display
    } else {
      // For other buttons, add their text content to the display
      display.value += buttonText;
    }
  });
});
