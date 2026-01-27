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
    let newNode = new Node(data)
    if(!this.head){
      this.head = newNode;
      this.size++;
      return;
    }
    let curr = this.head;
    while(curr.next){
      curr=curr.next
    }
    curr.next = newNode;
    this.size++;
    return
  }
  
  merge(left,right){
    if(!right) return left
    if(!left) return right
    if(left.data < right.data){
      left.next = this.merge(left.next,right)
      return left
    }else{
      right.next = this.merge(right.next,left)
      return right
    }

  }
      mergeWith(otherList){
      this.head = this.merge(this.head,otherList.head);
      otherList.head = null;
    }
  print(){
    if(this.isEmpty()) return console.log('The list is empty')
    let result=''
    let curr = this.head;
    while(curr){
      result+=curr.data+'=>'
      curr=curr.next
    }
    console.log(result,'null')
  }
}
const s1 = new SinglyLinkedList();
const s2 = new SinglyLinkedList();
s1.append(10)
s1.append(20)
s1.append(30)
s2.append(9)
s2.append(16)
s2.append(25)
s1.mergeWith(s2)
s1.print()