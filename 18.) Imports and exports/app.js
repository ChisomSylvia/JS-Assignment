// Create a main module app.js that imports the calculator library and demonstrates its usage in various calculations.

const { add, subtract, multiply, divide, exponentiation, modulus, factorial} = require("./calculator.js");

const math = require("./calculator.js");


const addNum = add(5, 5);
console.log(addNum);

const subtractNum = subtract(15, 6);
console.log(subtractNum);

const addNum1 = math.add(5, 5);
console.log(addNum1);

const subtractNum1 = math.add(15, 6);
console.log(subtractNum1);

const multiplyNum = multiply(5, 6);
console.log(multiplyNum);

const divideNum = divide(50, 5);
console.log(divideNum);

const exponentiationNum = exponentiation(2, 6);
console.log(exponentiationNum);

const modulusNum = modulus(6, 6);
console.log(modulusNum);

const factorialNum = factorial(6);
console.log(factorialNum);





// import { add, 
//     subtract, multiply, divide, factorial,
//     cubeRoot} from "./calculator.js";

// console.log(add(10, 4));
// console.log(subtract(10, 4));
// console.log(multiply(5, 4));
// console.log(divide(10, 2));
// console.log(factorial(10));
// console.log(cubeRoot(27));

// const {add} = require("./calculator");
// console.log(add(5, 4));
// //const math = require("./calculator");

// const result = divide(10, 2);
// console.log(result);
