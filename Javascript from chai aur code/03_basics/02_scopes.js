var b = 300; // global scope
if (true)
{
    let a = 10;   // block scope
    // b = 20;
    const c = 30; // block scope

    console.log(a)
    console.log(c)
}
console.log(b)

function one()
{
    const username = "Prabaht";
    function two() // closure : chiid function accesed parent function variables
    {
        const website = "digitech";
        console.log(username);
    }
    // console.log(website);
    two();
}

one();

if (true)
{
    const username = "prabhat"
    if (username === "prabhat")
    {
        const website = " youtube"
        console.log(username + website)
    }
    // console.log(website);
}
// console.log(username);




// ++++++++++++++++++++++++++++++ intresting +++++++++++++++++++++++++++++++

const res = addone(5);
console.log(res)
function addone(num)
{
    return num + 1;
}

const addTwo = function (num)
{
    return num + 2;
}
console.log(addTwo(5));
