function add(price1, price2){
  let total = price1 + price2;
  return total;
}

let bill = add(5, 10);
console.log(bill);

function doMatch(num1, num2){
  let sum = num1 + num2;
  let diff = num1 - num2;
  let product = num1 * num2;
  let quotient = num1 / num2;
  return [sum, diff, product, quotient];
}

let match = doMatch(5, 10);
console.log(match);

function isEven(num){
  if(num % 2 === 0){
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

isEven(5);
