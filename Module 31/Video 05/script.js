const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((previous, current) => previous + current, 0);
console.log(total); // 15

// --------------------------------------------

const products = [
  {
    id: 1,
    name: 'Lenovo',
    price: 75000,
  },
  {
    id: 2,
    name: 'HP',
    price: 80000,
  },
  {
    id: 3,
    name: 'Macbook',
    price: 125000,
  }
]

// Map
const names = products.map(name => name.name);
console.log(names); // ["Lenovo", "HP", "Macbook"]
const prices = products.map(price => price.price);
console.log(prices); // [65000, 70000, 125000]

// forEach
products.forEach(p => console.log(p.id)); // 1 2 3

// Filter
const expensive = products.filter(p=> p.price > 100000);
console.log(expensive); // [{id: 3, name: "Macbook", price: 125000}]

// Reduce
const total2 = products.reduce((acum, current) => acum + current.price, 0);
console.log(total2); // 280000
