const obj = {
  a : 1,
  b : [1,2,3,4],
  c : 3,
  d : {
    f : 9
  }
}

function deepCopy(obj){
  
         if(typeof obj !== 'object' || obj===null){
    return obj
  }
  

      if(Array.isArray(obj)){
         
         const arr = [];
         
         for(let j of obj){
           arr.push(deepCopy(j))
         }
         
         return arr
      }
   
   const ob = {};
   
   for(let k in obj){
      ob[k] = deepCopy(obj[k])
   }
   return ob
}


const newobj = deepCopy(obj)


obj.a = 90;
console.log(newobj)
console.log(obj)