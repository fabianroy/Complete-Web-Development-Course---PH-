// Break

for (let i = 0; i < 1000; i++){
  console.log(i);
  if(i == 100){
    break;
  }
}

let n = 54;
while(n > 0){
  console.log('Hello Babe');
  if(n <= 50){
    break;
  }
  n--;
}

// Continue 

for (let z = 0; z < 1000; z++){
  if(z % 5 !== 0){
    continue;
  }
  console.log(z);
}
