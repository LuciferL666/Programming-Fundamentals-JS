function heroes(input) {
  let n = input.shift();

  let heroes = {};
  for (let i = 0; i < n; i++) {
    let heroData = input.shift().split(" ");
    let name = heroData[0];
    let hp = Number(heroData[1]);
    let mp = Number(heroData[2]);
    heroes[name] = { hp, mp };
  }
  while (input[0] !== "End") {
    let line = input.shift().split(" - ");
    let command = line[0];
    let hero = line[1];
    if (command === "CastSpell") {
      let mpNeeded = Number(line[2]);
      let spellName = line[3];
      if (heroes[hero].mp >= mpNeeded) {
        heroes[hero].mp -= mpNeeded;
        console.log(
          `${hero} has successfully cast ${spellName} and now has ${heroes[hero].mp} MP!`
        );
      } else {
        console.log(`${hero} does not have enough MP to cast ${spellName}!`);
      }
    } else if (command === "TakeDamage") {
      let damage = Number(line[2]);
      let enemy = line[3];
      heroes[hero].hp -= damage;
      if (heroes[hero].hp > 0) {
        console.log(
          `${hero} was hit for ${damage} HP by ${enemy} and now has ${heroes[hero].hp} HP left!`
        );
      } else {
        console.log(`${hero} has been killed by ${enemy}!`);
        delete heroes[hero];
      }
    } else if (command === "Recharge") {
      let currentMp = heroes[hero].mp;
      recharge = Number(line[2]);
      if (heroes[hero].mp + recharge <= 200) {
        heroes[hero].mp += recharge;
        console.log(`${hero} recharged for ${recharge} MP!`);
      } else {
        heroes[hero].mp = 200;
        console.log(`${hero} recharged for ${200 - currentMp} MP!`);
      }
    } else if (command === "Heal") {
      let currentHP = heroes[hero].hp;
      let healing = Number(line[2]);
      if (heroes[hero].hp + healing <= 100) {
        heroes[hero].hp += healing;
        console.log(`${hero} healed for ${healing} HP!`);
      } else {
        heroes[hero].hp = 100;
        console.log(`${hero} healed for ${100 - currentHP} HP!`);
      }
    }
  }
  for (let hero in heroes) {
    console.log(hero);
    console.log(`  HP: ${heroes[hero].hp}`);
    console.log(`  MP: ${heroes[hero].mp}`);
  }
}

heroes([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End",
]);