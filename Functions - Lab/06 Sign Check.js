function positiveOrNegative (numberOne, numberTwo, numberThree){
if(numberOne > 0 && numberTwo > 0 && numberThree < 0){
    console.log('Negative');
}else if(numberOne < 0 && numberTwo < 0 && numberThree > 0){
    console.log('Positive');
}else if (numberOne < 0 && numberTwo < 0 && numberThree < 0){
    console.log('Negative');
}else if (numberOne < 0 && numberTwo > 0 && numberThree > 0){
    console.log('Negative');
}

}
positiveOrNegative(5,12,-15);
positiveOrNegative(-6,-12,14);
positiveOrNegative(-1, -2, -3);
positiveOrNegative(-5,1,1);