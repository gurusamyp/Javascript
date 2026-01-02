function slow(x){
    console.log(`Called ${x}`);
    return x;
}

function cachingDecorator(func){ //  is a decorator: a special function that takes another function and alters its behavior.
    let cache =  new Map();
    return function(x){
        if(cache.has(x)){
            return cache.get(x);
        }

        let result = func(x);
        cache.set(x, result);
        return result;
    };
}

slow = cachingDecorator(slow);

console.log(slow(1));
console.log("Again: " + slow(1));
console.log(slow("a"));
console.log("Again: " + slow("a"));