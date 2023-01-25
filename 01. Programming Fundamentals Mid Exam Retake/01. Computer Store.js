function computerStore(input) {
    let index = 0
    let command = input[index]
    let priceWithoutTaxes = 0
    while (command !== 'special' || command !== 'regular') {
        let price = Number(input[index])
        command = input[index]
        if (command === 'special' || command === 'regular') {
            break;
        }
        if (price < 0) {
            console.log('Invalid price!');
        } else {
            priceWithoutTaxes += price
        }
        price = Number(input[index++])
    }
    let taxes = priceWithoutTaxes * 0.2
    let priceWithTaxes = taxes + priceWithoutTaxes
    if (command === 'special') {
        priceWithTaxes *= 0.9
    }
    if (priceWithTaxes === 0) {
        console.log('Invalid order!');
    } else {
        console.log(`Congratulations you've just bought a new computer!\nPrice without taxes: ${priceWithoutTaxes.toFixed(2)}$\nTaxes: ${taxes.toFixed(2)}$`);
        console.log(`-----------\nTotal price: ${priceWithTaxes.toFixed(2)}$`);
    }
}
computerStore(['1050', '200', '450', '2', '18.50', '16.86', 'special'])
//computerStore(['1023', '15', '-20','-5.50','450', '20', '17.66', '19.30', 'regular'])
 
 
