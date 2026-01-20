const BASE_URL = 'https://dummyjson.com/products';
const LIMIT = 18;

let currentPage = 1;
let totalProducts = 0;
let currentCategory = '';
let currentSearch = '';
let currentSort = '';

const productGrid = document.getElementById('productGrid');
const statusDiv = document.getElementById('status');
const pageInfo = document.getElementById('pageInfo');
const categorySelect = document.getElementById('categorySelect');

const cache = new Map();

async function fetchProdcuts() {
    try {
        setStatus('Loading Products.....');

        const skip = (currentPage - 1) * LIMIT;
        let url = `${BASE_URL}?limit=${LIMIT}&skip=${skip}`

        if(currentSearch){
            url = `${BASE_URL}/search?q=${currentSearch}&limit=${LIMIT}&skip=${skip}`;
        }

        if(currentCategory){
            url = `${BASE_URL}/category/${currentSearch}?limit=${LIMIT}&skip=${skip}`;
        }

        if(cache.has(url)){
            render(cache.get(url));
            return;
        }

        const res = await fetch(url)
        if(!res.ok){
            throw new Error('API error');
        }

        const data = await res.json();
        cache.set(url, data);

        render(data);
        
    } catch (error) {
        setStatus(error.message);
    }
}

function render(data){
    productGrid.innerHTML = '';
    totalProducts = data.total;
    console.log(totalProducts);  //194

    let products = data.products;
    console.log(products);

    if(currentSort  === 'asc'){
        products.sort((a,b) => a.price - b.price);
    }

    if(currentSort === 'desc'){
        products.sort((a,b) => b.price - a.price);
    }

    products.forEach(p => {
        productGrid.innerHTML += `
            <div class='card' onClick='openModal(${p.id})'>
                <img src='${p.thumbnail}'>
                <h4>${p.title}</h4>
                <p class='price'>$ ${p.price}</p>
            </div>
        `;
    });

    pageInfo.textContent = `Page ${currentPage}`
    setStatus('');
}

async function loadCategories() {
    const res = await fetch(`${BASE_URL}/categories`);
    const categories = await res.json();

    categories.forEach( cat => {
        const opt = document.createElement('option');
        opt.value = cat.name;
        opt.textContent = cat.name;
        categorySelect.appendChild(opt);
    });
}

async function openModal(id) {
    const res = await fetch(`${BASE_URL}/${id}`);
    const p = await res.json();

    console.log(p)

    document.getElementById('modalBody').innerHTML += `
        <h3>${p.title}</h3>
        <img src="${p.thumbnail}" style="width:100%">
        <p>${p.description}</p>
        <p class='price'>$${p.price}</p>
        <p>⭐ ${p.rating} </p>
    `;

    document.getElementById('modal').classList.remove('hidden');   
}


 document.getElementById('closemodal').onclick = () => {
     document.getElementById('modal').classList.add('hidden');   
 }

document.getElementById('searchInput').addEventListener('input', (e) => {
    currentSearch = e.target.value;
    currentPage = 1;
    fetchProdcuts();
});

categorySelect.addEventListener('change', (e) => {
    currentCategory = e.target.value;
    currentPage = 1;
    fetchProdcuts();
});

document.getElementById('sortSelect').addEventListener('change', (e) => {
    currentSort = e.target.value;
    fetchProdcuts();
});

document.getElementById('nextBtn').onclick = () => {
    if(currentPage * LIMIT < totalProducts){
        currentPage++;
        fetchProdcuts()
    }
};


document.getElementById('preBtn').onclick = () => {
    if(currentPage > 1){
        currentPage--;
        fetchProdcuts();
    }
};

function setStatus(msg) {
    statusDiv.textContent = msg;
}


loadCategories();
fetchProdcuts();