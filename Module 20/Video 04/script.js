function tenTimes (number){
  let result = number * 10;
  return result;
}

function cutHalf (number){
  let half = number / 2;
  return half;
}

tenTimes(5);

let outputA = tenTimes(5000);
let outputB = cutHalf(10);
console.log(outputA);
console.log(outputB);
