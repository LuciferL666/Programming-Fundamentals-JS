function thePianist(input) {
  //{piece}|{composer}|{key}

  let n = Number(input.shift());
  let music = {};
  for (let i = 0; i < n; i++) {
    let line = input.shift().split("|");
    let piece = line[0];
    let name = line[1];
    let key = line[2];
    music[piece] = { name, key };
  }
  while (input[0] !== "Stop") {
    let commands = input.shift().split("|");
    let command = commands[0];
    let piece = commands[1];
    let name = commands[2];
    let key = commands[3];
    if (command === "Add") {
      if (music[piece]) {
        console.log(`${piece} is already in the collection!`);
      } else {
        music[piece] = { name, key };
        console.log(`${piece} by ${name} in ${key} added to the collection!`);
      }
    } else if (command === "Remove") {
      if (music[piece]) {
        delete music[piece];
        console.log(`Successfully removed ${piece}!`);
      } else {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      }
    } else if (command === "ChangeKey") {
      key = name;
      if (music[piece]) {
        music[piece].key = key;
        console.log(`Changed the key of ${piece} to ${key}!`);
      } else {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      }
    }
  }
  for (let piece in music) {
    console.log(
      `${piece} -> Composer: ${music[piece].name}, Key: ${music[piece].key}`
    );
  }
}
thePianist([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);

//   thePianist([
//     '4',
//     'Eine kleine Nachtmusik|Mozart|G Major',
//     'La Campanella|Liszt|G# Minor',
//     'The Marriage of Figaro|Mozart|G Major',
//     'Hungarian Dance No.5|Brahms|G Minor',
//     'Add|Spring|Vivaldi|E Major',
//     'Remove|The Marriage of Figaro',
//     'Remove|Turkish March',
//     'ChangeKey|Spring|C Major',
//     'Add|Nocturne|Chopin|C# Minor',
//     'Stop'
//   ])
  
  
