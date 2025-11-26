console.log(typeof(NULL));

let arr = [1,2,3,7];
console.log(arr);

let key = 7;

console.log(arr.includes(key));

function binarySearch(arr, key){
    let start = 0;
    let end = arr.length - 1;
    
    while(start <= end){

        const mid = Math.floor((start + end)/2);

        if( arr[mid] == key){
            return mid;
        } else if(key > arr[mid]){
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
return -1;
}

let find = binarySearch(arr, 17);

if ( find > 0){

    console.log("its found in place :" +find);
} else{

    console.log("Not Found");
}
