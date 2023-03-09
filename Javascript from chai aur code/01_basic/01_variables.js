const accountId=144553
let accountEmail= "Example@accountEmail.com"
var accountPassword=12345
accountCity="Lucknow"

let accountState;

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.log(`
account Id = ${accountId}
account Email = ${accountEmail}
account Password = ${accountPassword}
account City = ${accountCity}
account State = ${accountState}
`)

console.table([accountId,accountEmail,accountPassword,accountCity, accountState]);