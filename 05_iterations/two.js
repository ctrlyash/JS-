// while loop: A while loop is used to repeat a block of code as long as a condition is true.

while (condition) {
    
} // basic syntax of while loop

let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index +2
    
} // simple example of while loop
/*
Value of index is 0
Value of index is 2
Value of index is 4
Value of index is 6
Value of index is 8
Value of index is 10 */

let myArray = ["flash", "batman","superman"]
let arr = 0

while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
} // while loop opn array
/*
Value is flash
Value is batman
Value is superman */

let I = 1;

while (i <= 3) {
    let j = 1;

    while (j <= 3) {
        console.log(`i = ${I}, j = ${j}`);
        j++;
    }

    I++;
} // example of nested while loop
/*
I = 1, j = 1
I = 1, j = 2
I = 1, j = 3
I = 2, j = 1
I = 2, j = 2
I = 2, j = 3
I = 3, j = 1
I = 3, j = 2
I = 3, j = 3 */



// do-while loop: A do-while loop is used to repeat a block of code at least once, and then continue as long as a condition is true.

do {
    
} while (condition); // basic syntax of do while loop


let score = 1
do {
    //console.log(`score is ${score}`);
    score++
} while (score <= 10); //simple example of do while loop
/*
score is 1
score is 2
score is 3
score is 4
score is 5
score is 6
score is 7
score is 8
score is 9
score is 10 */

let score2 = 11

do {
    console.log(`score is ${score2}`);
        score2++
} while (score2 <= 10); // score is 11 (loop runs one time and then exits as the condition is not true).

let i = 1;

do {
    let j = 1;

    do {
        console.log(`i = ${i}, j = ${j}`);
        j++;
    } while (j <= 3);

    i++;
} while (i <= 3); // example of nested do while loop
/*
i = 1, j = 1
i = 1, j = 2
i = 1, j = 3
i = 2, j = 1
i = 2, j = 2
i = 2, j = 3
i = 3, j = 1
i = 3, j = 2
i = 3, j = 3 */

