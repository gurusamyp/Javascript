let promise = new Promise((resolve, rejected) => {
setTimeout(()=>rejected("Done"), 2000 );
});

promise.then(result =>(console.log(result)),
       error => (console.log(error)));    

