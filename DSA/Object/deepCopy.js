const input = {
  a : 1,
  b : [1,2,3,4],
  c : 3,
  d : {
    f : 9
  }
}

function deepCopy(value){
  if(value===null || typeof value!=='object'){
    return value; 
  }
  let result;
  if(Array.isArray(value)){
    result = []
  }else {
    result = {};
  }
  
  for(let key in value){
    result[key] = deepCopy(value[key])
    
  }
  return result
}
console.log(deepCopy(input))