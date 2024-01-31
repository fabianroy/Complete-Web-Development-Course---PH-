let subject = "BUS 101";
let course = "bus 101";
if (subject === course) {
  console.log("Fundamentals of Business Studies");
} else {
  console.log("Subject and Course do not match");
}

let a = "JUST A STRING";
console.log(a.toLowerCase());

let b = "just a string";
console.log(b.toUpperCase());

if (a.toLocaleLowerCase() === b.toLocaleLowerCase()) {
  console.log("Same");
} else {
  console.log("Different");
}

let drink = "Water";
let liquid = " Water    ";
if(drink.trim() == liquid.trim()){
  console.log("Okay");
} else {
  console.log("Not Okay");
}
