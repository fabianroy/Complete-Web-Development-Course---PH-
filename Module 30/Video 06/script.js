const max = Math.max(16, 23, 45, 1, 89, 23);
console.log(max);

// Use Spread Operator

const numbers = [16, 23, 45, 1, 89, 23];
const arrayMax = Math.max(...numbers);
// console.log(...numbers);
console.log(arrayMax);


// Use spread operator to copy

const numbs = [16, 23, 45, 1, 89, 23];
const numbs2 = numbs;
const numbs3 = [...numbs];
numbs.push(55);
console.log(numbs);
console.log(numbs2);
console.log(numbs3);

const sonkha = [...numbs, 999]; // add extra element while copying
console.log(sonkha);
