// Get the reference to the HTML image element with the ID "random-image"
const randomImage = document.getElementById("random-image");

// Add a click event listener to the randomImage element
randomImage.addEventListener("click", async () => {
  try {
    // Use the Fetch API to request a random image from the given URL
    const response = await fetch("https://picsum.photos/500"); // Change the size as needed

    // Check if the response status is okay (status code 200)
    if (response.ok) {
      // If the response is successful, update the source of the randomImage element
      randomImage.src = response.url;
    } else {
      console.error("Error fetching image from API.");
    }
  } catch (error) {
    // If an error occurs during the fetch or processing, log the error
    console.error("An error occurred:", error);
  }
});
