// 1. JSON 

const student = {
    name: 'John Doe',
    age: 16,
    scores: {
        maths: 74,
        english: 63
    }
};

const studentJSON = JSON.stringify(student); // convert the object to string

const studentObj = JSON.parse(studentJSON); // parse the data back to object

console.log(student);
console.log(studentJSON);
console.log(studentObj);



// 2. Fetch ----------------------------------------------

fetch('url')
    .then(res => res.json())
    .then(data => console.log(data));


// Keys and Values ----------------------------------------------

const person = {
    name: 'John Doe',
    age: 25
};

const keys = Object.keys(person);
const values = Object.values(person);

// For Each and Map ----------------------------------------------

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(number => console.log(number));

// For of on array like objects
// loop on an object using for in loop

// Add or Remove from an array ----------------------------------------------

const products = [
    { name: 'laptop', price: 1000 },
    { name: 'desktop', price: 1500 },
    { name: 'phone', price: 500 },
    { name: 'mouse', price: 50 }
];

const newProduct = {name: 'Webcam', Price: 300};

const newProducts = [...products, newProduct];

// Create a new array one specific item
// remove an item from an array

const remaining = products.filter(product => product.name !== 'phone')

