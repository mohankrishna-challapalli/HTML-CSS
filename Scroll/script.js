// Get all elements with the class "box"
const boxes = document.querySelectorAll(".box");

// Add a scroll event listener and call the checkBoxes function
window.addEventListener("scroll", checkBoxes);

// Initial call to checkBoxes function to handle initial state
checkBoxes();

// Function to check if boxes are within the viewport
function checkBoxes() {
  // Calculate the position to trigger animation (e.g., 4/5th of the viewport height)
  const triggerBottom = (window.innerHeight / 5) * 4;

  // Loop through each box element
  boxes.forEach((box) => {
    // Get the top position of the box relative to the viewport
    const boxTop = box.getBoundingClientRect().top;

    // Check if the box's top position is within the trigger zone
    if (boxTop < triggerBottom) {
      // Add the "show" class to the box if it's within the trigger zone
      box.classList.add("show");
    } else {
      // Remove the "show" class from the box if it's not within the trigger zone
      box.classList.remove("show");
    }
  });
}
