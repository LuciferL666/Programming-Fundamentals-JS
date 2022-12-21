function reverseInPlace(input) {
    for (let i = 0; i < input.length / 2; i++) {
        let tempElement = input[i];

        input[i] = input[input.length - 1 - i];
        input[input.length - 1 - i] = tempElement;

    }
    console.log(input.join(' '));
}
reverseInPlace(["a", "b", "c", "d", "e"]);
reverseInPlace(["abc", "def", "hig", "klm", "nop"]);
reverseInPlace(["33", "123", "0", "dd"]);

  //easy solution
//   function four (input){
//     console.log(input.reverse().join(' '));
//     }
// reverseInPlace(["a", "b", "c", "d", "e"]);
// reverseInPlace(["abc", "def", "hig", "klm", "nop"]);
// reverseInPlace(["33", "123", "0", "dd"]);