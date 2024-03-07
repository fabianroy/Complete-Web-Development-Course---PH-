// Array Methods => map, ForEach, Filter and Find

const products = [
    { name: 'laptop', price: 1000 },
    { name: 'desktop', price: 1500 },
    { name: 'phone', price: 500 },
    { name: 'mouse', price: 50 }
];

// map
const name = products.map(product => product.name);
console.log(name); // ['laptop', 'desktop', 'phone', 'mouse']

const price = products.map(product => product.price);
console.log(price); // [1000, 1500, 500, 50]

// forEach
products.forEach(product => console.log(product));
products.forEach(product => {
    console.log(product.price);
})

// Filter
const cheap = products.filter(product => product.price >= 1000);
console.log(cheap);

const productName = products.filter(product => product.name.includes('l'));
console.log(productName);

// Find

const findProduct = products.find(product => product.name.includes('e'));
console.log(findProduct);
