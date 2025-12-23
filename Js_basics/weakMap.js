//WeakMap is that keys must be objects, not primitive values.

let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "OK");

console.log(weakMap.get(obj)); //OK

// weakMap.set('test', 'no-test'); //==> TypeError: Invalid value used as weak map key, because Test not an object.

// console.log(weakMap.get(test)); //OK


// when the object is removed from the memory


let john = {name:'John'};

let weakMapName = new WeakMap();
weakMapName.set(john,'.....');

john = null; // john is removed from the memory.


//other operations
// ----------------------
// weakMap.set(key, value)
// weakMap.get(key)
// weakMap.delete(key)
// weakMap.has(key)