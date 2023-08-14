// Select all elements with the class "panel" and store them in the "panels" variable
const panels = document.querySelectorAll(".panel");

// Iterate through each panel and attach a click event listener
panels.forEach((panel) => {
  // When a panel is clicked, execute the following function
  panel.addEventListener("click", () => {
    // Call the removeActiveClasses function to remove the "active" class from all panels
    removeActiveClasses();
    // Add the "active" class to the clicked panel
    panel.classList.add("active");
  });
});

// Define a function to remove the "active" class from all panels
const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};
