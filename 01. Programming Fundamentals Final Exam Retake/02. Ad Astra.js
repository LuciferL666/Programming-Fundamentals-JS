function adAstra(input) {
  let pattern =
    /(#|\|)(?<item>[\sA-Za-z]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<nutrition>\d+)\1/g;

  let match = pattern.exec(input);
  let totalCalories = 0;
  let output = [];

  while (match !== null) {
    output.push(
      `Item: ${match.groups.item}, Best before: ${match.groups.date}, Nutrition: ${match.groups.nutrition}`
    );
    totalCalories += Number(match.groups.nutrition);
    match = pattern.exec(input);
  }
  console.log(
    `You have food to last you for: ${Math.floor(totalCalories / 2000)} days!`
  );
  console.log(output.join("\n"));
}
adAstra([
  "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
]);
//adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@'])
  
