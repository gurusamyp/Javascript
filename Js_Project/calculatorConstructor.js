class Calculator {
    constructor(){
        this.setValues =function(a,b){
            this.a = a;
            this.b = b;
        };

        this.sum = function(){
            return this.a + this.b;
        }
        this.mul = function(){
            return this.a * this.b;
        }
    }
}

let calc = new Calculator();
calc.setValues(5,6);
console.log(calc.sum());
console.log(calc.mul());