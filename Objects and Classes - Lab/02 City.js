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
