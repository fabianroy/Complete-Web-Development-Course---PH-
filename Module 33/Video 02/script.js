const user = {id: 1, name: 'Fabian', job: 'Developer'};

const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);

//----------------------------------------------

const shop = {
    owner: 'Fabian',
    address: {
        street: 'Kochukhet',
        area: 'Vuter Goli',
        city: 'Dhaka',
        country: 'Bangladesh'
    },
    products: ['laptop', 'phone', 'watch'],
    revenue: 75000,
    isOpen: true 
}

const shopJSON = JSON.stringify(shop); // Converts objects to string
console.log(shopJSON);

const shopOBJ = JSON.parse(shopJSON); // Converts string to objects
console.log(shopOBJ);
