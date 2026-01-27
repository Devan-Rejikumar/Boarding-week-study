class CustomError extends Error{
  constructor(message,errorCode){
    super(message);
    this.name ='CustomError';
    this.errorCode = errorCode;
  }
}

function validateAge(age){
  if(age < 18){
    throw new CustomError('Age must be above 18')
  }
  return 'Valid age';
}

console.log(validateAge(20))