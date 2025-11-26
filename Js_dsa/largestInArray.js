let arr = [1,55,18,19,1,50,100];

function largestInArr(arr){
    let largeItem = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i]  > largeItem){
            largeItem = arr[i];
        }
    }
    return largeItem;
    // return Math.max(arr); // Math function to find maximum in an array
}

console.log(largestInArr(arr));