function rateLimit(fn,delay){
    
    console.log("sss",fn)
    console.log(delay)
  let lastExecuted = 0;
  
  return function(...args) {

    const now = Date.now();
    if(now - lastExecuted >= delay){
      lastExecuted = now;
      fn(...args);
    }
  }
}

const log = rateLimit(()=> console.log('Executed'),2000);
log();
log();
setTimeout(log,5000);