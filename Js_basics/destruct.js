let arr = ["Guru", "Samy"];

let [firstName, lastName] = arr;

console.log(`${firstName} ${lastName}`); //Guru Samy

let [street, city] = 'Ramnagar, Munnar'.split(',');

console.log(`I am living in ${street} street at ${city} city`); //I am living in Ramnagar street at  Munnar city

//loop over object , and destruction. 
let user = {
    name: "John",
    age: 30
};

for(let [key,value] of Object.entries(user)){
    console.log(`${key} : ${value}`);
}
/* 
    name : John
    age : 30
*/

//rest operator. 
let [name1, name2,...otherNames] = ["Guru", "Madhavan","Ram","Kumar", "John"];

console.log(name1); //Guru
console.log(name2); //Madhavan
console.log(otherNames); // [ 'Ram', 'Kumar', 'John' ]
