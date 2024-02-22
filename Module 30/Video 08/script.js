const glass = { name: 'glass', color: 'golden', price: 20, isCleanded: true };
console.log(glass);

// All property names
const keys = Object.keys(glass);
console.log(keys);

// All property values
const values = Object.values(glass);
console.log(values);

// All property names and values
const entries = Object.entries(glass);
console.log(entries); // Array of arrays, Two dimensional array

// delete property

delete glass.isCleanded;
console.log(glass);

const {isCleanded, ...shortGlass} = glass;
console.log(shortGlass);

// freeze object
Object.freeze(glass);
glass.sourse = 'Bangladesh';
console.log(glass);

// seal object
Object.seal(glass);
glass.price = 3000;
console.log(glass);
