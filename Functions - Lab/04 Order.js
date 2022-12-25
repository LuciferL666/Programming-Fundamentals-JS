function order (product, amount){
let price = 0
let totalPrice = 0
if(product === 'coffee'){
    price = 1.50
}else if(product === 'water'){
    price = 1.00
}else if(product === 'coke'){
    price = 1.40
}else if(product === 'snacks'){
    price = 2.00
}
totalPrice = price * amount
console.log(`${totalPrice.toFixed(2)}`);

}
order("coffee", 2)