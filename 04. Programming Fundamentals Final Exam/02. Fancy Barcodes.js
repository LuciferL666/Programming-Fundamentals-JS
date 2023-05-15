function fancyBarcodes(input) {
  let n = input.shift();

  for (let barcodes of input) {
    let pattern = /@#+[A-Z]([A-Za-z0-9]){4,}[A-Z]@#+/g;
    let match = barcodes.match(pattern);
    if (match === null) {
      console.log("Invalid barcode");
    } else {
      let barcode = "";
      for (let letter of match[0]) {
        if (letter.charCodeAt() >= 48 && letter.charCodeAt() <= 57) {
          barcode += letter;
        }
      }
      if (barcode.length === 0) {
        console.log("Product group: 00");
      } else {
        console.log(`Product group: ${barcode}`);
      }
    }
  }
}
fancyBarcodes([
    "6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#",
]);
fancyBarcodes
(["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"])
