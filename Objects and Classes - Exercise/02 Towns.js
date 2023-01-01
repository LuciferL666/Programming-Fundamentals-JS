// function towns (array){
//     let listOfTowns = {}
// for(let elements of array){
//     let townInfo = elements.split(' | ')

//     listOfTowns.town = townInfo[0]
// listOfTowns.latitude = Number(townInfo[1]).toFixed(2)
// listOfTowns.longitude = Number(townInfo[2]).toFixed(2)
// console.log(listOfTowns);
// }


// }
// towns (['Sofia | 42.696552 | 23.32601',

// 'Beijing | 39.913818 | 116.363625'])



// function towns (list){
//     let townInfo = {}

//     for (const line of list) {

//         // let splitedLine = line.split(' | ');
//         // let townName = splitedLine[0]
//         // let latitude = splitedLine[1]
//         // let longitude = splitedLine[2]

//         let [townName, latitude, longitude] = line.split(' | ') //this is better easier and faster then the previos

//         townInfo.town = townName;
//         townInfo.latitude = Number(latitude).toFixed(2)
//         townInfo.longitude =Number(longitude).toFixed(2)

//         console.log(townInfo);
//     }
// }



// towns (['Sofia | 42.696552 | 23.32601',

// 'Beijing | 39.913818 | 116.363625'])

function towns (input){
let townInfo = {}

for (const town of input) {
    let [townName, latitude, longitude] = town.split(' | ')
        townInfo.name = townName
    townInfo.latitude = Number(latitude).toFixed(2)
    townInfo.longitude = Number(longitude).toFixed(2)

    console.log(townInfo);
}

}
towns (['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625'])
