class Node {
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
      this.size++;
      return
    }
    let curr = this.head;
    while(curr.next){
      curr = curr.next
    }
    curr.next = newNode
    this.size++
  }
  splitHalf(head){
    let fast = head;
    let slow = head;
    let prev = null;
    while(fast && fast.next){
      prev = slow;
      fast = fast.next.next;
      slow = slow.next
    }
    if(prev) prev.next = null;
    
    return {
      firstHalf: head,
      secondHalf : slow
    }
    
  }
  merge(s1,s2){
    const singly1 = s1.splitHalf(s1.head);
    const singly2 = s2.splitHalf(s2.head);
    let firstHalf = singly1.firstHalf;
    let secondHalf = singly2.secondHalf;
    let curr = firstHalf;
    while(curr.next){
      curr=curr.next
    }
    curr.next = secondHalf;
    
    const newList = new SinglyLinkedList();
    newList.head = firstHalf;
    return newList
    
  }
  print(){
    let result = '';
    let curr = this.head;
    while(curr){
      result+=curr.data+"=>"
      curr=curr.next
    }
    console.log(result+"null")
  }
}
const s1 = new SinglyLinkedList();
const s2 = new SinglyLinkedList();
for(let i = 1 ; i<=10; i++){
  s1.append(i)
}
for(let i = 11; i<=20;i++){
  s2.append(i)
}
s1.print();
s2.print();

const mergeList = s1.merge(s1,s2);
mergeList.print()