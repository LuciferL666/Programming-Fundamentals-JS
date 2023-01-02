// function movies(list){
//     let movies = [];

//     list.forEach(line => {
//         if(line,includes('addMovie')){
// let movieName = line.split('addMovie ')[1];
// movies.push({movieName})
//         }else if(line.includes('directedBy')){
//             let [name, director] = line.split(' directedBy ');
// let movie = movies.find(el => el.name === name);

// if(movie){
//     movie.director = director
// }

//         }else if(line.includes('onDate')){
// let [name,date] = line.split(' onDate ');
// let movie = movies.find(el => el.name === name);

// if(movie){
//     movie.date = date
// }
//         }
//     });
// }
// movies ([

//     'addMovie Fast and Furious',

//     'addMovie Godfather',

//     'Inception directedBy Christopher Nolan',

//     'Godfather directedBy Francis Ford Coppola',

//     'Godfather onDate 29.07.2018',

//     'Fast and Furious onDate 30.07.2018',

//     'Batman onDate 01.08.2018',

//     'Fast and Furious directedBy Rob Cohen'

//     ])

function movies(input) {
    let listOfMovies = [];

    for (let lines of input) {
        if (lines.includes("addMovie")) {
            let movieName = lines.split("addMovie ")[1];
            listOfMovies.push( {name: movieName} );
        } else if (lines.includes("directedBy")) {
            let info = lines.split(" directedBy ");
            let name = info[0];
            let director = info[1];
            let movie = listOfMovies.find((element) => element.name === name);
            if (movie) {
                movie.director = director;
            }
        } else if (lines.includes("onDate")) {
            let info = lines.split(" onDate ");
            let name = info[0];
            let date = info[1];
            let movie = listOfMovies.find((element) => element.name === name);
            if (movie) {
                movie.date = date;
            }
        }
    }
    for (let movie of listOfMovies) {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    }
}
movies([
    "addMovie Fast and Furious",

    "addMovie Godfather",

    "Inception directedBy Christopher Nolan",

    "Godfather directedBy Francis Ford Coppola",

    "Godfather onDate 29.07.2018",

    "Fast and Furious onDate 30.07.2018",

    "Batman onDate 01.08.2018",

    "Fast and Furious directedBy Rob Cohen",
]);
