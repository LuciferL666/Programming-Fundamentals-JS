function plantDiscovery(input) {
  let n = Number(input.shift());
  let plants = {};
 
  for (let i = 0; i < n; i++) {
    let line = input.shift().split("<->");
    let plant = line[0];
    let rarity = Number(line[1]);

    if (plants.hasOwnProperty(plant)) {
      plants[plant].rarity = rarity;
    } else {
      plants[plant] = { rarity, rating: [] };
    }
  }
  while (input[0] !== "Exhibition") {
    let line = input.shift().split(": ");
    let command = line.shift();
    let plantInfo = line.shift().split(" - ");
    let plant = plantInfo[0];

    if (command === "Rate") {
      let rating = Number(plantInfo[1]);

      if (plants.hasOwnProperty(plant)) {
        plants[plant].rating.push(rating);
      } else {
        console.log("error");
      }
    } else if (command === "Update") {
      let newRarity = Number(plantInfo[1]);
      if (plants.hasOwnProperty(plant)) {
        plants[plant].rarity = newRarity;
      } else {
        console.log("error");
      }
    } else if (command === "Reset") {
      if (plants.hasOwnProperty(plant)) {
        plants[plant].rating = [];
      } else {
        console.log("error");
      }
    }
  }
  console.log("Plants for the exhibition:");

  for (let plant in plants) {
    let sum = 0;
    let ratingCount = plants[plant].rating.length;

    for (let rating of plants[plant].rating) {
      sum += rating;
    }
    let avgRating = sum / ratingCount;

    if (!avgRating) {
      avgRating = 0;
    }
    console.log(
      `- ${plant}; Rarity: ${plants[plant].rarity}; Rating: ${avgRating.toFixed(
        2
      )}`
    );
  }
}
plantDiscovery(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"])
//
// plantDiscovery(["2",
// "Candelabra<->10",
// "Oahu<->10",
// "Rate: Oahu - 7",
// "Rate: Candelabra - 6",
// "Exhibition"])
