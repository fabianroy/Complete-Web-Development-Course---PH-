let mobile = {
  brand : 'apple',
  price : 155000,
  color : 'gold',
  storage : 512,
  isNew : true
}

// For of : Array
// For in : Object

for(let prop in mobile){
  console.log(prop);
  console.log(mobile[prop]);
}

console.log(Object.keys(mobile)); // Array

for(let key of Object.keys(mobile)){
  console.log(key, ':', mobile[key]);
}

// ---------------------------------------------------------

let pen = {brand: 'matador', price : 20, color : 'black'}
let pencil = new Object();
console.log(pen);
console.log(pencil);
let rubber = Object.create({});
console.log(rubber);
