/*
 * IF–ELSE CONDITIONS IN JAVASCRIPT
 * This file demonstrates:
 * 1. Basic if–else
 * 2. Comparison operators
 * 3. Block scope (let)
 * 4. Short-hand if
 * 5. else-if ladder
 * 6. Logical operators (&&, ||) */


//  Basic if–else

const isUserLoggedIn = true
if (isUserLoggedIn) {
    console.log("User is logged in"); // User is logged in (executed because condition is satisfied)
} 
console.log("not executed"); // not executed (this line has nothing to do wih the condition as it is out of scope so it will be printed anyways.)

// If we want any one output to be printed then we use else keyword with if.

// for eg-

const isUserLoggedOut = false
if (isUserLoggedOut) {
    console.log("User is logged out"); 
} else {
    console.log("User is logged in");

} // User is logged in


// Comparison Operators
/*
<   less than
>   greater than
<=  less than or equal to
>=  greater than or equal to
==  loose equality (not recommended) (Loose equality compares only values, not data types.
JavaScript automatically converts (type coercion) the operands before comparison.)
!=  loose not equal
=== strict equality (recommended) (Strict equality compares both value and data type.
No type conversion is performed.)
!== strict not equal
*/


const temperature = 41;

// Check temperature using strict comparison
if (temperature === 40) {
    console.log("Temperature is exactly 40");
} else {
    console.log("Temperature is not 40"); 
} // Temperature is not 40


console.log("Program execution completed"); // This line always executes



const score = 200;

// Variable declared inside if block
if (score > 100) {
    let power = "fly";     // Block-scoped variable
    console.log(`User power: ${power}`);
} // User power: fly

console.log(power);   // Reference Error: power is not defined (power is not accessible outside the block)



// Short-hand if (NOT recommended)

const balance = 1000;

if (balance > 500) console.log("Test"), console.log("Test2"); // One-line if statement (works but reduces readability)



// Example 5: else-if ladder

if (balance < 500) {
    console.log("Balance is less than 500");
} else if (balance < 750) {
    console.log("Balance is less than 750");
} else if (balance < 900) {
    console.log("Balance is less than 900");
} else {
    console.log("Balance is less than 1200");
}


// Logical AND (&&)

const userLoggedIn = true;
const debitCard = true;

if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow user to buy course");
} // All conditions must be true


//  Logical OR (||)

const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in successfully");
} // At least one condition must be true.