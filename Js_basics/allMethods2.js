/*
-----------------------------------------------------------------------------------------------------------------
| **Mutating Methods
| (Change the Array)** | **What it does**             | **Non-Mutating Methods 
|      9               |                              | 15 -(Return New Array)** | **What it does**              |
| -------------------- | ---------------------------- | ------------------------ | ----------------------------- |
| `.push()`            | Adds element(s) to the end   | `.concat()`              | Combines arrays               |
| `.pop()`             | Removes last element         | `.slice()`               | Extracts a portion            |
| `.unshift()`         | Adds element(s) to beginning | `.map()`                 | Transforms each element       |
| `.shift()`           | Removes first element        | `.filter()`              | Filters elements by condition |
| `.splice()`          | Add/remove elements at index | `.reduce()`              | Reduces array to single value |
| `.sort()`            | Sorts elements in place      | `.flat()`                | Flattens nested arrays        |
| `.reverse()`         | Reverses array order         | `.flatMap()`             | Map then flatten              |
| `.fill()`            | Replaces elements with value | `.join()`                | Converts array to string      |
| `.copyWithin()`      | Copies part within array     | `.includes()`            | Checks if value exists        |
|                      |                              | `.indexOf()`             | Finds first index             |
|                      |                              | `.lastIndexOf()`         | Finds last index              |
|                      |                              | `.find()`                | Finds first matching element  |
|                      |                              | `.findIndex()`           | Finds index of match          |
|                      |                              | `.some()`                | At least one element matches  |
|                      |                              | `.every()`               | All elements match            |
------------------------------------------------------------------------------------------------------------------
*/



const data = await fetch('https://dummyjson.com/users?limit=30')
                   .then(response => response.json());

const users = data.users;
console.log(users[0]); // get 1st user from the response data.

//length is not a function, its a item in every array end.
console.log('number of user is : ',users.length); //console.log(users[0]);




