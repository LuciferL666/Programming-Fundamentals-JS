function companyUsers (input){
let listOfEmployee = {};

input.forEach(line => {
   let [companyName, personID] = line.split(' -> ');
   if(!listOfEmployee.hasOwnProperty(companyName)){
    listOfEmployee[companyName] = []
   }
   listOfEmployee[companyName].push(personID);
}); 

let sortedCompanies = Object.entries(listOfEmployee).sort((a, b) => a[0].localeCompare(b[0]))
    
sortedCompanies.forEach(el =>{
let companyName = el[0];
let allIds = el[1];
console.log(companyName);

let uniqueIds = new Set(allIds);
for(let id of uniqueIds){
    console.log(`-- ${id}`);
}
})
}
companyUsers([ 'SoftUni -> AA12345',
 'SoftUni -> BB12345',
  'Microsoft -> CC12345',
   'HP -> BB12345' ])