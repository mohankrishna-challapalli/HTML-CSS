const randomImage = document.getElementById("random-image");

randomImage.addEventListener("click", async () => {
  try {
    const response = await fetch("https://picsum.photos/500"); // Change the size as needed
    if (response.ok) {
      randomImage.src = response.url;
    } else {
      console.error("Error fetching image from API.");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
});
