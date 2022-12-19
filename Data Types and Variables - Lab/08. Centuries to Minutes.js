function centuriesToMinutes(centuries) {
    let years = centuries * 100;
    let days = Math.trunc(years * 365.2422);
    let hours = days * 24
    let minutes = hours * 60
    if (centuries == 1) {
        console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
    } else {
        console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
    }
}
centuriesToMinutes(1);
centuriesToMinutes(5);