function convert(data){
    let info = JSON.parse(data);

    for(const key of Object.keys(info)){
        console.log(`${key}: ${info[key]}`);
    }
}
convert ('{"name": "George", "age": 40, "town": "Sofia"}')
// function make(data){
//     let info = JSON.parse(data);
    
//     for (let key of Object.keys(info)){
//         console.log(`${key}: ${info[key]}`);
//     }
//     }
//     make ({"name": "George", "age": 40, "town": "Sofia"})