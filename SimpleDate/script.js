document.addEventListener("DOMContentLoaded", function () {
  const dateDisplay = document.getElementById("date-display");
  const currentDate = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);
  dateDisplay.textContent = formattedDate;
});
