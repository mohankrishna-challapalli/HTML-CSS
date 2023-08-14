// Get a reference to the DOM element with the ID "poke-container"
const poke_container = document.getElementById("poke-container");

// Total number of Pokemon to be displayed
const pokemon_count = 150;

// Colors associated with different Pokemon types
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

// An array containing the main Pokemon types
const main_types = Object.keys(colors);

// Function to fetch data for all the Pokemons
const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i); // Fetch data for each Pokemon and create its card
  }
};

// Function to fetch data for a specific Pokemon using its ID
const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  createPokemonCard(data); // Create a card for the fetched Pokemon data
};

// Function to create a card for a specific Pokemon
const createPokemonCard = (pokemon) => {
  // Create a <div> element with the class "pokemon"
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");

  // Extract and format Pokemon name and ID
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const id = pokemon.id.toString().padStart(3, "0");

  // Get an array of Pokemon types
  const poke_types = pokemon.types.map((type) => type.type.name);

  // Find the main Pokemon type for determining the background color
  const type = main_types.find((type) => poke_types.indexOf(type) > -1);
  const color = colors[type];

  // Set the background color of the Pokemon card
  pokemonEl.style.backgroundColor = color;

  // Define the inner HTML content of the Pokemon card
  const pokemonInnerHTML = `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${name}">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span> </small>
    </div>
    `;

  // Set the inner HTML content of the Pokemon card
  pokemonEl.innerHTML = pokemonInnerHTML;

  // Append the Pokemon card to the poke_container
  poke_container.appendChild(pokemonEl);
};

// Fetch data for all Pokemons and create their cards
fetchPokemons();
