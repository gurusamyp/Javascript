let arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];

function sort012(arr){
    let start = 0;
    let mid = 1;
    let end = arr.length-1;

    while(start <= end){
        if(arr[start]>arr[mid]){
            arr[start], arr[mid] = arr[mid], arr[start];
        } else {
            start++;
            mid++
        }
    }
    return arr;
}

console.log(sort012(arr));