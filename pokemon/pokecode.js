const pokeGrid = document.querySelector('.pokeGrid')
const loadButton = document.querySelector('.loadPokemon')

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

function loadPage() {
    getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=25`).then(
        (data) => {
            for (const singlePokemon of data.results) {
                populatePokeCard(singlePokemon)
            }
        }
    )
}

function populatePokeCard(singlePokemon) {
    //use same html as in the CodPen Card flip example
    letpokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    letpokeCard = document.createElement('div')
    populatePokeCard.className = 'card'
    //make card front and card back
    //append them all to the pokeGrid
    console.log(singlePokemon)
}


function populatePokeCardFront() {
    let pokeFront = document.createElement('div')
    //pokeFront.className = 'card'
}
