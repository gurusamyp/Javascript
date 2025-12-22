let arr = ["I", "study", "JavaScript"];
console.log(`before splice Array => :${arr}`);  //before splice Array => :I,study,JavaScript
arr.splice(1, 1);
console.log(`after splice Array => :${arr}`); // after splice Array => :I,JavaScript 
                // ==> element in pos 1 is removed and repositioned the other elements.


// replace the item
//splice

let arr1 = ["I", "study", "JavaScript", "right", "now"];
console.log(arr1) // [ 'I', 'study', 'JavaScript', 'right', 'now' ]
let removed = arr1.splice(0, 3, "one", "Two" );
console.log(arr1) // [ 'one', 'Two', 'right', 'now' ]
console.log(removed); //[ 'I', 'study', 'JavaScript' ]

//slice

let arr2 = ["I", "study", "JavaScript", "right", "now"];
let sliced = arr2.slice(1, 3) // 1 and 2, not including 3
console.log(arr2);
console.log(sliced); //[ 'study', 'JavaScript' ]

//concat

console.log(['a','b','c'].concat([1,2,3])); // [ 'a', 'b', 'c', 1, 2, 3 ]

// iterate -- forEach  arr.forEach(function(item, index, array) { ... });

let numArr = [1,2,3,4,5];

 numArr.forEach((item) => {
    console.log(item); //1 2 3 4 5
    });
 numArr.forEach((value, index, array)=>{
    array[index] = value*2
});
console.log(numArr); // [ 2, 4, 6, 8, 10 ]  -- array is modified

let tasks = ["Login", "API", "Testing"];
tasks.forEach((task, index)=>{
    console.log(`${index+1} - ${task}`);
});
// 1 - Login
// 2 - API
// 3 - Testing


// search in array -- indexof, lastIndexOf, includes....

//indexof - arr.indexOf(item, from)
console.log(tasks.indexOf("API")); //1
console.log(tasks.indexOf("Login")); //0
console.log(tasks.indexOf("guru")); //-1   - no item found so it will be -1 as output.

//includes -- boolean output
console.log(tasks.includes("Login")); //true
console.log(tasks.includes("guru")); //false  

let veg = ["Potato", "Sweet Potato", "Yam", "Taro","Potato", "Ginger"];

console.log(veg.indexOf("Potato"));  // 0   - first occurance
console.log(veg.lastIndexOf("Potato"));  // 4   last occurance



//find, findIndex, findLastIndex

// find => arr.find(function(item, index, array){});

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
];

let user = users.find(item =>item.id  == 1 )
console.log(user);   // {id: 1, name: "John"}
console.log(user.name); // John


console.log(users.findIndex(item => item.name == "Pete")); // 1
console.log(users.findIndex(item => item.name == "Guru")); // -1  - not found.


//filter  - 

let someUsers = users.filter(item => item.id <= 2);
console.log(someUsers);  // [ { id: 1, name: 'John' }, { id: 2, name: 'Pete' } ]



// transfrom an array -- map, sort...

//map 

let newArr = ["war","and","peace","book"];
let wordLenght = newArr.map(item => item.length)
console.log(wordLenght);  //  [ 3, 3, 5, 4 ]

let newWord = newArr.map(word => word.concat("-new"));
console.log(newWord);   //[ 'war-new', 'and-new', 'peace-new', 'book-new' ]

//sort(fn)