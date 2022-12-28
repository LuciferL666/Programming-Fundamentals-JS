// function negativeOrPositiveNumbers (array){
//     let numbers = []
//     for(let i = 0;i < array.length; i++){
//         if(array[i] < 0){
//             numbers.unshift(array[i])
//         }else{
//             numbers.push(array[i])
//         }
//     }
//     console.log(numbers.join('\n'));
// }
// negativeOrPositiveNumbers (['7', '-2', '8', '9'])

function negativeOrPositiveNumbers (input){
    let numbers = [];
for(let el of input){
    let number = Number(el);
    if(number < 0){
        numbers.unshift(number);
    }else{
        numbers.push(number);
    }
}
for(let number of numbers){
    console.log(number);
}
}
negativeOrPositiveNumbers (['7', '-2', '8', '9'])