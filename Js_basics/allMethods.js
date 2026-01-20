//fetch the data from the api

const data = await fetch('https://dummyjson.com/users?limit=30')
                   .then(res => res.json());
                   
const users = data.users;

// to get the length of the array.
console.log(users.length); //30


//forEach  -  take each element and manipulate that, no change in original array, no return value
users.forEach(u => {
    console.log(`${u.firstName} ${u.lastName}`);
});

// console.log(users); // no change in the array

// map() --- make modification and return as array.

const names = users.map(u => u.firstName + ' ' + u.lastName + ' , Age ' +u.age); //retuns array of merged names only
console.log(names); 
console.log(names.length); //30

// filter ----- fillter matched data from the original files, so all the properties will be there
const adults = users.filter(u => u.age >= 30) // all users who are aged above 30 , so all filed will 
console.log(adults[0].age);  //36 -- access first users age in that array.
console.log(adults.length);  //22

const youngsters = users.filter(u => u.age < 30);
console.log(youngsters.length);  //8   ===== 22+8 = 30 total


//find() --- get and return the first matched users all properties.

const firstAdmin = users.find(u => u.role === 'admin');
console.log(firstAdmin.id); // 1 --> Emily 


const firstModerator = users.find(u => u.role === 'moderator');
console.log(firstModerator.id); //6 ---> Olivia 


//some() -- check if any match - true/false as result

const hasTeenager = users.some(u => u.age < 20); //returns Booleanvalue as result
console.log(hasTeenager); //true


//every() ---

const allAdult = users.every(u => u.age >= 18)
console.log(allAdult); //true

const sorted = users.sort((a, b) => a.age - b.age)
console.log(sorted);