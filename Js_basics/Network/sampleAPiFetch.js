
/*
fetch('https://api.datausa.io/tesseract/cubes')
    .then(response => response.json())
    .then(data => console.log(data))
*/

async function getData() {
    const response = await fetch('https://api.datausa.io/tesseract/cubes');
    if(!response.ok){
        throw new Error('Fetch Error');
    }

    const data = await response.json();
    console.log(data.cubes[0].dimensions);
    
        
  
}

getData();