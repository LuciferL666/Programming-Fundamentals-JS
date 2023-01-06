function countStringOccurrences (text, word){
let wordsOfText = text.split(' ')
    let counter = 0
    for (const element of wordsOfText) {
    if(element === word){
        counter++
    }
    
}
console.log(counter);
}
countStringOccurrences('This is a word and it also is a sentence', 'is')