function sortAnArrayBy2Criteria (array){

let sortedArray = array.sort((a,b)=> a.length - b.length || a.localeCompare(b));

sortedArray.forEach(element =>{
    console.log(element);
});

}
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])