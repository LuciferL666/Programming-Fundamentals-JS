function sumFirstAndLast(numbers){  
let firstNumber = Number(numbers[0]);
let lastNumber = Number(numbers.pop());
let sum = firstNumber + lastNumber;
console.log(sum);

}
sumFirstAndLast (['20', '30', '40'])
