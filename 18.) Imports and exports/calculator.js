// Create a library file named calculator.js that exports named functions for various mathematical operations (addition, subtraction, multiplication, division, exponentiation, modulus, factorial, squareRoot, cubeRoot etc.).


//addition function
exports.add = function(x, y) {
    return x + y;
}

//subtraction function
exports.subtract = function(x, y) {
        return x - y;
}

//multiplication function
exports.multiply = function(x, y) {
    return x * y;
}

//division function
exports.divide = function(x, y) {
    return x / y;
}

//exponentiation function
exports.exponentiation = function(x, y) {
    return x ** y;
}

//modulus function
exports.modulus = function(x, y) {
    return x % y;
}

//factorial function
exports.factorial = function(num) {
    let factor = 1
    for (let x = 1; x <= num; x++) {
        factor *= x;
    }
    return factor;
}
console.log(exports.factorial(10)); //Que 5

//square root function
exports.squareRoot = function(num) {
    return Math.sqrt(num);
}

//cube root function
exports.cubeRoot = function(num) {
    return Math.cbrt(num);
}




// //addition function
// export function add(x, y) {
//     return x + y;
// }


// //subtraction function
// export function subtract(x, y) {
//     return x - y;
// }


// //multiplication function
// export function multiply(x, y) {
//     return x * y;
// }


// //division function
// export function divide(x, y) {
//     return x / y;
// }


// //exponentiation function
// export function exponentiation(x, y) {
//     return x ** y;
// }


// //modulus function
// export function modulus(x, y) {
//     return x % y;
// }


// //factorial function
// export function factorial(num) {
//     let factor = 1
//     for (let x = 1; x <= num; x++) {
//         factor *= x;
//     }
//     return factor;
// }
// console.log(exports.factorial(10)); //Que 5


// //square root function
// export function squareRoot(num) {
//     return Math.sqrt(num);
// }


// //cube root function
// export function cubeRoot(num) {
//     return Math.cbrt(num);
// }