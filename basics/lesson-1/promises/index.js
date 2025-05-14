const { rejects } = require("assert");
const { log } = require("console");
const { resolve } = require("path");

function delayFn(time) {
    return new Promise((resolve) => setTimeout(resolve, time))
}
console.log('Promise lecture starts');

delayFn(200).then(() => console.log("Promise resolves after 2 seconds"))
console.log('Operation ends here');

function divideFn(num1, num2) {
    return new Promise((resolve, rejects) => {
        if (num2 === 0) {
            rejects("Divide by zero not allowed")
        } else {
            resolve(num1/num2)
        }
    })
}

divideFn(100, 20).then((result) =>  console.log('Result', result)).catch((err) => console.log('Error: ', err))
divideFn(10, 0).then((result) =>  console.log('Result', result)).catch((err) => console.log('Error: ', err))
 
// another method
const divideFn1 = async (num1, num2) => {
    if (num2 === 0) throw new Error("Divide by zero not allowed");
    return num1 / num2;
};

divideFn1(100, 20)
  .then(result => console.log('Result:', result))
  .catch(err => console.log('Error:', err.message));

divideFn1(10, 0)
  .then(result => console.log('Result:', result))
  .catch(err => console.log('Error:', err.message));

// Another method
const divideFn2 = async (num1, num2) => {
    if (num2 === 0) throw new Error("Divide by zero not allowed");
    return num1 / num2;
};

const runDivision = async () => {
    try {
        const result1 = await divideFn2(100, 20);
        console.log('Result:', result1);
    } catch (err) {
        console.log('Error:', err.message);
    }

    try {
        const result2 = await divideFn2(10, 0);
        console.log('Result:', result2);
    } catch (err) {
        console.log('Error:', err.message);
    }
};

runDivision();