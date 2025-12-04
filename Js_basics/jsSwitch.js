let age = 40;
let switchCase;
// Boy/Child <=17
// Young Man 18-44
// Middle-Aged Man 45- 64
// older man  > 65
if(age <=17){
    switchCase = "B";
}else if(age>=18 && age<=44) {
    switchCase = "Y";
} else if(age>=45 && age<=64){
    switchCase = "M";
} else {
    switchCase = "O";
}

switch(switchCase){
    case "B" :
        console.log("He is a boy, don't provide access");
        break;
    case "Y" :
        console.log("He is a young man, So provide access");
        break;
    case "M" :
        console.log("He is a middle aged man, So provide access");
        break;
    case "O" :
        console.log("He is a old man, don't provide access");
        break;
}