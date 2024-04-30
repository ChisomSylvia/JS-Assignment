// Arithmetic operators
/* let sum = 10 + 5;
let difference = 20 - 3;
let product = 4 * 6;
let quotient = 12 / 3;

// Comparison operators
let isEqual = 10 === 10; // Strict equality
console.log(isEqual)
let isGreaterThan = 7 > 5;
let isLessThanOrEqual = 4 <= 4;

// Logical operators
let isTrue = true && false; // AND (both must be true)
let isFalse = true || false; // OR (at least one must be true)
let isNegated = !true; // NOT (inverts the value)

// Increment/decrement operators
let count = 1;
count++; // Increment (count becomes 2)
count--; // Decrement (count becomes 1 again)

// Assignment operator
let x = 5;
x += 3; // Equivalent to x = x + 3 (x becomes 8) */


//ASSIGNMENTS

// Write expressions using arithmetic operators to calculate the area of a rectangle and the volume of a cube.
// Compare two numbers using different comparison operators and print the results.
// Combine logical operators to create conditional statements that check if a number is even or odd.
// Experiment with increment and decrement operators to modify variable values.


let length = 10;
let width =  5;
const area = length * width;
console.log(area); //area of a rectangle

let a = 3;
let volume = a ** 3;
console.log(volume); //volume of cube


console.log(length >= width);
console.log(length === width);


let x = 3;
if (x % 2 === 0) {
    console.log("This is an even number");
} else {
    console.log("This is an odd number");
}


let num = 32;
num = ++num;
console.log(num);
num = -- num;
console.log(num);