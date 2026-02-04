function maxSubArray(arr) {
  let currentSum = arr[0];
  let maxSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (currentSum + arr[i] > arr[i]) {
      currentSum = currentSum + arr[i];
    } else {
      currentSum = arr[i];
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  return maxSum;
}

const arr = [4, -1, 2, -5]
console.log(maxSubArray(arr))


// maxSubArray