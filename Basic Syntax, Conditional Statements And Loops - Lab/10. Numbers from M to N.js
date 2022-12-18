function numbersFromMToN(m, n) {
    while (m >= n) {
        console.log(m);
        m--
    }
}
numbersFromMToN(10, 3)

//with for
function numbersFromMToN(m, n) {
    for (let i = m; i >= n; i--) {
        console.log(i);
    }

}
numbersFromMToN(6, 3)