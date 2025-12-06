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
