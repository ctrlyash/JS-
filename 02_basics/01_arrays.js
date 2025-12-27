// array

const myArr = [0, 1, 2, 3, 4, 5]

console.log(myArr)          // [ 0, 1, 2, 3, 4, 5 ]
console.log(myArr[0])       // 0
console.log(myArr.length)   // 6

const myHeros = ['spiderman', 'ironman', 'thor'] // array of strings

const myArr2 = new Array(1, 2, 3, 4, 5) // another way to create an array


// Array methods

myHeros.push('hulk')          // add element to the end
console.log(myHeros)          // [ 'spiderman', 'ironman', 'thor', 'hulk' ]

myHeros.pop()                 // remove last element
console.log(myHeros)          // [ 'spiderman', 'ironman', 'thor' ]

myHeros.unshift('captain america') // add element to the beginning
console.log(myHeros)               // [ 'captain america', 'spiderman', 'ironman', 'thor' ]

myHeros.shift()                     // remove first element
console.log(myHeros)                // [ 'spiderman', 'ironman', 'thor' ]

console.log(myHeros.indexOf('ironman')) // 1
console.log(myHeros.indexOf('hulk'))    // -1 (not found)
console.log(myHeros.includes('thor'))     // true

const newArr = myHeros.join() // converts array to string, elements separated by commas
console.log(newArr) // spiderman,ironman,thor

console.log(typeof myHeros) // object
console.log(typeof newArr) // string


//slice, splice

const anotherArr = [10, 20, 30, 40, 50, 60, 70]

console.log("A ", anotherArr) // A  [ 10, 20, 30, 40, 50, 60, 70 ]

const myn1 = anotherArr.slice(1,3) // creates a new array from index 1 to 3 (not including 3)

console.log(myn1) // [20,30]
console.log("B ", anotherArr) // original array remains unchanged B  [ 10, 20, 30, 40, 50, 60, 70 ]

const myn2 = anotherArr.splice(1,3) // removes 3 elements starting from index 1

console.log(myn2) // [20,30,40]
console.log("C ", anotherArr) // original array is modified C [10,50,60,70]