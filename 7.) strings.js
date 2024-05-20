// String manipulation methods
/* const message = "Hello, World!";
const message1 = 'Hello, World!';
const message3 = `Hello, World!`;
console.log(message1.length); // 13 (string length)
console.log(message1.toUpperCase()); // "HELLO, WORLD!"
console.log(message1.indexOf("W")); // 7 (position of "World)

const message2 = "   JavaScript is awesome!   ";
console.log(message2.slice(2, -2)); // "avaScript is awesome!" (extracts a portion)
console.log(message2.substring(0, 10)); // "JavaScript" (similar to slice with positive values)
console.log(message2.toLowerCase()); // "  javascript is awesome!  " (lowercase)
console.log(message2.trim()); // "JavaScript is awesome!" (removes whitespace)
console.log(message2.split(" ").join("")); // "  JavaScript is great!  " (replaces a word)

const greeting = "Hello, ".concat("world", "!"); // "Hello, world!" (concatenation)
console.log(greeting);

//concatenation
const name = "Hello " + "world"
const firstName = "Jane"
const lastName = "Doe"

console.log("Hi, I am " + firstName + " " + lastName);
console.log(`Hi, I am ${firstName} ${lastName}`) */

//ASSIGNMENTS

// Write a program that prompts the user for a sentence. Use string methods to convert the sentence to lowercase, remove leading and trailing whitespace, and then count the number of words in the sentence.
// Implement a function that takes a string as input and checks if it is a palindrome. Use string methods to manipulate the string for comparison.



// Write a program that prompts the user for a sentence. Use string methods to convert the sentence to lowercase, remove leading and trailing whitespace, and then count the number of words in the sentence.
let userInput = prompt("Please enter your full name");

console.log(userInput.toLowerCase());
console.log(userInput.trim());
console.log(userInput.split(" ").length);



// Implement a function that takes a string as input and checks if it is a palindrome. Use string methods to manipulate the string for comparison.
function checkP(str) {
    let reverseP = str.split("").reverse().join("");
    
    if (reverseP == str) {
        console.log(true);
    } else {
        console.log(false);
    }
}
checkP("rar"); //use .length and char at to manipulate this.