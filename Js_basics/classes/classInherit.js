class Animal {
    constructor(name){
        this.speed = 0;
        this.name = name;
    }

    run(speed) {
        this.speed = speed;
        console.log(`${this.name} is runnuing at speed ${this.speed}.`)
    }

    stop(){
        console.log(`${this.name} is stand still.`);
        this.speed = 0
    }
}

class Rabbit extends Animal {
    hide(){
        console.log(`${this.name} is hiding`);
    }

    stop(){
        super.stop(); //super - take the method from the parent and make changes on it
        this.hide();
    }
}

let rabbit = new Rabbit("White Rabbit");
rabbit.run(5); // White Rabbit is runnuing at speed 5.
rabbit.run(); // White Rabbit is runnuing at speed undefined.

rabbit.stop() // White Rabbit is stand still.
rabbit.hide() // White Rabbit is hiding

rabbit.stop() // White Rabbit is stand still.
              // White Rabbit is hiding
