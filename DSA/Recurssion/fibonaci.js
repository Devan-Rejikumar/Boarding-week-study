function fibonaci(n,a=0,b=1){
  if(n < 1) return
  console.log(a);
  fibonaci(n-1,b,a+b)
  
}
fibonaci(5)