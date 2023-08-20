function SetUsername(username)
{
    //complex DB calls
    this.username = username
    console.log("Called")
}

function createUser(username, email, password)
{
    SetUsername.call(this, username);

    this.email = email
    this.password = password
}

const dev = new createUser("raj", "raj@google.com", "123");
console.log(dev)