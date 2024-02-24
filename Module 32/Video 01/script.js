// Static typed language

// int a = 5;
// string b = "Hello";
// bool c = true;
// object d = {a, b, c};
// int[] numbers = [1, 2, 3, 4, 5];
// string[] strings = ["a", "b", "c"];

// Dynamic typed language
// Premitive data types
let a = 5;
let b = "Hello";
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// Non-premitive data types
let e = {name: "John", age: 25};
let numbers = [1, 2, 3, 4, 5];
let strings = ["a", "b", "c"];
console.log(typeof e);
console.log(typeof numbers);
console.log(typeof strings);

// --------------------------------------------

let x = 5;
let y = x;
console.log(x, y);
y = 10;
console.log(x, y);

let p = {name: "John", age: 25};
let q = p;
console.log(p, q); // p and q are reference to the same object in memory
q.age = 30;
console.log(p, q); // p.age = 30 as well because q is a reference to p object in memory
