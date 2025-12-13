/* Number in JS - 1.number - double precision floating point numbers
                  2.bigint   
For More details : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
                 */

let number = 1000000000; // 1 billion
console.log(number);
let number1 = 1_000_000_000; // 1 billion - for readabilty we using _ to seperate the digits.
console.log(number1);
let number2 = 1e9; //1 billion 1 and after 9 zeros.
console.log(number2);

let number3 = 1e-9; //1 billion 1 and before 9 zeros. 0.000000001
console.log(number3);
console.log(typeof number3);
console.log( number3 * 1000000000);

let newNum = 255;
console.log(newNum.toString(16)); // hex
console.log(newNum.toString(2)); // binary
console.log(newNum.toString(36)); 


console.log(125..toString(16)); // hex - ..(two dot) when we use the number to convert as string
console.log(125..toString(2)); // binary


// number in build functions.
//===========================
console.log(Math.floor(15.95)); //15
console.log(Math.ceil(15.95)); // 16
console.log(Math.round(15.1)); // 15 floor if its less than 5 after .
console.log(Math.round(15.6)); // 16 ceil if its greater than 5 after .

let num = 10.2565645;
console.log(num.toFixed(2)); //10.26
console.log(num.toFixed(3)); /* 10.257 not 10.256 (6+1 because after 6 we have 5 so its turn as 7. 
                                If after 6 we have 4 it will be 6 only ) */

let isNum = 10; 
let isNotNum = "guru"
console.log(isNaN(isNum)); // false -- because its finite number
console.log(isFinite(isNum)); // true
console.log(isNaN(isNotNum)); // true

//we have "100px" or "12pt" in CSS, "19€" and would like to extract a numeric value out of that.
//That’s what parseInt and parseFloat are for.

console.log(parseInt("11pt")); //11
console.log(parseInt("$110")); //NaN --start with character.
console.log(parseInt("110$")); //110 


console.log(Math.random());


/* 
For random between  min - max
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
  */

console.log(Math.random()*(5-2)+2); // random between 2-5.
console.log(Math.max(3, 5, -10, 0, 1)); //5
console.log(Math.min(3, 5, -10, 0, 1)); //-10