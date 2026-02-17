class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.size = 0
  }
  append(data){
    let newNode = new Node(data);
    if(!this.head){
      this.head = newNode;
      this.size++;
      return
    }
    let curr = this.head;
    while(curr.next){
      curr=curr.next
    }
    curr.next = newNode;
    this.size++
  }
  revereseKNode(k){
    let curr= this.head, next = null,prev = null;
    let count = 0;
    let originalHead = this.head;
    
    while(curr && count < k){
      next = curr.next;
      curr.next = prev;
      prev = curr
      curr = next;
      count++;
    }
    originalHead.next = curr
    this.head = prev
    
  }
  deleteNthFromLast(n){
    if(n <=0 || n > this.size) return console.log("Enter a valid size.....")

      let fast = this.head;
      let slow = this.head;
      let prev = null;
      for(let i = 0 ; i< n; i++){
        fast = fast.next
      }
      if(!fast){
        this.head = this.head.next;
        this.size--
        return
      }
      while(fast){
        prev = slow;
        fast = fast.next;
        slow = slow.next;
      }
      prev.next = slow.next;
    
  }
  print(){
    let result="";
    let curr = this.head;
    while(curr){
      result+=curr.data+"=>"
      curr=curr.next
    }
    
    console.log(result+"null");
  }
  
}

const s = new SinglyLinkedList();
for(let i = 1; i<=6;i++){
  s.append(i)
}
s.print();
s.deleteNthFromLast(2);
s.print();
s.revereseKNode(3);
s.print();