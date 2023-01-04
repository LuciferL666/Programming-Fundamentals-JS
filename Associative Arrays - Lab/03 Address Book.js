function addressBook(input){
let addressBook = {};

for (const date of input) {
    let [name, address] = date.split(':')

addressBook[name] = address
}

let addressBookEntries = Object.entries(addressBook);

addressBookEntries.sort((a, b) => a[0].localeCompare(b[0]))

for (const entry of addressBookEntries) {
    let [name, address] = entry;
    console.log(`${name} -> ${address}`);
}
}
addressBook(['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd'])