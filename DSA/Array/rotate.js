function rotate(arr,k){

let n = arr.length;
k = k%n;
reverse(arr,0,n-1);
reverse(arr,0,k-1);
reverse(arr,k,n-1)
return arr;
}
function reverse(arr,left,right){
    while(left < right){
        [arr[left],arr[right]] = [arr[right],arr[left]]
        left++;
        right--
    }
}
let arr = [1,2,3,4,5]
let k = 2
console.log(rotate(arr,k))
