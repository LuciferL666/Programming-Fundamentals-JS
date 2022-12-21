function sumEvenNumbers(numbers) {
    let evenNum = 0
    for (let textNumber of numbers) {
        let number = Number(textNumber);

        if (number % 2 == 0) {
            evenNum += number

        }

    }
    console.log(evenNum);
}
sumEvenNumbers(['1', '2', '3', '4', '5', '6'])
sumEvenNumbers(['3', '5', '7', '9'])
sumEvenNumbers(["2", "4", "6", "8", "10"]);