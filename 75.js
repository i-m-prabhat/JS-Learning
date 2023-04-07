// arrow functions 

const user1 = {
    firstName: "prabhat",
    age: 18,
    about: () =>
    {
        console.log(this.firstName, this.age);
    }
}

user1.about(user1);