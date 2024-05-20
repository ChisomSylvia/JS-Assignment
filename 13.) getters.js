class Product {
    #name;
    #price;
    constructor(name, price, inStock) {
        this.#name = name;
        this.#price = price; // Private property
        this.inStock = inStock;
    }

    get price() { // Getter for price property
        return this.#price.toFixed(2); // Format price with two decimals
    }
}

let laptop = new Product("Dell XPS", 1299.99, true);
console.log(laptop.price); // Outputs: "1299.99" (formatted using getter)