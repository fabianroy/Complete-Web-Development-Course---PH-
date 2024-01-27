const price = 4000;
if (price >= 5000) {
  const discount = (price * 10) / 100;
  payAmount = price - discount;
  console.log("You got " + discount + " taka discount");
  console.log("You have to pay " + payAmount + " taka only");
} else if (price >= 4000) {
  const discount = (price * 10) / 100;
  payAmount = price - discount;
  console.log("You got " + discount + " taka discount");
  console.log("You have to pay " + payAmount + " taka only");
} else {
  console.log("You have to pay " + price + " taka only");
}
