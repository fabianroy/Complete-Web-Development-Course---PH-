let pc = {
  brand : 'lenovo',
  model : 'ideapad',
  ram : 8,
  storage : 500,
  cpu : 'i5',
}

console.log(pc.brand);
console.log(Object.keys(pc));
console.log(Object.values(pc));

// Nested 

let college = {
  name : 'SJS',
  class : ['9', '10', '11', '12'],
  events : ['science fair', 'bijoy dibosh', 'coding competition'],
  unique : {
    color : 'gray'
  }
}

console.log(college.name);
console.log(college.unique.color);
console.log(college.events[1]);
