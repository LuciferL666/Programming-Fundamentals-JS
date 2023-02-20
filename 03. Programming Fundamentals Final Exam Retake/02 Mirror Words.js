function mirrorWords(input) {

    let pattern = /(@|#)(?<first>[A-Za-z]{3,})\1\1(?<second>[A-Za-z]{3,})/g
    let match = pattern.exec(input)
    let counter = 0
    let validPairs = []
    while (match !== null) {
        counter++
        let firstWord = match.groups.first
        let secondWord = match.groups.second
        let reversedWord = secondWord.split('').reverse().join('')
        if (firstWord === reversedWord) {
            validPairs.push(`${firstWord} <=> ${secondWord}`)
        }
        match = pattern.exec(input)
    }
    if (counter === 0) {
        console.log(`No word pairs found!`);
    } else {
        console.log(`${counter} word pairs found!`);
    }
    if (validPairs.length === 0) {
        console.log('No mirror words!');
    } else {
        console.log(`The mirror words are:\n${validPairs.join(', ')}`);
    }
}
mirrorWords(["@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",]);
mirrorWords(["#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@"]);
mirrorWords(["#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#"]);