function formatGrade(grade) {
  let inWords;
  let formattedGrade = grade.toFixed(2);
  if (grade < 3.0) {
    inWords = "Fail";
    formattedGrade = 2;
  } else if (grade < 3.5) {
    inWords = "Poor";
  } else if (grade < 4.5) {
    inWords = "Good";
  } else if (grade < 5.5) {
    inWords = "Very good";
  } else if (grade >= 5.5) {
    inWords = "Excellent";
  }
  console.log(`${inWords} (${formattedGrade})`);
}
formatGrade(6)