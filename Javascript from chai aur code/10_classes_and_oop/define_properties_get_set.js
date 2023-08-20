function User(email, password)
{
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function ()
        {
            return this._email.toUpperCase();
        },
        set: function (value)
        {
            if (!validator.isEmail(value))
            {
                throw new Error('Invalid Email');
            } else
            {
                this._email = value;
            }
        }
    })

    Object.defineProperty(this, 'password', {
        get: function ()
        {
            return this._password.toUpperCase();
        },
        set: function (value)
        {
            if (!validator.isEmail(value))
            {
                throw new Error('Invalid password');
            } else
            {
                this._password = value;
            }
        }
    })
}

const prabhat = new User("p@prabhat.in", "Abc");
console.log(prabhat.email)
console.log(prabhat.password)