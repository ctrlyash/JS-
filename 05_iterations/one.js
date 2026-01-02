// for loop

 for (let i = 0; i < array.length; i++) {
     const element = array[i];
    
 } // basic syntax of for loop

 for (let i = 0; i <= 10; i++) {
     const element = i;
     console.log(element);
 } 
/*
1
2
3
4
5
6
7
8
9
10 */


//  forloop with condition

for (let i = 0; i<= 10; i++) {
    const element = i;
    if (element == 5) {
       // console.log("5 is the best number");  
    }
    //console.log(element);
}
/*
0
1
2
3
4
5 is the best number
5
6
7
8
9
10 */


// Nested for loop

for (let i = 0; i <= 3; i++) {
    //console.log(`Outer loop value: ${i}`);
    
    for (let j = 0; j <= 3; j++) {
        //console.log(`Inner loop value ${j} and inner loop ${i}`);
    }
} 
/*
Outer loop value: 0
Inner loop value 0 and inner loop 0
Inner loop value 1 and inner loop 0
Inner loop value 2 and inner loop 0
Inner loop value 3 and inner loop 0
Outer loop value: 1
Inner loop value 0 and inner loop 1
Inner loop value 1 and inner loop 1
Inner loop value 2 and inner loop 1
Inner loop value 3 and inner loop 1
Outer loop value: 2
Inner loop value 0 and inner loop 2
Inner loop value 1 and inner loop 2
Inner loop value 2 and inner loop 2
Inner loop value 3 and inner loop 2
Outer loop value: 3
Inner loop value 0 and inner loop 3
Inner loop value 1 and inner loop 3
Inner loop value 2 and inner loop 3
Inner loop value 3 and inner loop 3 */ 

// Here we can see that the outer loop runs once and then the inner loop runs thrice. This iteration takes place for 3 times.


// Simillarly we can also write tables using for loop.

for (let i = 1; i <= 2; i++) {
    //console.log(`Table of ${i}:`);
    
    for (let j = 1; j <= 10; j++) {
        //console.log(`${i}*${j} = ${i*j}`);
    }
} 
/*
Table of 1:
1*1 = 1
1*2 = 2
1*3 = 3
1*4 = 4
1*5 = 5
1*6 = 6
1*7 = 7
1*8 = 8
1*9 = 9
1*10 = 10
Table of 2:
2*1 = 2
2*2 = 4
2*3 = 6
2*4 = 8
2*5 = 10
2*6 = 12
2*7 = 14
2*8 = 16
2*9 = 18
2*10 = 20 */


// example of for loop on array

let myArray = ["flash", "batman","superman"]
//console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
} 
/* 3
flash
batman
superman */

// break and continue keywords

for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is ${i}`);
} // exits the loop when condition satisfied.
/*
Value of i is 1
Value of i is 2
Value of i is 3
Value of i is 4
Detected 5 */

for (let i = 1; i <= 8; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${i}`);
} // skips current iteration and continues to next one when condition is satisfied.
/*
Value of i is 1
Value of i is 2
Value of i is 3
Value of i is 4
Detected 5
Value of i is 6
Value of i is 7
Value of i is 8 */
