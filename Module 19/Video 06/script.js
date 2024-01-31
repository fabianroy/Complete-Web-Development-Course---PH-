let person = {
  name : 'Sadar Uddin',
  age : 35,
  profession : 'Web Dev',
  salary : 85000,
  married : true,
  'fav places' : ['Dhaka', 'London', 'New York']
}

// dot notation
console.log(person);
console.log(person.profession);
// console.log(person.'fav places');
// -----------------------------

let income = person.salary;
console.log(income);

// bracket notation
console.log(person['age']);
console.log(person['fav places']);
// -----------------------------

person.salary = 95000;
console.log(person);
