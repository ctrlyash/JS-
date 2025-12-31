// Javascript execution context -> 3 Types

// 1. Global Execution Context: Global Execution Context is the environment where JavaScript code begins execution before any function is called.
// -{any code file} -> Global execution context.
// -contains global variables, global functions, and the global this value.
// -This global execution context is reffered to the this keyword.

// 2. Functional Execution Context: A Functional Execution Context is the environment created when a function is invoked, 
// -contains its variables, lexical scope, and this value.

// 3. Eval Execution Context: It is a property of global context  
// (Not important at this point just remember name for interview purposes if in case.)


// How does a javascript code runs?
// This process takes place in 2 phases-

// 1. Memory Creation Phase / Creation Phase: JavaScript allocates memory for variables and functions before code runs; variables are set to undefined and functions are stored completely.

// 2. Execution Phase: JavaScript executes code line by line and assigns actual values to variables and performs operations.

// For eg:

let val1 = 10
let val2 = 5
function  addNum(num1, num2) {
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

console.log(result1); // 15
console.log(result2); // 12

// Stepsfor this process-

//  1st Cycle (Memory Creation Phase):

// 1. Global Execution (allocated to global 'this').
// - compulsarily takes place everytime when the code runs.

// 2. Memory Creation 
// - val1 -> undefined
// - val2 -> undefined
// - addNum -> complete function definition
// - result1 -> undefined
// - result -> undefined


// 2nd Cycle (Execution Phase)

// 3. Execution
// - val1 <- 10
// - val2 <- 5
// - addNum --> Whenever a function is executed a new executional context is created for function.
// This new executional context contains [new variable environment + Execution Thread]

// Now starting new executional phase
// --> Memory Phase ()
// - val1 -> undefined
// - val2 -> undefined
// - total -> undefined

// --> Execution context
// - num1 -> 10
// - num2 -> 5
// - total -> 15 (This total value is returned to the global executional context)

// * This new executional context which was created for the function is itself deleted after its completion.

// Similarly another new executional context is created for second funcution in which-

// --> Memory Phase ( same as previous)

// --> Execution context 
// - num1 -> 10
// - num2 -> 2
// - total -> 12 (This total value is returned to the global executional context)


// ++++++++++++++++++++++ Call Stack +++++++++++++++++++++++

// The Call Stack is a data structure that keeps track of which function is currently running in a JavaScript program.
//It works on the principle of LIFO (Last In, First Out).

// Working-
// 1. When the program starts, the Global Execution Context is pushed onto the stack.

// 2. When a function is called, its Functional Execution Context is pushed on top.

// 3. When a function finishes execution, it is popped out of the stack.

// 4. Control returns to the function below it.

// working of call stack by an example of simple function.

function first() {
  console.log("First");
}

function second() {
  console.log("Second");
}

first();
second();

// Call Stack Step-by-Step

// 1.Global Execution Context is pushed first.
// 2.first() is called → pushed onto the stack.
// 3.first() finishes → popped from the stack.
// 4.second() is called → pushed onto the stack.
// 5.second() finishes → popped from the stack.
// 6.Stack becomes empty (program ends).



// Working of call stack for nested function with help of an example.

function outer() {
  console.log("Outer start");

  function inner() {
    console.log("Inner");
  }

  inner();
  console.log("Outer end");
}

outer();

// Call Stack Step-by-Step

// 1.Global Execution Context is pushed first.
// 2.outer() is called → pushed onto the stack.
// 3.Inside outer(), inner() is called → pushed on top.
// 4.inner() finishes → popped from stack.
// 5.outer() finishes → popped from stack.
// 6.Stack becomes empty (program ends).








                             