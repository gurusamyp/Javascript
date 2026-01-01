// JSON.stringify - convert objects into JSON.
// JSON.parse - convert JSON back into an object.
// JSON is data-only language-independent specification

let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  spouse: null
};

console.log(typeof student); // object

let objToJson = JSON.stringify(student); // convert to json string from an object. 
//resulting json string is called a JSON-encoded or serialized or stringified or marshalled object.
// functions, Symbolic keys and values, undefined are skipped in JSON.stringify.

console.log(objToJson); // {"name":"John","age":30,"isAdmin":false,"courses":["html","css","js"],"spouse":null}
// strings are between double quotes in JSON ("").
console.log(typeof objToJson); // string

let jsonToObj = JSON.parse(objToJson); //convert json string to object.
console.log(jsonToObj); 

/*
{
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: [ 'html', 'css', 'js' ],
  spouse: null
}
*/ 
console.log(typeof jsonToObj); //object


// Excluding and transforming: replacer  - beacuse The important limitation: there must be no circular references.
// JSON.stringify(value, [replacer, space]) 
// replacer- array of properties to encode or a function to transform the results.
// space - amount of space for foratting.
// for sending data in secure way, to exclude sensitive data.

let jsonReplacer = JSON.stringify(student,["name", "isAdmin"]);

console.log(jsonReplacer); // {"name":"John","isAdmin":false}

//replacer as a funtion.

let jsonReplacerFun = JSON.stringify(student, (key, value) => {
  if(key == "password"){
    return undefined;
  }
  return value
})

console.log(jsonReplacerFun); //{"name":"John","age":30,"isAdmin":false,"courses":["html","css","js"],"spouse":null}
// there is no password key so all other key and values are returned.

student.password = "guru@1234";

console.log(student);

/*{
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: [ 'html', 'css', 'js' ],
  spouse: null,
  password: 'guru@1234' //// password added.
}
  */

console.log(jsonReplacerFun); //{"name":"John","age":30,"isAdmin":false,"courses":["html","css","js"],"spouse":null}
// password is excluded.


//transform the values.

let jsonTranseformFun = JSON.stringify(student, (key, value) => {
  if(key == "age"){
    return value + 10;
  }
  return value;
})

console.log("age after 10 yeards:  " +jsonTranseformFun);
// age after 10 yeards:  {"name":"John","age":40,"isAdmin":false,"courses":["html","css","js"],"spouse":null,"password":"guru@1234"}



// JSON.parse(text, reviver);
// text → JSON string
// reviver (optional) → function to transform or filter values

const json = '{"name":"Gurusamy","age":30, "price":45000}';

const obj = JSON.parse(json);
console.log(obj); // { name: 'Gurusamy', age: 30 } -- object type.
console.log(typeof obj);



const objRevived = JSON.parse(json, (key, value)=>{
  if(key == "price"){
    return value + 1000;
  }
  return value;
})

console.log(objRevived); //{ name: 'Gurusamy', age: 30, price: 46000 }