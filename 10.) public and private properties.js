// class Product {
//     #name;
//     price;

//     constructor(name, price, inStock) {
//         this.#name = name; // Private property using # symbol
//         this.price = price; //Public property
//     }

//     getName() { // Method to access private property
//         return this.#name;
//     }
// }

// const bag = new Product("Bag", 10000)
// console.log(bag.getName())


// Create a class called Car with public properties for make, model, and year.
// Add a private property named mileage using the # symbol (ES6+).
// Implement a public method getMileage that returns the value of the private mileage property.
// In your code, create a Car instance and try to directly access the mileage property (it should not be accessible). Then, call the getMileage method to retrieve the private property's value.





// Create a class called Car with public properties for make, model, and year.
// Add a private property named mileage using the # symbol (ES6+).
class Car {
    #mileage;
    constructor(make, model, year, mileage){
        this.make = make;
        this.model = model;
        this.year = year;
        this.#mileage = mileage;
    }
// Implement a public method getMileage that returns the value of the private mileage property.
    getMileage() {
        return 'The mileage is;' + ' ' + this.#mileage;
    }
}

// In your code, create a Car instance and try to directly access the mileage property (it should not be accessible). Then, call the getMileage method to retrieve the private property's value.

const newCar = new Car('lexus', 'Rx350', 2020, 10000);

console.log(newCar.mileage); //undefined
console.log(newCar.getMileage()); //The mileage is; 10000