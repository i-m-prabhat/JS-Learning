const { log } = require("console");

function sayMyName()
{
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("T");
}
// sayMyName();

// function addTwoNumbers(number1, number2)
// {
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2)
{
    return number1 + number2;
}

const res = addTwoNumbers(3, 4);

console.log("Result : ", res);

// addTwoNumbers('3', 4);
// addTwoNumbers(3, 'a');
// addTwoNumbers(3, null);


// function loginUserMessage(username)
// {
//     // if (username === undefined)
//     // {
//     //     console.log("Please Enter a username")
//     //     return
//     // }
//     if (!username)
//     {
//         console.log("Please Enter a username")
//         return
//     }
//     return `${username} just logged in`
// }
function loginUserMessage(username = "newuser")
{
    // if (username === undefined)
    // {
    //     console.log("Please Enter a username")
    //     return
    // }
    if (!username)
    {
        console.log("Please Enter a username")
        return
    }
    return `${username} just logged in`
}

console, log(loginUserMessage())
console, log(loginUserMessage("Prabhat"))


function caculateCartPrice(...num)
{
    return num;
}

console.log(caculateCartPrice(200, 400, 600, 800))

const user = {
    username: "Prabhat",
    price: 299
}

function handleObject(anyObject)
{
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)
handleObject({ username: "sam", price: 599 })

const myNewArray = [200, 300, 500, 60]

function returnSecondValue(getArray)
{
    return getArray[1]
}

console.log(myNewArray);
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([400, 100, 200]));
