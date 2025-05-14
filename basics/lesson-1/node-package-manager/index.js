const lodash = require('lodash')

const  names = ["alaje", "plenty", "ayinde", "owo"]

const capitalize = lodash.map(names, lodash.capitalize)

console.log(capitalize);
 