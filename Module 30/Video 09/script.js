const numbers = [1, 2, 3, 4, 5];

for(const num of numbers) {
  console.log(num);
}

const nobab = 'Siraj Uddoula';
for(const char of nobab) {
  console.log(char);
}

const myObj = {
    a: 1,
    b: 2,
    c: 3
    };

for (const key in myObj) {
    const value = myObj[key];
    console.log(key, value);
}

// Optional
const keys = Object.keys(myObj);
console.log(keys);

for(const key of keys){
    console.log(key);
}
