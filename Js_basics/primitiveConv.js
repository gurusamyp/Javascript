/* how an object converts to primitive and how to customize it? 
string and numeric(on mathematicl functions) conversion only,
three variants of type conversion - 1 - "String" object-to-string conversion, alert, console.log, promot..
            Hint ===>               2 - "Number" object-to-number conversion, mathematical functions..
                                    3 -  "default"  rare case ,
==============================================================*/

// 1 - Symbol.toPrimitive
let user = {
    name: "John",
    money:  1000,
    [Symbol.toPrimitive](hint){
        console.log(`Hint: ${hint}`);
        return hint =="string"?`Name: "${this.name}"`:this.money;
    }
};

console.log(user);
console.log(+user);
console.log(user+500);
console.log(user+"hello");

// 2 - toString/valueOf

console.log(user);
console.log(user.valueOf() == user);