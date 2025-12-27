const instagramUser = new Object() // Singleton Object (created using constructor function.)
const instagramUser2 = {} // Object literal (Non-singleton Object.)

instagramUser2.id = "123ysh"
instagramUser2.Name = "Yash"
instagramUser2.isLoggedIn = false

console.log(instagramUser2) // { id: '123ysh', Name: 'Yash', isLoggedIn: false }

const regularUser = {
  email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Yash",
            lastname: "Dadhich"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname) // Yash

const obj1 = {
    1: "A",
    2: "B"
}

const obj2 = {
    3: "C",
    4: "D"
}
const obj4 = {
    5: "E",
    6: "F"
}

//const obj3 = {obj1, obj2}
//console.log(obj3) // { obj1: { '1': 'A', '2': 'B' }, obj2: { '3': 'C', '4': 'D' } }

// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3) // { '1': 'A', '2': 'B', '3': 'C', '4': 'D', '5': 'E', '6': 'F' }

const obj3= {...obj1, ...obj2}
console.log(obj3) // { '1': 'A', '2': 'B', '3': 'C', '4': 'D' }

const users = [
    {
        id: 1,
        email: "some@gmail.com"
    },
    {
        id: 2,
        email: "another@gmail.com"
    },
    {
        id: 3,
        email: "third@gmail.com"
    }
]

console.log(users[1].email) // another@gmail.com

console.log (instagramUser2)

console.log(Object.keys(instagramUser2)) // [ 'id', 'Name', 'isLoggedIn' ]
console.log(Object.values(instagramUser2)) // [ '123ysh', 'Yash', false ]
console.log(Object.entries(instagramUser2)) // [ [ 'id', '123ysh' ], [ 'Name', 'Yash' ], [ 'isLoggedIn', false ] ]

console.log(instagramUser2.hasOwnProperty('isLogged')) // false
console.log(instagramUser2.hasOwnProperty('isLoggedIn')) // true



// we can study more about object methods using browswer console...