// Creating objects
/* const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    greet: function() {
        console.log("Hello, my name is", this.firstName + " " + this.lastName);
    }
};

// Accessing properties
console.log(person.firstName); // "John"
console.log(person["age"]); // 30 (alternative access)
// console.log(person[firstName]); // 30 (alternative access)

// Modifying properties
person.age = 35;
person.greet(); // "Hello, my name is John Doe" (using object method)
// console.log(person.greet);

// Creating objects using constructor functions
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.getInfo = function() {
        return this.make + " " + this.model + " (" + this.year + ")";
    };
}

let myCar = new Car("Ford", "Mustang", 2020);
console.log(myCar.getInfo()); // "Ford Mustang (2020)"

//for in loop
for (let key in person) {
    console.log(key, person[key]); // Access property value using bracket notation
} */
//note: Consider using Object.keys(object) to create an array of the object's own property names and then loop through that array for better control.


//ASSIGNMENTS

// Create an object to represent a product with properties like name, price, and inStock. Write functions to add and remove items from a shopping cart that uses this object structure.
// Implement a program to store student information (name, ID, grades) as objects in an array. Allow users to search for a student by name and display their information.
// Explore object methods for iterating through properties (e.g., for...in loop) and nested objects for more complex data structures.
// Create an object representing a library book with properties like title, author, and isCheckedOut. Implement a function that displays all the book's information using a loop to iterate through the object's properties.
 


// Create an object to represent a product with properties like name, price, and inStock. Write functions to add and remove items from a shopping cart that uses this object structure.
// Define the Product object
function Product(name, price, inStock) {
    this.name = name;
    this.price = price;
    this.inStock = inStock;
  }
  
  // Define the Cart object
  function Cart() {
    this.items = [];
  }
  
  // Function to add a product to the cart
  Cart.prototype.addItem = function(product) {
      this.items.push({product: product});
      console.log(product.name + " " + product.price + " " + product.inStock); 
  };
  
  // Function to remove a product from the cart
  Cart.prototype.removeItem = function(product) {
    this.items.find(item => item.product === product);
    console.log(product.name + " " + product.price + " " + product.inStock);
  };
  
  // Example usage:
  let laptop = new Product("Laptop", 999, true);
  let phone = new Product("Phone", 699, false);
  
  const cart = new Cart();
  cart.addItem(laptop);
  cart.addItem(phone);
  
  cart.removeItem(laptop);
  


// Implement a program to store student information (name, ID, grades) as objects in an array. Allow users to search for a student by name and display their information.

// function user(name, id, grade) {
//     this.name = name;
//     this.id = id;
//     this.grade = grade;

//     // this.getInfo = function() {
//     //     return this.name + " " + this.id + " " + this.grade;
//     // };
// }

// const user1 = new user("Chisom", 28, "A");
// const user2 = new user("Joyce", 20, "B");
// const user3 = new user("Praise", 20, "A");

// const userArray = ["user1", "user2", "user3"];

// function displayUserInfo(name) {
//     for (let i = 0; i <userArray.length; i++) {
//         if (userArray[i].name === name) {
//             console.log(`${userArray[i].name} ${userArray[i].id} ${userArray[i].grade}`);
//         }
//     }
// }
// displayInfo(Chisom);



// Create an object representing a library book with properties like title, author, and isCheckedOut. Implement a function that displays all the book's information using a loop to iterate through the object's properties.
const Book = {
    title: "Jane Eyre",
    author: "Charlotte Bronte",
    isCheckedOut: true
};

function displayInfo(book) {
    for (let x in book) {
        //console.log(`${x}: ${book[x]}`);
        console.log(x + ":" + " " + book[x]);
      }
    
}
displayInfo(Book);