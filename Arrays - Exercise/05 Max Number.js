// function maxNumber(array) {
//   let resultArray = [];

//   for (let i = 0; i < array.length; i++) {
//     let isBigger = true;
//     let currentNumber = array[i];

//     for (let p = i + 1; p < array.length; p++) {
//       if (currentNumber <= array[p]) {
//         isBigger = false;
//       }
//     }
//     if (isBigger) {
//       resultArray.push(array[i]);
//     }
//   }
//   console.log(resultArray.join(" "));
// }
// maxNumber([1, 4, 3, 2]);

function maxNumber(array) {
  let newArray = [];
  for (let p = 0; p < array.length; p++) {
    currentElement = array[p];
    let isTopInteger = true;

    for (let e = p + 1; e < array.length; e++) {
      let nextElement = array[e];
      if (currentElement <= nextElement) {
        isTopInteger = false;
        break;
      }
    }
    if (isTopInteger) {
      newArray.push(currentElement);
    }
  }
  console.log(newArray.join(" "));
}
maxNumber([10, 20, 30, 40, 50]);
