// function arrayManipulations (input){
//     let newArr = input
//     .shift()
//     .split(" ")
//     .map(Number);
// // console.log(newArr);
//     let command = input.shift()
//     .split(" ");

//     console.log(command);
//     if(command[0] === 'Add'){
//     newArr.push(command[1])
//     // console.log(newArr);
//     }else if(command[0] === 'Remove'){
//       let nnewArr = newArr.filter(command[1])
//         console.log(nnewArr);
//     }
//     }
//     arrayManipulations (['4 19 2 53 6 43',

//     'Remove 3',

//     'Remove 2',

//     'RemoveAt 1',

//     'Insert 8 3'])


//     function arrayManipulations (input){
//         let newArr = input
//         .shift()
//         .split(" ")
//         .map(Number);
//         let command = input.shift().split(" ");
//     for(let element of command){
// if(element === 'Add'){
//     newArr.push(command[1])
//     console.log(newArr);
// }else if(element === 'Remove'){
//     newArr.splice(command[1])
//     console.log(newArr);
// }else if(element === 'RemoveAt'){

// }else if (element === 'Insert'){

// }
//     }


//     }
//     arrayManipulations (['4 19 2 53 6 43',

//     'Add 3',

//     'Remove 2',

//     'RemoveAt 1',

//     'Insert 8 3'])

function arrayManipulations(input) {
    let newArray = input.shift().split(' ').map(Number);
    for (let i = 0; i < input.length; i++) {
        let current = input[i];
        current = current.split(' ');
        if (current[0] === 'Add') {
            let command = Number(current[1]);
            newArray.push(command);
        } else if (current[0] === 'RemoveAt') {
            command = Number(current[1]);
            newArray.splice(command, 1);
        } else if (current[0] === 'Remove') {
            let toBeRemoved = Number(current[1]);
            let filteredArray = newArray.filter(el => el !== toBeRemoved);
            newArray = filteredArray;
        } else if (current[0] === 'Insert') {
            let addThis = Number(current[1]);
            let atIndex = Number(current[2]);
            newArray.splice(atIndex, 0, addThis);
        }
    }
    console.log(newArray.join(' '));
}
arrayManipulations(['4 19 2 53 6 43',

    'Add 3',

    'Remove 2',

    'RemoveAt 1',

    'Insert 8 3'])