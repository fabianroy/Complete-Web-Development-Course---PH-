const pentagon = ['Nasif', 'Mujtabir', 'Mahir', 'Hira'];
console.log(pentagon.includes('Nasif')); // true
console.log(pentagon.includes('Mujtabir')); // true
console.log(pentagon.includes('Mahir')); // true
console.log(pentagon.includes('Hira')); // true
console.log(pentagon.includes('Rahat')); // false

if(pentagon.includes('Nasif')){
  console.log("Nasif is with us");
} else {
  console.log("Please Nasif come back to us");
}

console.log(pentagon.indexOf('Mahir')); // shows the index of the element

const gpa = []
const uni = 'D H A K A U N I V E R S I T Y'

console.log(Array.isArray(pentagon)); // true
console.log(Array.isArray(gpa)); // true
console.log(Array.isArray(uni)); // false
