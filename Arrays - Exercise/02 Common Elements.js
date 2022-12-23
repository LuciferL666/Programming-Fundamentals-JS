function commonElements (inputOne, inputTwo){
for(let p = 0; p < inputOne.length; p++){
    for(let y = 0; y < inputTwo.length; y++){
        if(inputOne[p] === inputTwo[y]){
            console.log(inputOne[p]);
        }
    }
}


}
commonElements (['Hey', 'hello', 2, 4, 'Peter', 'e'],

['Petar', 10, 'hey', 4, 'hello', '2'])