//to create an object



let obj = new Object(); // Object constructor
let obj1 = {}; // objecty literal.

let user = {
    name:"guru",
    age: 37,
}

console.log(user.name); // using dot notation to call the key and its value.
console.log(user.age);

user.isAdmin = true;

console.log(user.isAdmin); // true will be the output. so there are 3 properties in User Object.


delete user.isAdmin;

console.log(user.isAdmin); // undefined after deleting the properties.

user["Native Location"] = "Munnar";
console.log(user["Native Location"]); // for multy word key we can't use dot notation.


let majorSub =  "Subject";
let student = {
    [majorSub]: "Computer Science"
}

console.log(student.Subject); // not able to access the properties by [] operator here. => student[Subject]

console.log("Subject" in student); // op: true - to check the property is belong to that object -- in operator

// loop through the object to access the properties and its values
//loop - (for...in){..}

let employee = {
    name : "Madhavan",
    code : "110",
    position : "Quality",
    department: "BPO",
}

for(const pro in employee){
    console.log(pro);
    console.log(employee[pro]); // [] operator is used to access the properties. 
}

let clonedObject = Object.assign({}, employee);  //clone the object to another object. refernce is used to clone
console.log(clonedObject.name);

//to copy the object and provide seperate refernce by using function structredClone() 

let sClone = structuredClone(employee); // its a seperate Object , so the changes in the previous object would not change the value.
