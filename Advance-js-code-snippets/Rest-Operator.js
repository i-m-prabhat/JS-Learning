// Rest Operator In ES6

function add(x,y,z){
	return parseInt(x)+parseInt(y)+parseInt(z);
}

console.log(`The sum is : ${add(10,20,30)} `);

//Problem you cannot pass n of Arguments

//ES6 : arguments
function sum(){
	console.log(arguments);
	let sum = 0;
	for(let element in arguments){
		sum = sum + parseInt(arguments[element]);
	}

	console.log(sum);
}

sum(10,20)
sum(10,20,30,40,50,60);


//ES6 : ...args : Rest Operator 
// instead ...args you can use ,...n or ,...vikas
function calculate(...args){

	console.log(args);
	console.log(typeof(args));
	console.log(Array.isArray(args));
	let sum = 0;
	for(let element in args){
		sum = sum + parseInt(args[element]);
	}
	console.log(sum);

}

calculate(10,20)
calculate(100,200,300,400,500);


//ES6 : ..args Rest Operator, should be always the arguments
function solve(msg,expression,...n){

	console.log(`This Message is : ${msg}`);
	console.log(`This Result of expression ${expression} = : ${eval(expression)}`);
	let product = 1;

	for(let i in n){
		product = product* parseInt(n[i]);
	}
	console.log(`The Product of ${n.length} elements is ${n.join(',')} : ${product}`);
}


solve('Solve the Expression.',"20+30-40",5,4,3,2,1);
