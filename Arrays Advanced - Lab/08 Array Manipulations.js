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
