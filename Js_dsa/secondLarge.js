let arr = [12, 35, 1, 10, 34,35 ,1];

function secondLargeNum(arr){
    let arrLen = arr.length;
    arr.sort((a,b)=>a-b);
    console.log(arr);
    for(let i = arrLen-1;i >= 0;i--){
        if(arr[i]!=arr[arrLen-1])
            return arr[i];
    }

}

console.log(secondLargeNum(arr));