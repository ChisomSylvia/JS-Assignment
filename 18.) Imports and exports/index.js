// JavaScript modules allow you to break down your code into smaller, reusable files. This improves code organization, maintainability, and reusability. Imports and exports are the mechanisms used to share functionality between modules.

// importing default exports
const sum = require("./default exports");

const result = sum(5, 3);
console.log(result);

// importing named exports1
const { add, subtract } = require("./named exports1");
const math = require("./named exports1");

const result1 = add(5, 3);
console.log(result1);

const result2 = subtract(5, 3);
console.log(result2);

const result3 = math.add(5, 3);
console.log(result3);

const result4 = math.subtract(5, 3);
console.log(result4);

// importing named exports2
const { add2, subtract2 } = require("./named exports2");
const math2 = require("./named exports2");

const result5 = add2(5, 3);
console.log(result5);

const result6 = subtract2(5, 3);
console.log(result6);

const result7 = math2.add2(5, 3);
console.log(result7);

const result8 = math2.subtract2(5, 3);
console.log(result8);


// ASSIGNMENT
// Create a library file named calculator.js that exports named functions for various mathematical operations (addition, subtraction, multiplication, division, exponentiation, modulus, factorial, squareRoot, cubeRoot etc.).
// Create a main module app.js that imports the calculator library and demonstrates its usage in various calculations.