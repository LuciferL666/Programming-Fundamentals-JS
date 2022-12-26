function oddAndEvenSum (number){

let numberToString = number.toString() 
let evenSum = 0;
let oddSum = 0;
let numberToStringLength = numberToString.length
for(let p = 0; p < numberToStringLength;p++){
let singleNumber = Number(numberToString[p]);

if(singleNumber % 2 === 0){
    evenSum += singleNumber
}else{
    oddSum += singleNumber
}
}

console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum (1000435)