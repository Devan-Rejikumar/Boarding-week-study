const arr = [1,6,4,9,-1,5]

function sortStack(arr) {
  const tempStack = [];

  while (arr.length) {
    let popped = arr.pop();

    while (
      tempStack.length > 0 &&
      tempStack[tempStack.length - 1] > popped
    ) {
      arr.push(tempStack.pop());
    }

    tempStack.push(popped);
  }

  return tempStack;
}

console.log(sortStack(arr))