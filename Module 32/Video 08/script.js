function sum(a, b, c){
    let args = [...arguments];
    console.log(args); // [45, 25, 87, 85, 96]
    let result = a + b + c;
    return result;
}

let result = sum(45, 25, 87, 85, 96);
console.log(result); // 6 
console.log(sum.length);

// Pass by value

let a = 5;
let b = 7;
function multiply(a, b){
    a = 27;
    let result = a * b;
    return result;
}

console.log(a); // 5
let output = multiply(a, b);
console.log(output); // 35

// Pass by reference

let student1 = {name: 'Jalil', bou: 'Kholil'};
let student2 = {name: 'Sholil', bou: 'Nonil'};

function makeMovie(couple1, couple2){
    couple1.name = 'Akash';
    couple2.bou = 'Patal';

}

console.log(student1, student2);
makeMovie(student1, student2);
console.log(student1, student2);
