function removeEvenNumber(arr) {
let left = 0;
for(let right =0; right < arr.length ; right++){
  if(arr[right]%2!==0){
    arr[left]=arr[right];
    left++
  }else{
    let prev = right>0&&(arr[right-1]%2==0);
    let next = right<arr.length && arr[right+1]%2===0;
    if(!prev&&!next){
      arr[left]=arr[right]
      left++
    }
  }
}
arr.length = left
return arr
}
let arr = [1, 2, 4, 6, 3, 8, 10, 5]
console.log(removeEvenNumber(arr));
