// There are Two types of functions
// Procedural Function and Anonymous Function,
// IIFE  : Immediately Invoked Function Expression (function())();


//Procedural Function
function greet(msg){
	return `Hello ,${msg} Welcome, To Advance Js`;
}

console.log(greet('Good Evening.. from Procedural Function.'));

//Procedural Function
let greet2 = function(){
	console.log('Hy Good Evening Again from greet2..from Anonymous function');
}

greet2();

//IIFE : 
// 1 there parts
// Grouping function with Anonymous function
// 2 there parts
// Grouping function without Anonymous function // definition
// Grouping function or grouping Operator  // calling
// () 

(function(){
	console.log('Hy I am Greeting from IIFE');
})();


// Arrow Function : ES6
// Arrow Function : shortcut or Short Hand Notation of Definining A Function
// Angular-Js Vue-js,Node,Express-js,Angular,TypeScript,React-js, React-native
// Ionic
// It is also called as Fat Function,

//Arrow Function
let wish = () => {
	console.log('This is wish funtion from Array Function ')
}

wish();

//Arrow Function with Arguments
let info = (name,course) => {
	console.log(`Hy,${name} and Your course is: ${course}`)
}

info('Vikas','Mean and Mern Stack');

//Arrow Function with multiple statement inside Body
let Studentinfo = (name,course) => {

	let age = 22;

	console.log(`Hy,${name}`);
	console.log(`Your course is: ${course}`);
	console.log(`Your Age is: ${age}`);

}

Studentinfo('Vikas','Mean and Mern Stack');

//Arrow Function with single statement inside Body

let display = (name,course) => {console.log(`Hy from display,${name} and course is ${course}`);}

display('Vikas','Mean and Mern Stack');


//Arrow Function with single statement inside Body

let arrow_function = name => console.log(`Hy from arrow function ,${name}`);

arrow_function('Vikas','Mean and Mern Stack');
console.log(typeof(arrow_function));

//returning from Arrow function requires return keyword,statement when you use {} 
const sum = (a,b) => { return a+b };
console.log(sum(10,20));

//returning from Arrow function donot require return keyword statement when dont use {}
// In this case we can use only single statement expression.
const add = (a=2,b=3) => a+b;
console.log(add(100,200));

//How to re-declare Arrow Function

var name = () => {console.log('Hy This is name arrow function.')}
name();

var name = () => {console.log('Hy This is Another name arrow function.')}
name();
