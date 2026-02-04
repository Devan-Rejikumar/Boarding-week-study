function generateOTP(){
  let otp = '';
  let prevRes = null;
  while(otp.length < 6){
    let digit = Math.floor(Math.random()*10);
    if(digit!==prevRes){
      otp+=digit;
      prevRes=digit
    }
  }
  return otp
}
console.log(generateOTP())