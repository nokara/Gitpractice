import { starships } from '../data/starships.js'
//console.log(starships[3].name)


const main = document.querySelector('main')
const navList = document.getElementById('navList')
//console.log(navList)
const shipView = document.querySelector('.shipView')

function populateNav() {
    starships.forEach((starship, index) => {
        // let i = index
        // console.log(i)
        let listItem = document.createElement('li')
        listItem.textContent = starship.name
        //console.log(listItem)

        navList.appendChild(listItem)
        populateShipView(starship,index)
    })
}

function populateShipView(shipData,index){
    let shipImage = document.createElement('img')
    //et shipNum = shipData
    shipImage.src = `https://starwars-visualguide.com/assets/img/starships/${index}.jpg`
    shipView.appendChild(shipImage)
}

populateNav()

//populateShipView()


