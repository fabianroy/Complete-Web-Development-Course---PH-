const salary = 25000;
const isBCS = true;
const height = 66;

if(salary > 20000 && height >= 66){
  console.log("Shupatro");
} else {
  console.log("Onno patro khujo");
}

// -------------------------------------

if(salary >= 25000 || height >= 66){
  console.log("Eso baba kobul")
} else {
  console.log("Vag baba mokbul");
}

// More and More Condition

if(salary >= 25000 || height >= 66 || isBCS == true){
  console.log("Emon shupatro kokhono pabona")
} else {
  console.log("Emon bekar pola biya dibo na")
}

// -------------------------------------

if(salary >= 25000 && height >= 66 && isBCS == true){
  console.log("Eso baba kobul")
} else {
  console.log("Vag baba mokbul");
}

// Comples Condition - - - - - - - - - - - 

if((salary >= 25000 && isBCS == true) || (salary >= 25000 && height >= 66)){
  console.log("Baba bolo kobul")
} else {
  console.log("Vaag Sala Mokbul");
}
