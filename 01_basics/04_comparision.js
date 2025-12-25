// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 >= 1);
// console.log(2 == 1);
// console.log(2 != 1);


console.log("2" > 1);   // true, "2" -> 2
console.log("02" > 1);  // true, "02" -> 2
console.log("2" < "12"); // false, lexicographical comparison 
console.log("abc" < "abcd"); // true, lexicographical comparison ( comparing sequences (like words or strings) character-by-character from left to right until a difference is found)

console.log(null > 0);  // false, null -> 0
console.log(null == 0); // false, null is only equal to undefined 
console.log(null >= 0); // true, null -> 0

// Explanation: comparisions like >, <, >=, <= convert null to 0
// but == does not convert null to 0

console.log(undefined > 0);  // false, undefined -> NaN
console.log(undefined < 0);  // false, undefined -> NaN

console.log(undefined == 0); // false, undefined is only equal to null

console.log(NaN == NaN); // false

// Explanation: comparisions like >, <, >=, <= convert undefined to NaN
// and any comparision with NaN is false
// similarly == does not convert undefined to any number

console.log("2" === 2); // false, different types
console.log("2" !== 2); // true, different types

// Explanation: === and !== do not perform type conversion
// they check both value and type   



