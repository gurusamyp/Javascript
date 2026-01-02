let animal = {
    eats: true
}

function Rabbit(name){
    this.name = name;
}

Rabbit.prototype = animal;

let newRabbit = new Rabbit("White Rabbit");
console.log(newRabbit.name); // White Rabbit
console.log(newRabbit.eats);  // true