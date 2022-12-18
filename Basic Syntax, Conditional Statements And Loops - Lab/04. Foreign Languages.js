function foreignLanguages(country) {
    if (country === "USA" || country === "England") {
        console.log("English");
    } else if (country === "Spain" || country === "Argentina" || country === "Mexico") {
        console.log("Spanish");
    } else {
        console.log("unknown");
    }

}
foreignLanguages('USA');
foreignLanguages('Germany');

// With switch
// function solve(country) {
//     switch (country) {
//         case "USA":

//         case "England":
//             console.log("English");
//             break;
//         case "Spain":
//         case "Mexico":
//         case "Argentina":
//             console.log("Spanish");
//             break;
//         default:
//             console.log("unknown");

//     }
// }
// foreignLanguages('USA');
// foreignLanguages('Germany');