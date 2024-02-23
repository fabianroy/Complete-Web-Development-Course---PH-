class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sleep() {
        console.log(`${this.name} is sleeping now`);
    }
    activity() {
        this.sleep();
    }
}

const kodom = new Person('Kodom', 25);
console.log(kodom);
kodom.sleep();

const badam = new Person('Badam', 21);
console.log(badam);
badam.sleep();

// Bejal
// const lazy = kodom.sleep;
// lazy(); // undefined is sleeping now

// --------------------------------------------

const person = {
    name: 'Kodom Ali',
    job: 'Badam Beche',
    3: 'Three'
};

console.log(person.job);
console.log(person['job']);
console.log(person['3']);
