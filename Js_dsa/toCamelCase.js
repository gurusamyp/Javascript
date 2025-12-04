// let string = "i got intern at geEksforgeeks";
let string = "i";

function toCamaleCase(s){
    let stringArr = s.toLowerCase().split(' ');
                s.toUpperCase();

    for(const element of stringArr){
        console.log(element.length);
    }

    
    
    for(let i = 0; i<=stringArr.length;i++){
        if(stringArr.length == 1){
            // stringArr.toUpperCase();
            console.log(stringArr);
        } else{

        }
    }

    return stringArr ;  
    
    
}

const value = toCamaleCase(string);
console.log(value);