// for each loop: forEach is an array method that executes a function once for each element in the array. (works only on arrays)
// *You cannot stop a for each loop early


const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){
   console.log(val);
 } ) // It automatically loops through all elements
 // *we dont write function name in function callback
/*
js
ruby
java
python
cpp */

// We can also use arrow function in for each loops.

coding.forEach( (item) => {
    console.log(item);
} )
/*
js
ruby
java
python
cpp */

// We can also use explicitly defined function in for each loop

function printMe(item){
  console.log(item);
 }

coding.forEach(printMe) 
/*
/*
js
ruby
java
python
cpp */

coding.forEach( (item, index, arr)=> {
  console.log(item, index, arr);
 } ) // A function dont only has acces of items, it has access to index and complete array also.
/*
js     0  ["js","ruby","java","python","cpp"]
ruby   1  ["js","ruby","java","python","cpp"]
java   2  ["js","ruby","java","python","cpp"]
python 3  ["js","ruby","java","python","cpp"]
cpp    4  ["js","ruby","java","python","cpp"] */

// using for each loop pn an array of objects 

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} ) // accessing content inside object in an array usinf for each loop
/*
javascript
java
python */
