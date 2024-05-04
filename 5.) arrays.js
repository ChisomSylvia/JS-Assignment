// Creating arrays
/* const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];

// Accessing elements by index
const firstFruit = fruits[0]; // "apple"
const thirdNumber = numbers[2]; // 3

// Modifying arrays
fruits.push("mango"); // Add element to the end
fruits.pop(); // Remove the last element
fruits.shift(); // Remove the first element
fruits.unshift("kiwi"); // Add element to the beginning
console.log(fruits.length)
console.log(fruits)


for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Higher-order functions
// Array methods (forEach, map, filter)
fruits.forEach(fruit => console.log(fruit)); // Loop through each element
const doubledNumbers = numbers.map(number => number * 2); // Create a new array with doubled values
const evenNumbers = numbers.filter(number => number % 2 === 0); // Create a new array with even numbers
console.log(evenNumbers) */


//ASIGNMENTS

// Write a program that creates an array of your favorite movies and then iterates through the array to print each movie title.
// Implement a function that takes an array of numbers and returns the sum of all the elements.
// Create a program that allows users to add items to a shopping cart (array) and then displays the list of items in the cart.
// Explore array methods like slice, splice, and sort to manipulate and organize array elements in different ways.


const movies = ["Chuck", "wish", "Titanic", "Inception", "Frozen"];

//use for method
// for (let m = 0; m < movies.length; m++) {
//     console.log(movies[m]);
// } 

// //use ForEach method (arrow function)
movies.forEach((movie, index) => console.log(index, movie));

//use ForEach method (without arrow function)
// movies.forEach (
//     function iterate(movie, index) {
//         console.log(`${index}: ${movie}`);
//     }
// );


const numArray = [2, 4, 5, 8, 10];
// use for loop
// function sumArray() {
//     let sum = 0;
//     for (let i = 0; i < numArray.length; i++) {
//         sum += numArray[i];
//     }
//     console.log(sum);
// }
// sumArray(); 

//use map function
const sum = numArray.reduce((acc, num) => acc + num, 0);
//const sumArray = numArray.map(num => num + sum); ?? why can't i use map here
console.log(sum);


// let cart = ["Rice", "Apple", "Berries"];
// cart.push("Hamburger")
// for (let c = 0; c < cart.length; c++) {
//     console.log(cart[c]);
// }

const shoppingCart = [];

function addItem(item) {
    shoppingCart.push(item)
}

function displayCart() {
    console.log("List of items in the cart:");
    shoppingCart.forEach((item) => console.log(item));
  }

addItem("Rice");
addItem("Apple");
addItem("Berries");

displayCart();


const fruits = ["Apple", "Orange", "Berries", "Guava"];
console.log(fruits.slice(1, -2));
console.log(fruits.splice(0, 3));

const movie = ["Chuck", "wish", "Titanic", "Inception", "Frozen"];
console.log(movie.sort());