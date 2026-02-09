class Stack{
  constructor(){
    this.items = [];
    this.minStack = [];
  }
  
 push(value){
   this.items.push(value);
   if(this.minStack.length === 0 || this.minStack[this.minStack.length-1] > value){
     this.minStack.push(value)
   }
 }
 pop(){
   let popped = this.items.pop();
   if(popped === this.minStack[this.minStack.length-1]){
     this.minStack.pop()
   }
 }
  
}


const s = new Stack();
s.push(200);
s.push(10);
s.push(1)
s.push(20);
s.push(30)
s.display()


console.log(s.getMin(),"-->min")

console.log("-------------------------")

s.pop()

s.display()
console.log(s.getMin(),"-->min")


console.log("-------------------------")

s.pop()

s.display()
console.log(s.getMin(),"-->min")


console.log("-------------------------")

s.pop()

s.display()
console.log(s.getMin(),"-->min")



console.log("-------------------------")

s.pop()

s.display()
console.log(s.getMin(),"-->min")

console.log("-------------------------")

s.pop()

s.display()
console.log(s.getMin(),"-->min")

