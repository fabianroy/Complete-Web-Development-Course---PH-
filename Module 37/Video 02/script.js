const numbers = [1, 2, 3, 4, 5];
const student = {
    name: 'Richard',
    guardian: 'Mrs. Reynolds',
    age: 25,
    grade: '12th'
};

// Template Strings
const about = `My name is ${student.name} 
                and my age is ${student.age}
                and number is ${numbers[2]}
                `;
console.log(about);


// Arrow Functions
const getFiftyFive = () => 55;

const addSixtyFive = num => num + 65;
console.log(addSixtyFive(5));

const isEven = x => x%2 == 0; 

const add = (a, b) => a + b;

const multiline = (num1, num2) => {
    const result = num1 + num2;
    return result;
}
console.log(multiline(5, 6));


// Spread Operator
const numberArray = [1, 2, 3, 4, 5]; // [1, 2, 3, 4, 5]

const newNumberArray = [...numberArray, 10, 20, 30, 40, 50]; // [1, 2, 3, 4, 5, 10, 20, 30, 40, 50]

numberArray.push(6); // [1, 2, 3, 4, 5, 6]

console.log(newNumberArray); // [1, 2, 3, 4, 5, 10, 20, 30, 40, 50]
console.log(numberArray); // [1, 2, 3, 4, 5, 6]
