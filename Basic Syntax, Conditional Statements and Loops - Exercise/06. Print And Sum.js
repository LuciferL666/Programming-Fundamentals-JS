function printAndSum(start, end) {
    let sum = 0;
    let string = "";
    for (let i = start; i <= end; i++) {
        sum += i;
        string += `${i} `;
    }
    console.log(string);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);