function sorting (array){

let sortedArray = array.sort((a,b) => a-b);
let resultArray = [];
let copyArray = sortedArray.slice(0);// only if we want to make a copy for any case

for (let index = 0; index < sortedArray.length; index++) {
    let lastElement = sortedArray.pop();
    let firstArray =sortedArray.shift();
    resultArray.push(lastElement);
    resultArray.push(firstArray)
    
}
resultArray.push(sortedArray.pop())
resultArray.push(sortedArray.shift())
console.log(resultArray.join(' '));
}

sorting ([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])