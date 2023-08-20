let myName = "Prabhat   ";
let mychanned = "digital           ";

console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function ()
    {

        console.log("Spider power is : " + this.spiderman);
    }
}
console.log("Thor's power is : " + heroPower["thor"]);


Object.prototype.prabhat = function ()
{
    console.log(`Prabhat is present in all Objects`)
}

Array.prototype.heyPrabhat = function ()
{
    console.log(`Prabhat says hello`);
}


// heroPower.prabhat()

myHeros.prabhat()
myHeros.heyPrabhat()
// heroPower.heyPrabhat()

// inheritance

const User = {
    name: "king",
    email: "king@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fulltime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "prabhatpatel           ";

String.prototype.trueLength = function ()
{
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.trueLength();
"prabhat".trueLength();
"iceTea".trueLength();