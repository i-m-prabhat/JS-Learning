// singleton
// Object.create

// Object literals

const mySym = Symbol("key1");
const jsUser = {
    name: "Prabhat",
    "full name": "Prabhat Patel",
    [mySym]: "mykey1",
    age: 18,
    location: "Lucknow",
    email: "prabhat@google.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"]
};

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(typeof jsUser[mySym]);
// console.log(jsUser[mySym]);

// jsUser.email = "prabhat@facebook.com"
// console.log(jsUser.email)
// console.log(jsUser)
// Object.freeze(jsUser);
// jsUser.email = "prabhat@chatgpt.com"
// jsUser.name = "King Kohli"
// console.log(jsUser);

jsUser.greeting = function ()
{
    console.log("Hello Js User")
}
jsUser.greeting2 = function ()
{
    console.log(`Hello Mr, ${jsUser['full name']}`)
}
console.log(jsUser.greeting())
console.log(jsUser.greeting2())