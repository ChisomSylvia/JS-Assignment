// Traditional function declaration
// function greet(name) {
//     return "Hello, " + name + "!";
// }

// Arrow function equivalent
const greet = (name) => "Hello, " + name + "!";

console.log(greet("Alice")); // "Hello, Alice!"


// ASSIGNMENT
// Rewrite the following function expressions using arrow functions:
// function greet(name) {
//   return "Hello, " + name + "!";
// }

// function square(number) {
//   return number * number;
// }

// function isPositive(number) {
//   return number > 0;
// }

// Create an arrow function that takes two numbers as arguments and returns their sum.
// Write an arrow function that checks if a string is a palindrome (reads the same backward as forward).



// Rewrite the following function expressions using arrow functions:
// function greet(name) {
//   return "Hello, " + name + "!";
// }
const greet2 = (name) => "Hello, " + name + "!";
console.log(greet2('Chisom'));

// function square(number) {
//   return number * number;
// }
let square = (number) => number * number;
console.log(square(3));

// function isPositive(number) {
//   return number > 0;
// }
const isPositive = (number) => number > 0;
console.log(isPositive(3));


// Create an arrow function that takes two numbers as arguments and returns their sum.
// let sum = (x, y) => {return x + y}; // works fine
let sum = (x, y) => x + y;
console.log(sum(7, 8));


// Write an arrow function that checks if a string is a palindrome (reads the same backward as forward)
// function palindrome(str) {
//     let strReversed = str.split('').reverse().join('');
//     // let strArray = str.split('');
//     // strReverse = strArray.reverse();
//     // strJoin = strReverse.join('');

//   if (str === strReversed) {
//     return str + ' is a palindrome';
//   } else {
//     return str + " is not a palindrome";
//   }
// }

// console.log(palindrome('madam'));

const palindrome = (str) => {let strReverse = str.split('').reverse().join('');
  if (str === strReverse) {
    return `${str} is a palindrome`;
  } else {
    return `${str} is not a palindrome`;
  }
}

console.log(palindrome('madam'));