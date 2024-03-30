const accountId = 144553
let accountEmail = "adnan@google.com"
var accountPassword = '12345'
accountCity = 'Hyderabad'
let accountState;

// accountId = 3  // not allowed 
accountEmail = 'test@google.com'
accountPassword = '54321'
accountCity = 'Secunderabad'

// 1st way of displaying manually
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);

// 2nd way of displaying the items
console.log(accountId, accountEmail, accountPassword)

// 3rd way of displaying the items in the form of a table
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])



/*
prefer not to use var
because of issue in block scope and functional scope
*/