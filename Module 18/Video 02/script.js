/* 

const = the value of const won't change.
let = the value can be changed. 
var = we should not use it. 

*/
const numbers = [1, 2, 3, 4, 5];
const amount = 100;
let name = "Lenovo";
var age = 20;

// For Loop

for (const num of numbers){
  console.log(num);
}

for (let i = 0; i < 5; i++){
  console.log('Hello World');
}

const fruits = ['Apple', 'Jackfruits', 'Oranges', 'Mangoes'];
for(let fruit of fruits){
  console.log("I want to eat " + fruit);
}
