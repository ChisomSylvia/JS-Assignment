// class Product {
//     static tax = 0.1;
//     static calculateTax(price, taxRate) {
//         return price * taxRate;
//     }
// }

// const bag = new Product();

// console.log(Product.calculateTax(100, 0.07)); // 7 (static method call)
// console.log(bag.calculateTax(100, 0.07)); // 7 (static method call)


// Create a class called MathUtils with a static method calculateArea that takes two arguments (length and width) and returns the area of a rectangle.
// Call the calculateArea method directly on the MathUtils class to calculate the area without creating an object instance.



// Create a class called MathUtils with a static method calculateArea that takes two arguments (length and width) and returns the area of a rectangle.
class MathUtils {
    static calculateArea(length, width) {
        return length * width;
    }
}

// Call the calculateArea method directly on the MathUtils class to calculate the area without creating an object instance.
console.log(MathUtils.calculateArea(10, 5)); // 50