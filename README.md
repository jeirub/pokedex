# pokedex
HTML, CSS, JS, API

Pokemon Card Generator
Esta es una aplicación web que genera tarjetas de Pokémon utilizando la API de PokeAPI. Cada tarjeta de Pokémon muestra el nombre, tipo, número y una imagen del Pokémon.
Cómo funciona:
La aplicación se construyó utilizando HTML, CSS y JavaScript. A continuación, se explica cómo funciona paso a paso:
Configuración inicial:
Se define un contenedor HTML con el ID 'poke-container' en el archivo HTML. Este contenedor se utiliza para mostrar las tarjetas de Pokémon.
html
Copy code
<div id="poke
container"></div>
Se establece la variable pokemon_count para determinar el número máximo de Pokémon que se recuperarán de la API. En este caso, se ha configurado para obtener los primeros 150 Pokémon.
Obtener datos de la API:
Utilizamos JavaScript para realizar solicitudes a la API de PokeAPI. La función fetchPokemons se encarga de esto. Itera a través de los ID de Pokémon del 1 al pokemon_count y llama a la función getPokemon para cada ID.
La función getPokemon toma un ID de Pokémon como argumento, construye la URL de la API y utiliza fetch para obtener los datos del Pokémon con ese ID. Luego, convierte la respuesta en formato JSON.
Crear tarjetas de Pokémon:
La función createPokemonCard se utiliza para crear una tarjeta de Pokémon con los datos obtenidos de la API.
Se crea un elemento <div> para representar la tarjeta de Pokémon. Se establece un color de fondo en función del tipo del Pokémon.
Se crean elementos HTML para mostrar el nombre, tipo, número e imagen del Pokémon.
Todos estos elementos se agregan a la tarjeta de Pokémon, que luego se agrega al contenedor 'poke-container' en el documento HTML.
Ejecución:
Al final del código, se llama a la función fetchPokemons para iniciar la obtención de datos y crear las tarjetas de Pokémon. Las tarjetas se generan y se muestran en el contenedor 'poke-container'.
Cómo utilizar la aplicación
Descarga todos los archivos de este repositorio en tu computadora.
Abre el archivo HTML en un navegador web compatible.
La aplicación cargará automáticamente y comenzará a mostrar las tarjetas de los primeros 150 Pokémon.
Puedes hacer clic en cada tarjeta para ver más detalles del Pokémon si lo deseas
