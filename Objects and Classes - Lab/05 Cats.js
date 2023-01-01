// function cats(input) {
//     class Cat {
//         constructor(name, age) {
//             this.name = name;
//             this.age = age;
//         }
//         meow() {
//             console.log(`${this.name}, age ${this.age} says Meow`);
//         }
//     }

//     for (let line of input) {
//        //let [name, age] = line.split(' ') //това е дестрокториране, по-лесно е за употреба и спестява място и замества променливите 
//         let args = line.split(" ");

//         let name = args[0];
//         let age = Number(args[1]);
//         let cat = new Cat(name, age);

//         cat.meow();
//     }
// }
// cats(["Mellow 2", "Tom 5"]);


function cats (input){
    class Cat {
        constructor(name, age){
            this.name = name
            this.age = age
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (let line of input){
        let [name, age] = line.split(' ')
        // let args = line.split(" ");

        // let name = args[0];
        // let age = Number(args[1]);
        let cat = new Cat(name, age);
        cat.meow()
    }
}
cats(["Mellow 2", "Tom 5"]);