// Problem 1

function calculateMoney(ticketSale) {

let ticketPrice = 120;

let guardCost = 500;

let staffNumber = 8;

let perStaffCost = 50;

let totalStaff = staffNumber * perStaffCost;

if (ticketSale >= 0) {

let profit = ticketSale * ticketPrice - guardCost - totalStaff;

return profit;

} else {

return "Invalid Number";

}

}

// Problem 2

function checkName(name) {

if (typeof name === 'string') {

let lastWord = name[name.length - 1].toLowerCase();

if (lastNames.includes(lastWord)) {

return 'Good Name';

} else {

return 'Bad Name';

}

} else {

return 'Invalid Input';

}

}

// Problem 3

function deleteInvalid(result) {

if (Array.isArray(result)) {

let numbers = [];

for (let i = 0; i < result.length; i++) {

if (typeof result[i] === 'number' && !isNaN(result[i]) && isFinite(result[i])) {

numbers.push(result[i]);

}

}

return numbers;

} else {

return 'Invalid Array';

}

}

// Problem 4

function password(makePass) {

if ((makePass.name === '' || makePass.name === null || makePass.name === undefined) || (makePass.birthYear === null) || (makePass.siteName === '' || makePass.siteName === null || makePass.siteName === undefined) || (makePass.birthYear.toString().length !== 4)) {

return 'Invalid';

} else {

return makePass.siteName[0].toUpperCase() + makePass.siteName.slice(1, makePass.siteName.length) + '#' + makePass.name + "@" + makePass.birthYear;

}

}

// Problem 5

function moneySavings(allPayments, livingCost) {

let totalSavings = 0;

if (Array.isArray(allPayments) && !isNaN(livingCost)) {

for (let i = 0; i < allPayments.length; i++) {

if (allPayments[i] >= 3000) {

let tax = 20 / 100;

totalSavings += allPayments[i] - (allPayments[i] * tax);

} else {

totalSavings += allPayments[i];

}

}

let grossSavings = totalSavings - livingCost;

if (grossSavings >= 0) {

return grossSavings;

} else {

return 'Earn More';

}

} else {

return 'Invalid Input';

}

}
