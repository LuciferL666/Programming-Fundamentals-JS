function positiveOrNegative (numberOne, numberTwo, numberThree){
    let result = ''
if(numberOne == 0 || numberTwo == 0 || numberThree == 0){
    result = 'Positive';
}else if(numberOne > 0 && numberTwo > 0 && numberThree > 0){
    result = 'Positive';
}else if(numberOne < 0 && numberTwo < 0 && numberThree < 0){
    result = 'Negative';
}else if(numberOne > 0 && numberTwo > 0 && numberThree < 0){
    result = 'Negative'
}else if(numberOne > 0 && numberTwo < 0 && numberThree > 0){
    result = 'Negative'
}else if(numberOne > 0 && numberTwo < 0 && numberThree < 0){
    result = 'Positive'
}else if(numberOne < 0 && numberTwo > 0 && numberThree > 0){
    result = 'Negative'
}else if(numberOne < 0 && numberTwo > 0 && numberThree < 0){
    result = 'Positive'
}else if(numberOne < 0 && numberTwo < 0 && numberThree > 0){
    result = 'Positive'
}
console.log(result);
}
positiveOrNegative(5,12,-15);
positiveOrNegative(-6,-12,14);
positiveOrNegative(-1, -2, -3);
positiveOrNegative(-5,1,1);
