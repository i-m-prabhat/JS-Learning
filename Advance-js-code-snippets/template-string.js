// ES6 Template String, or Literal String
// ES6 One Way Binding

//Problem

let user = 'vikas';
console.log("Hello Welcome "+user);

let course = 'Btech';

console.log("Hello Welcome "+user+" Course is "+course);
console.log("Hello 'Welcome' "+user+" Course is "+course);
console.log('Hello "Welcome" '+user+' Course is '+course);
console.log('Hello "'+'Welcome" '+user+' Course is '+course);

console.log(`Hello "Welcome" ,"user" ${user} 'Course' is course ${course}`);

console.log(`Are you well ${true}`); //constants
console.log(`Solve Express: ${10+30}`); //eval
console.log(`Comparison :${10=='10'}`);
console.log(`Comparison :${10=='10'}`);
console.log(`Result :${10+parseInt('10')}`); //Function with Expression
console.log(`Result :${10+parseInt('10')+" Please Smile Now "}`); //Function with Expression
console.log(`Result :${10+parseInt('10')+`" Please Smile Now  ${true}"`}`); //Template Inside

function full_name(fname,lname){
	return `${fname} ${lname}`;
}

console.log(`Hi user,Your Full name is :`+full_name('vikas','jindal'));
console.log(`Hi user,Your Full name is :${full_name('vikas','jindal')}`);


function $full_name($fname,$lname){
	return `${$fname} ${$lname}`;
}

console.log(`Hi user,\n Your Full name is :${$full_name('Awnish','Kumar')}`); //Escape Operators
console.log("Hy \t How are you");
console.log('Hy \t How are you');

console.log("Hy")
console.log("How are you")