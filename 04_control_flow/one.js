/****************************************************
 * IF–ELSE CONDITIONS IN JAVASCRIPT
 * This file demonstrates:
 * 1. Basic if–else
 * 2. Comparison operators
 * 3. Block scope (let)
 * 4. Short-hand if
 * 5. else-if ladder
 * 6. Logical operators (&&, ||)
 ****************************************************/


// ------------------------------
// Example 1: Basic if–else
// ------------------------------

// User login status
const isUserLoggedIn = true;

// Current temperature value
const temperature = 41;

// Check temperature using strict comparison
if (temperature === 40) {
    console.log("Temperature is exactly 40");
} else {
    console.log("Temperature is not 40");
}

// This line always executes
console.log("Program execution completed");


// ------------------------------
// Example 2: Comparison Operators
// ------------------------------

/*
<   less than
>   greater than
<=  less than or equal to
>=  greater than or equal to
==  loose equality (not recommended)
!=  loose not equal
=== strict equality (recommended)
!== strict not equal
*/


// ------------------------------
// Example 3: Block Scope with let
// ------------------------------

const score = 200;

// Variable declared inside if block
if (score > 100) {
    let power = "fly";     // Block-scoped variable
    console.log(`User power: ${power}`);
}

// ❌ This would cause an error if uncommented
// console.log(power);   // power is not accessible outside the block


// ------------------------------
// Example 4: Short-hand if (NOT recommended)
// ------------------------------

const balance = 1000;

// One-line if statement (works but reduces readability)
if (balance > 500) console.log("Test"), console.log("Test2");


// ------------------------------
// Example 5: else-if ladder
// ------------------------------

if (balance < 500) {
    console.log("Balance is less than 500");
} else if (balance < 750) {
    console.log("Balance is less than 750");
} else if (balance < 900) {
    console.log("Balance is less than 900");
} else {
    console.log("Balance is less than 1200");
}


// ------------------------------
// Example 6: Logical AND (&&)
// ------------------------------

// User authentication details
const userLoggedIn = true;
const debitCard = true;

// All conditions must be true
if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow user to buy course");
}


// ------------------------------
// Example 7: Logical OR (||)
// ------------------------------

// Login methods
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// At least one condition must be true
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in successfully");
}
