// function sumDigits (number){
//     let strArray = number.toString().split('');


// let sum = 0
    

// for(let i = 0; i < strArray.length;i++){
//   sum  += Number(strArray[i])
// }
// console.log(sum);
// }
// sumDigits (245678)

//othre solution 
function sumDigits (number){
let numberAsString = number.toString(); // or number + '';
let sumOfDigits = 0;
let numberOfDigits = numberAsString.length
for(let i = 0; i < numberOfDigits; i++){
  let currentDigit = Number(numberAsString[i]);
  sumOfDigits += currentDigit;
  

}
console.log(sumOfDigits);
}
sumDigits (245678)
