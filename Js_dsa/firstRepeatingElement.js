let arr = [52,3, 4,7,5, 3, 5, 6, 52];
let length = arr.length;

function firstRepeadingElement(arr){
    let repeadingElementAt = []; 
    for( let i = 0;i<=length-1;i++){
        for( let j = 1;j<=length-1;j++){
            if(arr[j] == arr[i]){
                repeadingElementAt.push(i,j);
                
                break;
            }
        } 
        break;
    }
    return repeadingElementAt;
}

console.log(firstRepeadingElement(arr));