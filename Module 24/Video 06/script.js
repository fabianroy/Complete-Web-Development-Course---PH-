let sections = document.querySelectorAll('section');
for(let section of sections){
    section.style.color='red';
    section.style.backgroundColor='yellow';
    section.style.padding='20px';
    section.style.border='1px solid black';
    section.style.margin='20px';
    section.style.borderRadius='10px';
    section.style.boxShadow='0 0 10px black';
}

let h2 = document.getElementById('hello');
h2.classList.add('text-center');
h2.classList.remove('largeText');
