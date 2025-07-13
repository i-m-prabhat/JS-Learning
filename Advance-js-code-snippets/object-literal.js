//Order Way of Making Objects
// we know everything in the  javascript is a Objects
// {}

let student1 = {

	name :"vikas Jindal",
	class:"Btech",

}

console.log(typeof(student1));
console.log(student1);

let student2 = {

	name :"vikas Jindal",
	course:"Btech",

	show_name:function(){

		console.log(this.name);
	},
	show_course:function(){

		console.log(this.course);
	},

}

console.log(`The student-name of student`);
console.log(student2.show_name());
console.log(`The course-name of student`);
console.log(student2.show_course());

//Object Literal of ES6

var name = 'Awnish';
var course = 'Mean and Mern';
let info1 =  {

	"name":name,
	"course":course,
}

console.log(info1);


var name = 'Rahul';
var course = 'Cloud Computing';
let info2 =  {

	name:name,
	course:course,
}

console.log(info2);

//Rule 1 : Object Literal key name and value name same then you can used only one

var name = 'Raju';
var course = 'Data Structure using C++';
let info3 =  {
	name,
	course,
}

console.log(info3);
console.log(info3.name); //Key Automatic
console.log(info3.course); //Key Automatic


//Rule 2: Object Literal You can use Computable Keys
var key1 = 'name';
var key2 = 'course';

let info4 = {
	[key1] :'Sachin Tendulkar',
	[key2] :'Cricket or Sports',
}

console.log(info4);
console.log(info4.name);
console.log(info4.course);


//Rule 3: Object Literal You can use [] : subscript as expression also

let k1 = 'first_name';
let k2 = 'last_name';

let info5 = {
	[k1+"and"+k2] :'Kapil Dev',
	course:'Criket Golden',
}

console.log(info5);
console.log(info5.first_nameandlast_name);

let info6 = {
	name:"Rahul Dravid",
	display_name : function(){
		console.log(this.name);
	}
}

console.log(info6.display_name());
//Rule 4: Object Literal allows direct declaration of function definition

let info7 = {
	name:"Saurabh Ganguly",
	display_name(){
		console.log(this.name);
	}
}

info7.display_name();
