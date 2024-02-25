// 1. Block Scope
// 2. Function Scope
// 3. Global Scope

// 1. Block Scope
// let, const

{
    let x = 10;
    const y = 20;
    console.log(x, y);
}

// console.log(x, y); // ReferenceError: x is not defined

{
    var x = 10;
    console.log(x);
}

console.log(x);


// 2. Function Scope

function myFunction() {
    let x = 10;
    const y = 20;
    var z = 30;
    console.log(x, y, z);
}

myFunction();
// console.log(x, y, z); // ReferenceError: x is not defined

// 3. Global Scope

let x = 10;
const y = 20;
var z = 30;
console.log(x, y, z);


/* LEARNED FROM LWS YT CHANNEL */
/* Sumit Vaiyer Jobab Nei */
/* PH Tumi Eto Pera Dao Keno */
/* Jhankar Vai Apnio :"( */
