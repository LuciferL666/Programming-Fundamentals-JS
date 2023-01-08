function stringSubstring(word, text){
let splitText = text.split(' ')

for (const words of splitText){
    
    if(word === words.toLowerCase()){
       return console.log(word);
    }
}    
console.log(`${word} not found!`);
    
}
stringSubstring('java',

'JavaScript is the best programming language')