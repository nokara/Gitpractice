import { films } from '../data/films.js'

/*let itemOne = document.querySelector('#item1')
let itemTwo = document.querySelector('#item2')

itemOne.textContent = films[2].title
itemTwo.textContent = films[1].title
*/

//console.log(films[0],title)

let titleList = document.querySelector('.titleList')

for (let i = 0; i < films.legnth; i++) {
    const foundFilm = films.find(film => getLastNumber(film.url) === (i + 1))

let title = films[i].title
let newItem = document.createElement('li')
newItem.textContent = title
titlelist.appendChild(newItem)


console.log(foundFilm)

function getLastNumber(url) {
    let end = url[url.length - 2]
    return parseInt(end, 10)
}