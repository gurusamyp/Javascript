

class User {
    constructor(name){
        this.name = name
    }
    get name(){
        return this._name;
    }

    set name(value){
        if(value.length < 4){
            console.log(" Name is too short, need more than 4 char");
        }
        this._name = value;
    }
    sayHi(){
        console.log(this.name);
    }
}

let user = new User("Guru");
user.sayHi(); // Guru
console.log(user.name); // Guru from get().

console.log(typeof User); //class is a type function.

let user2 = new User("G");
console.log(user2.name); // Name is too short, need more than 4 char