let arr = ["I", "study", "JavaScript"];
console.log(`before splice Array => :${arr}`);  //before splice Array => :I,study,JavaScript
arr.splice(1, 1);
console.log(`after splice Array => :${arr}`); // after splice Array => :I,JavaScript ==> element in pos 1 is remode and repositioned the other elements.


// replace the item
//splice

let arr1 = ["I", "study", "JavaScript", "right", "now"];
console.log(arr1) // [ 'I', 'study', 'JavaScript', 'right', 'now' ]
let removed = arr1.splice(0, 3, "one", "Two" );
console.log(arr1) // [ 'one', 'Two', 'right', 'now' ]
console.log(removed); //[ 'I', 'study', 'JavaScript' ]

//slice

let arr2 = ["I", "study", "JavaScript", "right", "now"];
let sliced = arr2.slice(1, 3) // 1 and 2, not 3
console.log(arr2);
console.log(sliced); //[ 'study', 'JavaScript' ]

//concat

console.log(['a','b','c'].concat([1,2,3])); // [ 'a', 'b', 'c', 1, 2, 3 ]

// iterate -- forEach

let numArr = [1,2,3,4,5];

 numArr.forEach((item) => {
                                                console.log(item);
                                            });
 numArr.forEach((value, index, array)=>{
    array[index] = value*2
});
console.log(numArr);