let x = false;
if(x){
    console.log('Value of x is truthy');
} else {
    console.log('Value of x is falsy');
}

/* 
    Truthy :
    1. true
    2. any number (Positive, Negative)
    3. any string
    4. '0'
    5. {}
    6. any object
    7. any array

    Falsy :
    1. false
    2. 0
    3. '' (empty string)
    4. undefined
    5. null
*/

let y = 'Jhankar Mahbub';
if(y){
    console.log('Value of y is truthy');
}  else {
    console.log('Value of y is falsy');
}

let z = '';
if(z){
    console.log('Value of z is truthy');
} else {
    console.log('Value of z is falsy');
}

let a = 0;
if(a){
    console.log('Value of a is truthy');
} else {
    console.log('Value of a is falsy');
}

let b = '0';
if(b){
    console.log('Value of b is truthy');
} else {
    console.log('Value of b is falsy');
}

let check = 1;
if(check == false){
    console.log('Value of check is falsy');
} else {
    console.log('Value of check is truthy');
}

let data = {name: 'Jhankar Mahbub'};
if(data){
    console.log('Value of data is truthy');
} else {
    console.log('Value of data is falsy');
}

let emptyData = {};
if(emptyData){
    console.log('Value of emptyData is truthy');
} else {
    console.log('Value of emptyData is falsy');
}

let arr = [];
if(arr){
    console.log('Value of arr is truthy');
} else {
    console.log('Value of arr is falsy');
}
