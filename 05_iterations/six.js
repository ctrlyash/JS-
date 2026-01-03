// some more info about for each....

const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach( (item) => {
    console.log(item);
    return item
 } )
 /*
 js
ruby
java
python
cpp */

console.log(values); // undefined (forEach always returns undefined; use map when you need a new array.)



// Filter : filter is used to create a new array by selecting elements that satisfy one or more conditions.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => num > 4)
console.log(newNums); // [5, 6, 7, 8, 9, 10] (implicitly returned)

const newNums2 = myNums.filter( (num) => {
   return num > 4
} )
console.log(newNums2); // [5, 6, 7, 8, 9, 10] (explicitly returned as scope was used)


// example using for each like filter to print desired output (not recommended)

const nums = []

myNums.forEach( (num) => {
    if (num > 4) {
        nums.push(num)
    }
} )

console.log(nums); // [ 5, 6, 7, 8, 9, 10 ]


// practical application of filter

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')
  console.log(userBooks); /*[
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 } 
] */


 let userBooks2 = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks2); /* [
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 }
] */

  








