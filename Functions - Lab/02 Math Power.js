// function mathPower(a,b){
//     // let result = 0
//     // result = Math.pow(a, b)
//         console.log(Math.pow(a, b));
//     }
//     mathPower(2, 8)
    
    function mathPower(a, b){
    let result = 1;
    for(let i = 0; i < b; i++){
        result = result * a
    }
    console.log(result);
    }
    mathPower(2, 8)