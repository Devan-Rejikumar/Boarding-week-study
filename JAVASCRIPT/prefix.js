let arr = ["flower", "flow", "flight"];

function longestCommonPrefix(arr){
  let prefix = arr[0]
  
  for(let i = 1 ; i< arr.length ; i++){
    while(!arr[i].startsWith(prefix)){
      prefix = prefix.slice(0,prefix.length-1)
      if(prefix==='') return ''
    }
    
  }
  return prefix
}
console.log(longestCommonPrefix(arr))