class User
{
    constructor(username)
    {
        this.username = username;
    }

    logMe()
    {
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User
{
    constructor(username, email, password)
    {
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse()
    {
        console.log(`A new course was added by ${this.username}`)
    }
}

const dev = new Teacher("dev", "dev@dev.io", "123");

dev.addCourse()
dev.logMe()

const masalaChai = new User("masalaChai");

masalaChai.logMe();

console.log(dev instanceof User)