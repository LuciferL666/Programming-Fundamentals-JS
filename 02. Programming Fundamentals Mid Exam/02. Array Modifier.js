function arrayModifier(array) {
  let numberToChange = array.shift().split(" ").map(Number);

  while (array[0] !== "end") {
    let line = array.shift().split(" ");
    let command = line[0];
    let indexOne = Number(line[1]);
    let indexTwo = Number(line[2]);
    if (command === "swap") {
      [numberToChange[indexOne], numberToChange[indexTwo]] = [
        numberToChange[indexTwo],
        numberToChange[indexOne],
      ];
    } else if (command === "multiply") {
      numberToChange[indexOne] *= numberToChange[indexTwo];
    } else {
      numberToChange = numberToChange.map((x) => x - 1);
    }
  }
  console.log(numberToChange.join(", "));
}
arrayModifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);

//   arrayModifier([
//     '1 2 3 4',
//     'swap 0 1',
//     'swap 1 2',
//     'swap 2 3',
//     'multiply 1 2',
//     'decrease',
//     'end'
//   ])
