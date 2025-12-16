let count = document.getElementsByClassName('value');
let btnup = document.getElementsByClassName('btnup');
let btndown = document.getElementsByClassName('btndown');

let current_count = 0;


function handleClickUp(){
    current_count += 1;
    count[0].innerHTML = current_count; 
        
}