// module.exports -> export
// require -> import

const finalResult = require('./first-module')
console.log(finalResult.add(20,13));

console.log(finalResult.substact(30, 20));

try {
    console.log('Trying to divide by zero');
    let result = finalResult.divide(10, 0)
    console.log(result);
} catch (error) {
    console.log("Caught an error:", error.message);
}



