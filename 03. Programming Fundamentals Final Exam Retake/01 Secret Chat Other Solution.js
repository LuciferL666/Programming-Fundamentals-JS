function secretChat(input) {    
    let text = input.shift();

    for (const commands of input) {
        let [command, start, end] = commands.split(':|:')

        switch (command) {
            case 'ChangeAll':
                let oldLetter = start
                let newLetter = end
                text = text.split(oldLetter).join(newLetter);
                console.log(text);
                break;
            case 'Reverse':
                let specialWord = start
                if (text.includes(specialWord)) {
                    let index = text.indexOf(specialWord)
                    let begin = text.substring(0, index)
                    let secondPart = text.substring(index, index + specialWord.length)
                        .split('')
                        .reverse()
                        .join('')
                    let thirdPart = text.substring(index + specialWord.length);
                    text = begin + thirdPart + secondPart
                    console.log(text);
                } else {
                    console.log('error');
                }
                break;
            case 'InsertSpace':
                let place = Number(start)
                let begin = text.substring(0, place)
                let middle = ' '
                let last = text.substring(place)
                text = begin + middle + last
                console.log(text);
                break;
            case 'Reveal':
                console.log(`You have a new text message: ${text}`);
                return;
        }

    }
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'])
