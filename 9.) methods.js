class Product {
  constructor(name, price, inStock) {
    this.name = name;
    this.price = price;
    this.inStock = inStock;
  }

  displayInfo() {
    console.log("Name:", this.name, "Price:", this.price, "In Stock:", this.inStock);
  }
}

const laptop = new Product("Dell XPS", 1299.99, true);

laptop.displayInfo();