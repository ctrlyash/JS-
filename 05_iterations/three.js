// for of loop: A for…of loop is used to iterate over the values of iterables like arrays or strings, and it does not work on plain objects because they are not iterable.

// for eg- for of loop works on 
// ["", "", ""] (array of strings)
// [{}, {}, {}] (array of objects)
// "  " (stings)

for (const element of object) {
    
} // basic syntax of for of loop


const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
} // simple example of for of loop
/*
1
2
3
4
5 */

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
} // simple example of for of loop on string
/*
Each char is H
Each char is e
Each char is l
Each char is l
Each char is o
Each char is  
Each char is w
Each char is o
Each char is r
Each char is l
Each char is d
Each char is ! */



// Maps: A Map is a collection of unique key–value pairs where keys can be of any data type, it maintains insertion order, and it is iterable using for…of.

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

 console.log(map); // simple example of map
 /*
 Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
} 
(Here map size is 3 as it doesn't considers repeated keys) */


for (const [key, value] of map) {
    console.log(key, ':-', value);
} // example of for of loop on maps.
/*
IN :- India
USA :- United States of America
Fr :- France
(order is same as insertion order) */

// * We used Destructuring which allows us to directly extract the key and value from each Map entry, making the code cleaner and more readable.


// checking for of loop on object

const myObject = {
    "game1": 'NFS',
    "game2": 'Spiderman'
}

 for (const [key, value] of myObject) {
   console.log(key, ':-', value);
    
} // TypeError: myObject is not iterable
