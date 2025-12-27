// Singleton Object (created using constructor function.)
// Eg: const JsUser = new Object()

// Object literals

const mySym = Symbol("Key1")

const JsUser = {
  name: " Yash",
  "full name": "Yash Dadhich",
  [mySym]: "myKey1",
  age: 20,
  location: "Jaipur",
  email: "yash@google.com",
  isLoggedIn: true,
  lastLoginDays: ["Monday", "Tuesday", "Friday"],
}

console.log(JsUser.email) // Dot notation (yash@google.com) you cannot use dot notation for keys defined in string format and having spaces.

console.log(JsUser["email"]) // Bracket notation (yash@google.com) you can use bracket notation for all keys.

// For eg:
console.log(JsUser["full name"] ) // Yash Dadhich

console.log(JsUser[mySym]) // myKey1 (
// symbol is always defined and accessed using bracket notation.
// if you try to access symbol key using dot notation it will give you undefined. )
//if we try to define symbol key without brackets then it is considered as string key and will not work.)

console.log( typeof JsUser[mySym]) // symbol

JsUser.email = "yash@chatgpt.com"
//Object.freeze(JsUser) // freezes the object so that no changes can be made to it.

JsUser.email = " yash@microsoft.com" // this will not work as the object is frozen.

console.log(JsUser.JsUser) // { name: ' Yash', 'full name': 'Yash Dadhich', [Symbol(Key1)]: 'myKey1', age: 20, location: 'Jaipur', email: 'yash@chatgpt.com' }

JsUser.greeting = function () {
  console.log("Hello JsUser")
}

console.log(JsUser.greeting) //  [Function (anonymous)] (function not executed, just reference to the function.)

console.log(JsUser.greeting()) // Hello JsUser undefined (function is called and it returns undefined as there is no return statement in the function.)

JsUser.greeting2 = function () {
    console.log(`Hello JS user, ${this.name}`) // this keyword refers to the current object (JsUser)
}

console.log(JsUser.greeting2()) // Hello JS user,  Yash undefined
