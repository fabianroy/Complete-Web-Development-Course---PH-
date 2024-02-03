function evenSizedString(str){
  let size = str.length;
   console.log(str, size);
  if (size % 2 ===0){
    console.log('the size is even');
  } else {
    console.log('the size is odd');
  }
}

evenSizedString("Joy");
evenSizedString("Bangla");

// -----------------------------------------------

function doubleOrTripple(number, doDouble){
  if (doDouble){
    let result = number * 2;
    return result;
  } else {
    let result = number * 3;
    return result;
  }
}

console.log(doubleOrTripple(5, false));

// ----------------------------------------

function Array(arr){
  let res = arr.length;
  return res;
}

console.log(Array([1,2,3,4,5]));
