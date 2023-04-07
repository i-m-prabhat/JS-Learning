// param destructuring 

// object 
// react 

const person = {
    firstName: "prabhat",
    gender: "male",
    age: 22
}

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }


function printDetails({ firstName, gender, age })
{
    console.log(firstName);
    console.log(gender);
    console.log(age);
}

printDetails(person);