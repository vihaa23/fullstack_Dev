const {firstname, lastname} = require("./var") //require is used to import values from another file
const {greeting} = require("./fun")

console.log(firstname, lastname);
greeting(firstname, lastname);