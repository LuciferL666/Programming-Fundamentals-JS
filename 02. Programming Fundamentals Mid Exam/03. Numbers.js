function numbers (input){
    let number = input.split(' ').map(Number)
    let total = []
    let num = 0
    let count = 0
    let avg = 0
     
    for (let i = 0; i < number.length; i++) {
        num += number[i];
        count++
    }
        avg = num / count
        for (let el of number) {
            if(avg < el){
                total.push(el)
            }      
        }
        let sortedArr = total.sort((a,b)=> b - a)
    let top5 = sortedArr.slice(0,5)
    if(top5.length === 0){
        console.log('No');
    }
        console.log(top5.join(' '));
    }
numbers('10 20 30 40 50')
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')
//numbers('1')
numbers('-1 -2 -3 -4 -5 -6')