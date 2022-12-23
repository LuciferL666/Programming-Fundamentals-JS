// function equalSums(arr) {
//   let foundIndex = "no";
//   let arrLength = arr.length;

//   for (i = 0; i < arrLength; i++) {
//     let leftSum = 0;
//     let rightSum = 0;

//     // calculate left sum
//     for (let l = 0; l < i; l++) {
//       leftSum += arr[l];
//     }

//     //calculate right sum
//     for (let r = i + 1; r < arrLength; r++) {
//       rightSum += arr[r];
//     }
//     if (leftSum === rightSum) {
//       foundIndex = i;
//     }
//   }

//   console.log(foundIndex);
// }
// equalSums([1, 2, 3, 3]);

function equalSums(array) {
  let hasEqualSum = false;
  for (let index = 0; index < array.length; index++) {
    let leftSum = 0;
    let rightSum = 0;

    for (let j = index - 1; j >= 0; j--) {
      leftSum += array[j];
    }
    for (let num = index + 1; num < array.length; num++) {
      rightSum += array[num];
    }
    if (rightSum == leftSum) {
      console.log(index);
      hasEqualSum = true;
    }
  }
  if (!hasEqualSum) {
    console.log("no");
  }
}
equalSums([1, 2, 3, 3]);
