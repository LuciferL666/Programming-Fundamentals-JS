function schoolGrades(input) {
    let schoolGrades = new Map();

    for (const elements of input) {
        let items = elements.split(' ');
        let name = items.shift();
        let grades = items.map(Number);

        if (schoolGrades.has(name) === false) {
            schoolGrades.set(name, [])
        }

        let existing = schoolGrades.get(name);
        for (let grade of grades) {
            existing.push(grade)
        }
    }
    let sorted = Array.from(schoolGrades)
    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, grades] of sorted) {
        let average = 0;
        for (let grade of grades) {
            average += grade
        }
        average /= grades.length
        console.log(`${name}: ${average.toFixed(2)}`);
    }

}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])

// with object solution 
// function schoolGrades(input) {

//     let studentsGrades = {}
//     for (let element of input) {
//         let tokens = element.split(' ')
//         let name = tokens.shift()
//         let grades = tokens.map(Number)
//         if (!studentsGrades.hasOwnProperty(name)) {
//             studentsGrades[name] = []
//         }
//         let existing = studentsGrades[name]
//         grades.map(x => existing.push(x))
//     }
//     let sorted = Object.entries(studentsGrades)
//     sorted.sort((a, b) => a[0].localeCompare(b[0]))
//     for (let [name, grades] of sorted) {
//         let average = 0
//         grades.map(x => average += x)
//         average /= grades.length
//         console.log(`${name}: ${average.toFixed(2)}`);
//     }

// }
// schoolGrades(['Lilly 4 6 6 5',
//     'Tim 5 6',
//     'Tammy 2 4 3',
//     'Tim 6 6'])
