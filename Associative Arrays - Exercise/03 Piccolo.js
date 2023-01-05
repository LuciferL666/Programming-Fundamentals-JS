// function piccolo(input) {
//   let parkingList = new Map();
//   let fullList = input.map((el) => el.split(", "));

//   fullList.forEach((element) => {
//     const command = element[0];
//     const carNumber = element[1];

//     if (command === "IN") {
//       parkingList.set(carNumber, command);
//     } else {
//       parkingList.delete(carNumber);
//     }
//   });

//   let sortedCarNumbers = Array.from(parkingList).sort((a, b) =>
//     a[0].localeCompare(b[0])
//   );

//   if (sortedCarNumbers.length === 0) {
//     console.log("Parking Lot is Empty");
//   }
//   sortedCarNumbers.forEach((carNumber) => console.log(carNumber[0]));
// }
// piccolo([
//   "IN, CA2844AA",
//   "IN, CA1234TA",
//   "OUT, CA2844AA",
//   "IN, CA9999TT",
//   "IN, CA2866HI",
//   "OUT, CA1234TA",
//   "IN, CA2844AA",
//   "OUT, CA2866HI",
//   "IN, CA9876HH",
//   "IN, CA2822UU",
// ]);

function piccolo(input) {
  let result = {};

  for (const word of input) {
    let [command, carNumber] = word.split(", ");

    if (command === "IN") {
      result[carNumber] = carNumber;
    } else if (command === "OUT") {
      delete result[carNumber];
    }
  }
  let sorted = Object.entries(result).sort((a, b) => a[1].localeCompare(b[1]));
  if (sorted.length === 0) {
    console.log("Parking Lot is Empty");
  }
  for (const [command, carNumber] of sorted) {
    console.log(carNumber);
  }
}
piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
