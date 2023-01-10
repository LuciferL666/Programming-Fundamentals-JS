function starEnigma(input){
let lines = input.shift();
let attackedPlanets = [];
let destroyedPlanets = [];
for (let line of input) {
   let key = 0

   for (let letter of line) {
    if(letter === 'S'|| letter === 's'|| letter === 'T'|| letter === 't' || letter === 'A' || letter === 'a' || letter === 'R'|| letter === 'r'){
        key++
    }
   }
   let decryptedMessage = '';

   for(let letter of line){
    let decryptedLetter = String.fromCharCode(letter.charCodeAt() - key);
    decryptedMessage += decryptedLetter;
   }

   let pattern = /[^@\-!:>]*?\@(?<planet>[A-Za-z]+)[^@\-!:>]*?\:(?<population>\d+)[^@\-!:>]*?\!(?<type>[A|D])\![^@\-!:>]*?\-\>(?<soldiers>\d+)[^@\-!:>]*?/g
let match = pattern.exec(decryptedMessage);
if(match !== null){
    let planet = match.groups.planet;
    let attackType = match.groups.type;
    if(attackType === 'A'){
        attackedPlanets.push(planet);
    }else if (attackType === 'D'){
        destroyedPlanets.push(planet);
    }
}
}

let sortedAttackedPlanets = attackedPlanets.sort((a,b)=>a.localeCompare(b));
let sortedDestroyedPlanets = destroyedPlanets.sort((a,b)=> a.localeCompare(b))

console.log(`Attacked planets: ${sortedAttackedPlanets.length}`);
for(let planet of sortedAttackedPlanets){
    console.log(`-> ${planet}`);
}
console.log(`Destroyed planets: ${sortedDestroyedPlanets.length}`);
for(let planet of sortedDestroyedPlanets){
    console.log(`-> ${planet}`);
}
}
starEnigma(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR'])