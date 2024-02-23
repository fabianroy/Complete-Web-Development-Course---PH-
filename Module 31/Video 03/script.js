const numbers = [4, 5, 2, 8, 10];
const doubled = [];
for(const num of numbers) {
  const double = num * 2;
  doubled.push(double);
}

console.log(doubled);

// ----------------------------------------------

// Map

function doubleIt(num){
  console.log(num);
  return num * 2;
}

const result = numbers.map(doubleIt);
console.log(result);

// ----------------------------------------------

const double2 = n => n * 2;
const result2 = numbers.map(double2);
console.log(result2);

// more -----------------------------------------

const shonkhadoy = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const digun = shonkhadoy.map(num => num * 2);
console.log(digun);
const addFive = shonkhadoy.map(num => num + 5);
console.log(addFive);
const even = shonkhadoy.map(num=> num % 2 == 0);
console.log(even);

const friends = ['Nasif', 'Mujtabir', 'Mahir'];
const friendsLength = friends.map(friend => friend.length);
console.log(friendsLength);

const firstLetter = friends.map(frnd => frnd[0]);
console.log(firstLetter);
