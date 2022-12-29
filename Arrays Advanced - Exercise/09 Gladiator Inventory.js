function gladiatorInventory(array) {
    let inventory = array.shift().split(' ');
    let command = array.toString().split(',');

    for (let i = 0; i < command.length; i++) {
        let currentCommand = command[i].split(' ');
        let purpose = currentCommand[0];
        let equipment = currentCommand[1];

        if (purpose === 'Buy' && !inventory.includes(equipment)) {
            inventory.push(equipment);
        } else if (purpose === 'Trash' && inventory.includes(equipment)) {
            inventory.splice(inventory.indexOf(equipment), 1);
        } else if (purpose === 'Repair' && inventory.includes(equipment)) {
            inventory.push(inventory.splice(inventory.indexOf(equipment), 1)[0])
        } else if (purpose === 'Upgrade' && inventory.includes(equipment.split('-')[0])) {
            let upgradedEquipment = equipment.split('-')[0];
            let upgrade = equipment.split('-')[1];
            inventory.splice(inventory.indexOf(upgradedEquipment) + 1, 0, `${upgradedEquipment}:${upgrade}`)
        }
    }

    console.log(inventory.join(' '));
}
gladiatorInventory(['SWORD Shield Spear',

    'Buy Bag',

    'Trash Shield',

    'Repair Spear',

    'Upgrade SWORD-Steel'])


    // gladiatorInventory (['SWORD Shield Spear',
    
    // 'Trash Bow',
    
    // 'Repair Shield',
    
    // 'Upgrade Helmet-V'])