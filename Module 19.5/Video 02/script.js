let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let reverse = numbers.reverse();
//console.log(reverse);

let rev_numbers = [];
for (let num of numbers){
  // console.log(num);
  rev_numbers.unshift(num);
}
// console.log(rev_numbers);
let reversed_numbers = []
for (i=0; i<numbers.length; i++){
  let num = numbers[i];
  reversed_numbers.unshift(num);
}

// reverse side
let reverse_again = [];
for(let i = numbers.length - 1; i>=0 ; i--){
  let num = numbers[i];
  console.log(num);
  reverse_again.push(num);
}

console.log(reverse_again);
