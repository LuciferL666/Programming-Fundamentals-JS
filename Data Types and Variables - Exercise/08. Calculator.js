function calculator(numberOne, sign, numberTwo) {
  let total = 0;
  if (sign === "+") {
    total = numberOne + numberTwo;
    console.log(total.toFixed(2));
  } else if (sign === "-") {
    total = numberOne - numberTwo;
    console.log(total.toFixed(2));
  } else if (sign === "/") {
    total = numberOne / numberTwo;
    console.log(total.toFixed(2));
  } else if (sign === "*") {
    total = numberOne * numberTwo;
    console.log(total.toFixed(2));
  }
}
calculator(10, "*", 3);
