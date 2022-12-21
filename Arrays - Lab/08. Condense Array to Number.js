function condenseArrayToNumber (numbers){
    while(numbers.length > 1){
        for (let i = 0; i < numbers.length; i++) {
            numbers[i] = numbers[i] + numbers[i + 1]
            
        }
        numbers.length--
    }
    console.log(numbers[0]);
}
condenseArrayToNumber([2,10,3])
condenseArrayToNumber([5,0,4,1,2])
condenseArrayToNumber([1])