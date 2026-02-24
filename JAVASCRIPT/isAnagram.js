
function isAnagram(s1,s2){
 let freq = {};
 if(s1.length!==s2.length) return false; 
 for(let char of s1){
   freq[char] = (freq[char] || 0) + 1
 }
 for(let char of s2){
   if(!freq[char]) return false
   freq[char]--
 }
 return true
}
// console.log(isAnagram("listen", "silent")); 
console.log(isAnagram("aacc", "ccac"));