function addAndSubtract(numberOne, numberTwo, numberThree) {
    function add(firstNumber, secondNumber) {
        let sumOfTwoNumbers = firstNumber + secondNumber;
        return sumOfTwoNumbers;
    }

    let sum = add(numberOne,numberTwo)
    
    function subtract(sumOfTwo, lastNumber){
        return sumOfTwo - lastNumber
    }
    let result = subtract (sum, numberThree)
console.log(result);
}
addAndSubtract(23, 6, 10);
