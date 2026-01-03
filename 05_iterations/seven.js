// Map: map() returns a new array containing the transformed values of each element, without modifying the original array.

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]

const newNums = myNumbers.map( (num) => num + 10) //implicitly returned.
console.log(newNums); /* [
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
] */

// Chaining of maps: map() can be chained with different methods to apply multiple transformations step by step.

// for eg- map chaining with map

  const newNums2 = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)

  console.log(newNums2); // [11, 21, 31, 41, 51, 61, 71, 81, 91, 101] 

  // Map chaining with filter

  const newNums3 = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40)

  console.log(newNums3) // [41, 51, 61, 71, 81, 91, 101]

  