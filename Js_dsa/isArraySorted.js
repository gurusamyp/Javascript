let arr = [10, 20, 30, 40, 50];
let arr2 = [90, 80, 100, 70, 40, 30];
let arr3 = [50,40,30]

function isSortedArray(arr){
    for(let i = 0; i<arr.length-1; i++){
        if(arr[i] > arr[i+1]){
             
            console.log("Not Sorted");
            return;
       
    }
}
console.log("Yes Sorted");
}

isSortedArray(arr);
isSortedArray(arr2);
isSortedArray(arr3); // not working?????