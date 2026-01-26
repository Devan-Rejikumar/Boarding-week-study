function debounce(fn,delay){
  let timerId;
  
  return function (...args){
    clearTimeout(timerId);
    timerId = setTimeout(()=>{
      fn.apply(this,args)
    },delay)
  }
}

function search(query){
  console.log('Searching for',query)
}

const debouncedSearch  = debounce(search,500)
debouncedSearch('d')
debouncedSearch('de')
debouncedSearch('dev')