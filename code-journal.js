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


//Objects - order doesn't matter like it does in an array
const myCar = {
    make: "Chevrolet",
    color: "Red",
    year: "1965",
    vin: "3809y40ndsopj320",
};

//add doors (will be randomly inserted)
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

