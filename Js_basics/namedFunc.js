// There are two special things about the name func, that are the reasons for it:
    // It allows the function to reference itself internally.
    // It is not visible outside of the function.

    let sayHi = function func(who) {
        if (who) {
            console.log(`Hello, ${who}`);  
        } else {
            func("Guest"); // use func to re-call itself
        }   
    };

    sayHi(); // Hello, Guest     
    // func() // it is error -because we can call only inside the funtion itself.
    