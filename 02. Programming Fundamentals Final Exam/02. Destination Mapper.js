function destinationMapper(input) {
  let pattern = /([=|\/])(?<name>[A-Z][A-Za-z]{2,})\1/g;
  let match = pattern.exec(input);
  let output = [];
  let travelPoints = 0;
  while (match !== null) {
    output.push(match.groups.name);
    travelPoints += match.groups.name.length;
    match = pattern.exec(input);
  }
  console.log(`Destinations: ${output.join(", ")}`);
  console.log(`Travel Points: ${travelPoints}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")
//
//destinationMapper("ThisIs some InvalidInput")
  
 
  
