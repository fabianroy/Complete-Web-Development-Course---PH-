// Reverse Method 1

let sentence = "I want to learn web development";
let reverse = '';

for (let letter of sentence) {
  // console.log(letter);
  reverse = letter + reverse;
}

console.log(reverse);

// Method 2

let = rev = '';
for (let i = 0; i < sentence.length; i++){
  // console.log(i);
  // console.log(sentence[i]);
  let letter2 = sentence[i];
  rev = letter2 + rev;
}

console.log(rev);

// Method 3 (Shortcut)

let reversed = sentence.split('').reverse().join('');
console.log(reversed);
