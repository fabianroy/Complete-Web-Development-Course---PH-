const person = {
    name: 'Lal Nil Holud Mia',
    profession: 'Traffic Surgeon',
    age: 39,
    address: 'Shahbag',
    25: 'twenty five'
}


// dot notation
const prof1 = person.profession;
console.log(prof1);

// bracket notation

const porf2 = person['profession'];

const pName = 'profession';
const porf3 = person[pName];

console.log(porf2);
console.log(porf3);

const number = person[25];
console.log(number);
