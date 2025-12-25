// Two types of Data Types in JavaScript
// 1. Primitive Data Types
// 2. Reference Data Types (Non-primitive)


// Primitive Data Types

// 7 primitive data types in JavaScript
// 1. Number
// 2. String
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. BigInt
// 7. Symbol

// Example of Primitive Data Types

const age = 30; // Number
const pi = 3.14; // Number 
const name = "John"; // String
const isStudent = false; // Boolean
const address = null; // Null
let phoneNumber; // Undefined
const bigIntNumber = 9007199254741991n; // BigInt
const uniqueId = Symbol("123"); // Symbol
const anotherUniqueId = Symbol("123"); // Symbol

console.log(uniqueId === anotherUniqueId); // false

//JS is dynamically typed language as we do not need to specify data types explicitly



// Reference Data Types (Non-primitive)

// 1. Object
// 2. Array
// 3. Function

// Example of Reference Data Types

let myObject = { 
    name: "Yash", 
    age: 19 
}; // Object

const heros = ["Superman", "Batman", "Ironman"]; // Array

const myFunction = function() { 
    console.log("Hello World"); 
}; // Function



// Checking Data Types using typeof operator

console.log(typeof bigIntNumber); // "bigint"

console.log(typeof anotherUniqueId); // "symbol"

console.log(typeof undefined); // "undefined"

console.log(typeof null); // "object" (It's a known quirk in JavaScript)

console.log(typeof myObject); // "object"

console.log(typeof heros); // "object"

console.log(typeof myFunction); // "function" (functions in JavaScript are a special type of object)

//study more on data types here:
// https://262.ecma-international.org/5.1/#sec-11.4.3




//++++++++++++++++++++++++++++++++++++++++++++++
//Memory Allocation of Primitive and Reference Data Types

// Primitive data types are stored in stack memory (copy of actual value is stored).
// Reference data types are stored in heap memory. (reference/address of the actual value is stored).


// Example to illustrate memory allocation of Primitive Data Types

let myCarname = "Swift" 

let anotherCarname = myCarname; //copy of myCarname created in anotherCarname
anotherCarname = "Brezza" //modifying anotherCarname does not affect myCarname

console.log(myCarname); // o/p swift
console.log(anotherCarname); // o/p Brezza



// Example to illustrate memory allocation of Reference Data Types

let userOne = {
    email: "user@gmail.com",
    upi: "user@oksbi"
}

let userTwo = userOne; //userTwo references the same object as userOne

userTwo.email = "yash@gmail.com"

console.log(userOne.email); // o/p yash@gmail.com
console.log(userTwo.email); // o/p yash@gmail.com