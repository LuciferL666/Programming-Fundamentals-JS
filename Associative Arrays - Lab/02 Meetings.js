function meetings (input){
// making an object
    let meetings = {};
// for of look to take date from the input and to split it 
    for (const line of input) {
        let [day, name] = line.split(' ')
    // we must check if day is already busy conflict on day
        if(meetings[day]){
            console.log(`Conflict on ${day}!`);
        // if its not then we Scheduled for day
        }else{
            meetings[day] = name

            console.log(`Scheduled for ${day}`);
        }
    }
for(let [day, name] of Object.entries(meetings)){
    console.log(`${day} -> ${name}`);
}

}
meetings (['Monday Peter',

'Wednesday Bill',

'Monday Tim',

'Friday Tim'])