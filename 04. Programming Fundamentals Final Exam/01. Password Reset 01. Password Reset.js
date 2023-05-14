function resetPassword(input) {
  let password = input.shift();
  while (input[0] !== "Done") {
    let line = input.shift().split(" ");
    let command = line[0];
    if (command === "TakeOdd") {
      let copy = "";
      for (let i = 1; i < password.length; i += 2) {
        copy += password[i];
      }
      password = copy;
      console.log(password);
    } else if (command === "Cut") {
      let first = Number(line[1]);
      let second = Number(line[2]);
      let start = password.substring(0, first);
      let end = password.substring(first + second);
      password = start + end;
      console.log(password);
    } else if (command === "Substitute") {
      let oldSymbol = line[1];
      let newSymbol = line[2];
      if (password.includes(oldSymbol)) {
        password = password.split(oldSymbol).join(newSymbol);
        console.log(password);
      } else {
        console.log(`Nothing to replace!`);
      }
    }
  }
  console.log(`Your password is: ${password}`);
}
resetPassword([
    "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done",]);
([
"up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done",])
