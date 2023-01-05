function wordsTracker(input){

    let words = {}
// shift and split first elements in array they are the words that I need to find
    let searchingWords = input.shift().split(' ')

    searchingWords.map(word => words[word] = 0)

    for(let word of input){
        if(words.hasOwnProperty(word)){
            words[word]++
        }
    }
    let sorted = Object.entries(words).sort((a, b) => b[1] - a[1])
    for(let [word, occurrences] of sorted)
    console.log(`${word} - ${occurrences}`);

}
wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ])




