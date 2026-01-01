// Truthy and Falsy Values
// Instead of writing long conditions, developers rely on falsy values like 0, null, undefined, and empty strings to detect missing or invalid data, making the code cleaner and more efficient.

const userEmail = "y@yash.ai"

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Dont have user email");
} // non-empty string detected therefore if block will be printed.

// Falsy Values
/*
- false
- 0
- -0
- BigInt
- 0n
- ""
- null
- undefined
- NaN
*/ // Else all other values are truthy values.

// Some Truthy values which may surprise you
/*
- "0"
- 'false'
- " " // spaced string (non-empty)
- []
- {}
- function() {}
*/

// Ways to check if truthy values really satisfies a condition

 if (userEmail.length === 0) {
     console.log("Array is empty");
 } // This is how we check if an array is empty

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
} 
// using Object.keys(emptyObj), the output is array of keys. So we can check if it is empty similarly as array.


// Nullish Coalescing Operator (??): The Nullish Coalescing Operator (??) is used to provide a default value only when a variable is null or undefined.
//It does NOT treat 0, false, or "" as missing values.

// let result = value ?? defaultValue;


let val1
val1 = 5 ?? 10
console.log(val1); // 5

let val2
val2 = null ?? 10
console.log(val2); // 10

let val3
val3 = undefined ?? 10
console.log(val3); //10

let val4
val4 = null ?? 5 ?? 10
console.log(val4); // 5


//  Ternary Operator (? :) : The Ternary Operator is a short form of if–else used to make decisions in one line.

// syntax: condition ? true : false

const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80"); // more than 80





