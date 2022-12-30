// function convert(data){
//     let info = JSON.parse(JSON.stringify(data));

//     for(const key of Object.keys(info)){
//         console.log(`${key}: ${info[key]}`);
//     }
// }
// convert({"name": "George", "age": 40, "town": "Sofia"})

function convertFromJson (name, lastName, hairColor){
    let info = {
        name: name,
        lastName: lastName,
        hairColor: hairColor,
    }
    console.log(JSON.stringify(info));
}
convertFromJson('George', 'Jones',

'Brown')