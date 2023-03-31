console.log("Hello Bachho");

//Variables, Constants And comments

var score = 34;
var score = 54; // Redeclare and reAssigned
console.log(score);

let points = 23;

console.log(points);


// Constants

// const value = 10;

const value = 18;
console.log(value);


// Data Types of Values

// 7 data Types

// Number 1,2,37,4,58,8,8.9

// String "I am String", "34", 'Also String'

// Boolean true/false

// Null Intentionally absence of value

// let score = null;
// score = 34;
// console.log(score);

// Undefined Variable declared but not initialized

// let point;
// point = 13;
// console.log(point);

// Object Complex data structure

// Symbol Looks Like Object 





// Strings
console.log("Hello Coders");
let firstname = "Wow";
let lastname = "Programmer";
// console.log(firstname,lastname);

// String Concatination

// Method 1 Using + Operator

// let fullname = firstname + " " + lastname;

// Method 2 using Template Litrals 
let fullname = `I want to become ${firstname} ${lastname}`
console.log(fullname);

// Getting String Character
// console.log(firstname[2])

// String Methods

console.log(firstname.toUpperCase());
console.log(lastname.indexOf("m"));

// Common String Methods

let hobbies = '    coding reading running     ';
// trim method 

let result = hobbies.trim();
// console.log(hobbies);

// indexOf 

console.log(result.lastIndexOf("Running")) // Case Sensitive 

// include method

console.log(result.includes("Running")) // Case Sensitive 


// slice method 

let fname = "wowProgrammer"
console.log(fname.slice(0.8)) // Excluding last one 0 - 7

let res = fname.slice(0, 4) // 0-3

// Img Note Does not mutate original String.

console.log("Originam String = ", fname);
console.log("Extracked String = ", res);


// String "split method"

let favoriteColors = "Brown,Blue,Black,Gray";

let arrColors = favoriteColors.split(",");
// string to array

console.log(arrColors);

// JavaScript strings are Immutable

let str = "Hello";

str[0] = "p";

str[1] = "q";

// There will be no change in "str" varible;

console.log(str);

str = str + "Programmer";
console.log(str);




// Numbers

let score2 = 50;
console.log(score2, typeof score2);

// Mathematicall Operators * / - + % **

// let result = score/2; // Give Quotient
// let result = score%2; // Give Remainder

// Mathmaticall Expression

let result2 = score * 2 + (4 * 3) - 8 / 2 % 4; // 100+12-0
// Using Priority And Precedence
// 1 () Brackets
// 2 ** Power Operator
// 3 * / % (from left to right)
// 4 + - (from left to right)

console.log(result2);

// Concatination of Numbers

let resultLine = 'My Total Score is = ' + result;
console.log(resultLine);


// Loose Equality (==) Vs Strict Equality Operator (===)

// Loose Equality Operator ==

let age = 22;
// console.log(age === "22") // Focus on both value But Not Type

console.log(age != "22")

// Strict Equality Operator 

// console.log(age === "22"); // Focus on value and its type 

console.log(age !== "22");




// Type Conversion 

let stringType = "54";

console.log(stringType, typeof stringType);

//Number Method 

let numberType = Number(stringType);

console.log(numberType, typeof numberType);

// Imp Note
// In Nuumber method passing String Must be of numeric Values

let numberTyp = 54;
console.log(typeof numberTyp)
// String Method

let stringTyp = String(numberTyp);

console.log(stringTyp, typeof stringTyp);

// Boolean Method true/false

// let age2 = 32;
let age2 = ""; //Empty string
let booleanValueOfAge = Boolean(age2);

console.log("Boolean Value of age is ", booleanValueOfAge)


// Arrays

let dishes = ["Biryani", 'Chat', "Parathay"];

// Access
console.log(dishes[2]);

// Modify The Array

dishes[0] = "Karahai";
console.log(dishes)

// Array Methods

// Join Method

console.log(dishes.join(' '));

// indexOf
console.log(dishes.indexOf("chat"));// case Sensitive

// concat method

let newDishes = ["sweet-dish", 'Pani-puri'];

console.log(dishes.concat(newDishes));
let updateddishes = dishes.concat(newDishes);

// Length method

console.log(updateddishes.length);

//push method
console.log(updateddishes.push("Bhallay")) // return new length of array

console.log(updateddishes)


// pop() method

console.log(dishes.pop());




// Boolean Value And Comparision Operators

let booleanType = true;
let stringTypee = "true";

console.log(typeof booleanType, typeof stringTypee);

// Methods Return Boolean Values

let email = "wowcoder@example.com";

let booleanValue = email.includes("@");
console.log(booleanValue);

// Comparision Operators Always Return Boolean value
// ==, ===, !==, !=
// >, >=
// <, <=

// let status = "low"
// console.log(status == "low");
let status = 23
console.log(status == "23");








