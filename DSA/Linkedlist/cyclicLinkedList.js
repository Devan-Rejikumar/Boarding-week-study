class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(){
    this.head = null;
    this.size = 0
  }
  
  append(data){
    let newNode = new Node(data);
    if(!this.head){
      this.head = newNode;
      this.size++
      return
    }
    let curr = this.head;
    while(curr.next){
      curr = curr.next
    }
    curr.next = newNode
    this.size++
    return
    
  }
  mergeLinkedList(head1,head2){
    let curr = head1;
    while(curr.next){
      curr = curr.next
    }
    curr.next = head2
    while(curr.next){
      curr=curr.next
    }
    curr.next = head1
  }
  isCyclic(){
    
    let slow = this.head;
    let fast = this.head;
    let prev = slow
    while(fast.next && fast.next.next){
      fast = fast.next.next
      slow = slow.next
      if(fast === slow) return true
    }
    return false
  }
  print(){
    let result = ''
    let curr = this.head;
    while(curr){
      result+=curr.data+'=>'
      curr=curr.next
    }
    console.log(result,'null')
  }
}
const s1 = new SinglyLinkedList()
const s2 = new SinglyLinkedList()
s1.append(10)
s1.append(20)
s1.append(30) 
s2.append(40)
s2.append(50)
s2.append(60)
s1.print()
s2.print()
s1.mergeLinkedList(s1.head,s2.head)
// s1.print()
console.log(s1.isCyclic())