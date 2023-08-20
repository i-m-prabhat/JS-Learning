// ES6

class User
{
    constructor(username, email, password)
    {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword()
    {
        return `#dnbc${this.password}abcnhcn`
    }

    changeUsername()
    {
        return `${this.username.toUpperCase()}`
    }
}

const dev = new User("prabhat", "prabhat@google.com", "1234");

console.log(`dev: ${JSON.stringify(dev)}`);
console.log(dev.encryptPassword());
console.log(dev.changeUsername());


// Behind the Scene

// function User(username, email, password)
// {
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }

// User.prototype.encryptPassword = function ()
// {
//     return `#dnbc${this.password}abcnhcn`
// }

// User.prototype.changeUsername = function ()
// {
//     return `${this.username.toUpperCase()}`
// }


// const dev = new User("prabhat", "prabhat@google.com", "1234");
// console.log(dev)
// console.log(dev.encryptPassword())
// console.log(dev.changeUsername())
