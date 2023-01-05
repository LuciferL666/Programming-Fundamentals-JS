// function aMinerTask(input){
// let object = {}
// let counter = 0
// for (let element of input) {
// counter++
    
// if(counter % 2 === 1){
//     let command = element
//     object[command] = command
// }
// if(counter % 2 === 0){
//     let amount = Number(element)
//     object[amount] = amount
// }
// }

// }
// aMinerTask([
//     'Gold',
//     '155',
//     'Silver',
//     '10',
//     'Copper',
//     '17'
//     ])


    function aMinerTask (input){
let collection = {};

for (let i = 0; i < input.length; i+= 2) {
    const resource = input[i];
    let amount = Number(input[i +1]);
    if(!collection.hasOwnProperty(resource)){
        collection[resource] = 0;
    }
    collection[resource] += amount
}
for (const item in collection) {
    let quantity = collection[item]
    console.log(`${item} -> ${quantity}`);
}

    }
    aMinerTask([
        'Gold',
        '155',
        'Silver',
        '10',
        'Copper',
        '17'
        ])