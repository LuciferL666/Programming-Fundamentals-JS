function magicSum (array, magicNumber){
for (let p = 0; p < array.length - 1; p++) {
    let currentElement = array[p];
    for (let y = p + 1; y < array.length; y++) {
        let nextElement = array[y];
        let sum = currentElement + nextElement;
        if(sum === magicNumber){
            console.log(`${currentElement} ${nextElement}`);
        }
        
    }  
    
}

}
magicSum ([1, 7, 6, 2, 19, 23], 8)