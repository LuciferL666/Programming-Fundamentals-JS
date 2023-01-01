// function employees(input){
// let listOfNames = {}

// for(let employee of input){
//     listOfNames.name = employee
//     listOfNames.personalNumber = employee.length
//     console.log(`Name: ${listOfNames.name} -- Personal Number: ${listOfNames.personalNumber}`);
// }


// }
// employees ([

//     'Silas Butler',
    
//     'Adnaan Buckley',
    
//     'Juan Peterson',
    
//     'Brendan Villarreal'
    
//     ])


//     function employees(list){
//         let employeeList = {}

//        list.forEach(person => {
//             employeeList[person] = person.length
//         });
// for (const key in employeeList) {
//     console.log(key);
        
//     }
// }
//     employees ([

//     'Silas Butler',
    
//     'Adnaan Buckley',
    
//     'Juan Peterson',
    
//     'Brendan Villarreal'
    
//     ])

    function employees (input){
let listOfNames = {}

for (let employee of input) {
    listOfNames.name = employee
    listOfNames.personalNumber = employee.length;
    console.log(`Name: ${listOfNames.name} -- Personal Number: ${listOfNames.personalNumber}`);
}


    }
    employees ([

        'Silas Butler',
        
        'Adnaan Buckley',
        
        'Juan Peterson',
        
        'Brendan Villarreal'
        
        ])