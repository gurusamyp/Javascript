async function loadUsers(){
    const response = await fetch('http://localhost:3000/users');
    const users = await response.json();

    const container = document.getElementById('user-container');
    container.innerHTML = '';

    users.forEach(user => {
        const card = document.createElement('div');
        card.className = 'user-card';

        card.innerHTML = `
            <div class='profile-photo'>
                <img src='${user.image}' alt='${user.first_name} class='user-img'>
            </div>
            <div class='user-info'>   
                <h3>${user.first_name} ${user.last_name}</h3>
                <p><span>Email:</span> ${user.email}</p>
                <p><span>Age:</span> ${user.age}</p>
                <p><span>Gender:</span> ${user.gender}</p>
                <p><span>City:</span> ${user.city}</p>
                <p><span>Role:</span> ${user.role}</p>           
            </div>
        `;
        container.appendChild(card);
    });
}

loadUsers();