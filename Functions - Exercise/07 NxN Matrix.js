function nxnMatrix(number){
let array = []

for(let i = 1; i <= number;i++){
    let output = '';
    for(let k = 1; k <= number; k++){
        output += `${number} `;
    }
    array.push(output);
}

console.log(array.join('\n'));
}
nxnMatrix (3)