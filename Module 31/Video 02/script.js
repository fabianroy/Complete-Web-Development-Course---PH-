// data access

const data = [{ id: 1, name: 'Kochu', address: 'Kochu Khet' }];
console.log(data[0].address);

// --------------------------------------------

const products = {
  count: 5000,
  data: [
    { id: 1, name: 'Lenovo', price: 80000 },
    { id: 2, name: 'MacBook', price: 165000 }
  ]
}

console.log(products.data[1].price);

// --------------------------------------------

const users = {
  id: 5001,
  name: 'Kochu',
  address: {
    street: {
      area: 'Ahmed Nagar',
      house: '354/8'
    },
    city: 'Dhaka',
    country: 'Bangladesh'
  }
}

console.log(users.address.street.house);
console.log(users.address.sector?.area);
