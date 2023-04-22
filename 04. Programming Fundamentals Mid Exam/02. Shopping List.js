function shopList(input){
    let list = input.shift().split('!')
    while(input[0] !== 'Go Shopping!'){
        let line = input.shift().split(' ')
        let command = line[0]
    
        switch(command){
            case 'Urgent':
                if(!list.includes(line[1])){
                    list.unshift(line[1])
                    break;
                }else{
                    continue;
                }
                case 'Unnecessary':
                    if(list.includes(line[1])){
                        list.splice(list.indexOf(line[1]), 1)
                        break;
                    }
                    case 'Correct':
                        if(list.includes(line[1])){
                            list.splice(list.indexOf(line[1]),1 ,line[2])
                            break;
                        }
                        case 'Rearrange':
                            if(list.includes(line[1])){
                                list.splice(list.indexOf(line[1]),1)
                                list.push(line[1])
                                break;
                            }
        }
    }
    console.log(`${list.join(', ')}`);
    
        }
        //shopList(["Tomatoes!Potatoes!Bread","Unnecessary Milk","Urgent Tomatoes","Go Shopping!",]);
shopList(["Milk!Pepper!Salt!Water!Banana","Urgent Salt","Unnecessary Grapes","Correct Pepper Onion","Rearrange Grapes","Correct Tomatoes Potatoes","Go Shopping!",]);