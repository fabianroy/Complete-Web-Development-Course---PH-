// Push
const ages = [3, 10, 18, 20];
console.log(ages);
ages.push(44); // To push an element in the array
ages.push(65, 78, 88);
console.log(ages);

// Pop
const friends = ["Nasif", "Mujtabir", "Mahir", "Hira"];
console.log(friends);
friends.push("Rahat");
console.log(friends);
const out = friends.pop(); // Removes the last element from the array
console.log(friends);
console.log(out);

// Shift
friends.shift(); // Removes the first element from the array
console.log(friends);

friends.unshift('Nasif tui firey aye');
console.log(friends);
