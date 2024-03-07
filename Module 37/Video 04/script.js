// 1. Array Destructuring 

const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [42, 65];

const [x, y] = numbers;



function boxify (num1, num2) {
    const nums = [num1, num2];
    return nums;
}

console.log(boxify(90, 34));



const students = {
    name: 'Fab',
    age: 20,
    varsity: ['UAP', 'DBA'],
}

const [varsity, department] = students.varsity;
const institute = [varsity, department];
console.log(institute)

// ---------------------------------------------------------------------

// 2. Object Destructing

const {name, age} = {name: 'alu', age: 20};
const object1 = {name, age};
console.log(object1);

const employee = {
    IDE: 'VS Code',
    Designation: 'Seniro Developer',
    Device: 'MacBook Pro',
    language: ['JS', 'Python', 'MySQL'],
    Company: {
        Name: 'Meta',
        Address: 'Kochukhet',
        House: 'Lomba Kochu'
    }
}

const {Device, IDE} = employee;
const {Name, Address, House} = employee.Company;
const [language1, language2, language3] = employee.language;
const language = [language1, language2, language3];

console.log(Device, IDE);
console.log(Name, Address, House);
console.log(language);
