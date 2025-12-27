const marvel_heroes = ['IronMan', 'Thor', 'Hulk']
const dc_heroes = ['Batman', 'Superman', 'Flash']

marvel_heroes.push(dc_heroes) // adds the entire dc_heroes array as a single element
console.log(marvel_heroes) // [ 'IronMan', 'Thor', 'Hulk', [ 'Batman', 'Superman', 'Flash' ] ]

console.log(marvel_heroes[3][1]) // Superman

const allHeros = marvel_heroes.concat(dc_heroes) // creates a new array by concatenating marvel_heroes and dc_heroes
console.log(allHeros) // [ 'IronMan', 'Thor', 'Hulk', 'Batman', 'Superman', 'Flash' ]

const all_new_heros = [...marvel_heroes, ...dc_heroes] // using spread operator to combine arrays
console.log(all_new_heros) // [ 'IronMan', 'Thor', 'Hulk', 'Batman', 'Superman', 'Flash' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6,7, [4,5]]]

const real_another = another_array.flat(2) // flattening the array up to 2 levels deep
console.log(real_another) // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]



console.log(Array.isArray("Yash")) // false
console.log(Array.from("Yash")) // [ 'Y', 'a', 's', 'h' ]
console.log(Array.from({name: "Yash"})) // [ ] (object is not iterable) #interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // [ 100, 200, 300 ]


//We'll see more array methods in later programs as we progress.



