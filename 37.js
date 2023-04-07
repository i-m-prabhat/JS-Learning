// difference between dot and bracket notaion
const key = "email";
const person = {
    name: "prabhat",
    age: 22,
    "person hobbies": ["coding", "sleeping", "listening music"]

}

console.log(person["person hobbies"]);
person[key] = "prabhatpatel@gmail.com";
console.log(person);
