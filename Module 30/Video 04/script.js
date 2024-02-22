function add(a, b) {
    const result = a + b;
    return result;
}

const sum = add(2, 3);
console.log(sum);

// --------------------------------

function add2(a, b) {
    return a + b;
}

const sum2 = add2(2, 3);
console.log(sum2);

// --------------------------------
// Function Expression

const add3 = function(a, b) {
    return a + b;
}

const sum3 = add3(2, 3);
console.log(sum3);

// --------------------------------
// Arrow Function

const add4 = (a, b) => a + b;
const sum4 = add4(2, 3);
console.log(sum4);
// --------------------------------
const add5 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;
const sum5 = add5(2, 3, 4, 5);
console.log(sum5);
