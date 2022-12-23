// function addAndSubtract(array) {
//   let resultArray = [];
//   let inputArraySum = 0;
//   let resultArraySum = 0;

//   for (let i = 0; i < array.length; i++) {
//     let currentNumber = array[i];
//     let odd = currentNumber - i;
//     let even = currentNumber + i;
//     if (currentNumber % 2 === 0) {
//       resultArray.push(even);
//     } else {
//       resultArray.push(odd);
//     }
//     inputArraySum += currentNumber;
//     resultArraySum += resultArray[i];
//   }
//   console.log(resultArray);
//   console.log(inputArraySum);
//   console.log(resultArraySum);
// }
// addAndSubtract([5, 15, 23, 56, 35]);

// function addAndSubtract(input) {
//   let myArray = input;
//   let originalArraySum = 0;
//   let modifyArraySum = 0;

//   for (let i = 0; i < myArray.length; i++) {
//     originalArraySum += myArray[i];

//     if (myArray[i] % 2 === 0) {
//       myArray[i] += i;
//     } else {
//       myArray[i] -= i;
//     }
//     modifyArraySum += myArray[i];
//   }
//   console.log(myArray);
//   console.log(originalArraySum);
//   console.log(modifyArraySum);
// }
// addAndSubtract([5, 15, 23, 56, 35]);


function addAndSubtract(input) {
    //let input = input;
    let originalArraySum = 0;
    let modifyArraySum = 0;
  
    for (let i = 0; i < input.length; i++) {
      originalArraySum += input[i];
  
      if (input[i] % 2 === 0) {
        input[i] += i;
      } else {
        input[i] -= i;
      }
      modifyArraySum += input[i];
    }
    console.log(input);
    console.log(originalArraySum);
    console.log(modifyArraySum);
  }
  addAndSubtract([5, 15, 23, 56, 35]);