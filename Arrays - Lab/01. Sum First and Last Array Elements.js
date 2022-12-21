function sumFirstAndLastArrayElements(numbers) {
  let sum = numbers[0] + numbers[numbers.length - 1];
  console.log(sum);
}
sumFirstAndLastArrayElements([20, 30, 40]);
sumFirstAndLastArrayElements([10, 17, 22, 33]);
sumFirstAndLastArrayElements([11, 58, 69]);

//  //another solution
//  function sumFirstAndLastArrayElements (input){
//     let first = input[0];
//     let last = input[input.length - 1]
//     console.log(first + last);
//     }
//     sumFirstAndLastArrayElements([20, 30, 40]);
// sumFirstAndLastArrayElements([10, 17, 22, 33]);
// sumFirstAndLastArrayElements([11, 58, 69]);
