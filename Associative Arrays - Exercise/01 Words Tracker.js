// function wordsTracker(input){

//     let words = {}
// // shift and split first elements in array they are the words that I need to find
//     let searchingWords = input.shift().split(' ')

//     searchingWords.map(word => words[word] = 0)

//     for(let word of input){
//         if(words.hasOwnProperty(word)){
//             words[word]++
//         }
//     }
//     let sorted = Object.entries(words).sort((a, b) => b[1] - a[1])
//     for(let [word, occurrences] of sorted)
//     console.log(`${word} - ${occurrences}`);

// }
// wordsTracker([
//     'this sentence',
//     'In', 'this', 'sentence', 'you', 'have',
//     'to', 'count', 'the', 'occurrences', 'of',
//     'the', 'words', 'this', 'and', 'sentence',
//     'because', 'this', 'is', 'your', 'task'
//     ])

function wordsTracker(input) {

    // we need to make an empty object
    let result = {}
    // need to take the first two words from array and use them to search from same words
    let words = input.shift().split('-').map(s => s.toLowerCase());
    
// need to make a cycle and find the words 
for (const word of words) {
    
    //if we find a same word we put it in the object with value equal to 0
    result[word] = 0
}
//need to make new cycle to chek is there same words in rest of the input
for (const word of input) {
    
    // if we find same words
    if(result.hasOwnProperty(word)){
        // we must put it and higher the value
        result[word]++
    }
}
  //after we find all words and their values we must sort them by descending order
let sorted = Object.entries(result).sort((a, b) => b[1] - a[1])

// we must make a cycle and take the key and the value from sorted array
for (const [name, value] of sorted) {
    console.log(`${name} - ${value}`);
}

}
// wordsTracker([
//     'this sentence',
//     'In', 'this', 'sentence', 'you', 'have',
//     'to', 'count', 'the', 'occurrences', 'of',
//     'the', 'words', 'this', 'and', 'sentence',
//     'because', 'this', 'is', 'your', 'task'
// ])

wordsTracker (['in-and', 'Stephen', "King", "was", "born", 'in', 'Portland', 'Maine', 'in', '1947', 
'the', 'son', 'of', 'Nellie', 
'Ruth', 'Pillsbury', 'and', 'her', 'husband', 'Donald', 'Edwin', 'King', 'His', 'parents', 'had', 'married', 'in', '1939', 
'After', 'his', 'father', 'left', 'two-year-old', 'Stephen', 'and', 'his', 'family', 'in', '1949', 'his', 'mother', 'raised', 
'him', 'and', 'his', 'brother', 'alone', 'She', 'was',
 'unable', 'to', 'support', 'her', 'family', 
 'with', 'odd', 'jobs', 'and', 'often', 'changed', 'her', 'place', 'of', 'residence', 'and'])