let user = {
    name:"Guru",
    age:30,
    isAdmin:true,
}

console.log(Object.getOwnPropertyDescriptors(user));

/*
{
  name: {
    value: 'Guru',
        writable: true,
        enumerable: true,
        configurable: true
  },
  age: { value: 30,
            writable: true, 
            enumerable: true, 
            configurable: true
        },
  isAdmin: { 
            value: true, 
                writable: true, 
                enumerable: true, 
                configurable: true
           }
}

*/

Object.defineProperty(user, "name", { 
    writable: false,
});

console.log(Object.getOwnPropertyDescriptor(user, 'name'));

/* 
 {
  value: 'Guru',
    writable: false,<======changed to false
    enumerable: true,
    configurable: true
}
*/

user.name = "Ram";
console.log(user); // { name: 'Guru', age: 30, isAdmin: true } --- not changed.