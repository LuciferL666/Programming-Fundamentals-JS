function furniture(input) {
    let index = 0;
    let totalMoney = 0;
    let pattern = /[>]{2}(?<name>[A-Za-z]+)[<]{2}(?<price>[\d]+[\.]*[\d]+)!(?<quantity>[\d]+)/g
    console.log('Bought furniture:');
    while (input[index] !== 'Purchase') {
        let productRow = input[index];
        let validProducts = pattern.exec(productRow)

        while (validProducts !== null) {
            let productName = validProducts.groups['name'];
            console.log(productName);
            let productPrice = validProducts.groups['price'];
            let productQuantity = validProducts.groups['quantity'];
            totalMoney += productPrice * productQuantity;

            validProducts = pattern.exec(productRow);
        }

        index++;

    }
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3',

    '>>TV<<300!5',

    '>Invalid<<!5',

    'Purchase'])