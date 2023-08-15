// Wait for the DOM to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
  // Get the element that will display the current date
  const dateDisplay = document.getElementById("date-display");

  // Create a new Date object to get the current date and time
  const currentDate = new Date();

  // Define formatting options for the date display
  const options = { year: "numeric", month: "long", day: "numeric" };

  // Format the current date using the specified options
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  // Update the content of the date display element with the formatted date
  dateDisplay.textContent = formattedDate;
});
