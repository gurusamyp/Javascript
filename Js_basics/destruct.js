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
let [name1, name2, ...otherNames] = ["Guru", "Madhavan","Ram","Kumar", "John"];

console.log(name1); //Guru
console.log(name2); //Madhavan
console.log(otherNames); // [ 'Ram', 'Kumar', 'John' ]
console.log(otherNames.length); // 3

//default values
let [myname ="Guru", age] = ["gurusamy",37];
console.log(`I am ${myname} of age ${age}`); //I am gurusamy of age 37

let [area = 'Munnar', district] = [,"Idukki"];
console.log(`Im from ${area} in district ${district}`); //Im from Munnar in district Idukki


let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};


function topSalary(salaries){
    let maxSalary = 0;
    let maxName = null;

    for(let [name, salary] of Object.entries(salaries)){
        if(salary > maxSalary){
            maxSalary = salary;
            maxName = name;
        }
    }
    return console.log(`Max Salary ${maxSalary} given to ${maxName}`);
}

topSalary(salaries);