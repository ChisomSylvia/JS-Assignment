// Function declaration
/* function greet(name) {
    console.log("Hello,", name + "!");
}
greet("Alice"); // Calling the function

// Function expression (assigning a function to a variable)
const calculateArea = function(width, height) {
    return width * height;
};

let area = calculateArea(5, 3);
console.log("Area:", area);

// Function parameters with default values (ES6)
function fullName(firstName = "John", lastName = "Doe") {
    return firstName + " " + lastName;
}

const name = fullName()

console.log("Full name:", fullName()); // Uses defaults
console.log("Full name:", fullName("Jane", "Smith")); // Provides arguments

let i = 0;

function incrementI() {
    i += 1
} */


//ASSIGNMENTS

// Create a function that takes two numbers as arguments and returns their sum.
// Write a function to calculate the factorial of a number (the product of all positive integers less than or equal to that number).
// Implement a function that checks if a string is a palindrome (reads the same backward as forward).

// Create a function that takes two numbers as arguments and returns their sum.
function sum(x, y) {
    return(x + y);
}
console.log(sum(5, 4));


// Write a function to calculate the factorial of a number (the product of all positive integers less than or equal to that number).
function factorial(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    console.log(result);
}
factorial(10);


// Implement a function that checks if a string is a palindrome (reads the same backward as forward).
let p = "loop";
function palindrome() {
    let pRev = p.split("").reverse().join("");
    if (p == pRev) {
        console.log("It is a palindrome");
    } else {
        console.log("It is not a palindrome");
    }
}
palindrome();