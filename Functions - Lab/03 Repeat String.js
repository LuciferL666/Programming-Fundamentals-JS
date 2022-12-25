function repeatString(string, times) {
  let newString = "";
  for (let i = 0; i < times; i++) {
    newString += string;
  }
  return newString;
}
console.log(repeatString("abc", 3));

function repeatString(string, times) {
  let newString = "";
  for (let i = 0; i < times; i++) {
    newString += string;
  }
  console.log(newString);
}
repeatString("abc", 3);

function repeatString(string, times) {
  console.log(string.repeat(times));
}
repeatString("abc", 3);
