function passwordValidator (password){

let digitCount = 0;
let passwordLength = password.length;
let isSymbol = false;

for(let i = 0; i < passwordLength;i++){
    let charNum = password[i].charCodeAt();


let isDigit = charNum >= 48 && charNum <= 57
let isSmallLetter = charNum >= 97 && charNum <= 122
let isBigLetter = charNum >= 65 && charNum <= 90
    

if(isDigit){
        digitCount++;
    }
if(!isDigit && !isSmallLetter && !isBigLetter){
    isSymbol = true;
}
}

if(password.length < 6 || password.length > 10){
    console.log('Password must be between 6 and 10 characters');
}

if (isSymbol) {
    console.log('Password must consist only of letters and digits');
    }
if(digitCount < 2){
    console.log('Password must have at least 2 digits');
}
if(digitCount >= 2 && !isSymbol && (password.length >= 6 || password.length <= 10)){
    console.log('Password is valid');
}
}


passwordValidator ('logIn')