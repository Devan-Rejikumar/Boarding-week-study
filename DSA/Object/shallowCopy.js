const obj = {
  name: "devan",
  age: 26,
  address:{
    city:"Alappuzha"
  }
}

function shallowCopy(obj){
  let result;
  if(Array.isArray(obj)){
    result = []
  }else{
    result = {}
  }
  for(let key in obj){
    result[key] = obj[key]
  }
  return result;
}
console.log(shallowCopy(obj))