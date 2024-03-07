// Falsy = '', 0, false, null, undefined, NaN
// Truthy = ' ', 1, true, {}, [], 'Name'

var myVar = 5;
if(myVar) {
    myVar = myVar + 10;
} else {
    myVar = 0;
}

console.log(myVar);

let myMoney = 500;
if(!myMoney) {
    console.log('Give him 5000');
}

const money = 120;
let food;
if(money >= 100) {
    food = 'Biriyani';
} else { 
    food = 'Cha Biscuit';
}

// Terenary 
let food1 = money > 100 ? 'Biriyani' : 'Cha Biscuit';
console.log(food1);

let drink = (money > 100 && myMoney > 100) ? 'Coke' : 'Filter Water';

// String to number

const input = '560';
const inputNumber = +input;
console.log(inputNumber);

// Number to string

const number = 560;
const numberString = number + '';
console.log(numberString);

//

let isActive = true;
const showUser = () => console.log('display User');
const hideUser = () => console.log('Hide User');
isActive ? showUser() : hideUser();
isActive && showUser();
isActive || hideUser();

//
isActive = !isActive;
