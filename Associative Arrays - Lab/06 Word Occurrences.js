function wordOccurrences (input){
// this is with Map and in comentar I will make diffrences with object
    let words = new Map(); // let words = {}

    for(let word of input){
        let occurrences = 1
        if(words.has(word)){ //if(words.hasOwnProperty(word)){
            occurrences += words.get(word) //occurrences += words[word]
        }
        words.set(word, occurrences) // words[word] = occurrences
    }
let sorted = Array.from(words).sort((a, b) => b[1] - a[1]) // let sorted = Object.entries(words).sort((a, b) => b[1] - a[1])

for(let [word, occurrences] of sorted){
    console.log(`${word} -> ${occurrences} times`);
}

}
wordOccurrences(["Here", "is", "the", "first", "sentence",

"Here", "is", "another", "sentence", "And",

"finally", "the", "third", "sentence"])