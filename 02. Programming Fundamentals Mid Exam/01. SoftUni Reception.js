 function softUniReception(input) {   
  let firstEmploy = Number(input[0]);
  let secondEmploy = Number(input[1]);
  let thirdEmploy = Number(input[2]);
  let allStudents = Number(input[3]);

  let employWorkCapacityForHour = firstEmploy + secondEmploy + thirdEmploy;
  let hours = 0;
  while (allStudents > 0) {
    hours++;
    if (hours % 4 !== 0) {
      // every 4 hours emopirs have 1 hour break;

      allStudents -= employWorkCapacityForHour;
    }
  }
  console.log(`Time needed: ${hours}h.`);
}
softUniReception(["5", "6", "4", "20"]);

//softUniReception (['1','2','3','45'])
