const age = 20;
if(age >= 18) {
  console.log('You can vote');
} else {
  console.log('You cannot vote');
}

// Simple Ternary Operator

age >= 18 ? console.log('Vote Dio') : console.log('GHumai Thako');

// Ternary Operator 

let price = 500;
const isLeader = false;

price = isLeader === true ? 0 : price + 100;
console.log(price);

// Semi Advance Ternary Operator

if(isLeader === true){
  if(price >1000){
    price = price / 2;
  } else {
    price = 0;
  } 
} else {
  price = price + 100;
}

console.log(price);

price  = isLeader === true ? 0 : price + 100;
console.log(price)

// Complex Ternary 

price  = isLeader === true ? price > 1000 ? price = price / 2 : 0 : price + 100;
console.log(price);
