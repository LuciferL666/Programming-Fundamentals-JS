function spiceMustFlow(amount) {
    let gather = 0;
    let days = 0;
    while (amount >= 100) {
        days++;
        gather += amount - 26;
        amount -= 10;
    }
    if (gather > 0) {
        console.log(days);
        console.log(gather - 26);
    } else {
        console.log(days);
        console.log(gather);
    }
}
spiceMustFlow(111);
