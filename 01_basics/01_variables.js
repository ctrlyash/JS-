const accountId = 144553
let accountEmail = "yash@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountstate;

//accountId = 3 // not allowed beacuse value is constant 

accountEmail = "bunny@google.com"
accountPassword = "17171717"
accountCity = "Delhi" 
console.log(accountId);


console.table([accountId, accountEmail, accountPassword, accountCity, accountstate])

/*
Prefer not to use var
because of issue in block scope and functional scope.

In js it is not necessary to use let to assign value to variable. (not preffered)

If a variable is let and value is not assigned, then it is printed as undefined.
*/

