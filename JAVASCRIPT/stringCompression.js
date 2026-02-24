function stringCompression(str){
  let output = '';
  let currentValue = str[0];
  let count = 1;
  let result = '';
  
  for(let i = 1; i < str.length ; i++){
    if(str[i]===currentValue){
      count++;
    }else{
      result+=currentValue+count;
      currentValue = str[i];
      count = 1
    }
  }
  
  result+=currentValue+count;
  console.log(result)

}
const str = 'aaabbca'
stringCompression(str)
