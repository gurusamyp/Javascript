//For Loop 
//==============
// most common type of for loop when number of iteration is known and when counter is needed.

let arr = [];
for(let i = 0;i<=5;i++){ 
    arr.push(i);
    console.log("Number : " +arr[i]);
    }

console.log("Numbers : " +arr);

//For...in Loop 
//==============
//to iterates over the enumerable properties of an object. not for array, because it iterates over indices as strings 

const obj = {
    Name: "Guru",
    Age: 37,
    Location: "Munnar"
};

console.log(Object.getOwnPropertyDescriptor(obj, "Name")); //{ value: 'Guru', writable: true, enumerable: true, configurable: true }

for( const key in obj){
    console.log(`${key}: ${obj[key]}`);
}

const arr1 = [10, 20, 30];

for (let i in arr) {
    console.log(arr1[i]);     // 0, 1, 2  (indexes) but not recomented 
}

//for...of
// This loop iterates over the values of iterable objects, 
// such as Arrays, Strings, Maps, Sets, NodeLists, and more

const  myArr = [101,201,301];
for(const value of myArr){
    console.log(value);
}

const myString = "Hello";
for(const char of myString){
    console.log(char);
}

//for await...of loop
//used for iterating over asynchronous iterable objects.
// It allows you to await the resolution of each promise returned by the async iterator.

async function* asyncGenerator(){
    yield Promise.resolve(1);
    yield Promise.resolve(2);
    yield Promise.resolve(3);
}

async function processAsyncData() {
    for await (const value of asyncGenerator()){
        console.log(value);
    }
}

processAsyncData();