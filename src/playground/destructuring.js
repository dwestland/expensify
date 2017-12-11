// const person = {
//   name: 'Andrew',
//   age: 26,
//   location: {
//     city: 'Los Angeles',
//     temp: 75
//   }
// }

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}`)

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}. `)
// }

const address = ['1299 Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [street, city, state = ['New York'], zip] = address;

console.log(`You are in ${city} ${state}.`)

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [product, , medium] = item;

console.log(`A medium ${product} cost ${medium}`)