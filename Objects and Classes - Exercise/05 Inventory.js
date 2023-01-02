function inventory (input){

    let listOfHeores = []
for (let element of input) {
    let command = element.split(' / ')
    let heroName = command[0]
    let level = Number(command[1])
    let items = command[2]
    let heroObject = { name:heroName, level:level, items:items}
listOfHeores.push(heroObject)
}
listOfHeores.sort((a, b) => a.level - b.level)

for (let hero of listOfHeores) {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
}
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ])