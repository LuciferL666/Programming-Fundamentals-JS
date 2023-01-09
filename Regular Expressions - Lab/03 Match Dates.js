// function matchDates (input){
// let text = input.shift()
// let pattern = /\b(?<day>\d{2})([/.-])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/g;

// let matches = text.matchAll(pattern);

// for(let match of matches){
//     console.log(`Day: ${match[1]}, Month: ${match[3]}, Year: ${match[4]}`);
// }

// }
// matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016, 01/Jan/0001'])

function matchDates(input) {
  let text = input.shift();
  let pattern = /\b\d{2}([/.-])[A-Z][a-z]+\1\d{4}/g;

  let matches = text.matchAll(pattern);

  for (const match of matches) {
    //let  = match.shift().split('/'|'-'|'.')
  
    console.log(match);
  }
}
matchDates([
  "13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016, 01/Jan/0001",
]);
