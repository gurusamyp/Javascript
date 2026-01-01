function makeCounter(){
    let count = 0;
     return function(){
        return count++;
     }
}

let counter = makeCounter();
console.log(counter()); //0
console.log(counter()); //1
console.log(counter()); //2

function apiCounter() {
  let count = 0;

  return function() {
    count++;
    console.log(`API called ${count} times`);
  };
}

const userApi = apiCounter();

userApi();
userApi();
/*
   API called 1 times
   API called 2 times
*/