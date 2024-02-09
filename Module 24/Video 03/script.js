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

document.getElementsByClassName('orange');

document.getElementsByClassName('Vegetables').innerHTML = "Hello";
