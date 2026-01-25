class Stack {
  constructor(){
    this.queue1 = [];
    this.queue2 = [];
  }
  push(value){
    this.queue1.push(value)
  }
  pop(){
   if(this.queue1.length===0) return 
   while(this.queue1.length > 1){
     this.queue2.push(this.queue1.shift())
   }
   let deletd = this.queue1.shift();
   [this.queue1,this.queue2] = [this.queue2,this.queue1]
   return deletd;
  }
  display(){
    console.log(this.queue1)
  }
}

const s = new Stack();
s.push(10)
s.push(20)
s.push(30)
s.pop()
s.display()