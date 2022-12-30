// function print(city){
//     for(const key of Object.keys(city)){
//         console.log(`${key} -> ${city[key]}`);
//     }
// }
// print({
//     name: "Plovdiv",
//     area: 389,
//     population: 1162358,
//     country: "Bulgaria",
//     postCode: "4000"
//     })

function cityInformation(cityInfo) {
  for (const key in cityInfo) {
    console.log(`${key} -> ${cityInfo[key]}`);
  }
}
cityInformation({
  name: "Plovdiv",
  area: 389,
  population: 1162358,
  country: "Bulgaria",
  postCode: "4000",
});
