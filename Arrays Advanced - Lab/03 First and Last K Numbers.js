function firstAndLastKNumbers (input){
let count = input.shift();

let firstNumber = input.slice(0, count)
    console.log(firstNumber.join(' '))
    let lastNumber = input.slice(input.length - count)
    console.log(lastNumber.join(' '));
}

firstAndLastKNumbers([2,

    7, 8, 9])
    firstAndLastKNumbers ([3, 6, 7, 8, 9])