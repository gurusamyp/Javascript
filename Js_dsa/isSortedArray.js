let arr = [10, 20, 30,35, 40, 50];
// let arr = [90, 80, 100, 70, 40, 30];

let isSortedArray =(arr)=>{
    let i = 0;
    
        while(arr[i]<=arr[i+1]){
            i++;           
        }

    if(i == arr.length-1){
        return true
    } else{
        return false;
        
    }

}


let yesOrNo = isSortedArray(arr);
if(yesOrNo == true){
    console.log("Yes the array is sorted");
} else{
    console.log("No, the array is not sorted");
}