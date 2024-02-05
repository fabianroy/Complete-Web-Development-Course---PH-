// Calculate The Average Of The Odd Numbers In An Array

function oddAvg(numbers) {
  let odds = [];
  for (let number of numbers) {
    if (number % 2 !== 0) {
      odds.push(number);
    }
  }
  let sum = 0;
  for(let number of odds){
    sum = sum + number;
  }
  let count = odds.length;
  let avg = sum / count;
  return avg;
}

const numbers = [42, 13, 58, 65, 81, 96, 7];
const avg = oddAvg(numbers);
console.log(avg);
