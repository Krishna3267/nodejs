const xyz = require('./people')

// console.log(people)

console.log(xyz.people)
console.log(xyz.age)

const {people} = require('./people')
console.log(people)

//the os inbuilt module 
const os = require('os'); // built in

console.log(os.platform() , os.homedir())