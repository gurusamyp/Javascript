//fetch the data from the api

async function fetchData() {
    const response = await fetch('https://dummyjson.com/users?limit=30');
    const data = await response.json();
    return data.users
}

fetchData().then(users => {
    console.log(users.length);
});