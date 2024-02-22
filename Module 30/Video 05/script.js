const difference = (x, y) => x - y;
const multiply = (first, second, third) => first * second * third;

const getAge = (person) => person.age;
const student = { name: 'apple', age: 20 }
const age = getAge(student);
console.log(age);

const getThird = numbers => numbers[2];
const third = getThird([1, 2, 3, 4, 5]);
console.log(third);

// no parameter
const getPie = () => Math.PI;

// large arrow function
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const diff = x - y - z;
    const result = sum + diff;
    return result;
}

const result = doMath(10, 5, 3);
console.log(result);
