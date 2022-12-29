function distinctArray(array) {

    let uniqueNumbersArray = [];
    let arrayLength = array.length;

    for (let index = 0; index < array.length; index++) {
        if (!uniqueNumbersArray.includes(array[index])) {
            uniqueNumbersArray.push(array[index]);
        }
    }
    console.log(uniqueNumbersArray.join(' '));
}
distinctArray([7, 8, 9, 7, 2, 3,

    4, 1, 2])

console.log("=======");
function distinctArray(array) {
    let uniqueNumbersArray = new Set(array);
    console.log(...uniqueNumbersArray);
}
distinctArray([7, 8, 9, 7, 2, 3,

    4, 1, 2])

function distinctArray(array) {

    let numbers = array.filter((value, index, arr) => {
        return arr.indexOf(value) === index
    });
    console.log(numbers.join(' '));
}
distinctArray([7, 8, 9, 7, 2, 3,

    4, 1, 2])