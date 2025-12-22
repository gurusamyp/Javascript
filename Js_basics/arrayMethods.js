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

//concatanation

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


const prices = [100, 2000, 30000];
const priceAfterGST = prices.map(price =>price * 1.18);

console.log(priceAfterGST); // [ 118, 2360, 35400 ];

//sort(fn)

console.log(newArr.sort()); // [ 'and', 'book', 'peace', 'war' ]  - ordered based on alphabetic order.
let numbers = [1, 2, 3,11,21];

console.log(numbers.sort()); //[ 1, 11, 2, 21, 3 ] -- numbers are read as a string and based on that stirng the elements are sorted.

// so to sort the numbers we need comparing functions (a,b) => a-b  for accending order & (a,b)=>b-a for decending order.

console.log(numbers.sort((a,b)=>a-b)); // [ 1, 2, 3, 11, 21 ] -- asceding order
console.log(numbers.sort((a,b)=>b-a)); // [ 21, 11, 3, 2, 1 ] -- decending order


//split and join

let names = 'Bilbo, Gandalf, Nazgul';


//arr.split(',' , optional-lenghtOfArr)
let nameArr = names.split(',');
console.log(nameArr.length) //3

console.log(names.split(',',2)); //[ 'Bilbo', ' Gandalf' ]  -- only 2 elemnts are splited.

for(let name of nameArr){
    console.log(name);
}
/*  Bilbo
    Gandalf
    Nazgul
*/
/// join  -- arr.join(separator);
console.log(nameArr.join(','));  // Bilbo, Gandalf, Nazgul



// reduce and reduceRight -- arr.reduce(function(accumulator, item, index, array) { .... }, [initial]);
// When we need to iterate over an array – we can use forEach, for or for..of.
// When we need to iterate and return the data for each element – we can use map.

let salaryArr = [10000,20000, 45000, 12200];

let totalSalary = salaryArr.reduce((sum, current) => sum + current, 0);

console.log(`total salry : ${totalSalary}`); //total salry : 87200


// eg: count the roles

let employees = ["Dev", "Tester", "Dev", "Manager", "Dev"];

let roleCount = employees.reduce((count, role) => {
     count[role] = (count[role] || 0) + 1;
     return count;
}, {});

console.log(roleCount); // { Dev: 3, Tester: 1, Manager: 1 }