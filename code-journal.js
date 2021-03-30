/* Variables - containers that store values */

var name // a declared variable, but not initialized (no value) and it's in the global scope (BAD)

let foo // a declared variable that can be changed

const bar = 'Bar' // a declared variable that cannot be changed - short for 'constant'

// '=' is the assignment operator, read it as "is assigned the value of..."

const ANSWER = 42

// Strings

let string1 = "Hello World!"

let string2 = 'Hello Utah!'

let string3 = new String("Hello New World!")


let myNum = 30547023284

let myNum2 = 74.89

"1" == 1 //true because of the type coercion and loose equality checking
"1" === 1//false because this is strict equality checking

// Boolean

let myBool = false


//Array

let myArray = [] //this is an empty array

//               0     1      2       3      4
let my Array2 = [42, "Bob", myBool, ANSWER, true]

myArray2.length


//Objects - order doesn't matter like it does in an array. full of properties.
const myCar = {
    make: "Chevrolet",
    color: "Red",
    year: "1965",
    vin: "3809y40ndsopj320",
};

//adding a property. add doors (will be randomly inserted)
myCar.numDoors = 2

//more complex Objects
const anotherObject = {
    wordz: ['foo', 'bar', 'bats'],
    car: {
        make: 'McLaren',
        model: '8937'
    },
    awesome: true;
}


//Functions - the parenthases indicate that a function is involved and that you want to execute this function

function myFunction () {
    return "My greeting to you...";
}

//Parameters - one and two only allows two parameters, you don't know the data type, these are just parameters
function sumTwoThings(one, two){
    return one + two;
}
//following ^ this ^ function 
sumTwoThings(2,2) //=4
sumTwoThings('2','2') //"22"
sumTwoThings('4', 5) // "45". Strings will make the number a string. cannot add strings and numbers, it would just be a concatenation
sumTwoThings('4',{foo: 'bar'}) //"4[object Object]"
sumTwoThings('4', myFunction) //"4function my Function(){return 'My greeting to you...'}"

//ARROW FUNCTIONS
//Takes parameters and returns what is on the right side of the arrow.
//for the array 1, call the find function,

/* EXAMPLE
const array1 [ 5, 12, 8, 140, 144];
const found =array1.find(element => element > 10)
 console.log(found);
 ---output should be 12 */

//no parameters, simplest arrow function
 const thefunction =() => "I am awesome"

 // a higher order function is a function that accepts another function as a parameter.
// filter, map and reduce are the most popular, but forEach, every, find, and some are also HOFs

//Filter method example. Filter returns an array of all elements that "pass the test"

const pilots = [
    {
      id: 2,
      name: "Wedge Antilles",
      faction: "Rebels"
    },
    {
      id: 8,
      name: "Ciena Ree",
      faction: "Empire"
    },
    {
      id: 40,
      name: "Iden Versio",
      faction: "Empire"
    },
    {
      id: 66,
      name: "Thane Kyrell",
      faction: "Rebels"
    }
  ];

  //filtering the faction properties to only return "rebels." 
  //READ first part: a const called rebels is assigned the value of..the pilots array and, we call .filter on it, and then we pass in our function where we take the singular item (we make up the name we want to call it) : "pilot"
   //READ second part, body of arrow function. If pilot's faction property is equal to the string "rebels" then put it into our (const) "rebels" array
  const rebels = pilots.filter((pilot) => pilot.faction === "Rebels");
  //OR this. if you have multiple lines, include a return statement
  const empire = pilots.filter((pilot) => {
    return pilot.faction === "Empire";
  });


  // Array helper method 'map' makes a new array "pilotsWithDate"
//toLocaleDateString is the date format. also, .map adds a new property. in this case we added the "date" property
const pilotsWithDate = pilots.map((pilot) => {
    let date = new Date();
    pilot.date = date.toLocaleDateString("en-US");
    return pilot;
  });

  let filmURLs = [
    "https://swapi.co/api/films/",
    "https://swapi.co/api/films/5/",
    "https://swapi.co/api/films/4/this one is longer... even longer",
    "https://swapi.co/api/films/6/",
    "https: ",
    "https://swapi.co/api/films/1/"
  ];
  
  const filmLengths = filmURLs.map((filmURL) => filmURL.length);
  
  //below, just addin a property to filmObj
  const filmPlusMore = filmURLs.map((filmURL) => {
    let filmObj = {
      index: filmURL,
      foo: "Bar"
    };
    return filmObj;
  });



  //REDUCE will give you one element from the array that you want to calculate
  
list of pilots here:


//take the accumulated value and add it to ever pilot that comes through as you loop through the years property starting w/ zero?
  const totalYears = pilots.reduce((acc, pilot) => pilot.years, 0) //accumulates pilot years


  //find out who is the most experienced pilot?
  //accumulator is named oldest
 
  const mostExpPilot = pilots.reduce((oldest, pilot)=> {
      return (oldest.years || 0) > pilot.years ? oldest : pilot
  }, {})

//Ternary operator syntax: condition ? exprIfTru : expIfFalse
// (?=true, :=false)

Another list of personell

//FILTER
let jediPersonnel = personnel.filter(person => person.isForceUser)
//if isForceUser is true, then it will add that person to the list

//MAP
let jediScores = jediPersonnel.map(jedi => jedi.pilotingScore + jedi.shootingScore)
//piloting score + jedi score

//REDUCE, add all the total jedi scores
//TODO: how to read this line?
let totalJediScore = jediScores.reduce((acc, score)=> acc + score, 0)

//CHAIN filter, map, and reduce
const totalJediScoreChained = personnel
.filter(person => person.isForceUser)
.map(jedi => jedi.pilotingScore + jedi.shootingScore)
.reduce((acc, score) => acc + score, 0)

//combine teranary operator
const totalJediScoreReduced = personnel.reduce((acc, person) => person.isForceUser ? acc + 
person.pilotingScore + person.shootingScore : acc, 0)