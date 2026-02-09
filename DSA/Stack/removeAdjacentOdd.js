const stack = [1,3,4,5,6,7,7,7,5,7,6];

function removeAdjacentOdd(arr) {
  const st = [];

  for (let num of arr) {
    if (
      st.length > 0 &&
      st[st.length - 1] % 2 !== 0 &&
      num % 2 !== 0
    ) {
      st.pop(); 
    } else {
      st.push(num);
    }
  }

  return st;
}
console.log(removeAdjacentOdd(stack))