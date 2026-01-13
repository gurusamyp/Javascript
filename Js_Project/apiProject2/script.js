let currentPage = 1;
let currentSearch = "";

const container = document.getElementById('cardContainer');
const statusDiv = document.getElementById('status');
const pageInfo = document.getElementById('pageInfo');

async function loadCharacters(page = 1, name = ""){
    try{
        statusDiv.textContent = 'Loading....';
        container.innerHTML = "";

        const url = `https://rickandmortyapi.com/api/character?page=${page}&name=${name}`;
        const response = await fetch(url);

        if(!response.ok){
            throw new Error('No Characters Found');
        }

        const data = await response.json();
        console.log(data);

        data.results.forEach(char => {
            const card = document.createElement('div');
            card.className = 'card';

            card.innerHTML = `
                     <img src="${char.image}" />
                     <h3>${char.name}</h3>
                     <p>Status : ${char.status}</p>       
                     <p>Species : ${char.species}</p>       
            
            `;

            container.appendChild(card);
        });

        pageInfo.textContent = `Page ${currentPage} of ${data.info.pages}`;
        statusDiv.textContent = "";

        document.getElementById('prevBtn').disabled = !data.info.prev;
        document.getElementById('nextBtn').disabled = !data.info.next; 

    }catch(error){
        statusDiv.textContent = error.message;
    }
    
}

//search character
document.getElementById('searchInput').addEventListener('input', (event) => {
    currentSearch = event.target.value;
    currentPage = 1;
    loadCharacters(currentPage, currentSearch);
});

//pagination

document.getElementById('nextBtn').addEventListener('click', () => {
    currentPage++;
    loadCharacters(currentPage, currentSearch);
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentPage--;
    loadCharacters(currentPage, currentSearch);
});

loadCharacters();