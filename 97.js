// lexical environment, scope chain

const lastName = "Vashistha";

const printName = function ()
{
    const firstName = "prabhat";
    function myFunction()
    {
        console.log(firstName);
        console.log(lastName);
    }
    myFunction()

}
printName();