console.log('Hello, World!');
// console.log(document);

let liCollection = document.getElementsByTagName('li');
for (let li of liCollection) {
    //console.log(li);
}

let allHeading = document.getElementsByTagName('h1');
for (let heading of allHeading) {
    //console.log(heading.innerText);
}

document.getElementById('Fruits').innerText = 'fol';

document.getElementById('Fruits').style.color = 'lime';

document.querySelectorAll('#fruit-sec li');

let someLi = document.querySelectorAll('#fruit-sec li');
console.log(someLi);
for (let li of someLi) {
    console.log(li.innerText);
}

let firstFruit = document.querySelector('#fruit-sec li');
console.log(firstFruit.innerText);

let firstFruit2 = document.getElementsByClassName('orange');
console.log(firstFruit2);
