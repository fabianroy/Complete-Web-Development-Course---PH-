// 12 inch te 1 Feet
// 1 inch = 0.0254 meter

function inchToFeet(inch){
  const feet = inch / 12;
  return feet;
}

let Height = inchToFeet(75);
console.log(Height);

// ---------------------------------------------------------------------------

function inchToFeet2(inch){
  let feetFraction = inch / 12;
  let feetNumber = parseInt(feetFraction);
  let inchRemaining = inch % 12;
  let result = feetNumber + " feet " + inchRemaining + " inches";
  return result;
}

let Height2 = inchToFeet2(75);
console.log(Height2);

// ---------------------------------------------------------------------------

// Mile to KM
// 1 mile = 1.609344 KM

function mileToKM(mile){
  let kilo = mile * 1.609344;
  return kilo;
}

let Mile = mileToKM(4.69);
console.log(Mile);

// ---------------------------------------------------------------------------

// KM to Miles
// 1 KM = 0.62137119 miles

function KMToMile(KM){
  let mile = KM * 0.62137119;
  return mile;
}

let KM = KMToMile(5);  
console.log(KM);
