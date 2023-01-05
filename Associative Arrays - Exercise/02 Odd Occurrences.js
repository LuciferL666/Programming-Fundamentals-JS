function oddOccurrences (input){
// need to make and object
let resultObject = {};
//after I need to split all words by " " and I need to make them in lowerCase
let allWords = input
.split(' ')
.map(s => s.toLowerCase());

// make a cycle to chek all words
for(let word of allWords){
// i need to look if the object doesn't have this word I should put it 
    if(!resultObject[word]){
        resultObject[word] = 1
    //else i need to higher her value
    }else{
        resultObject[word]++
    }
}
//we make new array
let result = '';
// make a cycle to take every word
for (const word of allWords) {
    // check it is it odd
    if(resultObject[word] % 2 === 1){
        //if it's odd we put it in the array 
        result += `${word} `;
        // and deleted from the object
        delete resultObject[word]

    }
}

console.log(result);


}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');