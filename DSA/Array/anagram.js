function anagram(strs){
let obj = {};
for(let char of strs){
  let key = char.split('').sort().join('')
  if(!obj[key]){
    obj[key] = []
  }
  obj[key].push(char)
}
 return Object.values(obj)
}

let strs = ["eat","tea","tan","ate","nat","bat"]

console.log(anagram(strs))
