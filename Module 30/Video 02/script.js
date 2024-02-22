// default --> If valye is not provided, take this as a default value.


function add(num1 = 0, num2 = 0) {
  const result =  num1 + num2;
  console.log(num1, num2, result);
    return result;
}

const sum = add(3, 2);

function fullName(first = '', last = ''){
    const name = first + ' ' + last;
    console.log(name);
    return name;
}

const name = fullName('John', 'Doe');

function friends (numbers = []){
    console.log(numbers);
}

friends([1, 2, 3]);

function person(human = {}){
    console.log(human);
}

person({name: 'John', age: 30});
