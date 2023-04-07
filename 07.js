// trim() 
// toUpperCase()
// toLowerCase()
// slice()

let firstName = "prabhat";

console.log(firstName.length);
firstName = firstName.trim(); // "prabhat"
console.log(firstName)
console.log(firstName.length);
firstName = firstName.toUpperCase();
firstName = firstName.toLowerCase();
console.log(firstName);

// start index 
// end index

let newString = firstName.slice(1); // rabhat
console.log(newString);