function reversedChars (one, two, three){
    let result = [];
    result.push(one, two, three)
    console.log(result.reverse().join(' '));
}
reversedChars ('A',
'B',
'C')

//another solution
// function reversedChars( one, two, three){
//     console.log(`${three} ${two} ${one}`);
// }
// reversedChars('A',
// 'B',
// 'C')