// According to ES6 : 
// 3 Types of scope
// Global Scope : Defined at Global
// local Scope : defined within some function
// Block Scope : defined within {}


console.log("Demo Program of Const");

var name = 'vikas'; //global

function display(){

	console.log(name); //local
	const rollno = 1001;

	console.log(rollno);

	{ //Block - Start
		const marks = 100;
		console.log(marks); //Block Scope
	} //Block - End

	console.log(marks);
	console.log(rollno); //local
	console.log(name); //global

}

display();
console.log(name);


//declaration var : global,local
// let and const Both have Same Scope 
// Local and Block Scope
