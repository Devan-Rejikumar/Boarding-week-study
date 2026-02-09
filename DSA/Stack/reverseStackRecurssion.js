function reverseStack(stack) {
  if (stack.length === 0) return;

  const top = stack.pop();
  reverseStack(stack);
  insertAtBottom(stack, top);
}

function insertAtBottom(stack, value) {
  if (stack.length === 0) {
    stack.push(value);
    return;
  }

  const top = stack.pop();
  insertAtBottom(stack, value);
  stack.push(top);
}


let stack = [1, 2, 3];
reverseStack(stack);
console.log(stack)
