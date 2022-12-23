 function arrayRotation (array, rotate){

     for(let i = 0; i < rotate; i++){
         let movingDigits = array.shift();
         array.push(movingDigits)
     }
 console.log(array.join(' '));
 }
 arrayRotation ([51, 47, 32, 61, 21], 2)

//other solution

// function arrayRotation (arrayToRotate, rotations){

//     let rotationTimes = rotations % arrayToRotate.length;
//     for(let index = 0; index < rotationTimes; index++){
//         let numberToMove = arrayToRotate.shift();
//         arrayToRotate.push(numberToMove);
//     }
//     console.log(arrayToRotate.join(' '));
// }
// arrayRotation ([51, 47, 32, 61, 21], 2)

