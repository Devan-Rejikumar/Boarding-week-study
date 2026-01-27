function removeDuplicates(arr){

let freq = {}
let left = 0;

for(let right = 0; right < arr.length; right++){
  if(!freq[arr[right]]){
    freq[arr[right]] = true
    arr[left] = arr[right]
    left++
  }
}
arr.length = left
return arr
}


let arr = [1,2,4,4,5,6,7,7,7,2,7]
console.log(removeDuplicates(arr))
