function smallestTwoNumbers (numbers){
let sorted = numbers.sort((a, b) => {
    return a - b
});
let numbersNeedIt = sorted.slice(0,2)
console.log(numbersNeedIt.join(' '));

}
smallestTwoNumbers ([30, 15, 50, 5])