const pokeGrid = document.querySelector('.pokeGrid')
const loadButton = document.querySelector('.loadPokemon')
const newButton = document.querySelector('.newPokemon')

loadButton.addEventListener('click', () => {
    loadPage()
})

async function getAPIData(url) {
    try {
        const response = await fetch(url) // try getting data from the API at the url provided
        const data = await response.json() // convert the response into JSON
        return data // return the data from the function to whoever called it
    } catch (error) {
        // must have been an error
        console.log(error)
    }
}

function populateNewPokemon(singlePokemon) {
    //console.log(singlePokemon.stats[0])
    // use the same html as in the CodePen Card flip example
    let pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    let pokeCard = document.createElement('div')
    pokeCard.className = 'card'
    pokeCard.addEventListener('click', () => {
        pokeCard.classList.toggle('is-flipped')
    })
    
    pokeCard.appendChild(newPokemonFront(singlePokemon))
    pokeCard.appendChild(newPokemonBack(singlePokemon))
    pokeScene.appendChild(pokeCard)
    pokeGrid.appendChild(pokeScene)
}

function newPokemonFront(pokemon) {
    let pokeFront = document.createElement('div')
    pokeFront.className = 'card__face card__face--front'
    let frontLabel = document.createElement('p')
    frontLabel.textContent = pokemon.name
    let frontImage = document.createElement('img')
    frontImage.src = './images/pokeball.png' 
    pokeFront.appendChild(frontImage)
    pokeFront.appendChild(frontLabel)
    return pokeFront
}

function newPokemonBack(pokemon) {
    let pokeBack = document.createElement('div')
    pokeBack.className = 'card__face card__face--back'
    let backLabel = document.createElement('p')
   
    let hp = document. createElement('p')
    hp.textContent = `HP: ${pokemon.hp}`
    pokeBack.appendChild(hp)
    return pokeBack
}



class Pokemon {
    constructor(name, height, weight, abilities, moves, hp) {
        this.id = 900
        this.name = name
        this.height = height
        this.weight = weight
        this.abilities = abilities
        this.moves = moves
        this.hp = hp
    }
  }

newButton.addEventListener('click', () => {
    let pokeName = prompt("What is the name of your new Pokemon?")
    let pokeHeight = prompt("Pokemon height?")
    let pokeWeight = prompt("Pokemon weight?")
    let pokeHealth = prompt("Pokemon's health points?")
    let newPokemon = new Pokemon(
        pokeName,
        pokeHeight,
        pokeWeight,
        ['eat', 'sleep'],
        ['study', 'code', 'silence'],
        pokeHealth
    )
    console.log(newPokemon)
    populateNewPokemon(newPokemon)
    //populatePokeCard(newPokemon)
})

function loadPage() {
    getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=25`).then(
        async (data) => {
            for (const singlePokemon of data.results) {
                await getAPIData(singlePokemon.url).then(
                    (pokeData) => populatePokeCard(pokeData)
                )
            }
        }
    )
}

function populatePokeCard(singlePokemon) {
    //console.log(singlePokemon.stats[0])
    // use the same html as in the CodePen Card flip example
    let pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    let pokeCard = document.createElement('div')
    pokeCard.className = 'card'
    pokeCard.addEventListener('click', () => {
        pokeCard.classList.toggle('is-flipped')
    })
    
    pokeCard.appendChild(populateCardFront(singlePokemon))
    pokeCard.appendChild(populateCardBack(singlePokemon))
    pokeScene.appendChild(pokeCard)
    pokeGrid.appendChild(pokeScene)
}

function populateCardFront(pokemon) {
    //console.log(pokemon)
    let pokeFront = document.createElement('div')
    pokeFront.className = 'card__face card__face--front'
    let frontLabel = document.createElement('p')
    frontLabel.textContent = pokemon.name
    let frontImage = document.createElement('img')
    frontImage.src = `images/${getImageFileName(pokemon)}.png` 
    pokeFront.appendChild(frontImage)
    pokeFront.appendChild(frontLabel)
    return pokeFront
}

function populateCardBack(pokemon) {
    let pokeBack = document.createElement('div')
    pokeBack.className = 'card__face card__face--back'
    let backLabel = document.createElement('p')
    backLabel.textContent = `Moves: ${pokemon.moves.length}`
    backLabel.className = 'moves'

    let hp = document.createElement('p')
    hp.textContent = `HP: ${pokemon.stats[0].base_stat}`
    //console.log(pokemon.stats[0].base_stat)
    pokeBack.appendChild(hp)
    pokeBack.appendChild(backLabel)
    return pokeBack
}



//backLabel.textContent = `HP: ${pokemon.stats.length}`

function getImageFileName(pokemon) {
    if (pokemon.id < 10) {
        return `00${pokemon.id}`
    } else if (pokemon.id > 9 && pokemon.id < 100) {
        return `0${pokemon.id}`
    } //else return `images/pokeball.png`
}

//Thor's way to get images
/*function getImageFileName(pokemon) {
    let pokeId
    if (pokemon.id < 10) pokeId = `00${pokemon.id}`
    if (pokemon.id > 9 && pokemon.id < 100) pokeId = `0${pokemon.id}`
    if (pokemon.id > 99 && pokemon.id < 810) pokeId = pokemon.id
    if (pokemon.id === 900) {
        return `images/pokeball.png`
    }
    return `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokeId}.png`
}*/