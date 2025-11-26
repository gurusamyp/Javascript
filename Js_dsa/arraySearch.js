let arr = [1,2,3,4,"a"];
let x = "a";

function arrSearch(){
    let i;
    for(i = 0; i < arr.length;i++){
        if(arr[i] == x){
            // console.log("item found at:" +i);
            break;
        }
    }
    return i;
}

arrSearch(arr);