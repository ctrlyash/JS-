const user = {
    username: "Yash",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); // this is used to refer the current context

        console.log(this);
        
    }

}

user.welcomeMessage() 
// Yash, welcome to website 
//{
//   username: 'Yash',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// } (cuurent context)

user.username = "sam"
user.welcomeMessage() 
//sam, welcome to website
//{
 // username: 'sam',
 // price: 999,
 // welcomeMessage: [Function: welcomeMessage]
//} (current context changed)

console.log(this); // {} (context empty in node environment)

function simple () {
    console.log(this);
    
}

simple() 
//<ref *1> Object [global] {
//   global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   structuredClone: [Function: structuredClone],
//   atob: [Function: atob],
//   btoa: [Function: btoa],
//   performance: [Getter/Setter],
//   fetch: [Function: fetch],
//   navigator: [Getter],
//   crypto: [Getter]

// (nothing to panic all the above commented code is to show that this inside a function already holds these things which helps in accessing anything whereas 
// this outside any function or object is whithout any context ({})).

function simple2(){
   let username = "Yash"
    console.log(this.username);
    
}

simple2() //undefined
// because
// 1. `username` is declared using `let`, so it is a local variable inside the function
// 2. Local variables are NOT attached to `this` or to the `window` object
// 3. `simple2()` is called as a normal function, so `this` refers to `window` (browser)
// 4. JavaScript looks for `window.username`, not the local `username` variable
// 5. Since `window.username` does not exist, `this.username` returns `undefined`



// Therefore best practice is avoid using `this` in normal functions use local variables instead.
// Use `this` ONLY inside object methods where the object is clearly calling the function

// ++++++++++++++++++++ Arrow function +++++++++++++++++++++++

const arrow = () => {
    let username = "Yash"
    console.log( this.username);
    
}
arrow() // undefined (Arrow function is nothing but another way to define a function).

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3, 4)); // 7 (Explicit Return -> when we use return keyword explictly)

const addAnotherTwo = (num1, num2) => num1 + num2 
console.log(addAnotherTwo(5, 6)); // 11 (Implicit Return)

const addNum = (num1, num2) => (num1 + num2)
console.log(addAnotherTwo(1, 2)); // 3

// Trick to remember -- if you use {}, te then you have to use return keyword.
//-- if we use (), then it is not necessary to use return keyword.

//for eg returning an object using implicit return

const funcObj = (num1, num2) => ({username: "Yash"})
console.log(funcObj(6, 2)); // username: 'Yash'


// These functions will be used further when we'll study loops and react.













