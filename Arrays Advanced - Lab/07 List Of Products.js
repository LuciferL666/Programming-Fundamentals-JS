 function listOfProducts(strings){
     let sorted = strings.sort();
     for(let i = 0; i < strings.length;i++){
         console.log(`${i + 1}.${sorted[i]}`)
     }
 }

 listOfProducts (['Potatoes', 'Tomatoes', 'Onions',
 'Apples'])
