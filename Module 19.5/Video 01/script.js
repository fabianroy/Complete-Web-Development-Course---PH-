// Loping Technique
/*
  for loop
  while loop
  do while loop
  for of --> array
  for in --> object
*/

let friends = ["Elon", "Mark", "Bill", "Waren"];
for(let friend of friends){
  console.log(friend);
}

for(let i = 0; i < friends.length; i++){
  console.log(i);
  console.log(friends[i]);
}

let i = 0;
while(i < friends.length){
  console.log(friends[i]);
  i++;
}
