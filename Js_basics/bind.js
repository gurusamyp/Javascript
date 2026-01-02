let user = {
    name: "Guru"
}

function func(){
    console.log(this.name);
}

setTimeout(func, 2000) //Undefined

let funcUser = func.bind(user);
funcUser(); // Guru

setTimeout(funcUser, 4000); // Guru after 4000ms


let adminRole = {
    role:"Admin",
    sayHi(phrase){
        console.log(`${phrase} ${this.role}`);
    }
}

let bindAdmin = adminRole.sayHi.bind(adminRole);
bindAdmin("Hello"); // Hello Admin