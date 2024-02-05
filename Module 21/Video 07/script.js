let date = new Date();
console.log(date);

let newDate = new Date('2024-02-13');
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

let specificDate = new Date(2091, 0, 26);
specificDate.setMonth(10);
console.log(specificDate.toLocaleString('en-GB'));
