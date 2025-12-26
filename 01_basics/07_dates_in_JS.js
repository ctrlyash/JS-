// Dates in JavaScript
// JavaScript provides a built-in Date object to work with dates and times.

let myDate = new Date();
console.log(myDate) // Current date and time (2025-12-26T12:06:32.660Z)

console.log(typeof myDate) // object

console.log(myDate.toString()) // Date in string format (Fri Dec 26 2025 12:06:32 GMT+0000 (Coordinated Universal Time))

console.log(myDate.toDateString()) // Date in date string format (Fri Dec 26 2025)

console.log(myDate.toLocaleString()) // Date in locale string format (12/26/2025, 12:06:32 PM)

let myCreatedDate = new Date(2020, 0, 25);
console.log(myCreatedDate.toDateString()) // Date created from string (Sat Jan 25 2020)

let myCreatedDate2 = new Date("2020-01-25");   
console.log(myCreatedDate2.toLocaleString()) // Date created from string (1/25/2020, 12:00:00 AM)

let myCreatedDate3 = new Date("01-14-2020"); // MM-DD-YYYY
console.log(myCreatedDate3.toLocaleString()) // Date created from string (1/14/2020, 12:00:00 AM)

let myTimeStamp = Date.now(); // Current timestamp in milliseconds from January 1, 1970
console.log(myTimeStamp) // e.g., 1732548392660

console.log(myCreatedDate.getTime()) // Timestamp of myCreatedDate (e.g., 1579910400000)

console.log(Math.floor(Date.now() / 1000)) // Current timestamp in seconds (e.g., 1732548392)

let newDate = new Date()
console.log(newDate);

console.log(newDate.getMonth() + 1); // Month (0-11, so +1 for human-readable format)

console.log(newDate.getDay() ); // Day of the week (0-6, Sunday is 0)

// `${newDate.getDay()} and the time is ${newDate.getHours()}:${newDate.getMinutes()}`


newDate.toLocaleString('default', {month: 'long'}) // Full month name (default -> internationalization)
newDate.toLocaleString('default', {month: 'short'}) // Short month name

newDate.toLocaleString('default', {weekday: 'long'}) // Full weekday name
newDate.toLocaleString('default', {weekday: 'short'}) // Short weekday name