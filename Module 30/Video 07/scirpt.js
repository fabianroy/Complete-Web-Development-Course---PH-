const actor = {
    name: 'Ananta',
    age: 24,
    phone: 1234567890,
    money: 10000,
}

// const phone = actor.phone;
// const age = actor.age;
// const money = actor.money;

// console.log(phone);
// console.log(age);
// console.log(money); 
// if right side is an object, left side of disctructuring will be an object as well

const {phone, age: boyos} = actor;
console.log(phone); // 1234567890
// console.log(age); // age is not defined
console.log(boyos); // 24

// Array destructuring 
const numbers = [42, 65];
const [first, second] = numbers;
console.log(first); // 42

const [x, y] = [12, 66];
console.log(x); // 12
console.log(y); // 66

// ---------------------------------
// function destructuring

function doubleThem(a, b){
    return [a*2, b*2];
}

const [prothom, ditiyo] = doubleThem(6, 9);
console.log(prothom);
console.log(ditiyo);
