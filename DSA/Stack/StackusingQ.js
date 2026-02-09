class StackQueue{
  constructor(){
    this.q1 = [];
    this.q2 = [];
  }
  push(value){
    this.q1.push(value)
  }
  dequeu(){
    if(this.q1.length===0) return
    while(this.q1.length > 1){
      this.q2.push(this.q1.shift());
    }    
    this.q1 = this.q2
  }
  display(){
    console.log(this.q1)
  }
}
const s = new StackQueue();
s.push(10);
s.push(20);
s.push(30);
s.push(40);
s.display();
s.dequeu()
s.display()