function needForSpeedIII(input) {
    let n = Number(input.shift())

    let cars = {}

    for (let i = 0; i < n; i++) {
        let carsData = input.shift().split('|')
        let name = carsData[0]
        let miles = Number(carsData[1])
        let fuel = Number(carsData[2])
        cars[name] = { miles, fuel };
    }
    while (input[0] !== 'Stop') {
        let commands = input.shift().split(' : ');
        let command = commands[0];
        let car = commands[1];

        if (command === 'Drive') {
            let mileDrive = Number(commands[2])
            let fuelNeeded = Number(commands[3])
            if (cars[car].fuel >= fuelNeeded) {
                cars[car].miles += mileDrive
                cars[car].fuel -= fuelNeeded
                console.log(`${car} driven for ${mileDrive} kilometers. ${fuelNeeded} liters of fuel consumed.`);
            } else {
                console.log("Not enough fuel to make that ride");
            }
            if (cars[car].miles > 100000) {
                console.log(`Time to sell the ${car}!`);
                delete cars[car];
            }
        } else if (command === 'Refuel') {
            let currentFuel = cars[car].fuel

            let refuel = Number(commands[2])
            if (cars[car].fuel + refuel <= 75) {
                cars[car].fuel += refuel;
                console.log(`${car} refueled with ${refuel} liters`);
            } else {
                cars[car].fuel = 75
                console.log(`${car} refueled with ${75 - currentFuel} liters`);
            }
        } else if (command === 'Revert') {
            let currentMiles = cars[car].miles

            let revert = Number(commands[2]);
            cars[car].miles -= revert
            if (cars[car].miles < 10000) {
                cars[car].miles = 10000
            } else {
                console.log(`${car} mileage decreased by ${revert} kilometers`);
            }
        }
    }
    for (let car in cars) {
        console.log(`${car} -> Mileage: ${cars[car].miles} kms, Fuel in the tank: ${cars[car].fuel} lt.`);
    }
}
needForSpeedIII([
    "3",
    "Audi A6|38000|62",
    "Mercedes CLS|11000|35",
    "Volkswagen Passat CC|45678|5",
    "Drive : Audi A6 : 543 : 47",
    "Drive : Mercedes CLS : 94 : 11",
    "Drive : Volkswagen Passat CC : 69 : 8",
    "Refuel : Audi A6 : 50",
    "Revert : Mercedes CLS : 500",
    "Revert : Audi A6 : 30000",
    "Stop",
]);