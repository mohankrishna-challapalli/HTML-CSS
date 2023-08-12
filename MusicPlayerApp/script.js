// JavaScript code to fetch and display music from the Deezer API
// Remember to sign up on Deezer and get an API key

const apiKey = "YOUR_DEEZER_API_KEY";
const trackId = "TRACK_ID"; // Replace with a valid track ID from Deezer

const coverImg = document.getElementById("cover-img");
const trackTitle = document.getElementById("track-title");
const artistName = document.getElementById("artist-name");
const audioSource = document.getElementById("audio-source");

const apiUrl = `https://api.deezer.com/track/${trackId}?output=jsonp&callback=?`;

$.ajax({
  url: apiUrl,
  dataType: "jsonp",
  success: function (data) {
    coverImg.src = data.album.cover_medium;
    trackTitle.textContent = data.title;
    artistName.textContent = data.artist.name;
    audioSource.src = data.preview;
  },
  error: function () {
    console.error("Error fetching data from Deezer API.");
  },
});
