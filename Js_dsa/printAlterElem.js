/**
 * @param {number[]} arr
 */
let arr = [1,2,3,4,5,6];

function getAlternates(arr) {
        // code here
        let j = 1;
        let outArr =[]
        for(let i = 0;i<arr.length;i++){
            if(j%2!= 0){
                outArr.push(arr[i]);
            }                
            j++;
        }
        return outArr;
    }


console.log(getAlternates(arr));