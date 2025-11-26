let arr = [1, 4, 3, 2, 6, 5];
let reversArr = () => {
    let reversArray = [];
    for(let i = arr.length-1; i>=0;i--){
        reversArray.push(arr[i]);
    }
    return reversArray; 
    // return arr.reverse(); // short code to get reverse the items in an array
}

console.log(reversArr(arr));