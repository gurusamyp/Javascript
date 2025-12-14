 /* Object  - keyed collection,
    Array - ordered Colleection,
 */


    let arr = new Array(); // by using Array constructor
    console.log(typeof arr); //Object
    let arr1 = [] // by using array literel
    console.log(typeof arr); //object

    let fruits = ["Apple", "Orange", "Plum"];
    console.log(fruits[0]) // apple
    console.log(fruits.length); // 3 -- length is not a function , its a elements of the array, So dont need () ar the end.

    //Array can store any kind of elements 

    let arrAllKind = [ 'Apple', {name:"Guru"},1000, function(){console.log('Hi Guru')},]
    console.log(arrAllKind[3]); //[Function (anonymous)]
    console.log(arrAllKind[1]); //{ name: 'Guru' }
    console.log(arrAllKind.length)
    
    // to call the functiion defined in array
    arrAllKind[3](); //Hi Guru

    fruits.push("Banana"); // insert element at the end
    console.log(fruits); //[ 'Apple', 'Orange', 'Plum', 'Banana' ]
    fruits.unshift("jackfruit");// insert element at the begining
    console.log(fruits); //[ 'jackfruit', 'Apple', 'Orange', 'Plum', 'Banana' ]

    let popedItem = fruits.pop(); // popped at the end of the array
    console.log(`Popped item : ${popedItem} and array after pop operation ${fruits}`) 
    //Popped item : Banana and array after pop operation jackfruit,Apple,Orange,Plum.
    let unshiftItem = fruits.shift();
    console.log(`Popped item : ${unshiftItem} and array after pop operation ${fruits}`) 
    //Popped item : jackfruit and array after pop operation Apple,Orange,Plum

    /*for looping in array we can use

    for..
    for..of

    */

