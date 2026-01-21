const API_URL = "https://dummyjson.com/users?limit=30";

async function fetchUsers() {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.users // user is the fetched data array name
}


//load button event
document.getElementById('loadBtn').addEventListener('click', async () => {
    const users = await fetchUsers();
    console.log(users);
    displayUsers(users);
});

//to show user's individual data


//to close user's individual data screen
document.getElementById('close').onclick = (e)=>{
    document.getElementById('userDetails').classList.add('hidden');
}



//Display data in HTML

function displayUsers(users){
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';
/* forEach method */
    users.forEach(user => {  // forEach dont return values so we use it when you don’t need a return value.
        const tr = document.createElement('tr');
        //set id value for each row
        tr.setAttribute('id', user.id);

        //populate each row with data
        tr.innerHTML = `
            <td>${user.id}</td>
            <td class ='userCard'> 
                <span>&#9658;</span>
                ${user.firstName} ${user.lastName}
            </td>
            <td>${user.age}</td>
            <td>${user.address.city}</td>
            <td>${user.company.name}</td>
            <td>${user.ssn}</td>
        `;

    tbody.appendChild(tr);
    });
}



function showUserDetails(id){
        
    
    }