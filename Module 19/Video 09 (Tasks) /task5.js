// Capitalize Every first Letter of each word in a String

let string = 'converT stRing To tItle casE';
var words = string.split(' ');
console.log(words);

for (let i = 0; i < words.length; i++){
  words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
}

console.log(words.join(' '));
