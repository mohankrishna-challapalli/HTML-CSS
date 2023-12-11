const cityInformation = {
  hyderabad: {
    title: "Hyderabad",
    description: "The city of pearls and biryani.",
    hospitals: ["City Hospital", "Pearl Medical Center"],
    hotels: ["Luxury Hotel", "Comfort Inn"],
    emergencyContact: "123456789",
  },
  chennai: {
    title: "Chennai",
    description: "Gateway to the South.",
    hospitals: ["Southern General Hospital", "Coastal Health Center"],
    hotels: ["Seaside Resort", "City Comfort Suites"],
    emergencyContact: "987654321",
  },
  bengaluru: {
    title: "Bengaluru",
    description: "The Silicon Valley of India.",
    hospitals: ["Tech Health Hospital", "Garden City Medical Center"],
    hotels: ["Tech Plaza Hotel", "Green View Inn"],
    emergencyContact: "555555555",
  },
};

function showSelectedCity() {
  const selectedCity = document.getElementById("city-dropdown").value;
  if (selectedCity !== "select") {
    const details = cityInformation[selectedCity];
    displayCityDetails(details);
  }
}

function hideCityInformation() {
  document.getElementById("city-details").style.display = "none";
}

function displayCityDetails(details) {
  document.getElementById("city-title").textContent = details.title;
  document.getElementById("city-description").innerHTML = `${
    details.description
  }<br><strong>Hospitals:</strong> ${details.hospitals.join(
    ", "
  )}<br><strong>Hotels:</strong> ${details.hotels.join(
    ", "
  )}<br><strong>Emergency Contact:</strong> ${details.emergencyContact}`;
  document.getElementById("city-details").style.display = "block";
}
