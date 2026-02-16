const arr = [1,2,3,4,5]
function rotate(arr,k,n=0){
  if(n === k) return arr
  let popped = arr[arr.length-1];
  for(let i = arr.length-1; i>0;i--){
    arr[i] = arr[i-1];
    
  }
  arr[0] = popped
  return rotate(arr,k,n+1)
}
let k = 3;
console.log(rotate(arr,k))