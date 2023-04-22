function counterStrike(input){
let energy = input.shift().split(',').map(Number)
let winsCount = 0

while(input[0] !== 'End of battle'){
let distance = Number(input.shift())
if(energy >= distance){
    winsCount++
    energy -= distance
    
}else{
    console.log(`Not enough energy! Game ends with ${winsCount} won battles and ${energy} energy`);
    return;
}
if(winsCount % 3 === 0){
    energy += winsCount
}
}
console.log(`Won battles: ${winsCount}. Energy left: ${energy}`);
}
counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
//counterStrike(["200", "54", "14", "28", "13", "End of battle"]);