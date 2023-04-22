function shopList(input) {
    let list = input.shift().split('!')
    let remove = ''
    while (input[0] !== 'Go Shopping!') {
        let line = input.shift().split(' ')
        let command = line[0]
        if (command === 'Urgent') {
            if (!list.includes(line[1])) {
                list.unshift(line[1])
            }
        }else if(command === 'Unnecessary'){
            if(list.includes(line[1])){
            list.splice(list.indexOf(line[1]),1)
            }
        }else if(command === 'Correct'){
            let oldItem = line[1]
            let newItem = line[2]
            if(list.includes(oldItem)){
                list.splice(list.indexOf(oldItem),1, newItem)
            }
        }else if(command === 'Rearrange'){
            if(list.includes(line[1])){
                list.splice(list.indexOf(line[1]),1)
                list.push(line[1])
            }
        }
    }
    console.log(`${list.join(', ')}`);
}
//shopList(["Tomatoes!Potatoes!Bread","Unnecessary Milk","Urgent Tomatoes","Go Shopping!",]);
shopList(["Milk!Pepper!Salt!Water!Banana","Urgent Salt","Unnecessary Grapes","Correct Pepper Onion","Rearrange Grapes","Correct Tomatoes Potatoes","Go Shopping!",]);