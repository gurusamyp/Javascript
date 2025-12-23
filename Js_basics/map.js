//Map is a collection of keyed data items, just like an Object.
//But the main difference is that Map allows keys of any type.

let map = new Map();

// to assign a value to a key, any type of key 1  and "1" are different key
map.set('1','str1');
map.set(1,'num1');
map.set(true,'bool1');

// to fetch the  value of the key.
console.log(map.get('1')); //str1
console.log(map.get(1)); // num1
console.log(map.get(true)); //bool1


// object as a key of map

let guru = {name:'Guru'};

let visitsCountMap = new Map();

visitsCountMap.set(guru, 110);

console.log(visitsCountMap.get(guru)); //110


// map iteration

let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);


//for...of map.keys() to get keys
for(let veg of recipeMap.keys()){
    console.log(veg);
}
/*  cucumber
    tomatoes
    onion 
*/

//for...of map.values() to get the values

for(let veg of recipeMap.values()){
    console.log(veg);
}
/*  500
    350
    50
*/

// to get both keys and vlaues - simple for...of

for(let veg of recipeMap){
    console.log(veg);
}
/* [ 'cucumber', 500 ]
   [ 'tomatoes', 350 ]
   [ 'onion', 50 ]
 */

   recipeMap.forEach(( value,key,map) => {
        console.log(`${key} : ${value}`);
       })
/*
cucumber : 500
tomatoes : 350
onion : 50
*/

//Object ===> to ==> Map.

let man = {
    name:"Guru",
    age: 37,
}

let ObjToMap = new Map(Object.entries(man)); // object to map entries as array.
console.log(ObjToMap.get('name')); //Guru
console.log(ObjToMap.get('age')); //37

// map ==>to==> obj

let mapToObj = new Map();
mapToObj.set('banana',5);
mapToObj.set('apple',15);
mapToObj.set('mango',25);

let itsObj = Object.fromEntries(mapToObj.entries());

console.log(itsObj.banana); //5
console.log(itsObj.apple); //15


let itsObj2 = Object.fromEntries(mapToObj);

console.log(itsObj2.apple); //15
console.log(itsObj2.mango); //25


