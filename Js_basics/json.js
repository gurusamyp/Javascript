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

