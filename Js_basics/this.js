let user = {
    name: "Guru",
    age : 37,
    location: "Munnar"
    
}

user.sayHi = function sayHi(){
    console.log(`${this.name} from ${this.location}`);
}

user.sayHi();



//Arrow funtions have no its own "this". but if that function has "this" then it will take the this from outer funtion.
//eg;

let employee ={
    firstName : "Mari",
    sayHello() {
        let arrow = () => {
            return console.log(this.firstName);
        }
        arrow();
        
    }

};

employee.sayHello();