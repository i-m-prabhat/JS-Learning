// According to ES6 : 
// 3 Types of scope
// Global Scope : Defined at Global
// local Scope : defined within some function
// Block Scope : defined within {}


var name = 'vikas'; //global

function display(){

	console.log(name); //local
	var rollno = 1001;

	console.log(rollno);
	{
		var marks = 100;
		console.log(marks); //local
	}

	console.log(marks);
	console.log(rollno);
	console.log(name);

}

display();
//console.log(marks);
//console.log(rollno);
console.log(name);


//declaration var : global,local
