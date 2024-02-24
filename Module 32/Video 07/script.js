function greeting (greetingHandler, name){
    greetingHandler(name);
}

function greetingHandler(name){
    console.log('Good Morning', name);
} 

greeting(greetingHandler, 'Tom Hanks');
greeting(greetingHandler, 'Nasif Fuad');
greeting(greetingHandler, 'Sakib Al Hasan');

function greetEvening(name){
    console.log('Good Evening', name);
}

greeting(greetEvening, 'Tom Hanks');
greeting(greetEvening, 'Nasif Fuad');
greeting(greetEvening, 'Sakib Al Hasan');

function submitHandler(){
    console.log('Form Submitted');
}

document.getElementById('btn-submit').addEventListener('click', submitHandler);
