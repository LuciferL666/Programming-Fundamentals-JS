function substring (word, start, count){
let end = start + count
let final = []
final = word.substring(start, end)
console.log(final);
}
substring('ASentence', 1, 8)

function substring (word, start, count){
let end = start + count
console.log(word.substring(start, end));

}
substring('ASentence', 1, 8)