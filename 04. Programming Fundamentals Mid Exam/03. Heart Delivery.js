function heartDelivery (input){
    let houses = input.shift().split('@')
    let position = 0
    let housesCount = houses.length
    while(input[0] !== 'Love!'){
        let line = input.shift().split(' ')
        let command = line[0]
        let index = Number(line[1])
    position += index
    
        if(position >= houses.length){
            position = 0
        }
        if(houses[position] === 0){
            console.log(`Place ${position} already had Valentine's day.`);
        }else{
            houses[position] -=2
            if(houses[position] === 0){
                console.log(`Place ${position} has Valentine's day.`);
                housesCount--
            }
        }
        
    }
    console.log(`Cupid's last position was ${position}.`);
    if(housesCount === 0){
        console.log('Mission was successful.');
    
    }else{
        console.log(`Cupid has failed ${housesCount} places.`);
    }
    }
    heartDelivery(["2@4@2","Jump 2","Jump 2","Jump 8","Jump 3","Jump 1","Love!"])
//heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"])
//heartDelivery(["4@2@4@2", "Jump 1", "Jump 2", "Jump 1", "Jump 2", "Jump 2", "Jump 2", "Love!"])