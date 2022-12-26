function factorialDivision(numberOne, numberTwo) {

    let counterOne = 0
    let counterTwo = 0

    let num = numberOne
    let numTwo = numberTwo
    for (let i = numberOne - 1; i > 0; i--) {
        counterOne = i
        num *= counterOne
    }
    for (let p = numberTwo - 1; p > 0; p--) {
        counterTwo = p
        numTwo *= counterTwo

    }
    console.log((num / numTwo).toFixed(2));
}
factorialDivision(5, 2)
factorialDivision(6, 2)
