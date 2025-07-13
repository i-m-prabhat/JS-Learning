//Object Can used to define the space sperated Functions



/*
let name = 'Vikas';
function speak my name(){
	console.log(`Your name is  ${name}`);
}

*/

let main = {
	name:'Vikas Jindal',
	"speak my name"(){
		console.log(`Your name is  ${this.name}`);
	},
}

main['speak my name']();

// Object Literal Can be used defined to return from function

function userObject(name,age){
	return {
		"name":name,
		"age":age,
	};
}

let user = userObject('Salman',50);


console.log(userObject('Awnish',25));
console.log(` The name of user is : ${user.name}`);
console.log(` The age of user is  : ${user.age}`);


function userObject2(name,age){
	return {name,age};
}

let celebrity = userObject2('Shahrukh Khan',30);



console.log(` The name of celebrity is : ${celebrity.name}`);
console.log(` The age of  The age of user is  : ${celebrity.age}`);