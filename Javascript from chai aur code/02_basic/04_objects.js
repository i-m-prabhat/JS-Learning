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

const course = {
    coursename: "Js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const { courseInstructor } = course;
console.log(courseInstructor)
const { courseInstructor: instructor } = course;
console.log(instructor)

const navbar = ({ company }) =>
{

}
navbar(company = "DigiTech")

// {
//     "name": "prabhat",
//     "coursename":"Js in Hindi",
//     "price":"free"
// }

[
    {},
    {},
    {},
    {}
]

// https://randomuser.me/api/ = {
// "results": [
//     {
//         "gender": "male",
//         "name": {
//             "title": "Mr",
//             "first": "Aapo",
//             "last": "Niemela"
//         },
//         "location": {
//             "street": {
//                 "number": 168,
//                 "name": "Reijolankatu"
//             },
//             "city": "Lestijärvi",
//             "state": "South Karelia",
//             "country": "Finland",
//             "postcode": 36798,
//             "coordinates": {
//                 "latitude": "-29.8037",
//                 "longitude": "-22.5351"
//             },
//             "timezone": {
//                 "offset": "+4:30",
//                 "description": "Kabul"
//             }
//         },
//         "email": "aapo.niemela@example.com",
//         "login": {
//             "uuid": "09a0b7b4-fc34-4cca-a5d3-6c3d51398847",
//             "username": "ticklishduck479",
//             "password": "fairlane",
//             "salt": "7WopWUPO",
//             "md5": "50cf283c6ad74133c0e4b45c2297d0a9",
//             "sha1": "78a6ad6646e1183b2b7409429f6e23a850158463",
//             "sha256": "c48d239156370e8083a816283c59c7a790ad37b43f06bee3c65d0cdcd86560b6"
//         },
//         "dob": {
//             "date": "1987-08-10T14:36:49.481Z",
//             "age": 35
//         },
//         "registered": {
//             "date": "2006-10-31T04:44:59.696Z",
//             "age": 16
//         },
//         "phone": "04-126-553",
//         "cell": "044-188-70-91",
//         "id": {
//             "name": "HETU",
//             "value": "NaNNA017undefined"
//         },
//         "picture": {
//             "large": "https://randomuser.me/api/portraits/men/87.jpg",
//             "medium": "https://randomuser.me/api/portraits/med/men/87.jpg",
//             "thumbnail": "https://randomuser.me/api/portraits/thumb/men/87.jpg"
//         },
//         "nat": "FI"
//     }
// ],
//     "info": {
//     "seed": "afaeacb2a5cb3a1b",
//         "results": 1,
//             "page": 1,
//                 "version": "1.4"
// }
// }
