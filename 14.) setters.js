// class Product {
//     #name;
//     #price
//     constructor(name, price, inStock) {
//         this.#name = name;
//         this.#price = price;
//         this.inStock = inStock;
//     }

//     set price(value) { // Setter for price property
//         if (value > 0) {
//             this.#price = value;
//         } else {
//             console.error("Price must be a positive number.");
//         }
//     }
// }
 
// let laptop = new Product("Dell XPS", 1299.99, true);
// laptop.price = 1000; // Valid price assignment
// laptop.price = -50;  // Error message logged by setter

// Create a class called Product with a property for price.
// Implement a getter for the price property that returns the formatted price with a currency symbol (e.g., "$").
// Implement a setter for the price property that validates the input value to ensure it's a positive number before assigning it to the internal property.
// Create a Product instance and try setting an invalid price using the setter. Observe how the validation prevents incorrect values.



// Create a class called Product with a property for price.
class Product {
    constructor (price) {
        this.price = price;
    }

    // Implement a getter for the price property that returns the formatted price with a currency symbol (e.g., "$").
    // get price() {
    //     return Intl.NumberFormat('de-De', {
    //         style: 'currency', currency: 'NGN'
    //     }). FORMAT(
    //         this.price,
    //     )
    // };

    // Implement a setter for the price property that validates the input value to ensure it's a positive number before assigning it to the internal property.
    set price(num) {
        if (num > 0) {
            this.price = num;
        } else {
            console.log('Number must be a positive number');
        }
    }
}


// Create a Product instance and try setting an invalid price using the setter. Observe how the validation prevents incorrect values.
let lexus = new Product(1);

lexus.price = 5;