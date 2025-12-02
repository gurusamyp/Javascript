let s = "10010";
// let s = "71";

function checkItIsBinary(str){
    let binaryPattern = /^[01]+$/;
    if(binaryPattern.test(str)==false){
        console.log("not binary");
    } else{
        console.log("binary");
    }

}

checkItIsBinary(s);