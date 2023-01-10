function race (raceDataArray) {

let racersArray = raceDataArray.shift().split(', ');
let raceObject = {};
let patternName = /[A-Za-z]+/g
let patternDistance = /[0-9]+/g

let command = raceDataArray.shift()

while(command !== 'end of race'){
    let currentName = command.match(patternName).join('')
let currentDistance = command.match(patternDistance).join('')
    //console.log(currentDistance);
if(racersArray.includes(currentName)){
    let distance = 0;

    for (const digit of currentDistance) {
        distance += Number(digit)
    }
   
    if(!raceObject.hasOwnProperty(currentName)){
        raceObject[currentName] = distance;
    }else{
        raceObject[currentName] += distance;
    }

}
command = raceDataArray.shift()
}
let sortedRacers = Object.entries(raceObject).sort((a,b)=>b[1]-a[1])
let firstPlace = sortedRacers[0][0];
let secondPlace = sortedRacers[1][0]
let thirdPlace = sortedRacers[2][0]
console.log(`1st place: ${firstPlace}`);
console.log(`2nd place: ${secondPlace}`);
console.log(`3rd place: ${thirdPlace}`);
}
race (['George, Peter, Bill, Tom',

'G4e@55or%6g6!68e!!@ ',

'R1@!3a$y4456@',

'B5@i@#123ll',

'G@e54o$r6ge#',

'7P%et^#e5346r',

'T$o553m&6',

'end of race'])