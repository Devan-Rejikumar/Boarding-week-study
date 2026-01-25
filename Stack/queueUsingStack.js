class Queue {
  constructor(){
    this.stack1 = [];
    this.stack2 = [];
  }
  enqueue(value){
    this.stack1.push(value)
  }
  dequeue(){
    if(this.stack2.length===0) {
      if(this.stack1.length===0) return 
      else{
        while(this.stack1.length){
          this.stack2.push(this.stack1.pop())
        }
      }
    }
    return this.stack2.pop()
  }
  display(){
    console.log([...this.stack2.reverse(),...this.stack1]);
  }
}
const q = new Queue();
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.dequeue();
q.display()

