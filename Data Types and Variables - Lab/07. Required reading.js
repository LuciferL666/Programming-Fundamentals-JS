function requiredReading(totalPages, readingPerHr, daysReading) {
  let timeForBook = totalPages / readingPerHr;
  let readingPerDay = timeForBook / daysReading;
  console.log(readingPerDay);
}
requiredReading(212, 20, 2);
requiredReading(432, 15, 4);