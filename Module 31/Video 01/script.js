// var let const
// default parameters
// template strings
// arrow functions
// destructuring and spread
// Object.keys, Object.values, Object.entries 
// for of loop in array and string
// for in loop in object

const a = 56;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const person = {
  name: 'John',
  age: 32
};

const message = `Hello, ${person.name}! You are ${person.age} years old.`;

const add = (a, b) => a + b;
add(2, 3);

const {x, y, ...others} = {x: 2, y: 3, z: 4};
console.log(others);


