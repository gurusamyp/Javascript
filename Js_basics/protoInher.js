// When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype.
// There are only two limitations:

    // The references can’t go in circles. JavaScript will throw an error if we try to assign __proto__ in a circle.
    // The value of __proto__ can be either an object or null. Other types are ignored.

let animal ={
    eats: true,
};

let cat = {
    jumps: true,
};

cat.__proto__ = animal; // assigned cat's prototype -> animal

console.log(cat.eats); //true
console.log(cat.jumps); //true

let car = {
    speed: "fast",
    price(){
        console.log("high");
    }
}

let maruthi = {
    cheap:"Yes",
    __proto__:car, // maruthu inherit the properties of car.
}

console.log(maruthi.speed); // fast
maruthi.price(); // high

console.log(Object.keys(maruthi)); // [ 'cheap' ] - only its own property

for(let prop in maruthi){
    console.log(prop);  // cheap, speed, price - its include inherited properties. 
}  

