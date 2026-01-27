function sumOfMiddleN(arr, n) {
  if (n > arr.length) {
    throw new Error("n cannot be greater than array length");
  }

  if (n % 2 === 0) {
    throw new Error("n must be odd to have a clear middle");
  }

  const mid = Math.floor(arr.length / 2);
  const half = Math.floor(n / 2);

  let sum = 0;
  for (let i = mid - half; i <= mid + half; i++) {
    sum += arr[i];
  }

  return sum;
}

const arr = [1,2,3,4,5,6,7,8,9,10,11];
console.log(sumOfMiddleN(arr, 5)); 
