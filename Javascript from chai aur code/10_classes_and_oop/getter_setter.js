class User
{
    constructor(email, password)
    {
        this.email = email;
        this.password = password;
    }

    get email()
    {
        return this._email.toUpperCase();
    }

    set email(value)
    {
        return this._email = value
    }

    get password()
    {
        return `eeeeee332dfv#b${this._password}xfvbgnm`
    }

    set password(value)
    {
        return this._password = value
    }
}

const prabhat = new User("p@prabhat.in", "Abc");
console.log(prabhat.email)
console.log(prabhat.password)