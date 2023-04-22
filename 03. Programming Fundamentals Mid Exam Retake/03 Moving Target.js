function movingTarget (input){
    let targets = input.shift().split(' ').map(Number);
    let currentLine = input.shift();
    
    while(currentLine !== 'End'){
    let lineArr = currentLine.split(' ');
    let command = lineArr[0];
    let index = Number(lineArr[1]);
    let power = Number(lineArr[2]);
    
    switch (command){
        case 'Shoot':
            if(targets[index]){
    targets[index] -= power;
    
    if(targets[index] <= 0){
        targets.splice(index, 1);
    }
    }
        break;
        case 'Add':
    if(targets[index]){
        targets.splice(index, 0, power);
    }else{
        console.log('Invalid placement!');
    }
        break;
        case 'Strike':
            let radius = power
            let lowerIndex = index - radius;
            let upperIndex = index + radius;
    // let firstPart = targets.slice(0, index - radius);
    // let secoundPart = targets.slice(index + radius);
    // targets = firstPart.concat(secoundPart);
    if(targets[lowerIndex] && targets[upperIndex]){
    targets.splice(lowerIndex, radius * 2 + 1)
    }else{
        console.log('Strike missed!');
    }
        break;
    }
    
        currentLine = input.shift()
    }
    console.log(targets.join('|'));
    }
    //movingTarget([ "52 74 23 44 96 110", "Shoot 5 10", "Shoot 1 80", "Strike 2 1", "Add 22 3", "End",]);
movingTarget(["1 2 3 4 5", "Strike 0 1", "End"]);