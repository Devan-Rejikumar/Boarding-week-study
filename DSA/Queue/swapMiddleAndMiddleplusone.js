function swapMiddle(arr){
  let q1 = [];
  let q2 = [];
  let middle = Math.floor((arr.length/2));
  let nextMiddle = middle+1;
  
  for(let i = 0 ;i<=middle;i++){
    q1.push(arr.shift())
  }
  for(let i = 0; i<=arr.length ;i++){
    q2.push(arr.shift())
  }
 while(q1.length > 1){
   arr.push(q1.shift())
 }
arr.push(q2.shift())
arr.push(q1.shift())
while(q2.length){
  arr.push(q2.shift())
}
console.log(arr)
}



let arr = [1,2,3,4,5]
swapMiddle(arr)