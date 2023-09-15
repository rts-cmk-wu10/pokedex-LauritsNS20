const URL = new URLSearchParams(window.location.search)

//

fetch(`https://pokeapi.co/api/v2/pokemon/${URL.get("name")}`)
.then(function(response) {
    if (response.status === 200) {
      return response.json()
    } else {
      document.body.innerText += "fejl ikke nogen pokemon til dig"
    }
  })
  .then(function(data) {
   //
    const DIV = document.querySelector(".pokemon")
    DIV.innerHTML =  `
    <h1 class="pokemonName">${data.name}</h1> 
   <span class="imagePlaceholder">
    <svg height="210" width="500"><polygon points="200,10 250,190 160,210"></svg>
    </span>
    <p class="heightOfPokemon">Height: ${data.height}</p>
    <p class="attacks">Abilities</p>
    <ul>${data.abilities.map(
      elem => `<li class="aNames">${elem.ability.name}</li>`
      ).join("")}</ul>`

      const IMG = new Image()
      IMG.src = data.sprites.other["official-artwork"].front_default
      IMG.className = "pokemonPicture"

      IMG.onload = function() {
        DIV.querySelector(".imagePlaceholder svg").style.display = "none"
        DIV.querySelector(".imagePlaceholder").append(IMG)
      }
  })

  //<img src="${(data.sprites.other["official-artwork"].front_default)}">