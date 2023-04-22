function guineaPig (input){
let food =  Number(input[0]) * 1000
let hay = Number(input[1]) * 1000
let cover = Number(input[2]) * 1000
let guineaPigWeight = Number(input[3]) * 1000
let month = 30
let counter = 0

for (let i = 0; i < month; i++) {
    food -= 300
    counter++
    if(food <= 0){
console.log('Merry must go to the pet store!');
return;
    }
     if(counter % 2 === 0){
let hayProcent = food * 0.05
hay -= hayProcent
if (hay <= 0) {
    console.log('Merry must go to the pet store!');
    return;
}
    }else if(counter % 3 !== 0){
        let coverAmount = guineaPigWeight / 3
        cover -= coverAmount
        if (cover<= 0) {
            console.log('Merry must go to the pet store!');
            return;
        }
        
    }

}
console.log(`Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`);
}
guineaPig(["10", "5", "5.2", "1"]);
// guineaPig(["1", "1.5", "3", "1.5"]);
// guineaPig(["9", "5", "5.2", "1"]);