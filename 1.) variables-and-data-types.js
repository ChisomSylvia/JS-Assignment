// Declaring variables with `let` and `const`
/* let name = "John"; // Can be reassigned later
const age = 30; // Cannot be reassigned

// Primitive data types
let num = 10; // Number
let greeting = "Hello"; // String
let isStudent = true; // Boolean
let nothing = null; // Null
let notDefined; // Undefined

// Complex data types
const person = { // Object
    firstName: "Jane",
    lastName: "Doe"
};
const fruits = ["apple", "banana", "orange"]; // Array */

//ASSIGNMENTS

// Create variables to store your name, age, and favorite color. Use let and const appropriately.
// Declare variables with different primitive data types and perform basic operations like addition, comparison, and type checking.
// Initialize an object to represent a product with properties like name, price, and inStock.
// Create an array of your favorite movies with at least 5 elements.


const fullName = "Chisom Sylvia Obi";
let myAge = 27;
let favColor = "red";


let num1 = 25;
let num2 = num1 ++;
const total = num1 + num2; 
console.log(total); //Addition of two string variables


let firstName = "Chisom";
let lastName = "Obi";
const myName = `${firstName} ${lastName}` //firstName + " " + lastName;
console.log(myName, typeof myName); //Addition of two string variables


let x = 5;
let y = "5";
let z = x == y;
console.log(z, typeof z); //A boolean type of variable


let age;
console.log(age); //An undefined variable


let nullEg = null;
console.log(nullEg); // A null variable


const product = {
    name: "LexusRx350",
    price: 15000000,
    instock: "yes"
};
console.log(product.price);


const myMovies = ["Chuck", "wish", "Titanic", "Inception", "Frozen"];
console.log(myMovies);