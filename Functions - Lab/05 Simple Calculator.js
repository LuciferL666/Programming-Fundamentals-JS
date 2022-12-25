function simpleCalculator (numberOne, numberTwo, operator){
let result = 0
    if(operator === 'multiply'){
result = numberOne * numberTwo
}else if(operator === 'divide'){
    result = numberOne / numberTwo
}else if (operator === 'add'){
    result = numberOne + numberTwo
}else if (operator === 'subtract'){
    result = numberOne - numberTwo
}

console.log(result);
}
simpleCalculator (5,
    5,
    'multiply')

// other solution 
//     function simpleCalculator(num1, num2, operator) {
//         let result = 0;
     
//         let multiply = (num1, num2) => num1 * num2;
//         let divide = (num1, num2) => num1 / num2;
//         let add = (num1, num2) => num1 + num2;
//         let subtract = (num1, num2) => num1 - num2;
     
//         switch (operator) {
//             case 'multiply': result = multiply(num1, num2); break;
//             case 'divide': result = divide(num1, num2); break;
//             case 'add': result = add(num1, num2); break;
//             case 'subtract': result = subtract(num1, num2); break;
//         }
     
//         console.log(result);
//     }
// simpleCalculator (5,
//     5,
//     'multiply')
