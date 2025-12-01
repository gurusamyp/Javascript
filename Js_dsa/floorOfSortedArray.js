// import {binarySearch} from './binarySearch.js'
let arr = [21,45,1, 2, 8, 10, 10, 12, 19];
let x = 12;

let sortedArr = arr.sort((a,b) =>a-b);
console.log(sortedArr);
// let search = binarySearch(sortedArr,8);
// console.log(search);

function binarySearch(arr, item){
    let start = 0;
    let end = arr.length;
    let result = -1;

    while(start <= end){
        const mid = Math.floor((start + end)/2);

        if(arr[mid] == item){
            return mid;
            
        } else if(arr[mid] < item){
            result = mid;
            start = mid + 1;
        } else{
            end = mid - 1 ;
            
        }

    }
    return result;
}

let floorItem = binarySearch(sortedArr,x);
console.log(sortedArr[floorItem]);