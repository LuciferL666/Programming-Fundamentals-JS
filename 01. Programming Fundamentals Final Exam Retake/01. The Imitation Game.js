function theImitationGame(input) {
  let message = input.shift();
  while (input[0] !== "Decode") {
    let line = input.shift().split("|");
    let command = line[0];
    if (command === "ChangeAll") {
      let oldLetter = line[1]; 
      let newLetter = line[2];  
      message = message.split(oldLetter).join(newLetter);
    } else if (command === "Insert") {
      let index = Number(line[1]);
      let letter = line[2]; 
      let start = message.substring(0, index);
      let end = message.substring(index);
      message = start + letter + end;
    } else if (command === "Move") {
      let index = Number(line[1]);
      let end = message.substring(0, index);
      let start = message.substring(index);
      message = start + end;
    }
  }
  console.log(`The decrypted message is: ${message}`);
}
theImitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);

//   theImitationGame([
//     'owyouh',
//     'Move|2',
//     'Move|3',
//     'Insert|3|are',
//     'Insert|9|?'
//     'Decode',
//   ]) 
  
