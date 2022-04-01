let PokeName = document.querySelector("#pokemon-name")
let PokemonId = document.querySelector("#pokemon-id")
let img = document.querySelector("#pokemon-img")

let PokeDiv = document.querySelector(".pokemon-div")






async function showPokemon() {

    // read our JSON
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/`) ;
   
    let pokeInfo =  await response.json();
    console.log(pokeInfo)
    
    pokeInfo.results.forEach( async (pokemon) => {
        let pokeRes =  await fetch(pokemon.url)
        let info = await pokeRes.json()
        let newImg = document.createElement("img")
        newImg.src = info.sprites.front_default
        PokeDiv.appendChild(newImg)
        let PokemonName = document.createElement("h2")
        PokemonName.textContent = pokemon.name
        PokeDiv.appendChild(PokemonName)
        pokemonInfo()
    })
   
    
    //
    //PokeName.textContent = pokeInfo.name
   
  
}

showPokemon()


async function pokemonInfo() {
      
    let response = await fetch(`https://pokeapi.co/api/v2/ability/`);
    let info = await response.json();
    console.log(info)
    info.results.forEach( async (ability) => {
       let abilityRes =  await fetch(ability.url)
       let abilityInfo = await abilityRes.json()
       let description = document.createElement("p")
       description.textContent = abilityInfo.effect_entries[1].effect
       PokeDiv.appendChild(description)
       console.log(abilityInfo.effect_entries)
    })
       
     

    

  
    

    


}

