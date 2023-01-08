function replaceRepeatingChars(input) {
  let result = input[0];
  for(let index = 1; index < input.length; index++){
    let current = input[index];
    let prev = input[index - 1];

    if (current !== prev) {
      result += current;
    }
  }
  console.log(result);
}

replaceRepeatingChars("aaaaabbbbbcdddeeeedssaa");
