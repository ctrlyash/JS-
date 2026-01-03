// for..in loop: A for…in loop is used to iterate over the enumerable keys of an object.

// - for in loop iterates over keys unlike for of which iterates over values.

for (const key in object) {
    
} // basic syntax of for in loop


const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    console.log(key);
} // this returns only the keys
/*
js
cpp
rb
swift */

// we can print values using:

for (const key in myObject) {
    console.log(myObject[key]);
}
/*
javascript
C++
ruby
swift by apple */


for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
/*
js shortcut is for javascript
cpp shortcut is for C++
rb shortcut is for ruby
swift shortcut is for swift by apple */

// Trying using for in loop on array

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key);
    
} // In arrays, keys = indexes
/*
0
1
2
3
4 */

// if you want to print values of programming using for in loop

for (const key in programming) {
    console.log(programming[key]);
} // (not recommended)
/*
js
rb
py
java
cpp */

// Trying using for in loop on maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

 for (const key in map) {
    console.log(key);
 } // nothing is printed (no error, no output)

 // for…in works on plain objects and iterates over their keys, but Map does not store data as enumerable object properties, so for…in cannot iterate over a Map.

