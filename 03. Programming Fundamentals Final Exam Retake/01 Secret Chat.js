function secretChat(input) {
    let message = input.shift()
    while (input[0] !== 'Reveal') {
        let line = input.shift().split(':|:')
        let command = line[0]

        switch (command) {
            case 'ChangeAll':
                let oldLetter = line[1];
                let newLetter = line[2];
                message = message.split(oldLetter).join(newLetter)
                console.log(message);
                break;
            case 'Reverse':
                let word = line[1]
                if (message.includes(word)) {
                    let index = message.indexOf(word)
                    let start = message.substring(0, index)
                    let end = message.substring(index, index + word.length).split('').reverse().join('')
                    let middle = message.substring(index + word.length)
                    message = start + middle + end
                    console.log(message);
                } else {
                    console.log('error');
                }
                break;
            case 'InsertSpace':
                let index = Number(line[1])
                let start = message.substring(0,index)
                let middle = ' '
                let end = message.substring(index)
                message = start + middle + end
                console.log(message);

        }

    }
console.log(`You have a new text message: ${message}`);

}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'])