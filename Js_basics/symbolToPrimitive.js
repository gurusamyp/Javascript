
// Symbol.toPrimitive lets you control how an object converts into a number or string.

let obj = {
    value: 10,
    name : "guru",
    [Symbol.toPrimitive](){
        return this.value;
    },
    
};

console.log(obj+10); //20
console.log(String(obj));//"10"
console.log(obj+"samy");//10samy
console.log(String(obj)+"samy");//10samy

//=====================================

let user = {
    name:"guru",
    age: 37,
    [Symbol.toPrimitive](hint){
        if(hint == "string"){ // check the hint is string, number or default.
            return this.name;
        }
        return this.age;
    }
}

console.log(user+"samy");//37samy
console.log(user+1); //38
console.log(String(user)+"samy"); //gurusamy