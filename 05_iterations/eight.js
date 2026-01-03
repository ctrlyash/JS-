// reduce: reduce() reduces an array to a single value by accumulating results using a callback function, starting from an initial value, without modifying the original array.

/* working of reduce:
 1. reduce() runs on each element of the array
 2. acc stores the accumulated result
 3. curr is the current array element
 4. return updates the accumulator value
 5. initial value (0) is used for the first iteration */

 
const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval){
    return acc + currval
}, 0) 

console.log(myTotal); // 6


const myTotal2 = myNums.reduce(function (acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    
    return acc + currval
}, 0) 

console.log(myTotal2); /* 
acc: 0 and currval: 1
acc: 1 and currval: 2
acc: 3 and currval: 3
6 */

// example of reduce using arrow function

const numTotal = myNums.reduce((acc, curr) => (acc+curr), 0)

console.log(numTotal); // 6

// example of reduce on array of objects

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay); // 22996



