let arr = [1,2,3,4,6,4,7,5,];
let arr1 =[-1, 2, 3, -9];


function maximalSubArray(arr){
    let maxSum = 0;
    for(let i = 0; i<arr.length;i++){
        let partialSum = 0;
        for(let j = i; j<arr.length;j++){
            partialSum += arr[j];
            maxSum = Math.max(maxSum, partialSum)
        }
    }
    return maxSum;
}

console.log(maximalSubArray(arr)); //32

console.log(maximalSubArray(arr1)); //5