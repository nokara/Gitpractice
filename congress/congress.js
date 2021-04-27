import { senators } from '../data/senators.js'
import { representatives } from '../data/representatives.js'
import { removeChildren } from '../utils/index.js'

let republicans = representatives.filter(rep => rep["party"] == "R")
let democrats = representatives.filter(rep => rep["party"] == "D")
// let independents = representatives.filter(rep => rep["party"] == "ID")


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
        let personDiv = document.createElement('div')
        personDiv.className = 'figureDiv' 
        let personFig = document.createElement('figure')
        let figImg = document.createElement('img')
        let figCaption = document.createElement('figcaption')

        let partyIcon = document.createElement('i')
        if (person.party === 'R') partyIcon.className = 'fas fa-republican'
        if (person.party === 'D') partyIcon.className = 'fas fa-democrat'
        //if (person.party === 'ID') partyIcon.className = 'fas fa-mitten'

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

//SCROLL
toTop = document.getElementById("toTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction( {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
