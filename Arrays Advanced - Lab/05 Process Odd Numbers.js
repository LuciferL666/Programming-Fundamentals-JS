function processOddNumbers(numbers) {
    let result = numbers
        .filter((x, i) => i % 2 !== 0)
        .map(x => x * 2)
        .reverse()
    console.log(result.join(' '));
}
//processOddNumbers ([10, 15, 20, 25])
processOddNumbers([3, 0, 10, 4, 7, 3])



// function processOddNumbers(number) {
//     let oddNumbers = 0
//     let result = []
//     let multiplay = 0
//     for (let i = 0; i < number.length; i++) {
//         if (i % 2 !== 0) {
//             oddNum = number[i]
//             multiplay = oddNum * 2
//             result.push(multiplay)
//         }
//     }
//     console.log(result.reverse().join(' '));
// }
// processOddNumbers([10, 15, 20, 25])
// processOddNumbers([3, 0, 10, 4, 7, 3])