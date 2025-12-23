// set is set of values without keys, and all values are unique, that is occur only once.
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

set.add(john);
set.add(pete);
set.add(mary);
console.log(set); // Set(3) { { name: 'John' }, { name: 'Pete' }, { name: 'Mary' } }

set.add(john); // add john one more is not work
console.log(set); // Set(3) { { name: 'John' }, { name: 'Pete' }, { name: 'Mary' } } get same result.
console.log(set.size); //3


// iteration over set

set.forEach((value, valueAgain, set)=> {
    console.log(value);
})
/*
    { name: 'John' }
    { name: 'Pete' }
    { name: 'Mary' }
 */

    for(let setItem of set.keys()){
    console.log(setItem);

    }
    /*
    { name: 'John' }
    { name: 'Pete' }
    { name: 'Mary' }
 */
    for(let setItem of set.values()){
    console.log(setItem);

    }

    /*
    { name: 'John' }
    { name: 'Pete' }
    { name: 'Mary' }
 */