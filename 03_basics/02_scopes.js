let a = 10
const b = 20
var c = 30

console.log(a) // 10
console.log(b) // 20
console.log(c) // 30

var f = 400 // this f is in the global scope.

if (true) {
  let d = 100
  const e = 200
  var f = 300
}


console.log(d) // ReferenceError: d is not defined as let is block scoped
console.log(e) // ReferenceError: e is not defined as const is also block scoped

console.log(f) // 300 
// because variable f is already assigned globally before so 'var f= 300 in the if block reassigns the value 300 to f over 400 that's why 300 is printed and 400 is not.

// let and const are block scoped which means they have nothing to do with the code outide the block scope. whereas var is global scoped an can be accessed all over the code.

// This is why d and e shows reference error outside the block while f is printed.





