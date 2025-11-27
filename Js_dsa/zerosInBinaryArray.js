let arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0];

let sum = arr.reduce((a,c) => a+c,0);
console.log(sum);
let numberOfZeros = arr.length - sum;
console.log(numberOfZeros);