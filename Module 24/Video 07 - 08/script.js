const navList = document.getElementById('navbar');
let li = document.createElement('li');
li.innerText = 'Shop';
navList.appendChild(li);

// ----------------------------------------------

// Where to add
let mainContainer = document.getElementById('main');

// What to add
let section = document.createElement('section');
let h1 = document.createElement('h1');
h1.innerText = 'Products';
section.appendChild(h1);

let ul = document.createElement('ul');
let li1 = document.createElement('li');
li1.innerText = 'Web Hosting';
let li2 = document.createElement('li');
li2.innerText = 'Domain Services';
let li3 = document.createElement('li');
li3.innerText = 'Cloud Services';
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);

// Set innerHTML direclty

let sectionDress = document.createElement('section');
sectionDress.innerHTML = `

<h1>Dresses</h1>
<ul>
  <li>Summer Dress</li>
  <li>Winter Dress</li>
  <li>Spring Dress</li>
</ul>

`
mainContainer.appendChild(sectionDress);
