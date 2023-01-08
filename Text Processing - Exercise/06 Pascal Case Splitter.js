function pascalCaseSplitter (text){
    let split = text.split(/(?=[A-Z])/);
    console.log(split.join(', '));
    
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')

//other solution
// function pascalCaseSplitter (text){
//     let result = text[0];
// for (let index = 1; index < text.length; index++) {
//     let current = text[index]
//     if(current !== current.toUpperCase()){
//     result += current
//     }else{
//         result += `, ${current}`
//     }
// }
// console.log(result);
// }
// pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')

// function pascalCaseSplitter (text){
//    let result = text[0]
// for (const current of text) {
//     if(current !== current.toUpperCase()){
//     result += current
// }else{
//         result += `, ${current}`
//     }
// }
// let firstComma = result.indexOf(',')
// let lastLetter = result.substring(0, firstComma)
// let last = result.substring(firstComma+1)

// console.log(last.trim());
// }
// pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
