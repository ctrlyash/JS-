// Immediately Invoked Function Expression (IIFE)


function data () {
    console.log(`DB CONNECTED`);
}
data() // DB CONNECTED

(function dataTwo () {
    console.log(`DB CONNECTED`);
    
}) () // DB CONNECTED  (This is a named IIFE function)

// 1st () is where the function is defined and 2nd () is used foe execution.

// IIFE functions are functions which are immediately executed.
// It is used to reduce problem due to global scope pollution (discussed in scope)
// It is necessary to use ; after IIFE function to end it in JS, as it doesn't know where to stop context.

// Another example of using arrow function as iife
( () => {
    console.log(`DB CONNECTED TWO`);
}
) (); // DB CONNECTED TWO (This is an unamed IIFE function)

// Another example

( (name) => {
    console.log(`DB CONNECTED ${name}`);
}
) ('Yash'); // DB CONNECTED Yash

