function bombNumbers (numberArea, specialNumber){
let bomb = specialNumber[0];
let detonation = specialNumber[1];

while(numberArea.includes(bomb)){
    let bombIndex = numberArea.indexOf(bomb) - detonation;
    if(bombIndex < 0){
        bombIndex = 0
    }
    let detonationArea = detonation * 2 + 1;
    numberArea.splice(bombIndex, detonationArea);
}
console.log(numberArea.reduce((a, b) => a + b, 0));
}
bombNumbers ([1, 2, 2, 4, 2, 2,

    2, 9],
    
    [4, 2])