/* data types in js
On the basis of How data stored in memory and how data will be access from memory
Data types in JavaScript are two types.

1. Primitive DataTypes

    7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


2. Non Primitive/Reference Datatypes

    Array, Objects, Functions
*/

const score = 100;
const scoreValue = 100.3;

const isLoogedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 34564581541244545n

// -----------------------------------------------------------------

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "prabhat",
    age: 21,
}

const myFunction = function ()
{
    console.log("Hello world");
}

console.log(typeof bigNumber);//bigInt
console.log(typeof outsideTemp);// null > object
console.log(typeof scoreValue); // number

console.log(typeof heros)
console.log(typeof myObj)


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Memory in Js 

//  Stack (Primitive), Heap (Non-Primitive)

let name = "king"

let anothername = name;
anothername = "kohli"

console.log(name)
console.log(anothername)

let userOne = {
    email: "user@google.com",
    upi: "user@apl"
}

let userTwo = userOne

userTwo.email = "prabhat@google.com"

console.log(userOne.email)
console.log(userTwo.email)