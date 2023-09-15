const URL = new URLSearchParams(window.location.search)
const OFFSET = parseInt(URL.get("offset") || "0")
const NEXT_PAGE  = document.querySelector(".nextPage")
const LAST_PAGE = document.querySelector(".lastPage")

fetch(`https://pokeapi.co/api/v2/pokemon?offset=${OFFSET}`)
  .then(function(response) { 
  if (response.status !== 200) 
  throw new Error("404") 
  return response.json()
})
.then(function(data) {

  const LAST_OFFSET = data.count - (data.count % 20) 
  NEXT_PAGE.href = `/?offset=${OFFSET >= LAST_OFFSET ? LAST_OFFSET : OFFSET + 20}`
  
  LAST_PAGE.href = `/?offset=${OFFSET <= 0 ? 0 : OFFSET - 20}` 

    const UL = document.querySelector(".pokemonList")
    data.results.forEach(function(result) {
        const LI = document.createElement("li")
        LI.innerHTML = `<a href="/pokemon.html?name=${result.name}">${result.name}</a>`
        UL.append(LI)
    }) 
})
.catch(function(error) {
  console.log(error)
  window.location.href = "/ups.html"
})

















//fetch("https://pokeapi.co/api/v2/pokemon/100")
//.them(res => res.json())
//.them(function(result) {
   // document.body.innerHTML += `<h1>${result.name}</h1>
   // <p>species: ${result.species.name} </p>  
   // <img src"${result.sprites.other.dream_world.front_default}" alt></img>`  
//}) 

// statuskoder 
// 200 = success, 300 = nedirects, 400 = client errors, 500 = server errors.