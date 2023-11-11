// Wait for the DOM to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
  // Select the scroll down button element
  const scrollDownBtn = document.querySelector(".scroll-down-btn");

  // Add a click event listener to the scroll down button
  scrollDownBtn.addEventListener("click", function () {
    // Select the content section element
    const content = document.querySelector(".content");

    // Get the top offset of the content section relative to the document
    const contentOffsetTop = content.offsetTop;

    // Smooth scroll to the content section
    window.scrollTo({
      top: contentOffsetTop,
      behavior: "smooth", // Apply smooth scrolling behavior
    });
  });
});
