//The nullish coalescing operator is written as two question marks ??.

// The result of a ?? b is:
// if a is defined, then a,
// if a isn’t defined, then b.


// || returns the first truthy value.
// ?? returns the first defined value.


let user;

console.log(user??"Anonymous"); //Anonymous

let newUser = null;

console.log(newUser??"Anonymous"); //Anonymous

let newUserName = 'Guru';

console.log(newUserName??"Anonymous"); //Guru

let firstName = null;
let lastName = null;
// let nickName = null;
let nickName = "gurusamy";

console.log("Name:", firstName ?? lastName ??nickName??"Anonymous"); //Name: gurusamy