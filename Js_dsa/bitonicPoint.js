let arr = [1, 2, 4, 5, 9,6, 3, 2];

function bitonicPoint(arr){
    for(let i = 1;i<=arr.length;i++){

        if(arr[i-1]<arr[i] && arr[i]>arr[i+1]){
            return arr[i];
            // break;
        }
    }
    
}

console.log(bitonicPoint(arr));