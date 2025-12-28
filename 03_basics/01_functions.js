function sayMyName() {
  console.log("Y");
  console.log("A");
  console.log("S");
  console.log("H");
} // Function declaration

sayMyName(); // Function invocation (SayMyName = Reference to the function and () = Execute the function)

function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}

addTwoNumbers(); // NaN
addTwoNumbers(10); // NaN
addTwoNumbers(10, 20); // 30
addTwoNumbers(10, 20, 30, 40, 50); // 30 (extra arguments are ignored)

addTwoNumbers(3, "a"); // 3a (type coercion)

addTwoNumbers(3, null); // 3 (null is converted to 0)
addTwoNumbers(3, undefined); // NaN (undefined is converted to NaN)

function multiplyTwoNumbers(num1, num2 ) { 
    let result = num1 * num2;
    return result; // Returns the result to the caller
}
const result = multiplyTwoNumbers(5, 4);

console.log("Result: ", result) // Result: 20 (using the returned value from the function)

// // nothing will be printed after return statement
// function demoReturn() {
//     console.log("Before return");
//     return; // Function exits here
//     console.log("After return"); // This line will never be executed
// }

function addAnotherTwoNumbers(a, b) {
    return a + b; // Return the sum of a and b
}

const sum = addAnotherTwoNumbers(7, 8);
console.log("Sum: ", sum); // Sum: 15 (another way of using return value)


// Another ways of defining parameters and returning values

function loginUserMessage(username) { 
    
    return `${username} just logged in`; // Using template literals
}
console.log(loginUserMessage("Yash")); // Yash just logged in

console.log(loginUserMessage()); // undefined just logged in (no argument passed)

function loginUserMessage2(username) { 
    if (username === undefined) // or use: if (!username)
    {
        return "Please provide a username"; // Handling undefined parameter
        return;
    }
    return `${username} just logged in`; // this line will not be executed
}
console.log(loginUserMessage2()); // Please provide a username
console.log(loginUserMessage2("Yash")); // Yash just logged in


function calculateCartPrice(num1) {
    return num1;
}
console.log(calculateCartPrice(100)); // 100

function calculateAnotherCartPrice(...num1) // Rest operator to accept multiple arguments
 {
    return num1;
}
console.log(calculateAnotherCartPrice(100, 200, 300)); // [100, 200, 300] (array of numbers)

function calculateTotalCartPrice(val1, val2, ...num1) // Mix of regular and rest parameters
 {
    return num1;
}
console.log(calculateTotalCartPrice(10, 20, 100, 200, 300)); // [100, 200, 300] (10 and 20 are assigned to val1 and val2 respectively)

const user = {
    name: "Yash",
    age: 20
}

function handleObject(anyObj) {
    console.log(`Username is ${anyObj.name} and age is ${anyObj.age}`);
}

handleObject(user); // Username is Yash and age is 20
handleObject({
     name: "Alice", 
     age: 25 
    }); // Username is Alice and age is 25 (passing object directly )

// Similar example with arrays

const myNewArray = [1, 2, 3, 4, 5];

function returnSecondValue(getArray) {  
    return getArray[1];
}
console.log(returnSecondValue(myNewArray)); // 2

console.log(returnSecondValue([10, 20, 30, 40])); // 20 (passing array directly)