// to create multiple objects
// Object named with Capital letter first
// new == keyword used.

class User {
    constructor(name) {
        this.name = name;
        this.isAdmin = false; // constructor don's have return statement. all values are set to "this".
        this.sayHi = function(){
            console.log("Hi, it is "+this.name);
            return;
        }
    }
}

let user1 = new User("Guru");
console.log(user1.name);
console.log(user1.isAdmin);
user1.sayHi();

