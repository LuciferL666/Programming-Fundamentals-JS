function evenAndOddSubtraction(numbers) {
    let evenNum = 0
    let oddNum = 0
    for (let textNumber of numbers) {
        let number = Number(textNumber);

        if (number % 2 == 0) {
            evenNum += number

        } else {
            oddNum += number
        }

    }
    console.log(evenNum - oddNum);
}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
evenAndOddSubtraction([3, 5, 7, 9]);
evenAndOddSubtraction([2, 4, 6, 8, 10]);