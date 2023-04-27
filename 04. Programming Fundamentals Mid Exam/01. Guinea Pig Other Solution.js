function guineaPig(input) {      
    let food = Number(input[0]) * 1000;
    let hay = Number(input[1]) * 1000;
    let cover = Number(input[2]) * 1000;
    let guineaPigKg = Number(input[3]) * 1000;
    let month = 30;
    let days = 0;
    let oneThird = 0;
    for (let i = 0; i < month; i++) {
      days++;
      food -= 300;
      if (days % 2 === 0) {
        hay -= food * 0.05;
      }
      if (days % 3 === 0) {
        oneThird = (guineaPigKg / 3);
        cover -= oneThird;
      }
    }
    if (food >= 0 && hay >= 0 && cover >= 0) {
      console.log(
        `Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`
      );
    } else {
      console.log(`Merry must go to the pet store!`);
    }
  }
  guineaPig(["10", "5", "5.2", "1"]);
// guineaPig(["1", "1.5", "3", "1.5"]);
// guineaPig(["9", "5", "5.2", "1"]);
