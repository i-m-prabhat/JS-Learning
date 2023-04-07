// hoisting 

hello();

function hello()
{
    console.log("hello world");
}
console.log(hello());
const hello2 = "hello world";
console.log(hello2);