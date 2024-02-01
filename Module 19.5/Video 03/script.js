let persons = ['Nasif', 'Mujtabir', 'Mahur', 'Fabian'];
console.log(persons.sort());

let numbers = [4, 7, 2, 8, 3, 6];
// Ascending Sorting
console.log(numbers.sort());
console.log(numbers.sort().reverse());

let numbersAgain = [1, 4, 70, 12, 23, 8, 3, 69, 73];
let numbers_asc = [...numbersAgain].sort(function (a, b) {return a - b});
let numbers_dsc = [...numbersAgain].sort(function (a, b) {return b - a});
console.log(numbers_asc);
console.log(numbers_dsc);
