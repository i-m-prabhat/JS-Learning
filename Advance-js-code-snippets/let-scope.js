// According to ES6 : 
// 3 Types of scope
// Global Scope : Defined at Global
// local Scope : defined within some function
// Block Scope : defined within {}


var name = 'vikas'; //global

function display(){

	console.log(name); //local
	let rollno = 1001;

	console.log(rollno);

	{ //Block - Start
		let marks = 100;
		console.log(marks); //Block Scope
	} //Block - End

	// console.log(marks);
	console.log(rollno); //local
	console.log(name); //global

}

display();
console.log(name);


//declaration var : global,local
