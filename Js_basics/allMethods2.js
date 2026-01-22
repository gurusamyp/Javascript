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
// console.log(users[0]); // get 1st user from the response data.


//length is not a function, its a item in every array end.
console.log('number of user is : ',users.length); //console.log(users[0]);


// forEach --- loop -- no return -- used for loging, DOM insert etc..

users.forEach(user => {
    console.log(user.firstName, user.email);
});

users.forEach(user => {
    console.log(user.id, user.age);
})


// Key Rule to Remember
        // *******map = return data*****
        // *******forEach = do work******


//map() --- return n new array after transforming

const names = users.map(user => {
    return `${user.firstName} ${user.lastName}`
})

console.log(names)

//create a object by map()

const simpleusers = users.map(user => ({
    id:user.id,
    name:user.firstName,
    email:user.email
}));

console.log(simpleusers);

const userEmails = users.map(user => user.email);
console.log(userEmails);


//-- more foreach() and map()
let count = 0;
users.forEach(user => {
    if(user.age > 30){
        count++;
    }
})
console.log(count);
// ---------------
const userById = {};
users.forEach(user => {
    userById[user.id] = user;
});
console.log(userById[5]);
// -------------------------

const addProperty = users.map(user => ({
    ...user,
    isAdult: user.age >= 18
}))

console.log(addProperty);
//-----------------------------

users.forEach(user => {
    const skills = user.company?.title
        ? [user.company.title].map(title =>
            title.toUpperCase())
            : [];

            console.log(user.firstName, skills)
})
//---------------------------------

const result = users.map(user => {
    let concat = '';
    user.phone.split('-').forEach(part => {
        concat += part;
    });
    return concat;
})

console.log(result);

const data2 = [
  { name: "A", hobbies: ["Reading", "Music"] },
  { name: "B", hobbies: ["Sports", "Travel"] }
];

const allHobbies = [];

data2.forEach(data => {
    data.hobbies.forEach(hobby => {
        allHobbies.push(hobby);
    })
})
console.log(allHobbies);


let countCompany = 0;
let companyNames = []

users.forEach(user => {
    user.company?.name? countCompany++ : 0
    companyNames.push(user.company.name);
})
console.log(countCompany)
console.log(companyNames)


const mapSample = users.map(user => ({
    id:user.id,
    fullName:user.firstName + ' ' + user.lastName,
    city:user.address?.city?? "unknown"
}))
console.log(mapSample);


users.forEach(user => {
    const values = Object.values(user.address).map(v=>v.toString());
    console.log(user.firstName, values)
})


const result2 = users.map(user => 
    Object.entries(user).map(([key, value]) => `${key}: ${value}`)
);

console.log(result2);


users.forEach(user => {
    Object.keys(user).forEach(key => {
        console.log(key+'-' +user[key]);
    })
})


const emails = users.filter(u=>u.age >=18)
     .map(u=>u.email)

console.log(emails)

users.forEach(user => {
    const companyData = user.company
    ?Object.values(user.company).map(v=>v.toString())
    : []
    console.log(user.firstName, companyData);
})

const lookup = {};

const list = users.map(user => {
    lookup[user.id] = user.email;
    return user.firstName;
})

console.log(list)
console.log(lookup)

const cityCount = {}

users.map(user => {
    cityCount[user.address.city] = (cityCount[user.address.city] || 0) + 1;
})

console.log(cityCount);



//Filter() -----------

const above30 = users.filter(user => user.age >=30)

console.log(above30)

const companyUser = users.filter(user => user.company)
console.log(companyUser)
const companyUser2 = users.filter(user => user.company).map(u => u.firstName);
console.log(companyUser2)

const checkEmail = users.filter(user => user.email.endsWith('.com')).map(e => e.email);
console.log(checkEmail);

const adultFemale = users.filter(user => user.age > 25 && user.gender === 'female').map(u => u.firstName);
console.log(adultFemale);


// | Question                   | Method    |
// | -------------------------- | --------- |
// | Is there **at least one**? | `some()`  |
// | Do **all** satisfy?        | `every()` |



//reduce() ---------------------

const totalAge = users.reduce((sum, user) => {
    return sum + user.age;
},0)

console.log(totalAge);

const genderCount = users.reduce((acc, user)=> {
    acc[user.gender] = (acc[user.gender] || 0) + 1;
    return acc
}, {})

console.log(genderCount)


const byCity = users.reduce((acc, user) => {
    const city = user.address.city;

    if(!acc[city]) acc[city] = []
    acc[city].push(user.id)

    return acc;
}, {});

console.log(byCity);