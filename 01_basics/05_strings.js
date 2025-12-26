const name = "Yash"
const repoCount = 1

console.log(name + repoCount + " Value") // Yash1 Value

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`) // Hello my name is Yash and my repocount is 1  (Preffered way)

const gameName = new String ('Yash-yd')

console.log (gameName[0]) // Y
console.log (gameName.__proto__) 


console.log (gameName.length) // 6
console.log (gameName.toUpperCase()) // YASH-YD
console.log (gameName.charAt(2)) // s
console.log (gameName.indexOf('d')) // 5

const newString = gameName.substring(0,3)
console.log (newString); // Yas

const anotherString = gameName.slice(-6, -2) 
console.log (anotherString); // ash-

//Syntax: array.slice(start, end)

//start = index where copying begins.

//end = index where copying stops (this index is NOT included).

// If start or end is negative, it is counted from the end of the array (last element is -1).

const newStringOne = "   Yash   " // (spaces)Yash
console.log (newStringOne.trim()) // Yash

const url = "https://yash.com/yash%20dadhich"
console.log (url.replace('%20', '-')) // https://yash.com/yash-dadhich

console.log (url.includes('rahul')) // false

const password = "Yash-dadhich-12345"
console.log (password.split('-')) // [ 'Yash', 'dadhich', '12345' ]


//Practice strings and its methods |
//study more about strings and its methods on MDN web docs | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String






