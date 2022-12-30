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
