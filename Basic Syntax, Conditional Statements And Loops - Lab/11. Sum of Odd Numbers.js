function sumOfOddNumbers(count) {
    let oddNumber = 1;
    let sum = 0
    for (let i = 0; i < count; i++) {
        console.log(oddNumber);

        sum += oddNumber;
        oddNumber += 2;
    }

    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5)