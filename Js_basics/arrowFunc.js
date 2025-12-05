let sum = (a,b)=>a+b; // no need of return statement when we use without {}.

console.log(sum(10,15));

let sum2 = (a,b) => {
    return a+b;    // need return on using {}. otherwise it will provide Undefined as output.
}
console.log(sum2(20,15));


// let i = i ? i < 0 ? Math.max(0, len + i) : i : 0;
