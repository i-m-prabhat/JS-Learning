// if 
const isUserLoggedIn = true;
const temperature = 41

if (temperature < 50)
{
    console.log("less than 50");
} else
{

    console.log("tempereture is greater than 50");
}

// <, >, <=, >=, ==, !=, ===, !==

const score = 200

if (score > 100)
{
    const power = "fly"
    console.log(`Users power: ${power}`);
}
// console.log(`Users power: ${power}`);

const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2");

if (balance < 500)
{
    console.log("less than 500")
} else if (balance < 750)
{
    console.log("less than 750")
} else if (balance < 900)
{
    console.log("less than 900")
} else
{
    console.log("less than 1200")
}

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false
const loggedInFromGmail = true

if (userLoggedIn && debitCard && 2 == 2)
{
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromGmail)
{
    console.log("User logged in");
}

