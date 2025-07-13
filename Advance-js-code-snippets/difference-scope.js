// Difference B/w var,let,const
// within the same

var name = 'vikas'; //declaration
console.log(name);
var name = 'awnish'; //redeclaration
console.log(name);
name = 'Ravi'; //Re-Intialisation or Re-Assignment
console.log(name);


let roll=1001; //declaration

//let roll=1002; //re-declaration
//console.log(roll);

roll=1002; //Re-Intialisation or Re-Assignment
console.log(roll);

//const these are used for constant,
// declare once, re-declare, re-assign Not allowed


const gravity = 9.8; //declaration
console.log(gravity);

// const gravity = 9.8; //re-declaration
// console.log(gravity);

// gravity = 10; //Re-Intialisation or Re-Assignment
// console.log(gravity);

{
	const gravity = 10;
	console.log(gravity);
}

