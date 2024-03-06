// 6 JS Fundamental Concept That You Should Know

// 1. Declare a Variable with let and const

let name = "John";
name = "Doe";

const age = 25;

// 2. 8 basics conditions
// <, >, <=, >=, ==, ===, !=, !==

if (age > 18) {
    console.log("You are an adult");
} else {
    console.log("You are a kid");
}

// 3. Array - Index, push, pop, length

const numbers = [1, 2, 3, 4, 5];
console.log(numbers[2]);
numbers.push(6);
numbers.pop();
console.log(numbers.length);

// 4. Loop (for, while)

for (let i = 0; i < 100; i++) {
    console.log(i);
}

let i = 0;
while (i < 100) {
    console.log(i);
    i++;
}

// 5. Function

function add(a, b) {
    return a + b;
}

console.log(add(5, 6));

// 6. Object property, method

const person = {
    name: "John",
    age: 25,
    isAdult: true
};

console.log(person.name);
