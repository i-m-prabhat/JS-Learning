// Destructring of Array

var fruits = ['Banana','Guava','Apple'];

console.log("Fruit 1 :"+fruits[0]);
console.log("Fruit 2 :"+fruits[1]);
console.log("Fruit 3 :"+fruits[2]);


let f1 = fruits[0];
let f2 = fruits[1];
let f3 = fruits[2];

console.log("Fruit 1 in f1 :"+f1);
console.log("Fruit 2 in f2:"+f2);
console.log("Fruit 3 in f3:"+f3);

let student = ["Vikas","Btech","100"];

let name = student[0];
let stream = student[1];
let marks = student[2];

console.log("Student Name is :"+name);
console.log("Student Stream is :"+stream);
console.log("Student Marks is :"+marks);

//Destructuring
let [stdname,stdstream,stdmarks] = student;

console.log("Student Name is :"+stdname);
console.log("Student Stream is :"+stdstream);
console.log("Student Marks is :"+stdmarks);
//Swap of Program using Destructruing

let x=10;
let y=20;
console.log(`value of x is ${x} and y is ${y} `);
[y,x] = [x,y]; //Destructing 
console.log(`value of x is ${x} and y is ${y} `);

let [a,b,c] = [10,30,40];

console.log(a);
console.log(b);
console.log(c);

//You can use Destructing Array Concept By using nested Array
let students_info = [
	"Awnish",
	"MBA",
	25,
	["C","Python","PHP","JS"]
]

//Collection Unpacking, Array Unpacking
let [sname,scourse,sage,[lang1,lang2,lang3,lang4]] = students_info;

console.log(sname);
console.log(scourse);
console.log(sage);
console.log(lang1);
console.log(lang2);
console.log(lang3);
console.log(lang4);

function display([name,course,age]){ //Rest Operator ...info Rest Operator

	console.log(name);
	console.log(course);
	console.log(age);
}

display(["Vikas Jindal","Btech CSE",21]);
let info = ["Vikas Jindal","Btech CSE",21];

display([...info]); //Rest Operator X : Spread Operator
display(info);


let pattern = ["*","*","*","*"];
console.log(...pattern); //Spread Operator

let star = "* ";
console.log(star.repeat(4)); //Spread Operator

//loop ---> 4 ---> start ---> Array ---> ...spreadOperator

