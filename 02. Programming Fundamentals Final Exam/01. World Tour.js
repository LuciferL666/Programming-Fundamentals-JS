


function worldTour(input) {
  let data = input.shift();
  let commandsLine = input.shift();
  while (commandsLine !== "Travel") {
    let [command, start, end] = commandsLine.split(":");
    let startIndex;
    let endIndex;
    if (command === "Add Stop") {
      let startIndex = Number(start);
      if (startIndex < 0 || startIndex >= data.length) {
        console.log(data);
        commandsLine = input.shift();
        continue;
      }
      let value = end;
      let firstPart = data.slice(0, startIndex);
      let secondPart = data.slice(startIndex);
      data = firstPart + value + secondPart;
      console.log(data);
    } else if (command === "Remove Stop") {
      startIndex = Number(start);
      endIndex = Number(end);
      if (!data[startIndex] || !data[endIndex]) {
        console.log(data);
        commandsLine = input.shift();
        continue;
      }
      let substr = data.substring(startIndex, endIndex + 1);
      data = data.replace(substr, "");
      console.log(data);
    } else if (command === "Switch") {
      let oldString = start;
      let newString = end;
      let pattern = new RegExp(oldString, "g");
      data = data.replace(pattern, newString);
      console.log(data);
    }
    commandsLine = input.shift();
  }
  console.log(`Ready for world tour! Planned stops: ${data}`);
}
worldTour(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"])
//
// worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
// "Add Stop:3:Nigeria",
// "Remove Stop:4:8",
// "Switch:Albania: Azərbaycan",
// "Travel"])
