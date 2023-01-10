function softUniBarIncome(customerArray){
let pattern = /%(?<name>[A-Z][a-z]+)%[^|%$.]*<(?<product>\w+)>[^|%$.]*\|(?<count>[0-9])\|[^0-9\|%$.]*(?<price>[0-9|\.]+)\$/g;

let totalIncome = 0;

while(customerArray[0] !== "end of shift"){
    let line = customerArray.shift();
    let matches = line.matchAll(pattern);
    for (const match of matches) {
        totalIncome += match.groups.count * match.groups.price;
        console.log(`${match.groups.name}: ${match.groups.product} - ${(match.groups.count * match.groups.price).toFixed(2)}`);
    }
}
console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
softUniBarIncome([
    "%George%<Croissant>|2|10.3$",

    "%Peter%<Gum>|1|1.3$",

    "%Maria%<Cola>|1|2.4$",

    "end of shift",
]);
