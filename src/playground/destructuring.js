// Object destructuring

// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// }
//
// const {name: Fullname = 'Anonymous', age} = person
// console.log(`${Fullname} is ${age}`)
//
// const {city, temp: temperature} = person.location
// if (city && temperature) {
//     console.log(`It is ${temp} in ${city}`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }
//
// const {name: publisherName = 'Self-Published'} = book.publisher
//
// console.log(publisherName)

// Array destructuring

const address = ['1229 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']

const [, city, state = 'New York',] = address

console.log(`You are in ${city} ${state}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`)
