// Define your Deezer API key and track ID
const apiKey = "YOUR_DEEZER_API_KEY";
const trackId = "TRACK_ID"; // Replace with a valid track ID from Deezer

// Get references to HTML elements
const coverImg = document.getElementById("cover-img");
const trackTitle = document.getElementById("track-title");
const artistName = document.getElementById("artist-name");
const audioSource = document.getElementById("audio-source");

// Construct the API URL using the track ID
const apiUrl = `https://api.deezer.com/track/${trackId}?output=jsonp&callback=?`;

// Make an AJAX request to the Deezer API
$.ajax({
  url: apiUrl,
  dataType: "jsonp",
  success: function (data) {
    // Update the cover image, track title, artist name, and audio source with fetched data
    coverImg.src = data.album.cover_medium;
    trackTitle.textContent = data.title;
    artistName.textContent = data.artist.name;
    audioSource.src = data.preview;
  },
  error: function () {
    console.error("Error fetching data from Deezer API.");
  },
});
