// Slice
let name = "AppleKola";
let part = name.slice(0, 5);
console.log(part);

// Split
let sentence = "I am a good and hard working person";
console.log(sentence.split()); // Writes the whole string 
console.log(sentence.split('')); // Writes every charachters 
console.log(sentence.split(' ')); // Writes every words
console.log(sentence.split('a'));

// Join
let friendsStr = 'Nasif, Mahir, Mujtabir';
let friends = friendsStr.split(', ');
console.log(friends);
let realFriend = ['Nasif', 'Mahir', 'Mujtabir'];
console.log(realFriend.join(', '));

// Concat
let firstName = "Nasif";
let lastName = "Fuad";
let fullName = firstName + ' ' + lastName;
console.log(fullName);
let fullName2 = firstName.concat(' ').concat(lastName);
console.log(fullName2);

// Includes 
console.log(lastName.includes('a'));
console.log(lastName.includes('A'));
