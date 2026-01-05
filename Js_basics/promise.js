

let promise = new Promise((resolve, reject) => {
setTimeout(()=>resolve("Done"), 2000 );
});

promise.then(result =>(console.log(result)),
       error => (console.log(error)));    

function getData(){
       return new Promise((resolve, reject)=>{
              fetch('https://jsonplaceholder.typicode.com/users')
              .then(response => {
                     if(!response.ok) {
                            reject('Failed to fetch data');
                     }
                     return response.json();
              })
              .then(data =>  resolve(data))
              .catch(error => reject(error));
});
}

getData()
.then(data => {
       console.log('data received: ', data);
       // console.log(data);
       // data.fetch(user => {
       //        console.log(user.name)
       // })
})

.catch(error => {
       console.log('Error', error);
});