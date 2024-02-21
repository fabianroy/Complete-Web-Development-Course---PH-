// Intro to ES6
// ES6 is a major update to JavaScript that includes dozens of new features. With a focus on simplicity and readability.

// var : no reason to use var
// let : allow it to reassign
// const : do not allow it to reassign

const name = 100;
const rich = name + 50;
console.log(rich);

let count = 0;
count = count + 1;
console.log(count);

const numbers = [12, 45, 23, 56, 78];
numbers.push(100);
console.log(numbers);

const student = { name: "John", age: 25, phone: 123456 };
student.name = "David";
console.log(student);

// loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}
