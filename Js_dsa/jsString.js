let string = "guru";
string.replace("guru","samy")// string is immutable in js
console.log(string) // output will be still guru.

string = "Gurusamy";
console.log(string)
let len = string.length;
console.log(len) // output: 8

console.log("gurusamy"+" Perumal"); //string concatenation output :  Gurusamy Perumal
console.log(10+10) //20
console.log("10"+10) // 1010
console.log(10+"10") // 1010 
console.log("10"+"10") // 1010
console.log(typeof("10"+10));  //String

let s1 = 'JavaScript Tutorial';
let s2 = s1.substring(0,10);
console.log(s2); // output : Javascript

let sl = s1.toLowerCase();
let su = s1.toUpperCase();
console.log(sl) // lower case :javascript tutorial
console.log(su) // lower case :JAVASCRIPT TUTORIAL

let split = s1.split(' '); /*s1.split('') - without space output = [
                            'J', 'a', 'v', 'a', 'S',
                            'c', 'r', 'i', 'p', 't',
                            ' ', 'T', 'u', 't', 'o',
                            'r', 'i', 'a', 'l'
                            ]*/
console.log(split); // array output = [ 'JavaScript', 'Tutorial' ]