// properties of an object

    //1. data properties - value, writeable, eumerable, configurable
    //2. accessor properties - funtion for getting and setting - get, set, eumerable, configurable

 let user = {
    name:"Guru",
    surname: "Samy",

    get fullname(){  // getter function.
        return `${this.name} ${this.surname}`;
    },

    set fullname(value) {
        [this.name, this.surname] = value.split(" ");
    }
 }

console.log(user.fullname); // Guru samy
user.fullname = "Mari Samy";
console.log(user.fullname); // Mari Samy
console.log(user.name); // Mari
console.log(user.surname); // Samy


let employee = {
    get name(){
        return this._name
    },

    set name(value){
        if(value.length < 4){
            console.log("Name is to short, try above 4 char");
            return
        }
        this._name = value;
    }
};

employee.name = "Ramar";
console.log(employee.name); // Ramar

employee.name = "Ram"; // Name is to short, try above 4 char
console.log(employee.name);  // Ramar