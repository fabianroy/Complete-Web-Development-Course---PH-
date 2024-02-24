// Ways to get undefined

// 1. Variable declared but not assigned
let first;
console.log(first); // undefined

// 2. Variable declared and assigned undefined
let second = undefined;
console.log(second); // undefined

// 3. Function without return
function add(a, b) {
  let sum = a + b;
}

let result = add(3, 4);
console.log(result); // undefined

// 4. Function with return but no value
function third(a, b, c ,d){
    let total = a + b + c + d;
    console.log(a, b, c, d);
    return;
}

third(2, 5)// undefined

// 5. Function with negative condition
function noNegative(a, b){
    if(a < 0 || b < 0){
        return;
    }
    return a + b;
}

let total2 = noNegative(2, -5);
console.log(total2); // undefined

// 6. Accessing non-existing property
let fifth  = {id: 2, name: 'Pancham', age: 25};
console.log(fifth.address); // undefined

// 7. Array element out of bound
let sixth = [1, 2, 3, 4, 5];
// You should not use delete operator to delete an element from an array. Instead, use splice method.
delete sixth[2];
console.log(sixth[5], sixth[2], sixth[0], sixth[8]); // undefined

// 8. Null
let eighth = null;
console.log(eighth); // null

// 9. Object property with null value 
let data = {name: 'Pancham', age: null};
console.log(data.age); // null
console.log(typeof null); // object
