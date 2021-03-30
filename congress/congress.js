import { senators } from '../data/senators.js'
import { representatives } from '../data/representatives.js'

const repubButton = document.querySelector('#republicans')

repubButton.addEventListener('click', () => {
    showRepublicans()
})

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