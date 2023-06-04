// singleton or making with constructor

// const tinderUser = new Object() // singleton object
const tinderUser = {} // Non singleton object

tinderUser.id = "123abc";
tinderUser.name = "Somya";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@email.com",
    fullname: {
        userfullname: {
            firstname: "Prabhat",
            lastname: "Patel"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj3 = { 5: "a", 6: "b" }

// const obj4 = { obj1, obj2 }
// const obj4 = Object.assign({}, obj1, obj2, obj3);

const obj4 = { ...obj1, ...obj2, ...obj3 }
// console.log(obj4)

const users = [
    {
        id: 1,
        email: "pp@gmail.com"
    },
    {
        id: 2,
        email: "pp@gmail.com"
    },
    {
        id: 3,
        email: "pp@gmail.com"
    },
    {
        id: 3,
        email: "pp@gmail.com"
    },
    {
        id: 4,
        email: "pp@gmail.com"
    },
    {
        id: 5,
        email: "pp@gmail.com"
    },
    {
        id: 6,
        email: "pp@gmail.com"
    },
]

console.log(users[1].email)
console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))