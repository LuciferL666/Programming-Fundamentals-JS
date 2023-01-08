function extractFile(input){
let text = input.split('\\')
let lastElement = text.pop()
let lastComma = lastElement.lastIndexOf('.')
let lastWord = lastElement.substring(0, lastComma)
let last = lastElement.substring(lastComma+1)//+1 because we want to remove the first index which is '.'
console.log(`File name: ${lastWord}`);
console.log(`File extension: ${last}`);

}
extractFile('C:\\Internal\\training-internal\\Template.pptx')