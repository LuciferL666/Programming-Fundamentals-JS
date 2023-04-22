function shootForTheWin(arr) {
    let targets = arr.shift().split(" ").map(Number);
    let count = 0;
    while (arr[0] !== "End") {
        let index = Number(arr.shift());
        if (index >= 0 && index < targets.length) {
            count++;
            let number = targets[index];
            targets[index] = -1;
            for (let i = 0; i < targets.length; i++) {
                if (targets[i] !== -1 && targets[i] > number) {
                    targets[i] -= number;
                } else if (targets[i] !== -1 && targets[i] <= number) {
                    targets[i] += number;
                }
            }
        }
    }
    console.log(`Shot targets: ${count} -> ${targets.join(" ")}`);
}
//shootForTheWin(["24 50 36 70", "0", "4", "3", "1", "End"]);
shootForTheWin(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);