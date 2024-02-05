let byrianiKhor = ['mujtabir', 'fabian', 'nasif', 'mahir', 'mujtabir', 'rahat', 'aishorzo', 'sadat', 'mujtabir'];

let number = [80, 75, 14, 56, 80, 27, 83, 37, 80];

function noDuplicate(array){
  let unique = [];
  for(let name of array){
    if(unique.includes(name) === false){
      unique.push(name);
    }
  }
  return unique;
}

let uniqueArray = noDuplicate(byrianiKhor);
console.log(uniqueArray);
