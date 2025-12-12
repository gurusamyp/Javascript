// By specification, only two primitive types may serve as object property keys:

// string type, or
// symbol type.

// Symbols are guaranteed to be unique. 
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2); // false so they are unique
console.log(id1);

// to convers the simbol to string
console.log(id1.toString());


let user = {
    name: "Guru",
    location : "munnar",
}

let id  = Symbol("id_N");
user[id] = id;
console.log(user[id]);

// symbols are skipped in for..in loop

for(let key in user){
    console.log(`${key} : ${user[key]}`); //name : Guru , location : munnar ----No symbol is display. 
}

//Global symbol....registry.

let idNew = Symbol.for("new_ID");

let idNewAgain = Symbol.for('new_ID');

console.log(idNew == idNewAgain); /*true -- because a symboll is created if there is no symboal in that name, 
                                   otherwise the stored symbol value is provided as ouptut */

console.log(Symbol.keyFor(idNew)); // new_ID
console.log(Symbol.keyFor(idNewAgain)); // new_ID