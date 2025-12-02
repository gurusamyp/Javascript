let string = "i got intern at geEksforgeeks";

function toCamaleCase(s){
    let stringArr = s.toLowerCase()
    stringArr.split(" ").reduce((s,c)=>{
        s+(c.charAt(0).toUpperCase()+c.slice(1))
    });


    console.log(stringArr);
    
    
    return ;
}

toCamaleCase(string);