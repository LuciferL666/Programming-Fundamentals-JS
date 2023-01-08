function revealWord(word, text){
let specialWord = word.split(', ')
let fullText = text.split(' ')
let result = '';

for (const words of specialWord) {
    
    for (const word of fullText) {
        if (word.includes('*') && word.length === words.length) {
            text = text.replace(word, words)
        }
    }
}
console.log(text);
}

revealWord('great',

'softuni is ***** place for learning new programming languages')