

const USER_API = "https://jsonplaceholder.typicode.com/users";
const POST_API = "https://jsonplaceholder.typicode.com/posts";

const userContainer = document.getElementById('userContainer');
const cityFilter = document.getElementById('cityFilter');
const searchInput = document.getElementById('searchInput');
const statusDiv = document.getElementById('status');

let globalUser = [];

//------------------ fetch and merge data-----------------

async function loadDashboard() {
    try{
        setStatus("Loading Data....");

        const [userRes, postRes] = await Promise.all([
            fetch(USER_API),
            fetch(POST_API)
        ]);

        if(!userRes.ok || !postRes.ok){
            throw new Error('Data Fetch Error');
        }

        const users = await userRes.json();
        const posts = await postRes.json();

        console.log(users); //10
        console.log(posts); //100

        globalUser = mergeUserWithPosts(users, posts);
        console.log(globalUser); //10 includes post counts

        populateCityFilter(globalUser);
        renderUsers(globalUser);

        setStatus('');


    } catch(error) {
        setStatus(error.message);
    }
}

function mergeUserWithPosts(users, posts){
    return users.map(user => {
        const userPosts = posts.filter(p => p.userId == user.id);
        // console.log(userPosts);            
        return {
            id: user.id,
            name: user.name,
            email: user.email.toLowerCase(),
            city: user.address?.city ?? "Unknown",
            postCount: userPosts.length
        };
    });
}
    function renderUsers(users){
        userContainer.innerHTML = '';

        if(users.length === 0){
            userContainer.innerHTML = `<p>No Users Found</p>`;
            return;
        }

        users.forEach(user => {
            userContainer.innerHTML += `
                <div class='card'>
                    <h3>${user.id}. ${user.name}</h3>
                    <p>Email: ${user.email}</p>
                    <p>City: ${user.city}</p>
                    <span class="badge">Post Count: ${user.postCount}</span>
                </div>            
            `;
        });
    }
    
    function populateCityFilter(users) {
        const cities = [...new Set(users.map(u => u.city))]

        cities.forEach( city => {
            const option =document.createElement('option');
            option.value = city;
            option.textContent = city;
            cityFilter.appendChild(option);
        });

    }

    function setStatus(message){
        statusDiv.textContent = message;
    }



function applyFilters(){
    const searchText = searchInput.value.toLowerCase();
    const selectedCity = cityFilter.value;
    
    let filtered = globalUser.filter(user => {
        user.name.toLowerCase().includes(searchText)
    })

    if(selectedCity){
        filtered = filtered.filter(user => user.city === selectedCity)
    }
    renderUsers(filtered);
}

searchInput.addEventListener('input', applyFilters);
cityFilter.addEventListener('change', applyFilters);

loadDashboard();