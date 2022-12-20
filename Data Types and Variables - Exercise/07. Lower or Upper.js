function lowerOrUpper (char){
    let result = char === char.toUpperCase()
    ? console.log('upper-case'):
    console.log('lower-case');
    }
lowerOrUpper ('f')
   
//another solution
//     function lowerOrUpper (char){
//         let asciiValue = char.charCodeAt();

      
//         if(asciiValue >=65 && asciiValue <= 90){
//           console.log('upper-case');
//         }else{
//           console.log('lower-case');
//         }
//       }
// lowerOrUpper ('f')
  