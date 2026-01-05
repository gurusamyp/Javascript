async function sum(a,b) {
    return a + b;
}

console.log(sum(5,4)); //Promise { 9 } ===> async returns Promise.

sum(4,5).then(result => console.log(result)); //9


async function fun(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Done"),1000)
    });

    let result = await promise;
    console.log(result);
}

fun(); // Done

async function user() {
    let response = await fetch('https://dummyjson.com/users');
    let data = await response.json();

    // console.log(data);
    
}
user();