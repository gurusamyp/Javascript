// call the funtion later by ,
// 1) setTimeout. -  setTimeout(func|code, [delay(in milliseconds)], [arg1], [arg2], ...) 
// 2) setInterval. - setInterval(func|code, [delay], [arg1], [arg2], ...) - runs regularly after the given interval of time untill clearInterval(timerId) found.

//SET TIME INTERVALL TO CALL THE FUNTION

function sayHi(phrase, who){
    console.log(phrase +' '+ who);
}

setTimeout(sayHi,1000,"Hello!", "Guru"); // Hello! Guru -- after 1000ms and no need by call sayHi().

setTimeout(() => {console.log("Hi! Guru")}, 2000); //hi! Guru -- after 2000ms



//CANCELING THE TIME INTERVALLS

let timerID = setTimeout(() => {console.log("Timer ID is :")},1000);
console.log(timerID);

/*
Timeout {
  _idleTimeout: 1000,
  _idlePrev: [TimersList],
  _idleNext: [Timeout],
  _idleStart: 70,
  _onTimeout: [Function (anonymous)],
  _timerArgs: undefined,
  _repeat: null,
  _destroyed: false,
  Symbol(refed): true,
  Symbol(kHasPrimitive): false,
  Symbol(asyncId): 4,
  Symbol(triggerId): 1,
  Symbol(kAsyncContextFrame): undefined
}
  */
 clearTimeout(timerID); // imer ID is : --- will not print as its cleartimeout.
 console.log(timerID);


//setInterval();

let intervalID = setInterval(() => {console.log("its interval")},1000);
/*
its interval
its interval
its interval
its interval
.
.
.

*/

setTimeout(() => { 
    clearInterval(intervalID);
    console.log("Stoped");
}, 5000);

/*
    its interval
    its interval
    its interval
    Stoped -- stoped after 5000ms.
*/