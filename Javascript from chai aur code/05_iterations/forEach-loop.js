const coding = ["js", "ruby", "java", "cpp", "python"];

// coding.forEach(function (val)
// {
//     console.log(val)
// })

// coding.forEach(element =>
// {
//     console.log(element);
// });

function printMe(item)
{
    console.log(item);
}

coding.forEach(printMe)

coding.forEach((item, index, arr) =>
{
    console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "JavaScript",
        level: "Beginner",
        description: "JavaScript is a programming language that conforms to ECMAScript specification."
    },
    {
        languageName: "java",
        level: "Intermediate",
        description: "none"
    },
    {
        languageName: "c++",
        level: "Advance",
        description: "c++ is very powerfool language"
    }
]

myCoding.forEach((item) =>
{
    console.log(item.languageName + " : " + item.level);
})