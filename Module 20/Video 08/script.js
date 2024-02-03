/* 
 * Create a function that will return only the even numbers
 * Return the sum of even numbers
*/

function evenNumbers(numbers){
  const evens = []
  for(let number of numbers){
    if(number % 2 === 0){
      console.log(number);
      evens.push(number);
    }
  }
  return evens;
}

const numbers = [1,2,3,4,5,6,7,8,9,10];
const evens = evenNumbers(numbers);
console.log(evens);

function sumOfEvens(numbers){
  let sum = 0;
  for(let number of numbers){
    if(number % 2 === 0){
      console.log(number);
      sum = sum + number;
    }
  }
  return sum;
}

const sum = sumOfEvens(numbers);
console.log("The sum of the evens is =", sum);
