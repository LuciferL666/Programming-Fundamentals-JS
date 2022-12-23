// function mergeArrays (arrayOne, arrayTwo){
// let resultArray = [];
// let firstArrayLength = arrayOne.length
// for(let i = 0; i < firstArrayLength; i++){
//     if(i % 2 === 0){
//         resultArray.push(Number(arrayOne[i]) + Number(arrayTwo[i]))
//     }else{
// resultArray.push(arrayOne[i] + arrayTwo[i])
//     }
// }
// console.log(resultArray.join(' - '));

// }
// mergeArrays (['5', '15', '23', '56', '35'],

// ['17', '22', '87', '36', '11'])

function mergeArrays(arrayOne, arrayTwo){
let arrayThree= [];

for(let p = 0; p < arrayOne.length; p++){
    if(p % 2 === 0){
        arrayThree.push(Number(arrayOne[p])+Number(arrayTwo[p]));
    }else{
        arrayThree.push(`${arrayOne[p]}${arrayTwo[p]}`)
    }
}
console.log(arrayThree.join(' - '));
}
mergeArrays (['5', '15', '23', '56', '35'],

['17', '22', '87', '36', '11'])