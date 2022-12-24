function dungeonestDark(input) {
    let rooms = input[0].split("|");
    let health = 100;
    let coins = 0;
    let isFinished = true;

    for (let index = 0; index < rooms.length; index++) {
        let room = rooms[index].split(" ");
        //console.log(room);
        if (room[0] === "potion") {
            let currentHealth = Number(room[1]);
            if (health <= 100) {
                if (health + currentHealth >= 100) {
                    currentHealth = 100 - health;
                    health = 100;
                } else {
                    health += currentHealth;
                }
                console.log(`You healed for ${currentHealth} hp.`);
                console.log(`Current health: ${health} hp.`);
            }
        } else if (room[0] === "chest") {
            let currentCoins = Number(room[1]);
            console.log(`You found ${currentCoins} coins.`);
            coins += currentCoins;
        } else {
            let currentMonster = room[0];
            let mosterAttack = Number(room[1]);
            health -= mosterAttack;
            if (health > 0) {
                console.log(`You slayed ${currentMonster}.`);
            } else {
                console.log(`You died! Killed by ${currentMonster}.`);
                console.log(`Best room: ${index + 1}`);
                isFinished = false;
                break;
            }
        }
    }
    if (isFinished) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
