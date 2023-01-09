function hardWord(text){
let words = text.pop()
words.sort((a,b)=>b.length - a.length)
let newString = text.toString()
let cutString = text.toString().split(' ')
 
for (const word of words) {
    for (const hole of cutString) {
        if(hole.startsWith('_') && hole.endsWith('_')){
            if(hole.length === word.length){
                newString = newString.replace(hole, word)
                
            }
        }    
        if(hole.startsWith('_') && !hole.endsWith('_')){
            let newHole = hole.slice(0,hole.length-1);
            if(newHole.length === word.length){
                newString = newString.replace(newHole,word)
            }
        }  
    }
}

console.log(newString);
}
hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',

['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']] )