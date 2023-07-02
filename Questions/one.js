// Given a string, reverse each word in the Sentence

let str = "Sare jaha se accha hindushita hamara"

let revecedStr = str.split(" ").map((word) =>
{
    return word.split("").reverse().join("");
}).join(" ");

// console.log(revecedStr.join(" "))
console.log(revecedStr)