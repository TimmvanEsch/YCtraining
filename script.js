const pokemonList = document.getElementById('pokemon')
const charmanderList = document.getElementById('charmander')
const charmanderBtn = document.getElementById('charmanderinfo');


fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
  .then(response => response.json().then(pokemons => {
    pokemons.results.forEach(pokemon => {
      console.log(pokemon);

      const li = document.createElement('li');
      li.textContent = pokemon.name

      pokemonList.appendChild(li);
    });
  }
)); 

const fetchCharmander = () => {
  fetch('https://pokeapi.co/api/v2/pokemon/charmander')
    .then(response => response.json().then(charmander => {
      charmander.abilities.forEach(ability => {
        console.log(ability.ability.name);

        const ch = document.createElement('li');
        ch.textContent = ability.ability.name;

        charmanderList.appendChild(ch);
      });
    }
  ));
}

charmanderBtn.addEventListener('click', fetchCharmander);

