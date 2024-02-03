// Object : Write a function to give me the sum of all numbers in an array.

// step 1 : Decalre a function.
// step 2 : Call check whether the function is called properly.
// step 3 : set a parameter(s)
// step 4 : Pass the parameter(s), check whether rarameter is passed in a proper format.
// step 5 : Do the finction taks (step by step)

function sum(arrayNumbers){
  let sum = 0;
  for(let number of arrayNumbers){
    console.log(number);
    sum = sum + number;
  }
  return sum;
}
let nums = [1,2,3,4,5];
let result = sum(nums);
console.log("Sum of number = ", result);
