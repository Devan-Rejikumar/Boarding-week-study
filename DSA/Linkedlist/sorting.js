class Node{
  constructor(data){
    this.data = data;
    this.next = null
  }
}

class SinglyLinkedList {
  constructor(){
    this.head = null;
    this.size = 0;
  }
  append(data){
    const newNode = new Node(data)
    if(!this.head){
      this.head = newNode
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
  prepend(data){
    let newNode = new Node(data);
    if(!this.head){
      this.head = newNode
      this.size++
      return
    }
    newNode.next = this.head;
    this.head = newNode
  }
  
  mergeLinkedList(s2){
    let curr = this.head;
   
    while(curr.next){
      curr = curr.next
    }
    curr.next = s2;
    while(curr.next){
      curr=curr.next
    }
    console.log(curr.data)
    
  }

mergeSort(head){
  if(!head || !head.next) return head;
  
  let slow = head;
  let fast = head;
  let prev = null;
  while(fast && fast.next){
    prev = slow;
    fast = fast.next.next;
    slow = slow.next
  }
  prev.next = null;
  let left = this.mergeSort(head);
  let right = this.mergeSort(slow);
  
  return this.merge(left,right)
}
  
  merge(left,right){
    if(!left) return right
    if(!right) return left;
    
    while(left && right){
      if(left.data < right.data){
        left.next = this.merge(left.next,right)
        return left
      }else{
        right.next = this.merge(right.next,left)
        return right
      }
    }
    
  }
  
  
  print(){
    let result = '';
    let curr = this.head;
    while(curr){
      result+=curr.data+'=>'
      curr=curr.next
    }
    console.log(result+'null')
  }
}

const s1 = new SinglyLinkedList();
const s2 = new SinglyLinkedList();
s1.append(10)
s1.append(70)
s1.append(30)
s2.append(60)
s2.append(50)
s2.append(40)
s2.append(50)
s2.append(40)
s1.print()
s1.mergeLinkedList(s2.head)
s1.print()
s1.head = s1.mergeSort(s1.head)
s1.print()

