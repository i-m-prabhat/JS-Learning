function init()
{
    let name = "Mozilla"; // name is a local variable created by init
    function displayName()
    {
        // displayName() is the inner function, that forms the closure
        console.log(name); // use variable declared in the parent function
    }
    displayName();
}
init();


function outer()
{
    let username = "prabhat"
    // console.log(secret);
    function inner()
    {
        let secret = "my123";
        console.log(`Hello ${username}`)
    }
    function innerTwo()
    {
        console.log(`Hello ${username}`)
        // console.log(secret);
    }
    inner();
    innerTwo();
}

outer()
// console.log("TOO OUTER", username);

function makeFunc()
{
    const name = "Mozilla";
    function displayName()
    {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();
