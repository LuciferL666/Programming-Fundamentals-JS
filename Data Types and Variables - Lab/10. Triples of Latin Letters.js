function triplesOfLatinLetters(num) {
  let all = 0;

  for (let p = 0; p < num; p++) {
    letter1 = String.fromCharCode(97 + p);
    for (let e = 0; e < num; e++) {
      letter2 = String.fromCharCode(97 + e);
      for (let y = 0; y < num; y++) {
        letter3 = String.fromCharCode(97 + y);

        console.log(`${letter1}${letter2}${letter3}`);
      }
    }
  }
}
triplesOfLatinLetters("3");
