const products = [
    { name: 'laptop', price: 2000 },
    { name: 'desktop', price: 1500 },
    { name: 'phone', price: 800 }
];

// has some properties, methods 
class Laptop {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    play() {
        console.log(`The name is ${this.name}`);
    }
}

const laptop = new Laptop('Lenovo', 2000);
console.log(laptop);
const laptop2 = new Laptop('Dell', 1500);
console.log(laptop2);

laptop.play();
laptop2.play();
