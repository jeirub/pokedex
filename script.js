const poke_container = document.getElementById('poke-container')
const pokemon_count = 150
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}

const main_types = Object.keys(colors)

const fetchPokemons = async () => {
    for(let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data)
}



const createPokemonCard = (pokemon) => {
    const pokemonCard = document.createElement('div'); // Se crea un elemento <div> para representar la tarjeta de pokémon.
    pokemonCard.classList.add('pokemon'); // Se agrega una clase CSS 'pokemon' al elemento <div>.

    const type = pokemon.types[0].type.name;
    pokemonCard.style.backgroundColor=colors[type];

    const name = document.createElement('h3'); // Se crea un elemento <h2> para mostrar el nombre del pokémon.
    name.classList.add('name');
    name.textContent = pokemon.name; // Se establece el nombre del pokémon en el elemento <h2>.

    const typeElement = document.createElement('p'); // Se crea un elemento <p> para mostrar el tipo del pokémon.
    typeElement.innerText = `Type: ${pokemon.types[0].type.name}`; // Se establece el tipo del pokémon en el elemento <p>.

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    
    const img = document.createElement('img'); // Se crea un elemento <img> para mostrar la imagen del pokémon.
    img.src = pokemon.sprites.front_default; // Se establece la URL de la imagen del pokémon.

    imgContainer.appendChild(img);
    pokemonCard.appendChild(imgContainer)


    const number = document.createElement('span');
    number.classList.add('number');
    number.textContent = `#${pokemon.id.toString().padStart(3,"0") }`;

    const info = document.createElement('div');
    info.classList.add('info');
    info.appendChild(number);
    info.appendChild(name);
    info.appendChild(typeElement);

    pokemonCard.appendChild(info);

 
    
    poke_container.appendChild(pokemonCard); // Se agrega la tarjeta del pokémon al contenedor 'poke_container'.
    
    
}

fetchPokemons()