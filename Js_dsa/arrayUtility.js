let nameArray = [] //using Array literal
nameArray = ["guru","samy","perumal"]; //ex:
console.log(nameArray);

let numArray = new Array(1,2,3); // using array constructions.


console.log(numArray.length); // length of the array
console.log(numArray[0]);  // access the 1st element of the array
console.log(numArray[numArray.length - 1]);  // access the last element of the array
numArray[5] = 5;

console.log(numArray);

numArray.push(6); // push the element in the end
console.log(numArray);
numArray.push(6,7);
console.log(numArray);
numArray.unshift(16); // add the element in the stating position. 
console.log(numArray);

numArray.pop() // remove the last element
numArray.shift() // remove the first element
console.log(numArray);


// loop througth the array elements.

let arrL = ["HTML", "CSS" , "JS"];

for(let i = 0; i<arrL.length;i++){
    console.log(arrL[i]);
}


arrL.forEach(function(a){
    console.log(a);
})

arrL.forEach(function(a){
    console.log(a.toLowerCase());    
})