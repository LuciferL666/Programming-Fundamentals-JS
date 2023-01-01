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
        //също така може да се инициализира и по този начин!
        // let args = line.split(" ");
        // let name = args[0];
        // let age = Number(args[1]);
        let cat = new Cat(name, age);
        cat.meow()
    }
}
cats(["Mellow 2", "Tom 5"]);
