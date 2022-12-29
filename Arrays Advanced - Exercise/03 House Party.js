function houseParty (array){

let guestsArray = [];
for(let el of array){
    let command = el.split(' ');
    let name = command[0];
    if(command.length === 3){
        if(guestsArray.includes(name)){
            console.log(`${name} is already in the list!`);
        }else{
            guestsArray.push(name);
        }
    }else{
        if(!guestsArray.includes(name)){
            console.log(`${name} is not in the list!`);
        }else{
            let index = guestsArray.indexOf(name);
            guestsArray.splice(index, 1);
        }
    }
}

console.log(guestsArray.join('\n'));
}
houseParty (['Allie is going!',

'George is going!',

'John is not going!',

'George is not going!'])