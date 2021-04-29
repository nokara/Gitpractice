import { senators } from '../data/senators.js'
import { representatives } from '../data/representatives.js'
import { removeChildren } from '../utils/index.js'

let republicans = representatives.filter(rep => rep["party"] == "R")
let democrats = representatives.filter(rep => rep["party"] == "D")
// let independents = representatives.filter(rep => rep["party"] == "ID")

senators.forEach(element => {
    console.log(element.party)
});


const congressGrid = document.querySelector('.congressGrid')

///// button stuff ///////
const repubButton = document.querySelector('#republicans')
const demButton = document.querySelector('#democrats')
// const inButton = document.querySelector('#independents')
const seniorityButton = document.querySelector("#seniorityButton")



repubButton.addEventListener('click', () => {
    populateCongressDiv(getSimplifiedPeople(republicans))
})
demButton.addEventListener('click', () => {
    populateCongressDiv(getSimplifiedPeople(democrats))
})
// inButton.addEventListener('click', () => {
//     populateCongressDiv(getSimplifiedPeople(independents))
// })
seniorityButton.addEventListener('click', () => senioritySort())


/////////// functions //////////////
function populateCongressDiv(simplifiedList) {
    
    removeChildren(congressGrid)
    simplifiedList.forEach(person => {
        //console.log(person)
        let personDiv = document.createElement('div')
        personDiv.className = 'figureDiv' 
        let personFig = document.createElement('figure')
        let figImg = document.createElement('img')
        let figCaption = document.createElement('figcaption')
        PartyImg(person)
        let partyIcon = document.createElement('img')
        partyIcon.src = PartyImg(person)
        partyIcon.className = "icon"

        figImg.src = person.imgURL
        figCaption.textContent = person.name

        personFig.appendChild(figImg)
        personFig.appendChild(figCaption)
        personDiv.appendChild(personFig)
        personDiv.appendChild(partyIcon)
        congressGrid.appendChild(personDiv)
    })
}

function PartyImg(data){
    //console.log(data.party)
    let letter = data.party
    let url = `../images/${letter}.svg`
    return url
}

function getSimplifiedPeople(peopleList) {
    return peopleList.map(person => {
        let middleName = person.middle_name ? ` ${person.middle_name}` : ``
        return {
            id: person.id,
            name: `${person.first_name} ${middleName} ${person.last_name}`,
            imgURL: `https://www.govtrack.us/static/legislator-photos/${person.govtrack_id}-100px.jpeg`,
            seniority: parseInt(person.seniority, 10),
            party: person.party
        }
    })
}

//console.log(getSimplifiedPeople(republicans))

function senioritySort() {
    populateCongressDiv(getSimplifiedPeople(senators).sort((a, b) => a.seniority - b.seniority).reverse())
}


