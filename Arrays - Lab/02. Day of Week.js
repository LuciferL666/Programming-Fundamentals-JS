function dayOfWeek(dayNumber) {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (dayNumber < 1 || dayNumber > 7) {
        console.log('Invalid day!');
    } else {
        console.log(days[dayNumber - 1]);
    }
}
dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);