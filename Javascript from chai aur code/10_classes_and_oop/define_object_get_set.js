const User = {
    _email: `p@pp.in`,
    _password: "pass",

    get email()
    {
        return this._email.toUpperCase();
    },

    set email(value)
    {
        if (!validator.isEmail(value))
        {
            throw new Error("Invalid Email");
        }
        else { this._email = value; }

        //this is a way to make sure that the password has been changed, and not just assigned as an object property    
    }

}

const mail = Object.create(User);
console.log(`mail is ${JSON.stringify(mail.email)}`);