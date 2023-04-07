// map method 
// const numbers = [3,4,6,1,8];

// const square = function(number){
//     return number*number;
// }

// const squareNumber = numbers.map((number, index)=>{
//     return index;
// });
// console.log(squareNumber);

const users = [
    { firstName: "prabhat", age: 21 },
    { firstName: "tanuja", age: 23 },
    { firstName: "ayushi", age: 22 },
    { firstName: "garima", age: 20 },
]

const userNames = users.map((user) =>
{
    return user.firstName;
});

console.log(userNames);