function trottle(fn,limit){
  let inTrottle = false;
  return function(...args){
    if(!inTrottle){
      fn.apply(this,args);
      inTrottle = true;
      setTimeout(()=>{
        inTrottle = false;
      }, limit);
    }
  }
}