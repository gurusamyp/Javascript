async function loadDataSets() {
    try {
    const response = await fetch('https://api.restful-api.dev/objects');
    const result = await response.json();
    // console.log(result);

    const tbody = document.getElementById('tableBody');
    tbody.innerHTML ="";

    result.forEach(item => {
        const row = document.createElement('tr');
        // console.log(item);
        row.innerHTML = `
                            <td>${item.id}</td>
                            <td>${item.name}</td>
                            `;
                            // <td>${item.data[0]}</td> error need to check?
                            
                            tbody.appendChild(row);
    });
} catch (error){
    console.error("API Error", error);
    document.getElementById('tableBody').innerHTML = "<tr><td colspan='3'>Failed to load data</td></tr>";

}
}

loadDataSets();