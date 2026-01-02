function sayHi(phrase){
    console.log(this.name+ ' '+ phrase);
}

let user = {name:"Guru"};
let admin = {name:"Admin"};

sayHi.call(user, "Hello"); // Guru Hello
sayHi.call(admin, "Hi"); // Admin Hi

let userName = {name:"John"};
sayHi.call(userName, "Hello");// John Hello

//======================================
let worker = {
    someMethod(){
        return 5;
    },
    slow(x){
        console.log("Called :" + x);
        return x * this.someMethod();
    }
};

function cacheDecorator(func){
    let cache = new Map();
    return function(x){
        if(cache.has(x)){
            return cache.get(x);
        }

        let result = func.call(this, x);
        cache.set(x, result);
        return result
    }
    
}


worker.slow = cacheDecorator(worker.slow);

console.log(worker.slow(1)); // 5
console.log(worker.slow(6)); // 30
console.log(worker.slow(6)); // 30