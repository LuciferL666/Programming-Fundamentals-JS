function gladiatorExpenses(fights, helmet, sword, shield, armor) {
    let lostFight = fights;
    let helmetPrice = helmet;
    let swordPrice = sword;
    let armorPrice = armor;
    let shieldPrice = shield;
    let brokenShield = 0;
    let gladiatorExpenses = 0;

    for (let currentFight = 1; currentFight <= lostFight; currentFight++) {
        if (currentFight % 2 === 0) {
            gladiatorExpenses += helmetPrice;
        }
        if (currentFight % 3 === 0) {
            gladiatorExpenses += swordPrice;
        }
        if (currentFight % 2 === 0 && currentFight % 3 === 0) {
            gladiatorExpenses += shieldPrice;
            brokenShield++;
            if (brokenShield % 2 === 0) {
                gladiatorExpenses += armorPrice;
            }
        }
    }
    console.log(`Gladiator expenses: ${gladiatorExpenses.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5);

//another solution
// function solve(lostFights,helmetPrice,swordPrice,shieldPrice,armorPrice){
//     let totalPrice=(Math.floor(lostFights/2))*helmetPrice+(Math.floor(lostFights/3))*swordPrice+(Math.floor(lostFights/6))*shieldPrice+(Math.floor(lostFights/12))*armorPrice

//     console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`)
// }
// gladiatorExpenses (7,2,3,4,5)
