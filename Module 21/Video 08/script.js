let a = 10;
let b = 20;
console.log(a, b);

let temp = a;
a = b;
b = temp;

console.log(a, b);

// -----------------------------------------------------------

let x = 5;
let y = 10;

console.log(x, y);

[x, y] = [y, x];

console.log(x, y);
