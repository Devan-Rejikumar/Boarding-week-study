class Node{
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
  
  isEmpty(){
    return this.head === null;
  }
  append(data){
    const newNode = new Node(data);
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
  }
  prepend(data){
    const newNode = new Node(data);
    if(!this.head){
      this.head = newNode;
      this.size++
      return
    }
    newNode.next = this.head;
    this.head = newNode;
  }
  insertAtPos(data,index){
    if(index < 0 || index > this.size) return console.log('Enter a valid position');
    if(index===0) return this.prepend(data) 
    else{
      let curr = this.head;
      let newNode = new Node(data)
      for(let i = 0; i< index-1; i++){
        curr = curr.next
      }
      newNode.next = curr.next;
      curr.next = newNode
    }
  }
  
  reverse(){
    let curr = this.head;
    let next = null;
    let prev = null;
    while(curr){
      next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }
    this.head = prev
  }
  
  deleteNthIndex(index){
  if(index < 0 || index > this.size) return console.log('Enter a valid index');
  if(index === 0) return this.head = this.head.next
  else{
    let curr = this.head;
    
    for(let i = 0; i< index-1;i++){
      curr = curr.next  
    }
    curr.next = curr.next.next
  }
  this.size--
  }
  
  findMiddle(){
    let slow = this.head;
    let fast = this.head;
    while(fast.next && fast.next.next){
      fast = fast.next.next;
      slow = slow.next;
    }
    return slow.data
  }
  
  removeMiddle(){
    let fast = this.head;
    let slow = this.head;
    let prev = null;
    while(fast.next && fast.next.next){
      prev = slow;
      fast = fast.next.next;
      slow = slow.next;
    }
    prev.next = slow.next
  }
  
  deleteLastNthNode(n){
    if(n <=0 || n> this.size) return console.log('Enter a valid number');
    let prev = null;
    let fast = this.head;
    let slow = this.head;
    for(let i = 0 ;i<n-1; i++){
      
      fast = fast.next
    }
    while(fast.next){
      prev = slow;
      fast = fast.next;
      slow = slow.next;
    }
    prev.next = slow.next;
  }
  
  swapFirstAndLast(){
    let curr = this.head;
    let prev = null;
    let first = this.head;
    while(curr.next){
      prev = curr
      curr = curr.next;
    }
    prev.next = first;
    curr.next = first.next;
    first.next = null
    this.head = curr;
  }
  
  cyclic(s1,s2){
    let curr = s1
    while(curr.next){
      curr=curr.next
    }
    curr.next=s2
    while(curr.next){
      curr=curr.next
    }
    curr.next = s1
  }
  isCyclic(){
    let fast = this.head;
    let slow = this.head;
    while(fast.next && fast.next.next){
      fast = fast.next.next;
      slow = slow.next
      if(fast == slow) return true
      
    }
    return false
  }
  mergeSort(left,right){
    if(!right) return left
    if(!left) return right
    
    
    
  }
  print(){
    if(this.isEmpty()) return console.log('The list is empty')
    let curr = this.head;
    let result = '';
    while(curr){
      result+=curr.data+'=>'
      curr = curr.next
    }
    console.log(result+'null')
  }
}
const s1 = new SinglyLinkedList();
const s2 = new SinglyLinkedList();
s1.append(10)
s1.append(20)
s1.append(30)
s2.append(40)
s2.append(50)
s2.append(60)
// s.prepend(45)
// s.print()
// s.insertAtPos(55,2)
// s.print()
// s.reverse()
// s.print()
// s.deleteNthIndex(5)
// s.print()
// console.log(s.findMiddle());
// s.removeMiddle()
// s.print()
// s.deleteLastNthNode(2)
// s.print()
// s.swapFirstAndLast()
s1.print()
s2.print()
s1.cyclic(s1.head,s2.head)
console.log(s1.isCyclic())


