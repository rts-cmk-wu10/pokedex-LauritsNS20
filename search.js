const DATALIST = document.querySelector("#pokemonData")
const POKEMONSEARCHBAR = document.querySelector(".pokemonSearchBar")

POKEMONSEARCHBAR.addEventListener("focus", getDatalist)
POKEMONSEARCHBAR.addEventListener("focusout", function(event) {
POKEMONSEARCHBAR.removeEventListener("focus", getDatalist)
})

function getDatalist(event) {
fetch("https://pokeapi.co/api/v2/pokemon?limit=10000")
.then(function(response) {

    return response.json()
})
.then(function(data){
    data.results.forEach(function(pokemon) {
        DATALIST.innerHTML += `<option>${pokemon.name}</option>`
    })
})
}