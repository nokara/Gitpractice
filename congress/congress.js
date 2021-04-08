import { senators } from '../data/senators.js'
import { representatives } from '../data/representatives.js'

//console.log(representatives[5]["party"])
let republicans = representatives.filter(rep => rep["party"] == "R")
let democrats = representatives.filter(rep => rep["party"] == "D")
let independents = representatives.filter(rep => rep["party"] == "ID")


const congressGrid = document.querySelector('.congressGrid')
const seniorityButton = document.querySelector("#seniorityButton")
const birthdayButton = document.querySelector("#birthdayButton")


///// button stuff ///////
const repubButton = document.querySelector('#republicans')
const demButton = document.querySelector('#democrats')
const inButton = document.querySelector('#independents')
const bdayButton = document.querySelector('#birthdaybutton')
const senButton = document.querySelector('#seniorityButton')

repubButton.addEventListener('click', () => {
    //emptySection()
    populateCongressDiv(getSimplifiedPeople(republicans))
})
demButton.addEventListener('click', () => {
    //emptySection()
    console.log("dem button")
    populateCongressDiv(getSimplifiedPeople(democrats))
})
demButton.addEventListener('click', () => {
    //emptySection()
    populateCongressDiv(getSimplifiedPeople(independents))
})


/////////// functions //////////////
function populateCongressDiv(simplifiedList) {
    //emptySection()
    simplifiedList.forEach(person => {
        let personDiv = document.createElement('div')
        personDiv.className = 'figureDiv' 
        let personFig = document.createElement('figure')
        let figImg = document.createElement('img')
        let figCaption = document.createElement('figcaption')

        figImg.src = person.imgURL
        figCaption.textContent = person.name

        personFig.appendChild(figImg)
        personFig.appendChild(figCaption)
        personDiv.appendChild(personFig)
        congressGrid.appendChild(personDiv)
    })
}


function getSimplifiedPeople(peopleList) {
    return peopleList.map(person => {
        let middleName = person.middle_name ? ` ${person.middle_name}` : ``
        return {
            id: person.id,
            name: `${person.first_name} ${middleName} ${person.last_name}`,
            imgURL: `https://www.govtrack.us/static/legislator-photos/${person.govtrack_id}-100px.jpeg`
        }
    })
}
//console.log(getSimplifiedPeople(republicans))
function emptySection(){
    while (congressGrid.firstChild) {
        congressGrid.removeChild(congressGrid.firstChild);
    }
}




function showRepublicans() {
    //const repubs = representatives.filter(rep => rep.party === 'R')
    // TODO:  Looks like filter first then map would be best
    const repubs = representatives.map(rep => {
        let smallRepub = {}
        if (rep.party === 'R') {
                smallRepub.id = rep.id
                smallRepub.name = `${rep.first_name} ${rep.middle_name} ${rep.last_name}`
        }
        return smallRepub
    })
}